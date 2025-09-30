import { Repo } from "@/models/Repo";

export interface ReposProps {
    repos: Repo[];
}

export interface LinkProps {
    url: string;
    text: string;
}

export interface SlideProps {
    event: () => void;
    char: string;
}

export interface ProjectProps extends ReposProps {
    shouldAnimate: boolean;
    onAnimationComplete?: () => void;
}

export interface FrontPosterProps {
    isNotClicked: boolean;
    isNotLargeScreen: boolean;
}