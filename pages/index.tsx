import { RandomFox } from "../components/RandomFox";
import { MouseEventHandler, useState } from "react";

//* Generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123) + 1;

//* Type Array
type ImageItem = { id: string; url: string };

//* Generate simple unique identifier
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const target = event.target

    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <title>Curso React.js</title>
      <main>
        <h1 className="text-3xl font-bold underline">Random Fox</h1>
        <button onClick={addNewFox}>Agregar imagen</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>
    </div>
  );
}
