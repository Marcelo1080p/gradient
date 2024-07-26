import React from "react";

interface Props {
    linearGradient: string;
  }
export const GradientMain: React.FC<Props> = (props: Props) => {

    const styleGradientMain:React.CSSProperties = {
        width: "95%",
        height: 420,
        background: `-webkit-linear-gradient(${props.linearGradient}) `,
        border: "1px solid white"
    }
    
    return(
        <main style={styleGradientMain}>

        </main>
    )
}