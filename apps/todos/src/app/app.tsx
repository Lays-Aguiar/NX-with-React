import { useState } from 'react';
import * as S from './style';

interface Todo {
  title: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
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
