export function calcTotalPrice(items) {
  return items.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity * cartItem.price
  }, 0)
}

export function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }
  if ((amount % 100) - amount === 0) {
    options.minimumFractionDigits = 0
  }
  const formatter = new Intl.NumberFormat('de-DE', options)
  return formatter.format(amount)
}
