const formatCurrency = (value, currency = 'BRL') => {
  return value.toLocaleString('pt-br', {
    style: 'currency', currency});
};

export default formatCurrency;