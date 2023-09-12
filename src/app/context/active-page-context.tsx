"use client";

import React, { useState, createContext, useContext } from "react";
import type { PageName } from "../lib/types";

type ActivePageContextProviderProps = {
    children: React.ReactNode;
}
type ActivePageContextType = {
    active: PageName,
    setActive: React.Dispatch<React.SetStateAction<PageName>>
}

export const ActivePageContext = createContext<ActivePageContextType | null>(null);

function ActivePageContextProvider({ children }:ActivePageContextProviderProps) {
  const [active, setActive] = useState<PageName>("Index");
  return <ActivePageContext.Provider value={{
    active,
    setActive,
  }}>{children}</ActivePageContext.Provider>;
}

export default ActivePageContextProvider;

export function useActivePageContext() {
    const context = useContext(ActivePageContext)

    if (context === null) {
        throw new Error(
            "useActivePageContext must be used within a ActivePageContextProvider"
        )
    }
    return context;
}
