import { createContext ,useContext} from "react";

// export the context
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:() => {},
    lightTheme:() => {},
});


// export provider
export const ThemeProvider = ThemeContext.Provider;



// custom Hook: we merged themeContext in useContext 
export default function useTheme(){
    return useContext(ThemeContext);
};







