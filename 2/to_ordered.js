const fs = require('fs')

fs.writeFileSync('commands.facts', fs.readFileSync('test.input', 'utf-8')
	.split(`\n`).map((x,i)=>{
	return `${i}\t${x.split(' ').join(`\t`)}`
}).join(`\n`))