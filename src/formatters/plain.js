const makeValue = (data) => {
  if (typeof data === 'object' && data !== null) {
    return `[complex value]`
  }

  if (typeof data === 'string') {
    return `'${data}'`
  }

  return `${data}`
}

const plain = (data) => {
  const buildTree = (data, path = '') => data.filter(({ type }) => (type !== 'unchanged')).map((item) => {
    const {
      type, key, newValue, oldValue, children,
    } = item
    const curentKey = path === '' ? `${key}` : `${path}.${key}`

    switch (type) {
      case 'tree': {
        return buildTree(children, curentKey)
      }
      case 'added': {
        return `Property '${curentKey}' was added with value: ${makeValue(newValue)}`
      }
      case 'deleted': {
        return `Property '${curentKey}' was removed`
      }
      case 'changed': {
        return `Property '${curentKey}' was updated. From ${makeValue(oldValue)} to ${makeValue(newValue)}`
      }
    }
  }).join('\n')

  return buildTree(data)
}

export default plain
