"use client"
import { createContext, useContext, useState } from "react";
const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("podcast");
    
  const value = {
    searchText,
    setSearchText,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
