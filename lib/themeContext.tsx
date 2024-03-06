"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface contextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<contextProps>({} as contextProps);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("card_dark");
  const [selected, setSelected] = useState("Home");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, selected, setSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
