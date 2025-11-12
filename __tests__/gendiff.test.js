import getDiff from '../src/index.js'
import fs from 'fs'
import { test, expect } from '@jest/globals'

test('getDiff json test', () => {
  expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(fs.readFileSync('./__fixtures__/expectedResult.txt', 'utf-8'))
})

test('getDiff yml test', () => {
  expect(getDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toBe(fs.readFileSync('./__fixtures__/expectedResult.txt', 'utf-8'))
})
