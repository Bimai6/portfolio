import { useEffect, useState } from "react";
import Fetch from "../fetch/Fetch";
import { Repo } from "../fetch/Fetch";
import "/src/styles.css";

const Project = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        Fetch().then((data) => {
            const sortedRepos = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            setRepos(sortedRepos);
        });
    }, []);


    function handleTitle(name : string) {
        return name === 'magnolia-hotels' ? 'MAGNOLIA HOTELS' : name === 'EyeOfTheDoom' ? 'EYE OF THE DOOM' : name === 'mugen-the-seinen-manga-gate' ? 'MUGEN' : name === 'theuss' ? 'THEUSS' : undefined
    }

    function handleDate(date : string) {
        const dateArray = date.split('T');
        const datePieces = dateArray[0].split('-');
        return datePieces[2] + '.' + datePieces[1] + '.' + datePieces[0];
    }

    return (
        <div className="flex flex-col justify-start w-full h-5/6 mb-25">
            {repos.map((repo) => (
                <div className="flex flex-row items-center justify-between w-full h-1/6 text-white border-b border-white">
                    <a href=""><p className="pl-4 text-6xl font-extrabold">{handleTitle(repo.name)}</p></a>
                    <p className="pr-6 text-2xl">{handleDate(repo.created_at)}</p>
                </div>
            ))}
        </div>
    )
}

export default Project