import {Avatar, Button, Container, Divider, Grid, Paper, Typography} from "@mui/material";
import {Job} from "./Job";
import MainAvatar from "../assets/avatar.png?preset=thumbnail"

import LocationIcon from '~icons/mdi/map-marker-outline'
import EmailIcon from "~icons/mdi/at"
import WebpageIcon from '~icons/mdi/search-web'
import {SectionHeader} from "./SectionHeader";
import {Education} from "./Education";
import {ReactNode} from "react";

const NonPrintingContainer = ({children}: { children: ReactNode }) => {

    return <Container
        maxWidth={'xl'}
    >
        <Paper sx={{
            p: 4, mt: 4, "@media print": {
                p: 0, mt: 4, boxShadow: "none"
            }
        }} elevation={5}>
            {children}
        </Paper>
    </Container>
}

export const Resume = () => {
    return <NonPrintingContainer>
        <Grid container spacing={2}>
            <Grid item md={8} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Typography variant={'h3'} color={'primary.main'} fontWeight={700}>David Diks</Typography>
                <Typography variant={'subtitle1'} fontWeight={100}>DevOps Software Engineer</Typography>
            </Grid>
            <Grid item md={1}>
                <Divider orientation={'vertical'}/>
            </Grid>
            <Grid item md={3}>
                <Button size={'small'} startIcon={<WebpageIcon/>} fullWidth>subjectreview.eu</Button>
                <Button size={'small'} startIcon={<EmailIcon/>} fullWidth>david@subjectreview.eu</Button>
                <Button fullWidth size={'small'}
                        startIcon={
                            <LocationIcon/>
                        }>
                    The Hague - Netherlands</Button>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item md={2} alignItems={'stretch'}>
                <Avatar src={MainAvatar[1].src}
                        alt={'A headshot'} sx={{flex: 1, width: '100%', height: 'auto'}}/>
            </Grid>
            <Grid item md={10} alignItems={'center'} display={'flex'}>
                <Typography sx={{pl: 4}} variant={'body2'}>
                    I am a talented software engineer with a passion for scalable and secure software. I can work
                    with many different programming languages and I have a real knack for architecting large and
                    reliable software solutions. I'm looking for a job that lets me work on the leading edge of
                    software with highly scalable and fault tolerant applications and workflows.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item md={9}>
                <SectionHeader variant={'h4'}>Work Experience</SectionHeader>
                <Job title={"Python Engineer"} subtitle={"Nextpertise B.V. | 2022-2021"}>
                    <Typography paragraph variant={'body2'}>
                        Nextpertise is an expert in connecting businesses to and as a new company they have quickly
                        made carved out a place in the market due to their focus on automation despite employing
                        only around 10 employees.
                    </Typography>

                    <Typography paragraph variant={'body2'}>

                        During their scale-up fase they were looking into upgrading their existing software-oriented
                        infrastructure to increase software velocity.
                    </Typography>

                    <Typography paragraph variant={'body2'}>
                        I spearheaded an effort to tweak the existing software architecture to allow developers to
                        independently make changes without dealing with a monolithic setup. I also oversaw a
                        transformation to a service-based internal architecture based on kubernetes that allowed a
                        small company to quickly and securely deploy services that would have otherwise been
                        delegated to AWS.
                    </Typography>

                    <Typography variant={'body2'}>
                        This has been successful in opening up the individual developers and laying the groundwork
                        for clear communication and architecture.
                    </Typography>

                    <ul>
                        <li>Python & NodeJS</li>
                        <li>Software Architecture focused on small services that are easy to deploy.</li>
                        <li> CICD infrastructure that co-operates with an automation mindset.</li>
                        <li> Deploying and maintaining multiple Kubernetes clusters.</li>
                        <li> Deploying and maintining internal services via Kubernetes and Docker.</li>
                    </ul>
                </Job>
                <Job title={"Software/Devops Consultant"} subtitle={"Harvest B.V. | 2019-2020"}>
                    <Typography variant={'body2'} paragraph>Harvest is a young-talent consultancy program, set on
                        recruiting the top
                        software graduates in the country and training them in the details of the field while they
                        work.</Typography>
                    <Typography variant={'body2'} paragraph>As a consultant I was sent to MN Services, one of the
                        biggest retirement
                        brokers of the Netherlands, to help them modernize their software and processes. I was
                        assigned as an expert to improve their knowledge of software on the cloud.</Typography>
                    <Typography variant={'body2'} paragraph>As I got assigned to modernizing, I set up multiple
                        plans that dealt with
                        the many dependencies migrating a production application brings. It also allowed me to me
                        research the different AWS services and deployment strategies to find a way to safely and
                        securely conduct this migration.</Typography>
                    <Typography variant={'body2'}>During my assignment I moved multiple applications from on-premise
                        servers
                        to AWS with improved security, lowered technical debt and a complete Infrastructure-as-Code
                        as key benchmarks.</Typography>
                    <ul>
                        <li>Usage of multiple AWS services (ECS, Lambda, IAM, DynamoDB).</li>
                        <li>Infrastructure as Code - Cloudformation and Terraform.</li>
                        <li>Automated security auditing.</li>
                        <li>Working within the constraints of a financial business.</li>
                    </ul>
                </Job>
            </Grid>
            <Grid item md={3}>
                <SectionHeader variant={'h4'}>Education</SectionHeader>

                <Education name={"Bachelor in Software Engineering"} place={"Fontys University of Applied Sciences"}
                           time={"2014-2019"}/>
                <Education name={"Minor of Data Science"} place={"Fontys University of Applied Sciences"}
                           time={"2018"}/>
                <Education name={"Bachelor of Electrical Engineering"} place={"Hogeschool Zuyd"}
                           time={"2012-2014"}/>
                <SectionHeader variant={'h4'}>Skills</SectionHeader>
                <SectionHeader variant={'h4'}>Languages</SectionHeader>
                <SectionHeader variant={'h4'}>Interests</SectionHeader>
            </Grid>
        </Grid>
    </NonPrintingContainer>
}