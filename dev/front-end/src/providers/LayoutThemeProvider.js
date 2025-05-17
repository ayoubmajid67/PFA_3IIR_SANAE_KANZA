"use client"
import {ThemeContext} from "@emotion/react";
import HeaderOutlet from "@/components/headerOutlet/HeaderOutlet";
import FooterOutlet from "@/components/footerOutlet/FooterOutlet";
import {ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import {loadTheme} from "@/styles/theme";

export  default  function LayoutThemeProvider({children}){
    const [themeStat, setThemeStat] = useState(loadTheme());
    function switchTheme() {
        setThemeStat(loadTheme());
    }

    useEffect(() => {

            switchTheme();
    }, []);

return(
    <ThemeContext.Provider value={{ switchTheme }}>
        <ThemeProvider theme={themeStat}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
)
}