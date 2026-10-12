<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    // Seria o GET -> lista todos os jogos
    public function index()
    {
        return Game::with('categories')->get();
    }

    // É o POST -> cria um jogo
    public function store(Request $request)
    {
        $dados = $request->validate([
            'nome_jogo' => 'required|string|max:255',
            'imagem_jogo' => 'required|string',
            'nota' => 'required|numeric|min:0|max:10',
            'categories' => 'array',
            'descricao' => 'required|text',
            'categories.*' => 'exists:categories,id',
        ]);

        $game = Game::create($dados);

        if (isset($dados['categories'])) {
            $game->categories()->sync($dados['categories']);
        }

        return response()->json($game->load('categories'), 201);
    }

    // GET -> api/games/{games}
    public function show(Game $game)
    {
        return $game->load('nome_jogo','imagem_jogo', 'nota', 'descricao','categories', 'comment.user');
    }

    public function update(Request $request, Game $game)
    {
        $dados = $request->validate([
            'nome_jogo' => 'required|string|max:255',
            'imagem_jogo' => 'required|string',
            'nota' => 'required|numeric|min:0|max:10',
            'categories' => 'array',
            'descricao' => 'required|text',
            'categories.*' => 'exists:categories,id',
        ]);

        $game->update($dados);

        if (isset($dados['categories'])) {
            $game->categories()->sync($dados['categories']);
        }
        return $game->load('categories');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        $game->delete();

        return response()->noContent();
    }
}
