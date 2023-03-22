import { useState } from 'react';
import { getUniqueID } from '../utils/uniqueID';
import imagenotavailable from '../assets/images/imagenotavailable.png';

const AddCakeForm = ({ onAddCake, cakes }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [availability, setAvailability] = useState('');
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new cake object with form inputs and default values
    const cake = {
      id: getUniqueID(),
      name: name,
      price: Number(price),
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      availability: Number(availability),
      image: image || imagenotavailable,
      dateAdded: new Date(),
    };
    onAddCake(cake);
    setName('');
    setPrice('');
    setIngredients('');
    setAvailability('');
    setImage(null);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="border-2 border-indigo-500 bg-indigo-100 rounded-lg my-6 md:mx-0 md:my-10 w-full md:w-3/4 lg:w-1/2">
      <div className="flex justify-center py-2 text-indigo-500 mb-6">
        <h3 className="text-3xl md:text-5xl font-medium mb-5 mt-5">Aggiungi un dolce</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 text-2xl px-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-bold">
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1 font-bold">
            Prezzo
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="ingredients" className="mb-1 font-bold">
            Ingredienti
          </label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="availability" className="mb-1 font-bold">
            Disponibilità
          </label>
          <input
            type="number"
            id="availability"
            min="0"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1 font-bold">
            Immagine
          </label>
          <input
            type="file"
            id="image"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-center pb-4">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Aggiungi dolce
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCakeForm;
