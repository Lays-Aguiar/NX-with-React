import { Express } from 'express';
import { Todo } from '@myorg/data';

const todos: Todo[] = [{ title: 'Title 1' }, { title: 'Title 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New title random ${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
