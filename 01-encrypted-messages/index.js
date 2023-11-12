export function messageDecoder (message = '') {
  if (!message) throw new Error('parameter not provided')

  const ocurrences = []
  const messageWords = message.split(' ')
  const decodeMessage = []

  messageWords.forEach(currentWord => {
    const isIn = ocurrences.find(value => value?.word.toLowerCase() === currentWord.toLowerCase())

    if (isIn) {
      const wordPosition = ocurrences.findIndex(value => value.word.toLowerCase() === currentWord.toLowerCase())
      ocurrences[wordPosition].ocurrences += 1
    } else {
      ocurrences.push({ word: currentWord, ocurrences: 1 })
    }
  })

  ocurrences.forEach(item => {
    decodeMessage.push(`${item.word}${item.ocurrences}`)
  })

  return decodeMessage.join('')
}

