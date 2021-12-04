const fs = require('fs')

const name = 'test.facts'
// const name = 'data.facts'

fs.writeFileSync('lines.dl', `.decl lines(i:number,a:number)\n`+fs.readFileSync(name, 'utf-8')
	.split(`\n`).map((x,i)=>{
	return `lines(${i},0b${x}).`
}).join(`\n`))