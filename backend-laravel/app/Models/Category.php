<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['nome'])]
class Category extends Model
{
    protected $table = 'category';
    
    public function games() {
        return $this->belongsToMany(Game::class, 'category_game', 'id_category', 'id_game');
    }
}
