import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, addTodo, deleteTodo } from "@/utils/api";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (prev: Todo[]) => [
        { id: Date.now(), title: newTitle, completed: false },
        ...(prev || []),
      ]);

      return { previousTodos };
    },
    onError: (_error, _newTodo, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: () => {
      //   queryClient.invalidateQueries({ queryKey: ["todos"] });
      //   commented out so that the ui doesn't reset
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData(["todos"]);

      queryClient.setQueryData(["todos"], (prev: Todo[]) =>
        prev?.filter((todo) => todo.id !== id)
      );

      return { previousTodos };
    },
    onError: (_error, _id, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled: () => {
      //   queryClient.invalidateQueries({ queryKey: ["todos"] });
      //   commented out so that the ui doesn't reset
    },
  });

  return {
    todos,
    isLoading,
    isError,
    addTodo: addTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
  };
};
