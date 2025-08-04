# Домашнє завдання 10 — Патерн Команда

## Запуск

```bash
npx ts-node src/main.ts
```

## Що реалізовано

- Команди:
  - AddTaskCommand
  - RemoveTaskCommand
  - UpdateTaskCommand
  - CompleteTaskCommand

- Підтримка undo / redo через `CommandHistory`

- TaskManager — зручно обгортає всі дії над задачами

## Undo / Redo

- `undo()` — скасовує останню дію
- `redo()` — повторює скасовану дію
