const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

// Function to format the price in Italian currency according to the formatter
export const formatPrice = (price) => {
  return formatter.format(price);
};

// Function to format a date in Italian format
export const formatDate = (date) => {
  return date.toLocaleDateString('it-IT');
};
