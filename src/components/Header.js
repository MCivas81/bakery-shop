import mainlogo from '../assets/logos/mainlogo.jpg';

const Header = ({ loggedInUser, onLogin, onLogout }) => {
  return (
    <nav className="fixed z-10 w-full flex items-center justify-center lg:justify-between bg-rose-100 border-b-2 border-rose-200 px-4 py-2 md:px-8 md:py-4">
      <img
        src={mainlogo}
        alt="Main Logo"
        className="h-20 md:h-32 rounded-full border-2 border-rose-200"
      />
      <h1 className="text-4xl lg:text-5xl font-semibold mx-8 text-rose-700">
        Pasticceria Chantilly
      </h1>
      <div className="flex-grow md:flex md:items-center md:w-auto hidden">
        {loggedInUser ? (
          <div className="ml-auto flex flex-col items-end">
            <span className="mb-2 text-xl text-rose-700 font-bold">{loggedInUser.email}</span>
            <button
              className="bg-rose-400 hover:bg-rose-600 text-xl text-white font-bold py-2 px-4 mt-2 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <form
            className="flex items-center ml-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.elements.email.value;
              const password = e.target.elements.password.value;
              onLogin(email, password);
            }}
          >
            <div className="flex items-center text-xl">
              <input
                type="email"
                className="border rounded py-2 px-3 mr-2 w-40 lg:w-52"
                placeholder="Email"
                name="email"
              />
              <input
                type="password"
                className="border rounded py-2 px-3 mr-2 w-40 lg:w-52"
                placeholder="Password"
                name="password"
              />
              <button
                type="submit"
                className="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Header;
