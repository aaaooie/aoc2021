const fs = require('fs')

// const name = 'lines.input'
const name = 'test.input'

const content = fs.readFileSync(name, 'utf-8')

const facts = content.split(`\n`).map((x,i)=>{

	const [from, to] = x.split(` -> `)
	const [x1,y1] 	 = from.split(`,`)
	const [x2,y2] 	 = to.split(`,`)

	return [x1,y1,x2,y2].join(`\t`)

}).join(`\n`)


fs.writeFileSync('vent.facts', facts)
