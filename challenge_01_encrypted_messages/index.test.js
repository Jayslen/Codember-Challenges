import { test, describe, expect } from 'vitest'
import { messageDecoder } from './index'

describe('return the number of times each word appears in the message', () => {
  test('"cup" should return a cup2', () => {
    expect(messageDecoder('cup')).toBe('cup1')
  })

  test('"cup cup" should return a cup2', () => {
    expect(messageDecoder('cup cup')).toBe('cup2')
  })

  test('"cup cup cup" should return a cup3', () => {
    expect(messageDecoder('cup cup cup')).toBe('cup3')
  })

  test('"cup Cup" should return a cup1Cup1', () => {
    expect(messageDecoder('cup Cup')).toBe('cup2')
  })

  test('"keys house HOUSE house keys" should return a keys2house3', () => {
    expect(messageDecoder('keys house HOUSE house keys')).toBe('keys2house3')
  })

  test('"cup te a cup" should return cup2te1a1', () => {
    expect(messageDecoder('cup te a cup')).toBe('cup2te1a1')
    expect(messageDecoder('cup te a cup')).toBeTypeOf('number')
  })

  test('"houses house housess" should return houses1house1housess1', () => {
    expect(messageDecoder('houses house housess')).toBe('houses1house1housess1')
  })
  test('"dont resolve the problem only give me examples to test" should return dont1resolve1the1problem1only1give1me1examples1to1test1', () => {
    expect(messageDecoder('dont resolve the problem only give me examples to test')).toBe('dont1resolve1the1problem1only1give1me1examples1to1test1')
  })
})
