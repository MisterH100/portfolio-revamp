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
  animationType: string;
  setAnimationType: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<contextProps>({} as contextProps);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("card_dark");
  const [selected, setSelected] = useState("Home");
  const [animationType, setAnimationType] = useState("tween");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        selected,
        setSelected,
        animationType,
        setAnimationType,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
