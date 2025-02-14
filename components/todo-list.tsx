"use client";

import { useState } from "react";
import { useTodos } from "@/hooks/use-todos";
import Loading from "@/app/loading";
import { PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TodoForm from "./todo-form";
import TodoItem from "./todo-item";

export default function TodoList() {
  const { todos, isLoading, isError, addTodo, deleteTodo } = useTodos();
  const [isCreatingNewTodo, setIsCreatingNewTodo] = useState(false);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error loading todos.</p>;

  return (
    <>
      <a
        className="text-blue-500 underline -rotate-90 text-xl animate-pulse hover:animate-none hover:opacity-60 cursor-pointer -mr-6"
        href="https://github.com/iculmination/veel-todo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repository
      </a>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="border-gray-900 border p-4 rounded-xl shadow-gray-900 shadow-md flex flex-col items-center w-full md:w-3/4 lg:w-1/2 xl:w-1/4"
      >
        <div className="flex items-center justify-between w-full px-6">
          <h1 className="font-extrabold text-3xl my-4">Todo List</h1>
          <button
            onClick={() => setIsCreatingNewTodo(true)}
            disabled={isCreatingNewTodo}
            className="bg-blue-600 hover:opacity-80 transition duration-300 rounded-lg p-2 size-9 flex items-center justify-center disabled:opacity-60"
          >
            <PlusIcon />
          </button>
        </div>

        <TodoForm
          isCreatingNewTodo={isCreatingNewTodo}
          setIsCreatingNewTodo={setIsCreatingNewTodo}
          addTodo={addTodo}
        />

        <ul className="flex flex-col divide-y-2 divide-gray-800 px-2 w-full">
          <AnimatePresence>
            {todos.map((todo: Todo) => (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    </>
  );
}
