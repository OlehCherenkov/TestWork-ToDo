<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\v1\StoreTaskRequest;
use App\Http\Requests\Api\v1\UpdateTaskRequest;
use App\Http\Resources\Api\v1\TaskResource;
use App\Http\Resources\Api\v1\TasksResource;
use App\Models\Task;
use App\Services\Task\TaskService;
use Illuminate\Http\JsonResponse;

class TaskController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $tasks = Task::all();
        return $this->sendSuccess(TasksResource::collection($tasks));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTaskRequest $request
     * @param TaskService $service
     * @return JsonResponse
     */
    public function store(StoreTaskRequest $request, TaskService $service): JsonResponse
    {
        $tasks = $service->store($request->validated());
        return $this->sendSuccess(TasksResource::collection($tasks), 'Task successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param Task $task
     * @return JsonResponse
     */
    public function show(Task $task): JsonResponse
    {
        return $this->sendSuccess(TaskResource::make($task));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateTaskRequest $request
     * @param Task $task
     * @param TaskService $service
     * @return JsonResponse
     */
    public function update(UpdateTaskRequest $request, Task $task, TaskService $service): JsonResponse
    {
        $tasks = $service->update($task, $request->validated());
        return $this->sendSuccess(TaskResource::collection($tasks), 'Task successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @param TaskService $service
     * @return JsonResponse
     */
    public function destroy(Task $task, TaskService $service): JsonResponse
    {
        $tasks = $service->delete($task);
        return $this->sendSuccess(TasksResource::collection($tasks), 'Task successfully deleted');
    }
}
