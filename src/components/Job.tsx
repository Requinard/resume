import { Box, Collapse, Stack, Typography, useTheme } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useBoolean } from "usehooks-ts";

type JobProps = {
    children?: ReactNode;
    title: string;
    subtitle: string;
    defaultCollapsed?: boolean;
};

export const Job = ({
    children,
    title,
    subtitle,
    defaultCollapsed,
}: JobProps) => {
    const theme = useTheme();
    const { value, toggle } = useBoolean(!defaultCollapsed);
    const wide = useMemo(() => theme.breakpoints.up("md"), [theme]);
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box
                display={"flex"}
                mt={1}
                mb={1}
                flexDirection={wide ? "row" : "column"}
                flexWrap={"wrap"}
            >
                <Typography
                    fontWeight={500}
                    fontSize={"1.1rem"}
                    onClick={toggle}
                    sx={{
                        flex: 1,
                        width: wide ? "100%" : undefined,
                        ":hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    fontWeight={200}
                    fontSize={"0.9rem"}
                    sx={{
                        width: wide ? "100%" : undefined,
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>
            <Collapse in={value} collapsedSize={0}>
                <Stack spacing={1} mb={2} mt={1}>
                    {children}
                </Stack>
            </Collapse>
        </Box>
    );
};
