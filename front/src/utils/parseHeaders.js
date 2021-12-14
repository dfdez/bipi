const parseHeaders = (headers) => {
  const headersParsed = {}
  const relations = headers.link.split(',')
  relations.forEach(relation => {
    const relations = relation.replace(/ /g, '').split(';')
    const link = relations[0].replace(/(<|>)/g, '').split('?')[1].replace('_page=', '')
    const rel = relations[1].replace('rel=', '').replace(/"/g, '')
    headersParsed[rel] = link
  })
  return headersParsed
}

export default parseHeaders