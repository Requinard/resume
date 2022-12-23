import {styled, Typography} from "@mui/material";

export const SectionHeader = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.main,
    borderLeftColor: theme.palette.primary.main,
    borderLeftStyle: "solid",
    borderLeftWidth: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2)
}));