import {FaPython, FaReact, FaNodeJs, FaLinux, FaDocker, FaAws, FaSync} from 'react-icons/fa';
import {DiGitBranch} from "react-icons/di";
import {SiPostgresql, SiTerraform, SiTypescript} from "react-icons/si";

export const skills = {
    Languages: [
        {
            name: "Python",
            icon: <FaPython />
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />
        },
    ],
    Frameworks: [
        {
            name: "React",
            icon: <FaReact />
        },
    ],
    Infrastructure: [
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
            name: "PostgreSQL",
            icon: <SiPostgresql />
        },
        {
            name: "AWS",
            icon: <FaAws />
        },
        {
            name: "Terraform",
            icon: <SiTerraform />
        },
        {
            name: "CI/CD",
            icon: <FaSync />
        },
    ],
};
