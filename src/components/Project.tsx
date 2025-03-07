import { useEffect, useState } from "react";
import Fetch from "../fetch/Fetch";
import { Repo } from "../fetch/Fetch";
import "/src/styles.css";

const Project = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [hoveredRepo, setHoveredRepo] = useState<string | null>(null);

    useEffect(() => {
        Fetch().then((data) => {
            const sortedRepos = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            setRepos(sortedRepos);
        });
    }, []);

    function handleTitle(name: string) {
        return name === 'magnolia-hotels' ? 'MAGNOLIA HOTELS' : name === 'EyeOfTheDoom' ? 'EYE OF THE DOOM' : name === 'mugen-the-seinen-manga-gate' ? 'MUGEN' : name === 'theuss' ? 'THEUSS' : undefined;
    }

    function handleDate(date: string) {
        const dateArray = date.split('T');
        const datePieces = dateArray[0].split('-');
        return datePieces[2] + '.' + datePieces[1] + '.' + datePieces[0];
    }

    return (
        <div className="flex flex-col justify-start w-full h-5/6 mb-25">
            {repos.map((repo) => (
                <div 
                    key={repo.name} 
                    className="hover:bg-white hover:cursor-pointer hover:text-purple-800 flex flex-row items-end justify-between w-full h-1/6 text-white border-b border-white"
                    onMouseEnter={() => setHoveredRepo(repo.name)}
                    onMouseLeave={() => setHoveredRepo(null)}
                >
                    <p className={`pl-4 pr-5 ${hoveredRepo === repo.name ? 'text-lg' : 'text-6xl'} font-extrabold pb-7`}>
                        {hoveredRepo === repo.name ? repo.description ?? handleTitle(repo.name) : handleTitle(repo.name)}
                    </p>
                    <p className="pr-6 text-2xl pb-7">{handleDate(repo.created_at)}</p>
                </div>
            ))}
        </div>
    );
};

export default Project;
