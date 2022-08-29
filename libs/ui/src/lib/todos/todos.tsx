import { Todo } from '@myorg/data';
import * as S from './styles';
export function Todos(props: { todos: Todo[] }) {
  return (
    <S.Container>
      <S.Title>Title Dynamics</S.Title>
      {props.todos.map((t) => (
        <span className={'Title randow'}>{t.title}</span>
      ))}
    </S.Container>
  );
}

export default Todos;
