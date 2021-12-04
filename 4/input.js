const fs = require('fs')

// const name = 'bingo.input'
const name = 'test.input'

const content = fs.readFileSync(name, 'utf-8')

const [order,...tables] = content.split(`\n\n`)

fs.writeFileSync('announcement.facts', order.split(`,`).map((x,i)=>`${i}\t${x}`).join(`\n`))


let res = []

tables.forEach((str,k)=>{
	str.split(`\n`).forEach((x,i)=>{
		x.split(/\s/).filter(Boolean).forEach((y,j)=>{
			res.push([k,i,j,y].join(`\t`))
		})
	})
})


fs.writeFileSync('tables.facts', res.join(`\n`))
