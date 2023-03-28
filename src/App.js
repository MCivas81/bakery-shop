import React, { useState } from 'react';
import Header from './components/Header';
import CakeList from './components/CakeList';
import Footer from './components/Footer';
import { initialCakes } from './mock/config.js';
import { users } from './services/userService';
import './App.css';

const App = () => {
  const [cakes, setCakes] = useState(initialCakes);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Event handler function for user login
  const handleLogin = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser({ email: `${user.email} (${user.name})` });
    }
  };

  // Event handler function for user logout
  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // Event handler function for adding a new cake to the list
  const handleAddCake = (cake) => {
    setCakes([...cakes, cake]);
  };

  // Event handler function for updating a cake in the list
  const handleUpdateCake = (id, updatedCake) => {
    const updatedCakes = cakes.map((cake) => (cake.id === id ? updatedCake : cake));
    setCakes(updatedCakes);
  };

  // Event handler function for deleting a cake from the list
  const handleDeleteCake = (id) => {
    const updatedCakes = cakes.filter((cake) => cake.id !== id);
    setCakes(updatedCakes);
  };

  return (
    <div className="flex flex-col min-h-screen font-dancing-script">
      <Header loggedInUser={loggedInUser} onLogin={handleLogin} onLogout={handleLogout} />
      <div className="container mx-auto flex-grow">
        <CakeList
          cakes={cakes}
          loggedInUser={loggedInUser}
          onAddCake={handleAddCake}
          onUpdateCake={handleUpdateCake}
          onDeleteCake={handleDeleteCake}
        />
      </div>
      {!loggedInUser && <Footer />}
    </div>
  );
};

export default App;
