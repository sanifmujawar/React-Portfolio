import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Infrastructure Optimization Specialist",
    icon: web,
  },
  {
    title: "DevOps Deployment Wizard",
    icon: mobile,
  },
  {
    title: "Cloud Architect and Manager",
    icon: backend,
  },
  {
    title: "Frontend Integration Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Site Reliability Engineer",
    company_name: "Zycus | Mumbai, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - March 2022",
    points: [
      "Diagnosed and resolved complex technical problems, isolating performance bottlenecks to improve system efficiency and latency",
      "Administered and tuned middleware systems, optimizing performance and stability for systems including Apache Tomcat, NGINX, HA-Proxy, and Solr.",
      "Developed and implemented solutions for system reliability and availability, including  performance management, disasterrecovery, monitoring, and access management.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Site Reliability Engineer",
    company_name: "Zycus | Mumbai, India",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2022 - December 2022",
    points: [
      "Extensive experience with AWS, including designing and deploying solutions using EC2, S3, EBS, ELB, auto-scaling groups, and OpsWorks.",
      "Strong knowledge of a wide range of AWS services, including EC2, S3, RDS, Redshift, IAM, Route 53, VPC, Autoscaling, CloudFront, CloudWatch, CloudTrail, CloudFormation, and Security Groups. Experience managing Identity providers.",
      "Successfully migrated a Hybrid Cloud to AWS and updated the system design using AWS services, Apache Kafka, Docker, and Kubernetes.",
      "Developed an AI monitoring tool using RESTful API, DevOps-based self-healing tools, Golang application, and Linux/Ansible scripting using EC2, S3, and EBS, Elastic Load balancer(ELB), auto-scaling groups and OpsWorks.",
    ],
  },
  {
    title: "Site Reliability Engineer",
    company_name: "Derisk360 | London, United Kingdom",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Led team members in staying up-to-date on key industry trends and technologies, contributing to team development and growth.",
      "Provided application support forlive environments, solving complex ERTs and meeting SLI, SLA, and SLO requirements using prioritization frameworks.",
    ],
  },
  {
    title: "Lead Engineer",
    company_name: "NatWest Group | Edinburgh, United Kingdom",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed and maintained Terraform scripts for automating the provisioning and deployment of infrastructure resources in a cloud-based environment",
      "Collaborated with cross-functional teams to identify and implement solutions to enhance the reliability, availability, and performance of the company’s systems and infrastructure,resulting in improved system uptime and user experience.",
      "Worked on EDIreconciliation forthe NatWest project, to migrate a Hybrid Cloud to AWS and updated the system design using AWS services, Apache Kafka, Docker, and Kubernetes",
      "Demonstrated strong Linux administration and troubleshooting skills, using tools such as Jenkins, GOCD, and Jira for CI/CD pipelines and resolving complex issues related to Akamai, ActiveMQ, and VMs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sanif proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sanif does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sanif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Global Jap Imports",
    description:
      "Your top destination for high-quality Japanese imports. We specialize in sourcing and supplying top-notch Japanese vehicles, parts, and accessories to enthusiasts and businesses worldwide. With a deep passion for Japanese automotive culture, we ensure an exceptional importing experience.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "http://www.globaljapimports.com/",
  },
  {
    name: "Travel Buddy",
    description:
      "Explore, plan, and connect with Travel Buddy! Get accurate weather forecasts, create personalized trips, and convert currencies effortlessly. This app offers a seamless travel planning experience. Discover popular destinations, explore paradises, and make well-informed decisions for your journeys.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://sanifmujawar.github.io/Travel-Buddy/",
  },
  {
    name: "Weather Forecast App",
    description:
      "Access real-time weather data for multiple cities with our dynamic weather dashboard. Utilizing the 5 Day Weather Forecast API and localStorage for persistent data storage, we ensure you're always prepared for whatever Mother Nature has in store.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sanifmujawar.github.io/Weather-Forecast/",
  },
];

export { services, technologies, experiences, testimonials, projects };
