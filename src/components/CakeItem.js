import { useState, useEffect } from 'react';
import Modal from './Modal';
import { formatDate, formatPrice } from '../utils/formatters';

const CakeItem = ({ cakes, cake, loggedInUser, onUpdateCake, onDeleteCake }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [isCakeExpired, setIsCakeExpired] = useState(false);

  // Function to handle increasing cake availability
  const handleIncreaseAvailability = () => {
    const newAvailability = cake.availability + 1;

    const newCake = {
      ...cake,
      availability: newAvailability,
    };
    onUpdateCake(cake.id, newCake);
  };

  // Function to handle decreasing cake availability
  const handleDecreaseAvailability = () => {
    const newAvailability = cake.availability > 0 ? cake.availability - 1 : 0;

    const newCake = {
      ...cake,
      availability: newAvailability,
    };
    onUpdateCake(cake.id, newCake);
  };

  const handleDeleteCake = () => {
    setIsOverlayVisible(true);
  };

  const handleConfirmDeleteCake = () => {
    onDeleteCake(cake.id);
    setIsOverlayVisible(false);
  };

  const handleCancelDeleteCake = () => {
    setIsOverlayVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (cakes?.length > 0) {
      const twentyPercentDiscount = cake.price * 0.8;
      const eightyPercentDiscount = cake.price * 0.2;
      const day = 24 * 60 * 60 * 1000;
      // The following three timeouts are set to run after different intervals of time (2 days, 3 days, and 4 days).
      // They perform different actions like setting "discountedPrice" state and setting "isCakeExpired" state.
      const firstDiscountTimeout = setTimeout(() => {
        setDiscountedPrice(twentyPercentDiscount);
      }, 2 * day);
      const secondDiscountTimeout = setTimeout(() => {
        setDiscountedPrice(eightyPercentDiscount);
      }, 3 * day);
      const deleteCakeTimeout = setTimeout(() => {
        setIsCakeExpired(true);
      }, 4 * day);

      return () => {
        clearTimeout(firstDiscountTimeout);
        clearTimeout(secondDiscountTimeout);
        clearTimeout(deleteCakeTimeout);
      };
    }
  }, [cake.name, cake.price, cakes.length]);

  return (
    <div className="w-full h-full bg-white rounded-lg px-12 py-6 shadow-lg mb-3 relative">
      {(isOverlayVisible || (loggedInUser && isCakeExpired)) && (
        <div className="absolute rounded-lg inset-0 bg-gray-900 opacity-70"></div>
      )}
      {(isOverlayVisible || (loggedInUser && isCakeExpired)) && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg mx-8">
            {loggedInUser && isCakeExpired ? (
              <p className="text-2xl font-semibold mb-4">Ritira "{cake.name}" dalla vendita!</p>
            ) : (
              <p className="text-2xl font-semibold mb-4">
                Sei sicuro di voler eliminare "{cake.name}"?
              </p>
            )}
            <div className="flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleConfirmDeleteCake}
              >
                Elimina
              </button>
              {!(loggedInUser && isCakeExpired) && (
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-xl text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelDeleteCake}
                >
                  Annulla
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <img
        src={cake.image}
        alt={cake.name}
        className="mx-auto min-w-72 h-52 object-contain rounded-lg cursor-pointer"
        onClick={handleOpenModal}
      />
      <div
        className={
          loggedInUser
            ? 'h-72 md:h-80 mt-4 flex flex-col justify-between'
            : 'h-20 xl:h-24 mt-4 flex flex-col justify-between'
        }
      >
        <h5 className="text-3xl xl:text-4xl font-bold">{cake.name}</h5>
        {loggedInUser && (
          <p className="text-xl text-gray-700">
            <span className="font-bold">Ingredienti:</span> {cake.ingredients.join(', ')}
          </p>
        )}
        {!loggedInUser && isCakeExpired ? (
          <p className="text-xl text-red-500">Prodotto non disponibile</p>
        ) : (
          <p className="text-xl text-gray-700">
            <span className="font-bold">Prezzo:</span>{' '}
            <span className="font-bold text-red-500">
              {discountedPrice ? formatPrice(discountedPrice) : formatPrice(cake.price)}
            </span>
          </p>
        )}
        {loggedInUser && (
          <p className="text-xl text-gray-700">
            <span className="font-bold">Disponibilità:</span>{' '}
            <span className="font-bold text-red-500">{cake.availability}</span>
          </p>
        )}
        {loggedInUser && (
          <p className="text-xl text-gray-700">
            <span className="font-bold">Data di prododuzione:</span>{' '}
            <span className="text-sm font-bold text-red-500">{formatDate(cake.dateAdded)}</span>
          </p>
        )}
        {isModalOpen && <Modal cake={cake} setIsModalOpen={setIsModalOpen} />}
        {loggedInUser && (
          <div className="text-xl mt-4 flex items-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleIncreaseAvailability}
            >
              +
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleDecreaseAvailability}
            >
              -
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDeleteCake}
            >
              Elimina
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CakeItem;
