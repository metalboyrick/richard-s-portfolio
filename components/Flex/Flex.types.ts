import { ReactNode } from "react";

export interface FlexProps {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
    wrap? : string;
    inline? : boolean;
    width?: string;
    height? : string;
    className?: string;
    children: ReactNode;
}