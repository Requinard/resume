import {
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider,
} from "@mui/material";
import React, { useMemo } from "react";
import { useTernaryDarkMode } from "usehooks-ts";
import { orange } from "@mui/material/colors";

import { Resume } from "./Resume";
import { DarkModeToggle } from "./DarkModeToggle";

export const App = () => {
    const { isDarkMode } = useTernaryDarkMode();

    const theme = useMemo(() => {
        const theme = createTheme({
            palette: {
                mode: isDarkMode ? "dark" : "light",
                primary: {
                    main: orange[800],
                },
            },
            typography: {
                body2: {
                    fontSize: "0.92rem",
                },
            },
        });
        return responsiveFontSizes(theme);
    }, [isDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Resume />
            <DarkModeToggle />
        </ThemeProvider>
    );
};
