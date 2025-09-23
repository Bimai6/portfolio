import { Repo } from "@/models/Repo";

export type Project = Repo & {
    stack?: string[];
    images?: string[];
    deployment?: string | null;
    achievements?: string[];
};
