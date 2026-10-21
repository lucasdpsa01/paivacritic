<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Game;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        return Category::orderBy('nome')->get();
    }

    public function store(Request $request) {
        $dados = $request->validate([
            'nome' => 'required|max:25',
        ]);
        
        $category = Game::create($dados);
        $category->games()->sync($dados['games']);

        return response()->json($category, 201);

    }

    public function destroy(Category $category) {
        $category->delete();

        return response()->noContent();

    }
}
