import { InputHTMLAttributes } from "react";
import "../styles/buttons.css"

type Props = InputHTMLAttributes<HTMLInputElement>;

interface IButtonProps extends Props{
    text: string;
    secondary?: boolean;
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}