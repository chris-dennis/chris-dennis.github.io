import {FaPython, FaJava, FaReact, FaNodeJs, FaAngular, FaLinux, FaRust, FaDocker, FaAws} from 'react-icons/fa';
import {DiJavascript1, DiGitBranch, DiJqueryLogo} from "react-icons/di";
import {SiSpring, SiMongodb, SiPostgresql, } from "react-icons/si";

export const projects = [
    {
        title: "Tempest Type",
        thumb: "/tempest-type.png",
        description: "Multiplayer typing game with real-time competitive races. Backend in Rust utilizing actix-web for communications.",
        tech: [<FaRust key="rust" />, <FaReact key="react" />, <DiJavascript1 key="js" />],
        link: "https://tempesttype.xyz/"
    },
    {
        title: "Pet Adoption",
                thumb: "/pet-adoption.png",
        description: "Sample platform for a pet adoption service, supports standard CRUD operations and persistent data management.",
        tech: [<FaReact key="react" />, <DiJavascript1 key="js" />, <FaNodeJs key="node" />],
        link: "https://somecountyshelter.xyz/"
    },
    {
        title: "Nearby Planes",
        thumb: "/nearby-planes.png",
        description: "Reveals nearby planes with route, carrier, progress, and more. Utilizes AirLabs API and Google Maps JS API via Express backend",
        tech: [<FaReact key="react" />, <DiJavascript1 key="js" />, <FaNodeJs key="node" />, <DiJqueryLogo key="jquery" />],
        link: "https://nearby-planes.herokuapp.com/"
    },
    {
        title: "Personal Portfolio",
        thumb: "/portfolio.png",
        description: "My portfolio to host current and future projects",
        tech: [<FaReact key="react" />, <DiJavascript1 key="js" />],
        link: "#"
    },
    {
        title: "Productivity Timer",
        thumb: "/productivity-timer.png",
        description: "A pomodoro based productivity timer",
        tech: [<FaReact key="react" />, <DiJavascript1 key="js" />],
        link: "https://chris-dennis.github.io/productivity-timer"
    },
];

export const skills = {
    Languages: [
        {
            name: "Python",
            icon: <FaPython />
        },
        {
            name: "Java",
            icon: <FaJava />
        },
        {
            name: "JavaScript",
            icon: <DiJavascript1 />
        },
        {
            name: "Rust",
            icon: <FaRust />
        },

    ],
    Frameworks: [
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "Angular",
            icon: <FaAngular />
        },
        {
            name: "Spring Boot",
            icon: <SiSpring />
        },
    ],
    Tools: [
        {
            name: "Git",
            icon: <DiGitBranch />
        },
        {
            name: "Linux",
            icon: <FaLinux />
        },
        {
            name: "Docker",
            icon: <FaDocker />
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql />
        },
        {
            name: "AWS",
            icon: <FaAws />
        },
    ],
};


export const courses = [
    'Data Structures and Algorithms',
    'Discrete Math Functional Programming',
    'Natural Language Processing',
    'Programming Languages and Theory',
    'Game Engine Programming',
    'Computer Systems',
    'System Security',

];