import { test,expect } from 'vitest'
import { add } from '../src/index'

test('Add 方法',() => {
    expect(add(1,2)).toBe(3)
})