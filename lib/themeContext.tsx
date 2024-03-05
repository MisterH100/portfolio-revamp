"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ITheme {
  bg: string;
  card: string;
}
interface contextProps {
  theme: ITheme;
  setTheme: Dispatch<SetStateAction<ITheme>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<contextProps>({} as contextProps);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState({ bg: "--background", card: "--card" });
  const [selected, setSelected] = useState("Home");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, selected, setSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
