import fs from 'fs'
import path from 'path'

const parsedFile = (filepath) => {
  const makePath = (fileName) => {
    return path.resolve(fileName)
  }
  const fileContent = fs.readFileSync(makePath(filepath), 'utf-8')
  const parsed = (data) => {
    return JSON.parse(data)
  }
  return parsed(fileContent)
}

export default parsedFile
