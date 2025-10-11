import fs from 'fs'
import path from 'path'
import parsed from './parser.js'

const parsedFile = (filepath) => {
  const makePath = (fileName) => {
    return path.resolve(fileName)
  }
  const fileContent = fs.readFileSync(makePath(filepath), 'utf-8')
  return parsed(fileContent)
}

export default parsedFile
