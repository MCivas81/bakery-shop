import CakeItem from './CakeItem';
import AddCakeForm from './AddCakeForm';

const CakeList = ({ cakes, loggedInUser, onAddCake, onUpdateCake, onDeleteCake }) => {
  return (
    <div className="mx-10 mt-36 mb-10 md:mx-10 md:mt-56 md:mb-16">
      {loggedInUser ? (
        <div className="flex justify-center rounded-lg py-2 bg-rose-400 text-white mb-10">
          <h3 className="text-3xl md:text-5xl font-medium mb-3 mt-3 md:mb-5 md:mt-5">
            Aggiorna i dolci disponibili
          </h3>
        </div>
      ) : (
        <div className="flex justify-center my-20">
          <h3 className="text-4xl text-rose-700 md:text-5xl font-medium">
            La nostra selezione di dolci:
          </h3>
        </div>
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cakes.map((cake) => (
          <CakeItem
            key={cake.id}
            cake={cake}
            cakes={cakes}
            loggedInUser={loggedInUser}
            onUpdateCake={onUpdateCake}
            onDeleteCake={onDeleteCake}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {loggedInUser && <AddCakeForm onAddCake={onAddCake} cakes={cakes} />}
      </div>
    </div>
  );
};

export default CakeList;
