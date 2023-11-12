export function miniCompiler (code) {
  const input = code.split('')
  let currentNumber = 0
  let output = ''

  const operations = [
    {
      symbol: '&',
      process: function () {
        output += currentNumber.toString()
      }
    },
    {
      symbol: '#',
      process: function () {
        currentNumber += 1
      }
    },
    {
      symbol: '@',
      process: function () {
        currentNumber -= 1
      }
    },
    {
      symbol: '*',
      process: function () {
        currentNumber *= currentNumber
      }
    }
  ]
  input.forEach(input => {
    operations.find(item => item.symbol === input).process()
  })
  return output
}
