import tortaparadiso from '../assets/images/tortaparadiso.webp';
import tiramisu from '../assets/images/tiramisu.webp';
import cheesecake from '../assets/images/cheesecake.png';
import crostatafrutta from '../assets/images/crostatafrutta.jpeg';
import ciambella from '../assets/images/ciambella.webp';
import baba from '../assets/images/baba.jpeg';
import tortalimone from '../assets/images/tortalimone.jpeg';
import cannolosiciliano from '../assets/images/cannolosiciliano.jpg';
import sachertorte from '../assets/images/sachertorte.jpeg';

export const initialCakes = [
  {
    id: 1,
    name: 'Torta paradiso',
    price: 15,
    ingredients: ['Farina', 'Uova', 'Zucchero', 'Burro', 'Lievito'],
    availability: 3,
    image: tortaparadiso,
    dateAdded: new Date(),
  },
  {
    id: 2,
    name: 'Tiramisù',
    price: 8,
    ingredients: ['Savoiardi', 'Caffè', 'Mascarpone', 'Zucchero', 'Uova'],
    availability: 5,
    image: tiramisu,
    dateAdded: new Date(),
  },
  {
    id: 3,
    name: 'Cheesecake',
    price: 7,
    ingredients: ['Biscotti', 'Burro', 'Philadelphia', 'Zucchero', 'Uova'],
    availability: 2,
    image: cheesecake,
    dateAdded: new Date(),
  },
  {
    id: 4,
    name: 'Crostata di frutta',
    price: 12,
    ingredients: ['Farina', 'Burro', 'Zucchero', 'Uova', 'Frutta fresca'],
    availability: 4,
    image: crostatafrutta,
    dateAdded: new Date(),
  },
  {
    id: 5,
    name: 'Ciambella',
    price: 10,
    ingredients: ['Farina', 'Zucchero', 'Burro', 'Uova', 'Lievito'],
    availability: 6,
    image: ciambella,
    dateAdded: new Date(),
  },
  {
    id: 6,
    name: 'Baba al rum',
    price: 6,
    ingredients: ['Farina', 'Uova', 'Zucchero', 'Burro', 'Rum'],
    availability: 1,
    image: baba,
    dateAdded: new Date(),
  },
  {
    id: 7,
    name: 'Torta al limone',
    price: 14,
    ingredients: ['Farina', 'Zucchero', 'Burro', 'Uova', 'Limone'],
    availability: 3,
    image: tortalimone,
    dateAdded: new Date(),
  },
  {
    id: 8,
    name: 'Cannolo siciliano',
    price: 5,
    ingredients: ['Ricotta', 'Zucchero', 'Cannolo', 'Cioccolato', 'Arancia candita'],
    availability: 2,
    image: cannolosiciliano,
    dateAdded: new Date(),
  },
  {
    id: 9,
    name: 'Sacher torte',
    price: 24,
    ingredients: ['Cioccolato', 'Farina', 'Burro', 'Zucchero', 'Marmellata di albicocche'],
    availability: 2,
    image: sachertorte,
    dateAdded: new Date(),
  },
];
