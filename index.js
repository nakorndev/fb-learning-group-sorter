const args = process.argv.slice(2)[0]
const url = new URL('http://localhost?' + args)
const variables = url.searchParams.get('variables')
const parsed = JSON.parse(variables)
parsed.input.module_ids = parsed.input.module_ids.reverse()
url.searchParams.set('variables', JSON.stringify(parsed))

console.log('RESULT >', url.toString().replace('http://localhost/?', ''))
