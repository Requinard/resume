import { Box, Collapse, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
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
    const { value, toggle } = useBoolean(!defaultCollapsed);
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} mt={1} mb={1}>
                <Typography
                    fontWeight={500}
                    fontSize={"1.1rem"}
                    onClick={toggle}
                    sx={{
                        flex: 1,
                        ":hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography fontWeight={200} fontSize={"0.9rem"}>
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
