const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

export const formatPrice = (price) => {
  return formatter.format(price);
};

export const formatDate = (date) => {
  return date.toLocaleDateString('it-IT');
};
