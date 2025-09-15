export const projectExtras: Record<string, {
    stack?: string[];
    images?: string[];
    deployment?: string | null;
    achievements?: string[];
}> = {
    "magnolia-hotels": {
        stack: ["JavaScript", "React", "Node", "MongoDB", "Vercel", "Bootstrap", "MUI"],
        images: ["https://res.cloudinary.com/dk1g12n2h/image/upload/v1740390718/homePage_v6r72r.png", "https://res.cloudinary.com/dk1g12n2h/image/upload/v1740473446/Restaurante_s4pswh.png", "https://res.cloudinary.com/dk1g12n2h/image/upload/v1740473324/reservaDesktop_eprhaw.png", "https://res.cloudinary.com/dk1g12n2h/image/upload/v1740472850/cartaDesktop_dfdc5y.png"],
        deployment: "https://magnolia-hotels.vercel.app/",
        achievements:["Implemented a React frontend using Hooks and React Router for navigation", "Simulated backend CRUD using JSON Server and a db.json file", "Built protected routes and form handling for create/read/update/delete", "Focused on responsive layout and UI polish appropriate for a hotel product"]
    },
    "eye-of-the-doom": {
        stack: ["HTML", "CSS", "JavaScript", "Vercel"],
        images: ["https://res.cloudinary.com/demqnwfff/image/upload/v1741439901/391489234-ad6708ab-89ab-4854-bfb8-ea156ed6dcfa_snwady.png", "https://res.cloudinary.com/demqnwfff/image/upload/v1741439956/391492381-9c135875-795b-461d-81d3-0910cffaf184_tizlgn.png", "https://res.cloudinary.com/demqnwfff/image/upload/v1741439981/391492466-2bc397a3-28db-4306-9dd5-b0f8ca35623d_i8wtqg.png"],
        deployment: "https://eye-of-the-doom.vercel.app/",
        achievements: ["Designed game loop and enemy spawning logic from scratch","Implemented collision detection and player shooting mechanics", "Created reusable modules for game objects and events", "Handled timing and animation sequences for smooth gameplay"]
    },
    "argio-studios": {
        stack: ["JavaScript", "Python", "React", "Django", "PostgreSQL", "Vercel", "Render", "Supabase", "Tailwind"],
        images: ["https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_44_w2adhg.png", "https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_47_hhe80e.png", "https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441871/Captura_de_pantalla_46_svhxm4.png", "https://res.cloudinary.com/dr9vuz2td/image/upload/v1750441870/Captura_de_pantalla_45_sgckjm.png"],
        deployment: "https://argio-studios.vercel.app/",
        achievements:["Set up full-stack project with Django backend and React frontend", "Implemented core portfolio functionality: gallery, about, contact sections","Configured project structure for scalability and maintainability"]
    },
    "mugen-the-seinen-manga-gate": {
        stack: ["HTML", "CSS", "JavaScript"],
        images: ["https://res.cloudinary.com/demqnwfff/image/upload/v1741440318/Screenshot1_rahmvh.png", "https://res.cloudinary.com/demqnwfff/image/upload/v1741440339/Screenshot2_gz6tck.png"],
        achievements: ["Built dynamic rendering system based on JSON data", "Created interactive filtering and sorting logic for catalog items", "Optimized DOM updates for better performance","Structured project files for maintainability and scalability"]
    },
};
