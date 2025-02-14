"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoList from "@/components/todo-list";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-full flex items-center justify-center">
        <TodoList />
      </div>
    </QueryClientProvider>
  );
}
