// import type { FunctionComponent, FC } from "react"

//* generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123)+ 1;

//? MEJOR FORMA
export const RandomFox = (): JSX.Element => { // Forma explicita (Tipando lo que retorna la funcion)
    const image: string = `https://randomfox.ca/images/${random()}.jpg`;
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