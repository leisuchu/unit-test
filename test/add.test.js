import { test,expect } from 'vitest'
import { add } from '../src/index'

test('Add 方法',() => {
    expect(add(1,2)).toBe(3)
    expect(add('1','2')).toBe(3)
    expect(add('1',2)).toBe(3)
    expect(add(1,'2')).toBe(3)
    expect(add(null,2)).toBe(2)
    expect(add(undefined,2)).toBe(2)
    expect(add(1,null)).toBe(1)
    expect(add(1,'test')).toBe(1)
})