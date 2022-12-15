<?php

namespace App\Services\Task;

use App\Models\Task;

class TaskService
{
    public function store(array $data)
    {
        Task::query()->create($data);
        if (Task::all()->where('status', Task::STATUS_NOT_COMPLETED)->count() === 3) {
            Task::all()->where('status', Task::STATUS_NOT_COMPLETED)->first()->update(['status' => Task::STATUS_COMPLETED]);
        }
        return Task::all();
    }

    public function update(Task $task, array $data)
    {
        $task->update($data);
        return Task::all();
    }

    public function delete(Task $task)
    {
        $task->delete();
        return Task::all();
    }
}
