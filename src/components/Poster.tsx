import "/src/styles.css";
import { ImageLinks } from "../utils/ImageLinks";

const Poster = () => {
    return (
        <div className="flex flex-col bg-white h-screen w-1/3 overflow-y-hidden">
            <div className="text-purple-800 font-extrabold h-full w-full">
                <div className="text-8xl pl-3">
                    <p>MARIO</p>
                    <p>LEBRERO</p>
                    <p>GARCIA</p>
                </div>
                <div className="pr-3 flex flex-col place-items-end mt-25 text-5xl">
                    <p>WEB</p>
                    <p>DEVELOPER</p>
                </div>
            </div>
            <div className="bg-gray-500 w-full flex-1 flex items-center justify-center">
                <img className="h-full m-auto w-4/6"
                src={ImageLinks.selfie} alt="Mario Lebrero's image"/>
            </div>
        </div>
    )
}

export default Poster