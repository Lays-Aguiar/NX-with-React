import { METHODS } from 'http';
import { useEffect, useState } from 'react';
import * as S from './style';

interface Todo {
  title: string;
}

export function App() {
  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }
  return (
    <S.Container>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <S.Button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </S.Button>
    </S.Container>
  );
}

export default App;
