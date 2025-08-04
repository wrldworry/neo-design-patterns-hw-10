import { TaskManager } from './services/TaskManager';

const manager = new TaskManager();

const taskId = manager.addTask({
  title: 'Завершити домашнє завдання',
  priority: 'high'
});

console.log('--- Після додавання задачі ---');
console.log(manager.getTasks());

manager.updateTask(taskId, {
  title: 'Завершити складне домашнє завдання',
  priority: 'medium'
});

console.log('--- Після оновлення задачі ---');
console.log(manager.getTasks());

manager.completeTask(taskId, true);

console.log('--- Після позначення як виконаної ---');
console.log(manager.getTasks());

manager.removeTask(taskId);

console.log('--- Після видалення задачі ---');
console.log(manager.getTasks());

manager.undo();
console.log('--- Після undo видалення ---');
console.log(manager.getTasks());

manager.undo();
console.log('--- Після undo виконання задачі ---');
console.log(manager.getTasks());

manager.undo();
console.log('--- Після undo оновлення задачі ---');
console.log(manager.getTasks());

manager.undo();
console.log('--- Після undo додавання задачі ---');
console.log(manager.getTasks());

manager.redo();
console.log('--- Після redo додавання задачі ---');
console.log(manager.getTasks());

manager.redo();
console.log('--- Після redo оновлення задачі ---');
console.log(manager.getTasks());

manager.redo();
console.log('--- Після redo виконання задачі ---');
console.log(manager.getTasks());

manager.redo();
console.log('--- Після redo видалення задачі ---');
console.log(manager.getTasks());
