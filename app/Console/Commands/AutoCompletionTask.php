<?php

namespace App\Console\Commands;

use App\Models\Task;
use Illuminate\Console\Command;

/**
 * Class AutoCompletionTask
 * @package App\Console\Commands
 */
class AutoCompletionTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tasks:completed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Completed all tasks';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Task::query()->where('status', Task::STATUS_NOT_COMPLETED)->update(['status' => Task::STATUS_COMPLETED]);
    }
}
