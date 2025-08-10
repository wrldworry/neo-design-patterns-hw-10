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

  // 1) Спочатку читаємо і зберігаємо поточну задачу,
  // 2) Потім виконуємо оновлення
  execute(): void {
    const existing = this.taskList.getTaskById(this.taskId);
    if (!existing) return;
    this.oldTask = existing;                 // зберігаємо копію ДО оновлення
    this.taskList.updateTask(this.taskId, this.updates); // робимо апдейт
  }

  // Повертаємо попередній стан
  undo(): void {
    if (this.oldTask) {
      this.taskList.updateTask(this.taskId, this.oldTask);
    }
  }

  // redo() успадковано з AbstractCommand -> просто викликає execute()
}
