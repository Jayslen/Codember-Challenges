import { describe, test, expect } from 'vitest'
import { miniCompiler } from './index'

const codemberTest = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

describe('mini compiler that interprets and executes programs written in this symbol language : # , @, *, &', () => {
  test('(& symbol) should print the current numerical value', () => {
    expect(miniCompiler('&')).toBe('0')
    expect(miniCompiler('&&')).toBe('00')
  })

  test('(# symbol) should increases the current numerical value by 1', () => {
    expect(miniCompiler('#&')).toBe('1')
    expect(miniCompiler('##&')).toBe('2')
    expect(miniCompiler('#####&')).toBe('5')
  })

  test('(@ symbol) should decreases the current numerical value by 1', () => {
    expect(miniCompiler('@&')).toBe('-1')
    expect(miniCompiler('@@&')).toBe('-2')
    expect(miniCompiler('@@@@@&')).toBe('-5')
  })

  test('(* symbol) should multiply the current numerical value by itself', () => {
    expect(miniCompiler('##*&')).toBe('4')
    expect(miniCompiler('###*&')).toBe('9')
  })

  test('(##*&) should return 4', () => {
    expect(miniCompiler('##*&')).toBe('4')
  })

  test('(&##&*&@&) should return 0243', () => {
    expect(miniCompiler('&##&*&@&')).toBe('0243')
  })
  test(`(${codemberTest}) should return 024899455`, () => {
    expect(miniCompiler(codemberTest)).toBe('024899455')
  })
})
