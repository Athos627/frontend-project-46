import parsedFile from './parse.js'
import genDiff from './genDiff.js'
import toFormat from './formatters/index.js'

const getDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parsedFile(filepath1)
  const file2 = parsedFile(filepath2)
  const diffData = genDiff(file1, file2)
  return toFormat(diffData, format)
}

export default getDiff
