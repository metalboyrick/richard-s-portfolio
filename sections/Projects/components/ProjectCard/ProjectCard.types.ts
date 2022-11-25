import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { ProjectLinks } from "../../types";

export interface ProjectCardProps {
    coverImg: StaticImageData;
    coverAlt : string;
    title: ReactNode;
    description : ReactNode;
    URLs: ProjectLinks[];
};