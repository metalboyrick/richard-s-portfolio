import type { ReactNode } from "react";

type ButtonType = 'primary' | 'outlined-neutral' | 'outlined-primary' | 'danger' | 'success';

export interface ButtonProps {
    type: ButtonType;
    children: ReactNode;
    margin? : string;
    padding? : string;
    borderRadius? : string;
    onClick: () => void;
};