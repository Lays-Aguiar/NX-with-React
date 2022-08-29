import { useEffect, useState } from 'react';
import * as S from './style';
import { Todo } from '@myorg/data';
import { Button, Todos } from '@myorg/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
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
      <Todos todos={todos} />
      <Button id={'add-todo'} onClick={addTodo}>
        Add New Title
      </Button>
    </S.Container>
  );
};

export default App;
