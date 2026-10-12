<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['id_users','comentario', 'id_games'])]
class Comment extends Model
{
    public function user() {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function games() {
        return $this->belongsTo(Game::class, 'id_games');
    }
}
