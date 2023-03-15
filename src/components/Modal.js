const Modal = ({ cake, setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col justify-evenly items-center bg-white p-6 rounded-lg shadow-lg mx-auto h-3/4 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="flex justify-center items-center h-1/2 w-full h-full">
          <img src={cake.image} alt={cake.name} className="mx-auto w-full h-full object-contain" />
        </div>
        <p className="text-3xl font-semibold mb-4 sm:text-4xl">{cake.name}</p>
        <p className="text-xl text-gray-700 sm:text-2xl">
          <span className="font-bold">Ingredienti:</span> {cake.ingredients.join(', ')}
        </p>
        <button
          className="bg-rose-500 hover:bg-rose-700 text-xl text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setIsModalOpen(false)}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default Modal;
