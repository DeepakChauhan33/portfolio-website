import storeFrontIMG from '../assets/prjImages/storeFrontIMG.png';
import trackItIMG from '../assets/prjImages/trackItIMG.png';
import taxHarvestingIMG from '../assets/prjImages/taxHarvestingIMG.png';
import meridianIMG from '../assets/prjImages/meridianIMG.png';

const project = [

    {
        "name": "Store Front",
        "image": storeFrontIMG,
        "link": "https://storefront-commerce-three.vercel.app",
        "gitRepo": "https://github.com/DeepakChauhan33/Storefront-Commerce",
        "desc": "Storefront-Commerce is a full-stack e-commerce application built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB. It features JWT authentication, product browsing, cart and wishlist management, checkout, order history, responsive UI, REST APIs, and separate Vercel and Render deployments.",
        "techStack": [
            { id: 1, name: "React" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "Redux" },
            { id: 4, name: "MongoDB" },
            { id: 4, name: "REST APIs" }
        ]
    },

    {
        "name": "Meridian",
        "image": meridianIMG,
        "link": "https://meridian-indol-psi.vercel.app",
        "gitRepo": "https://github.com/DeepakChauhan33/Meridian-Strategy-Engine-",
        "desc": "An AI-powered market research platform designed to simplify and speed up the research process. It uses AI agents to plan research, gather and validate information, analyze market trends and competitors, and generate structured reports with supporting evidence for better strategic decision-making.",
        "techStack": [
            { id: 1, name: "Python" },
            { id: 2, name: "GenAI" },
            { id: 3, name: "React" },
            { id: 4, name: "AI agents" },
        ]
    },

    {
        "name": "Tax Harvesting Tool",
        "image": taxHarvestingIMG,
        "link": "https://tax-harvesting-tool.netlify.app/",
        "gitRepo": "https://github.com/DeepakChauhan33/tax-harvesting-dashboard",
        "desc": "The Tax Harvesting Dashboard is an interactive frontend application built using React.js and Tailwind CSS. It is designed to help users understand and optimize their capital gains from cryptocurrency investments.",
        "techStack": [
            { id: 1, name: "React" },
            { id: 2, name: "Tailwind CSS" },
            { id: 3, name: "JavaScript" }
        ]
    },


]


export default project;