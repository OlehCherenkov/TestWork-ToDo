<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public const STATUS_COMPLETED = 1;
    public const STATUS_NOT_COMPLETED = 0;

    protected $fillable = [
        'id',
        'title',
        'status',
        'created_at',
        'updated_at',
    ];
}
