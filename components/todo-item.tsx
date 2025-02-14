"use client";

import { Trash2Icon } from "lucide-react";
import { motion } from "framer-motion";



export default function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="p-4 flex items-center justify-between"
    >
      <p>{todo.title}</p>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-rose-600 hover:opacity-80 transition duration-300 rounded-lg p-2 size-9 flex items-center justify-center"
      >
        <Trash2Icon className="size-5" />
      </button>
    </motion.li>
  );
}
