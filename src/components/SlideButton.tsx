import { SlideProps } from "@/types/props"

const SlideButton = ({event, char}: SlideProps) => {
    return(
        <button
            onClick={event}
            className="text-xl hover:cursor-pointer bg-purple-800 text-white rounded-full px-6 ml-3"
        >
            {char}
        </button>
    )
}

export default SlideButton