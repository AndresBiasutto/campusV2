import { useState, useCallback } from "react";

const UseToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, toggle };
};

export default UseToggle;
