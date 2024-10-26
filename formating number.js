function formatNumber(number, {
    decimals = 0,
    valueIfNaN = '',
    style = '',
    useOrderSuffix = false,
    orderSuffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx' , 'Sp', 'Oc', 'No', 'De', 'Ud', 'Dd', 'Td', "Qt", "Qd", 'how', 'had', 'you', 'done', 'it'],
    minOrder = 0,
    maxOrder = Infinity
} = {}) {

let x = parseFloat(number);

if (isNaN(x))
  return valueIfNaN;

if (style === '%')
  x *= 100.0;

let order;
if (!isFinite(x) || !useOrderSuffix)
  order = 0;
else if (minOrder === maxOrder)
  order = minOrder;
else {
  const unboundedOrder = Math.floor(Math.log10(Math.abs(x)) / 3);
  order = Math.max(
    0,
    minOrder,
    Math.min(unboundedOrder, maxOrder, orderSuffixes.length - 1)
  );
}

const orderSuffix = orderSuffixes[order];
if (order !== 0)
  x /= Math.pow(10, order * 3);

return (style === '$' ? '$' : '') +
  x.toLocaleString(
    'en-US',
    {
      style: 'decimal',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }
  ) +
  orderSuffix +
  (style === '%' ? '%' : '');
}