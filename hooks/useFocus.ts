import { useRef } from "react";

export const useFocus = () => {
  const htmlElRef = useRef<HTMLInputElement | null>(null);
  const setFocus = () => {
    htmlElRef.current?.focus();
  };

  return { ref: htmlElRef, setFocus };
};
