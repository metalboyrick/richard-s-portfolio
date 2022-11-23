import { SetStateAction, Dispatch, ReactNode } from "react";

export interface ThemeContextValue {
    isDarkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

export interface ThemeProviderProps {
    children : ReactNode;
}