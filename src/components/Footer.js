import mainlogo from '../assets/logos/mainlogo.jpg';

const Footer = () => {
  return (
    <footer className="bg-rose-100 mt-12 py-2 lg:py-4 border-t-2 border-rose-200">
      <div className="text-sm lg:text-lg flex justify-around items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={mainlogo}
          alt="Main Logo"
          className="h-20 lg:h-24 rounded-full border-2 border-rose-200"
        />
        <div className="h-full flex flex-col justify-evenly items-center">
          <p className="text-gray-500">Viale della Libertà, 12 - 90144 Palermo</p>
          <p className="text-gray-500">info@pasticceriachantilly.com</p>
          <p className="text-gray-500">Tel: 091 334455</p>
        </div>
        <ul className="h-full flex flex-col justify-evenly items-center">
          <li className="text-gray-500 hover:text-gray-900">Facebook</li>
          <li className="text-gray-500 hover:text-gray-900">Instagram</li>
          <li className="text-gray-500 hover:text-gray-900">Twitter</li>
        </ul>
      </div>
      <div className="h-full flex justify-center items-center mt-4 lg:mt-6 mx-8 text-sm lg:text-lg">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Pasticceria Chantilly</p>
      </div>
    </footer>
  );
};

export default Footer;
