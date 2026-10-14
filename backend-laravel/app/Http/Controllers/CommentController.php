<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // GET -> listar todos os jogos
    public function index() {
        return Comment::with('user')->get();
    }

    // POST -> cria
    public function store(Request $request) {
        $dados = $request->validate([
            'id_users'   => 'required|exists:users,id',
            'id_games'   => 'required|exists:games,id',
            'comentario' => 'required|string|max:1000',
        ]);

        $comentario = Comment::create($dados);

        return response()->json($comentario, 201);
    }

    //GET expecifico
    public function show(Comment $comentario) {
        return $comentario->load('user','game');
    }

    //PUT/PATCH
    public function uptade(Request $request, Comment $comentario) {
        $dados = $request->validate([
            'comentario' => 'required|string|max:1000',
        ]);

        $comentario->update($dados);

        return $comentario;
    }

    //DELETE
    public function destroy(Comment $comentario) {
        
        $comentario->delete();

        return response()->noContent();
    }

}
