let s = ``
for (let i = 0; i < 13; i++) {
	s+=`bitsums(${i},S):-S=count:{_bit(_,${i},1)}.\n`
}

console.log(s)