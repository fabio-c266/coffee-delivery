export function formatNumber(numberToFormat: number) {
  return numberToFormat
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .split('$')[1]
    .trim()
}
