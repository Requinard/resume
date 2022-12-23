import { styled } from "@mui/material";

export const FlatList = styled("ul")({
    listStyleType: "none",
    paddingLeft: "0px",
});

export const FlatListHeader = styled("li")(({ theme }) => ({
    paddingTop: theme.spacing(2),
    fontWeight: 700,
}));

export const FlatListItem = styled("li")(({ theme }) => ({
    paddingTop: theme.spacing(0.5),
}));
