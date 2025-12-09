import getDiff from '../src/index.js'
import fs from 'fs'
import { test, expect } from '@jest/globals'

test('getDiff json to stylish test', () => {
  expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(fs.readFileSync('./__fixtures__/expectedResult.txt', 'utf-8'))
})

test('getDiff yml to stylish test', () => {
  expect(getDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toBe(fs.readFileSync('./__fixtures__/expectedResult.txt', 'utf-8'))
})

test('getDiff json to plain test', () => {
  expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toBe(fs.readFileSync('./__fixtures__/expectedPlain.txt', 'utf-8'))
})

test ('getDiff yaml to plain test', () => {
  expect(getDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toBe(fs.readFileSync('./__fixtures__/expectedPlain.txt', 'utf-8'))
})

test ('getDiff json to json test', () => {
  expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toBe(fs.readFileSync('./__fixtures__/expectedJson.txt', 'utf-8'))
})

test ('getDiff yaml to json test', () => {
  expect(getDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toBe(fs.readFileSync('./__fixtures__/expectedJson.txt', 'utf-8'))
})
