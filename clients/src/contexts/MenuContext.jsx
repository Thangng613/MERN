import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  //Menu context
  const menuContext = {
    open,
    setOpen,
  };
  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
