import { InlineCode } from "@/once-ui/components";

const person = {
    firstname: 'Tsilavina Henintsoa',
    lastname: 'Andriamahafaly',
    get name(): string {
        return `${this.firstname} ${this.lastname}`;
    },
    role: 'Software engineering',
    avatar: '/images/avatar.jpg',
    location: 'Madagascar/Antananarivo',
    languages: ['French', 'English'],
};

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstname}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>,
};

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/NyAndriaX',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/tsilavina-henintsoa-andriamahafaly-6949a4247/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'tsilavinaandriamahafaly01@gmail.com',
    },
]

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/tsilavina-henintsoa-andriamahafaly-nn80md'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Tsilavina is an engineer based in Madagascar, passionate about solving complex challenges and finding efficient solutions. Her work focuses on process optimization and project management in various technical fields.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Office How Her',
                timeframe: 'August 2024 - November 2024',
                role: 'Full Stack Developer',
                achievements: [
                    <>Design and development of Club CEOs Platform, an innovative community platform for businesses, aimed at fostering professional exchanges.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Next.js Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'P29, Société par Actions Simplifiée unipersonnelle (SASU)',
                timeframe: '2023 - 2024',
                role: 'Full Stack Developer',
                achievements: [
                    <>Creation of a design prototype for ShopHub, an innovative management solution for e-commerce sites, focused on user experience.</>,
                    <>Design and development of an order management website, integrating a simple user interface and a RESTful API.</>,
                    <>Implementation of a house or rental management system on a website.</>,
                    <>Design and integration of Freelpay, a web platform dedicated to freelance management.</>
                ],
                images: []
            },

            {
                company: 'WevCom Factory',
                timeframe: '2022 - 2023',
                role: 'React Developer',
                achievements: [
                    <>Integration and deployment of a website for event presentation.</>
                ],
                images: []
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: "Ecole National d'Informatique of Fianarantsoa Madagascar",
                description: <>Studied software engineering and databases.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + MySQL.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                ]
            }
        ]
    }
}


const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineering</>,
    subline: <>
        I’m Tsilavina Henintsoa, a <InlineCode>software engineer</InlineCode>. Let’s turn your ideas into reality—contact me today!</>
}

export { person, newsletter, social, home, about };
