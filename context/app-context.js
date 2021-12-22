import { createContext, useState, useContext } from "react";

const AppContext = createContext();
const AppStateProvider = AppContext.Provider;

export default function AppProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppStateProvider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </AppStateProvider>
  );
}

function useMenu() {
  const all = useContext(AppContext);
  return all;
}

export { AppStateProvider, useMenu };
