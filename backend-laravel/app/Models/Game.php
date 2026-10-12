<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['nome_jogo', 'imagem_jogo', 'nota', 'descricao'])]
class Game extends Model
{
    public function comment() {
        return $this->hasMany(Comment::class, 'id_games');
    }

    public function categories() {
        return $this->belongsToMany(Category::class, 'category_game', 'id_game', 'id_category');
    }
}
