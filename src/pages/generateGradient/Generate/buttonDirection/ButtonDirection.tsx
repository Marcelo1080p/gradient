import "./ButtonDirection.css";
import React from "react";

interface Props {
    title: string
}

export const ButtonDirection:React.FC<Props> = (props: Props) => {
    return(
        <p className="btnDirection">
            {props.title}
        </p>
    )
}