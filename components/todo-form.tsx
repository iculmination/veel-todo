"use client";

import { useEffect, useState } from "react";
import { CheckIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFocus } from "@/hooks/useFocus";

export default function TodoForm({
  isCreatingNewTodo,
  setIsCreatingNewTodo,
  addTodo,
}: TodoFormProps) {
  const [newTitle, setNewTitle] = useState("");
  const { ref: inputRef, setFocus } = useFocus();

  useEffect(() => {
    if (isCreatingNewTodo) {
      setFocus();
    }
    // eslint-disable-next-line
  }, [isCreatingNewTodo]);

  return (
    <AnimatePresence>
      {isCreatingNewTodo && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-[calc(100%-2rem)] flex items-center justify-stretch space-x-2 mt-2 mb-4 px-2"
        >
          <input
            className="rounded-lg h-9 px-4 text-black w-full"
            type="text"
            ref={inputRef}
            placeholder="New todo..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            onClick={() => {
              if (newTitle.trim()) {
                addTodo(newTitle);
                setNewTitle("");
                setIsCreatingNewTodo(false);
              }
            }}
            className="bg-green-600 hover:opacity-80 transition duration-300 rounded-lg p-2 size-9 flex items-center justify-center"
          >
            <CheckIcon className="size-5" />
          </button>
          <button
            onClick={() => setIsCreatingNewTodo(false)}
            className="bg-rose-600 hover:opacity-80 transition duration-300 rounded-lg p-2 size-9 flex items-center justify-center"
          >
            <X className="size-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
