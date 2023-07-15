const refForm = document.getElementById('form')
const refSpan = document.getElementById('symbol')
refForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const arr = event.currentTarget.elements.text.value.trim()
  event.currentTarget.reset()

  // розбиваємо текст на окремі слова, видаляємо крапки та коми
  const arrWords = arr.replace(/[.,]/g, '').split(' ')

  // знаходимо перший унікальний символ в кожному слові
  const arrSymbol = []
  // перебираємо слова в масиві слів
  for (const word of arrWords) {
    const uniqueSymbol = []

    // перебираємо символи слова
    for (const symbol of word) {
      if (word.indexOf(symbol) === word.lastIndexOf(symbol)) {
        uniqueSymbol.push(symbol)
      }
    }

    // зберігаємо перший унікальний символ слова
    arrSymbol.push(uniqueSymbol[0])
  }

  // із отриманого масиву символів вибираємо перший унікальний і повертаємо
  for (const symbol of arrSymbol) {
    if (arrSymbol.indexOf(symbol) === arrSymbol.lastIndexOf(symbol)) {
      refSpan.textContent = 'Unique symbol - ' + symbol
      return symbol
    }
  }

  return (refSpan.textContent = 'There are no unique symbols')
}
