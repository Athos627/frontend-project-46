import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const makePath = (fileName) => {
  if (path.isAbsolute(fileName)) {
    return path.resolve(fileName)
  }
  else {
    return path.resolve(process.cwd(), fileName)
  }
}

const parsedFile = (filepath) => {
  const fileContent = fs.readFileSync(makePath(filepath), 'utf-8')

  const extention = filepath => path.extname(filepath)

  const parsed = (data, extention) => {
    switch (extention) {
      case '.json':
        return JSON.parse(data)
      case '.yml':
      case '.yaml':
        return yaml.load(data)
      default:
        throw new Error(`Unknown extention: '${extention}'.`)
    }
  }

  return parsed(fileContent, extention(filepath))
}

export default parsedFile
