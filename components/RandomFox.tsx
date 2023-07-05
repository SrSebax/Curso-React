// import type { FunctionComponent, FC } from "react"

type Props = { image : string};

//? MEJOR FORMA
export const RandomFox = ({image}: Props ): JSX.Element => { // Forma explicita (Tipando lo que retorna la funcion)
    return <img width={320} height="auto" src={image} className="rounded" />;
};

// export const RandomFox = () => { // Forma implicita
//     return <img />
// }

// export const RandomFox: FunctionComponent = () => { // Forma explicita (Tipando lo que retorna la constante)
//     return <img />
// }

// export const RandomFox: FC = () => { // Forma explicita (Tipando lo que retorna la constante)
//     return <img />
// }