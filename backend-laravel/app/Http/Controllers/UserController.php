<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    } 
   

    /**
     * POST -> cria user
     */
    public function store(Request $request)
    {
        $dados = $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|string|min:6',
            'date_of_birth' => 'required|date|before:today',
        ]);

        $user = User::create($dados);

        return response()->json($user, 201);
    }

    /**
     * GET -> /user/{user}
     */
    public function show(User $user)
    {
        return $user->load('name', 'email');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $dados = $request->validate([
            'name' => 'sometimes|string|max:50',
            'email' => ['sometimes','email','max:25',Rule::unique('users','email')->ignore($user->id)],
            'password' => 'required|string|min:6',
            'date_of_birth' => 'required|date|before:today'
        ]);

        $user->update($dados);

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->noContent();
    }
}
