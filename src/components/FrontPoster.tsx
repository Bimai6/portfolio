import { FrontPosterProps } from "@/types/props";

const FrontPoster = ({isNotClicked, isNotLargeScreen}: FrontPosterProps) => (
    <div className="flex flex-col text-purple-800 font-extrabold h-full w-full">
        <div className="flex flex-col text-7xl lg:text-8xl mt-5 mx-5 mb-auto">
            <p>MARIO</p>
            <p>LEBRERO</p>
        </div>
        <style>
            {
                `@keyframes pulse-scale {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                .animate-pulse-scale {
                    animation: pulse-scale 4s infinite ease-in-out;
                }`
            }
        </style>
        <img
            className={`${isNotClicked && isNotLargeScreen ? "animate-pulse-scale" : ""} self-center h-auto sm:max-w-[350px] md:max-w-[400px] lg:max-w-[8000px] lg:w-4/6 md:w-3/6 w-4/6`}
            src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png"
            alt="Mario Lebrero's portrait"
        />
        <div className="mx-5 flex flex-col place-items-end text-5xl mt-auto mb-7">
            <p>WEB</p>
            <p>DEVELOPER</p>
        </div>
    </div>
);

export default FrontPoster