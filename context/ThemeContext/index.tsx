import { createContext, useContext, useState, useEffect } from 'react';

import type { ThemeContextValue, ThemeProviderProps } from './types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider = ({ children } : ThemeProviderProps) => {

    const [ isDarkTheme, setIsDarkTheme ] = useState(false);

    useEffect(() => {
        setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, []);

    return (
        <ThemeContext.Provider value={{isDarkTheme: isDarkTheme , setDarkTheme: setIsDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if(!context) 
        throw new Error(`"useThemeContext" must be used with "ThemeProvider"`);

    return context;
};

export { ThemeProvider, useThemeContext };