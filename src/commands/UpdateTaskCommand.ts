import { AbstractCommand } from './AbstractCommand';
import { TaskList } from '../models/TaskList';
import { Task } from '../models/Task';

export class UpdateTaskCommand extends AbstractCommand {
  private oldTask?: Task;

  constructor(
    private taskList: TaskList,
    private taskId: string,
    private updates: Partial<Task>
  ) {
    super();
  }

  execute(): void {
    const existing = this.taskList.updateTask(this.taskId, this.updates);
    if (existing) {
      this.oldTask = existing;
    }
  }

  undo(): void {
    if (this.oldTask) {
      this.taskList.updateTask(this.taskId, this.oldTask);
    }
  }
}
