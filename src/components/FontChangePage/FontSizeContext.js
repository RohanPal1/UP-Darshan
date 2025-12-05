import React, { createContext, useContext, useState } from "react";

const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(14);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 2, 10));
  const resetFont = () => setFontSize(14);

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFont, decreaseFont, resetFont }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  return useContext(FontSizeContext);
}
