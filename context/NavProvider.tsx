"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context state
interface NavContextType {
  visibleNav: boolean;
  setVisibleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the Context with a default value
const NavContext = createContext<NavContextType | undefined>(undefined);

// Create a Provider Component
export const NavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ visibleNav, setVisibleNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook to use the NavContext
export const useVisibleNav = (): NavContextType => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
