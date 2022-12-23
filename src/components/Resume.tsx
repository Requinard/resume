import {
    Alert,
    Avatar,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { ReactNode } from "react";

import MainAvatar from "../assets/avatar.png?preset=thumbnail";

import { Job } from "./Job";
import { SectionHeader } from "./SectionHeader";
import { Education } from "./Education";
import { FlatList, FlatListHeader, FlatListItem } from "./FlatList";

import LocationIcon from "~icons/mdi/map-marker-outline";
import EmailIcon from "~icons/mdi/at";
import WebpageIcon from "~icons/mdi/search-web";

const NonPrintingContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Container maxWidth={"lg"}>
            <Paper
                sx={{
                    p: 4,
                    mt: 4,
                    "@media print": {
                        p: 0,
                        mt: 4,
                        boxShadow: "none",
                    },
                }}
                elevation={5}
            >
                {children}
            </Paper>
        </Container>
    );
};

export const Resume = () => {
    return (
        <NonPrintingContainer>
            <Grid container spacing={2}>
                <Grid
                    item
                    md={9}
                    xs={12}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                >
                    <Typography
                        variant={"h3"}
                        color={"primary.main"}
                        fontWeight={900}
                        letterSpacing={"1px"}
                    >
                        David Diks
                    </Typography>
                    <Typography variant={"subtitle1"} fontWeight={100}>
                        DevOps Software Engineer
                    </Typography>
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: {
                            borderLeft: `1px solid ${theme.palette.divider}`,
                        },
                    })}
                >
                    <Button
                        size={"small"}
                        startIcon={<WebpageIcon />}
                        fullWidth
                        component={"a"}
                        target={"_blank"}
                        rel={"noopener"}
                        href={"https://subjectreview.eu"}
                    >
                        subjectreview.eu
                    </Button>
                    <Button
                        size={"small"}
                        startIcon={<EmailIcon />}
                        fullWidth
                        component={"a"}
                        target={"_blank"}
                        rel={"noopener"}
                        href={"mailto:david@requinard.nl"}
                    >
                        david@subjectreview.eu
                    </Button>
                    <Button
                        fullWidth
                        size={"small"}
                        component={"a"}
                        target={"_blank"}
                        rel={"noopener"}
                        href={"https://www.openstreetmap.org/relation/192736"}
                        startIcon={<LocationIcon />}
                    >
                        The Hague, Zuid Holland, NL
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid
                    item
                    md={2}
                    xs={12}
                    alignItems={"stretch"}
                    justifyContent={"center"}
                >
                    <Avatar
                        src={MainAvatar[1].src}
                        alt={"A headshot"}
                        sx={{ flex: 1, width: "100%", height: "auto" }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={10}
                    alignItems={"center"}
                    display={"flex"}
                >
                    <Typography sx={{ pl: 4 }} variant={"body2"}>
                        I am a talented software engineer with a passion for
                        scalable and secure software. I can work with many
                        different programming languages and I have a real knack
                        for architecting large and reliable software solutions.
                        I'm looking for a job that lets me work on the leading
                        edge of software with highly scalable and fault tolerant
                        applications and workflows.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item md={9} xs={12}>
                    <SectionHeader variant={"h4"}>
                        Work Experience
                    </SectionHeader>
                    <Job
                        title={"Python Engineer"}
                        subtitle={"Nextpertise B.V. | 2022-2021"}
                    >
                        <Typography variant={"body2"}>
                            Nextpertise is an expert in connecting businesses to
                            and as a new company they have quickly made carved
                            out a place in the market due to their focus on
                            automation despite employing only around 10
                            employees.
                        </Typography>

                        <Typography variant={"body2"}>
                            During their scale-up fase they were looking into
                            upgrading their existing software-oriented
                            infrastructure to increase software velocity.
                        </Typography>

                        <Typography variant={"body2"}>
                            I spearheaded an effort to tweak the existing
                            software architecture to allow developers to
                            independently make changes without dealing with a
                            monolithic setup. I also oversaw a transformation to
                            a service-based internal architecture based on
                            kubernetes that allowed a small company to quickly
                            and securely deploy services that would have
                            otherwise been delegated to AWS.
                        </Typography>

                        <Typography variant={"body2"}>
                            This has been successful in opening up the
                            individual developers and laying the groundwork for
                            clear communication and architecture.
                        </Typography>

                        <ul>
                            <li>Python & NodeJS</li>
                            <li>
                                Software Architecture focused on small services
                                that are easy to deploy.
                            </li>
                            <li>
                                CICD infrastructure that co-operates with an
                                automation mindset.
                            </li>
                            <li>
                                Deploying and maintaining multiple Kubernetes
                                clusters.
                            </li>
                            <li>
                                Deploying and maintining internal services via
                                Kubernetes and Docker.
                            </li>
                        </ul>
                    </Job>
                    <Job
                        title={"Software/Devops Consultant"}
                        subtitle={"Harvest B.V. | 2019-2020"}
                    >
                        <Typography variant={"body2"}>
                            Harvest is a young-talent consultancy program, set
                            on recruiting the top software graduates in the
                            country and training them in the details of the
                            field while they work.
                        </Typography>
                        <Typography variant={"body2"}>
                            As a consultant I was sent to MN Services, one of
                            the biggest retirement brokers of the Netherlands,
                            to help them modernize their software and processes.
                            I was assigned as an expert to improve their
                            knowledge of software on the cloud.
                        </Typography>
                        <Typography variant={"body2"}>
                            As I got assigned to modernizing, I set up multiple
                            plans that dealt with the many dependencies
                            migrating a production application brings. It also
                            allowed me to me research the different AWS services
                            and deployment strategies to find a way to safely
                            and securely conduct this migration.
                        </Typography>
                        <Typography variant={"body2"}>
                            During my assignment I moved multiple applications
                            from on-premise servers to AWS with improved
                            security, lowered technical debt and a complete
                            Infrastructure-as-Code as key benchmarks.
                        </Typography>
                        <ul>
                            <li>
                                Usage of multiple AWS services (ECS, Lambda,
                                IAM, DynamoDB).
                            </li>
                            <li>
                                Infrastructure as Code - Cloudformation and
                                Terraform.
                            </li>
                            <li>Automated security auditing.</li>
                            <li>
                                Working within the constraints of a financial
                                business.
                            </li>
                        </ul>
                    </Job>
                    <Job
                        title={"Software Engineer"}
                        subtitle={"Prodrive Technologies | 2017-2019"}
                        defaultCollapsed={true}
                    >
                        <Alert severity={"info"}>
                            Part of this job was part of my graduation
                        </Alert>
                        <Typography variant={"body2"}>
                            Prodrive is an Eindhoven based electronics
                            development and manufacturing firm supplying the
                            world’s leading companies with state-of-the-art
                            hardware required for high-tech manufacturing.
                        </Typography>

                        <Typography variant={"body2"}>
                            To achieve the goal of developing and manufacturing,
                            Prodrive has invested in automating the manual
                            testing step for electronics, cutting out the
                            in-person testing and automating the entire process.
                            This is done with a machine called the AET.
                        </Typography>

                        <Typography variant={"body2"}>
                            I was brought in to provide integration. The
                            hardware and software had been developed by
                            different teams and thus were not compatible. As the
                            software was written in F#, it could not communicate
                            directly with the C binaries that were provided by
                            the hardware team.
                        </Typography>

                        <Typography variant={"body2"}>
                            In my time here I wrote a software layer that could
                            talk to F# and C at the same time, effectively
                            integrating hardware into a functional programming
                            paradigm. This was done with the C++/CLI interface,
                            which lets C++ code interact with memory-managed
                            functions and classes.
                        </Typography>

                        <Typography variant={"body2"}>
                            The integration layer I wrote has been taken into
                            production and is still being maintained at
                            Prodrive.
                        </Typography>
                        <ul>
                            <li>Functional Programming (F#)</li>
                            <li>Library design</li>

                            <li>
                                Solving machine-level issues (Locking,
                                exceptions and more)
                            </li>
                            <li>
                                Integration of hardware and software with the
                                CLR
                            </li>
                            <li>
                                Working within the constraints of designed
                                hardware
                            </li>
                        </ul>
                    </Job>
                    <Job
                        title={"Software Engineer"}
                        subtitle={"DCentralize | 2016-2017"}
                        defaultCollapsed
                    >
                        <Alert severity={"info"}>
                            This was my orienting internship
                        </Alert>
                        <Typography variant={"body2"}>
                            At D-Centralize I worked on the Appsemble product, a
                            WYSIWYG app builder for the browser.
                        </Typography>
                        <Typography variant={"body2"}>
                            However, all screens and functions had to be
                            hand-built by the Appsemble team. While this was
                            acceptable for some time, it couldn’t last and the
                            team wanted to implement a developer SDK, allowing
                            users to develop their own functionality.
                        </Typography>
                        <Typography variant={"body2"}>
                            I was in charge of creating the development
                            experience. This included building a development
                            environment, a CLI tool and a way to integrate
                            developed components directly into the app.
                        </Typography>
                        <Typography variant={"body2"}>
                            I architected and developed this interface, which
                            was used to create new components for Appsemble.
                        </Typography>

                        <ul>
                            <li>Designing and developing an SDK.</li>
                            <li>
                                Analyze and implement wishes from developers.
                            </li>
                        </ul>
                    </Job>
                    <Job
                        title={"Full Stack Developer"}
                        subtitle={"Manus VR | 2015-2017"}
                        defaultCollapsed
                    >
                        <Alert severity={"info"}>
                            I worked with Manus VR as a part-time employee
                        </Alert>
                        <Typography variant={"body2"}>
                            Manus VR is a small company specializing in haptic
                            Virtual Reality via gloves.
                        </Typography>
                        <Typography variant={"body2"}>
                            I joined Manus in the early stages and provided them
                            with a lot of help on the infrastructure front. This
                            includes:
                        </Typography>

                        <ul>
                            <li>Creating a developer portal</li>
                            <li>
                                Maintaining multiple development and production
                                environments
                            </li>
                            <li>Basic systems administration</li>
                            <li>Disaster Recovery</li>
                        </ul>
                    </Job>
                    <Job
                        title={"Kitchen Aide"}
                        subtitle={"Boscafe 't Hijgend Hert | 2010-2012"}
                        defaultCollapsed
                    >
                        <Typography variant={"body2"}>
                            I helped out in the kitchen.
                        </Typography>
                    </Job>
                    <Job
                        title={"Magazine Delivery"}
                        subtitle={"Interlanden | 2010-2011"}
                        defaultCollapsed
                    >
                        Ad Magazine delivery in the hilly countryside of Limburg
                    </Job>
                </Grid>
                <Grid item md={3} xs={12}>
                    <SectionHeader variant={"h4"}>Education</SectionHeader>

                    <Education
                        name={"Bachelor in Software Engineering"}
                        place={"Fontys University of Applied Sciences"}
                        time={"2014-2019"}
                    />
                    <Education
                        name={"Minor of Data Science"}
                        place={"Fontys University of Applied Sciences"}
                        time={"2018"}
                    />
                    <Education
                        name={"Bachelor of Electrical Engineering"}
                        place={"Hogeschool Zuyd"}
                        time={"2012-2014"}
                    />
                    <Education
                        name={"HAVO (Nature and Technology"}
                        place={"Sophianum"}
                        time={"2007-2012"}
                    />

                    <SectionHeader variant={"h4"}>Skills</SectionHeader>
                    <FlatList>
                        <FlatListHeader>General </FlatListHeader>
                        <FlatListItem>
                            Drivers License (Car and Motorcycle)
                        </FlatListItem>
                        <FlatListItem>Has transportation</FlatListItem>
                        <FlatListHeader>Technical</FlatListHeader>
                        <FlatListItem>
                            Functional & Object Oriented
                        </FlatListItem>
                        <FlatListItem>Infrastructure as Code</FlatListItem>
                        <FlatListItem>
                            Cloud Native Systems Architecture
                        </FlatListItem>
                        <FlatListItem>Microservice Architecture</FlatListItem>
                        <FlatListItem>
                            Highly Available and Fault Tolerant design
                        </FlatListItem>
                        <FlatListHeader>Professional</FlatListHeader>
                        <FlatListItem>Driven</FlatListItem>
                        <FlatListItem>Optimizing for results</FlatListItem>
                        <FlatListItem>Strong problem solver</FlatListItem>
                        <FlatListItem>Extremely fast learner</FlatListItem>
                    </FlatList>

                    <SectionHeader variant={"h4"}>Languages</SectionHeader>
                    <FlatList>
                        <FlatListItem>Dutch (Native)</FlatListItem>
                        <FlatListItem>English (Fluent)</FlatListItem>
                        <FlatListItem>German (Spoken Fluent)</FlatListItem>
                    </FlatList>

                    <SectionHeader variant={"h4"}>Interests</SectionHeader>
                    <FlatList>
                        <FlatListItem>Photography</FlatListItem>
                        <FlatListItem>Motorcycling</FlatListItem>
                        <FlatListItem>Baking</FlatListItem>
                        <FlatListItem>Whiskey</FlatListItem>
                        <FlatListItem>Tinkering with electronics</FlatListItem>
                        <FlatListItem>Home Automation</FlatListItem>
                    </FlatList>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionHeader variant={"h4"}>Projects</SectionHeader>
                    <Job title={"Hospi Housing"} subtitle={"Freelance"}>
                        <Typography variant={"body2"}>
                            Consulting Hospi Housing, a young start-up in the
                            rental market, with their React application by
                            adding complex features such as SEO, i18n and more.
                        </Typography>
                    </Job>
                    <Job title={"TreaT City Escape"} subtitle={"Freelance"}>
                        <Typography variant={"body2"}>
                            A puzzle app intended for gameified city tours. It
                            uses geolocation to unlock pieces of the puzzle and
                            give the next hints.
                        </Typography>
                    </Job>
                    <Job
                        title={"CBS Quantified Development"}
                        subtitle={"Research"}
                    >
                        <Typography variant={"body2"}>
                            As part of my minor in Data Science, me and my team
                            developed an application to monitor social media in
                            (almost) real time to quantify human development
                            goals set by the UN. This was done for the dutch
                            bureau of statistics.
                        </Typography>
                    </Job>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionHeader variant={"h4"}>Information</SectionHeader>
                    <FlatList>
                        <FlatListHeader>Extracurriculars</FlatListHeader>
                        <FlatListItem>
                            2015-2020 · Chairman of the ICT Committee of the
                            E.S.R.G. Knights of the Kitchen Table
                        </FlatListItem>
                        <FlatListItem>
                            2015-2016 · Board member of the E.S.R.G. Knights of
                            the Kitchen Table
                        </FlatListItem>
                        <FlatListItem>
                            2015-2018 · Member of the Fontys ICT Council
                        </FlatListItem>
                        <FlatListItem>
                            2015-2020 · Volunteer for several conventions across
                            Europe
                        </FlatListItem>
                    </FlatList>
                </Grid>
            </Grid>
        </NonPrintingContainer>
    );
};
