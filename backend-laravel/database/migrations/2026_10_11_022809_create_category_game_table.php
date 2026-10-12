<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('category_game', function (Blueprint $table) {
            $table->foreignId('id_game')->constrained('games')->cascadeOnDelete();
            $table->foreignId('id_category')->constrained('categories')->cascadeOnDelete();
            $table->primary(['id_game', 'id_category']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_game');
    }
};
