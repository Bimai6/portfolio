import { LinkProps } from "../types/props"

const LinkButton = ({url, text}: LinkProps) => {
    return(
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 text-white text-4xl px-6 py-2 rounded-full"
        >
            {text}
        </a>
    )
};

export default LinkButton