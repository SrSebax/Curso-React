import { NextPage } from "next";
import { RandomFox } from "../components/RandomFox";
import { useState } from "react";

//* Generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123)+ 1;


export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <div>
      <title>Curso React.js</title>

      <main>
        <h1 className="text-3xl font-bold underline">Random Fox</h1>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image}/>
          </div>
        ))}
      </main>
    </div>
  );
}
