import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTernaryDarkMode } from "usehooks-ts";

import DarkModeIcon from "~icons/ic/outline-dark-mode";
import LightModeIcon from "~icons/ic/outline-light-mode";
import AutoIcon from "~icons/material-symbols/auto-fix";

export const DarkModeToggle = () => {
    const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
    return (
        <ToggleButtonGroup
            value={ternaryDarkMode}
            color={"primary"}
            exclusive
            onChange={(e, v) => {
                console.log(v);
                setTernaryDarkMode(v);
            }}
            sx={(theme) => ({
                position: "fixed",
                bottom: theme.spacing(4),
                right: theme.spacing(4),
                displayPrint: "none",
                bgcolor: theme.palette.background.paper,
            })}
        >
            <ToggleButton value={"light"} title={"Light Mode"}>
                <LightModeIcon />
            </ToggleButton>
            <ToggleButton value={"system"} title={"Follow system theme"}>
                <AutoIcon />
            </ToggleButton>
            <ToggleButton value={"dark"} title={"Dark Mode"}>
                <DarkModeIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
