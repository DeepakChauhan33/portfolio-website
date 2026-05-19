import storeFrontIMG from '../assets/prjImages/storeFrontIMG.png';
import trackItIMG from '../assets/prjImages/trackItIMG.png';
import taxHarvestingIMG from '../assets/prjImages/taxHarvestingIMG.png';


const project = [

    {
        "name": "Store Front",
        "image": storeFrontIMG,
        "link": "https://storefront0.netlify.app/",
        "gitRepo": "http",
        "desc": "Created a scalable e-commerce frontend using React and Tailwind CSS with reusable components, optimized search functionality, and global data handling through Redux Store.",
        "techStack": [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "Redux" },
            { id: 4, name: "RTK" }
        ]
    },

    {
        "name": "TrackIt",
        "image": trackItIMG,
        "link": "https://task-manager-kohl-nine-74.vercel.app/",
        "gitRepo": "http",
        "desc": "Designed and developed a responsive Task Manager application using JavaScript and Tailwind CSS with optimized user interaction handling through event delegation, category filtering, and persistent storage using Local Storage.",
        "techStack": [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "Local Storage" }
        ]
    },

    {
        "name": "Tax Harvesting Tool",
        "image": taxHarvestingIMG,
        "link": "https://tax-harvesting-tool.netlify.app/",
        "gitRepo": "http",
        "desc": " ",
        "techStack": [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "JavaScript" }
        ]
    },

    {
        "name": "Store Front",
        "image": storeFrontIMG,
        "link": "http",
        "gitRepo": "http",
        "desc": " ",
        "techStack": [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "JavaScript" }
        ]
    }
]


export default project;