declare interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

declare interface TodoItemProps {
  todo: { id: number; title: string };
  deleteTodo: (id: number) => void;
}

declare interface TodoFormProps {
  isCreatingNewTodo: boolean;
  setIsCreatingNewTodo: (value: boolean) => void;
  addTodo: (title: string) => void;
}
