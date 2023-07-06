import { NextPage } from "next";
import { RandomFox } from "../components/RandomFox";
import { useState } from "react";

//* Generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123)+ 1;

//* Type Array
type ImageItem = {id: string; url: string};

//* Generate simple unique identifier
const generateId = () => Math.random().toString(36).substring(2,9);


export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId() , url: `https://randomfox.ca/images/${random()}.jpg`},
    { id: generateId() , url: `https://randomfox.ca/images/${random()}.jpg`},
    { id: generateId() , url: `https://randomfox.ca/images/${random()}.jpg`},
    { id: generateId() , url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <div>
      <title>Curso React.js</title>
      <main>
        <h1 className="text-3xl font-bold underline">Random Fox</h1>
        {images.map(( {id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url}/>
          </div>
        ))}
      </main>
    </div>
  );
}
