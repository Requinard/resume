import {Box, Typography} from "@mui/material";

type EducationProps = {
    name: string;
    place: string;
    time: string
}

export const Education = ({name, place, time}: EducationProps) => <Box pt={2} pb={2} display={'flex'}
                                                                       flexDirection={'column'}>
    <Typography fontWeight={700} variant={'body2'}>{name}</Typography>
    <Typography variant={'body2'}>{place}</Typography>
    <Typography variant={'caption'}>{time}</Typography>
</Box>