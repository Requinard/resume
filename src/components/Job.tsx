import {Box, Typography} from "@mui/material";
import {ReactNode} from "react";

type JobProps = {
    children: ReactNode;
    title: string;
    subtitle: string;
}

export const Job = ({children, title, subtitle}: JobProps) => {
    return <Box display={'flex'} flexDirection={'column'}>
        <Box display={'flex'} mt={1} mb={1}>
            <Typography sx={{flex: 1}} fontWeight={500} fontSize={'1.1rem'}> {title}</Typography>
            <Typography fontWeight={200} fontSize={'0.9rem'}>{subtitle}</Typography>
        </Box>
        {children}
    </Box>
}