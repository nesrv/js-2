const ar1 = [1, 2, 3, 4]

let s = 0
for (let i = 0; i < ar1.length; i++) {
    s += ar1[i]
}
console.log(s);

ar1.forEach(x => s += x)

ar1.map(x => x * x)

ar1.filter(x => x > 2)

ar1.filter(x => x).map(x => x).length

ar1.find(x => x === 2)
ar1.findIndex(x => x === 2)

ar1.every(x => {
    if (x < 3) {
        s += x
        return true
    }
})

ar1.some(x => {
    if (x < 3) {
        s += x
        return true
    }
})

ar1.reduce((x, y) => x + y, 0)

ar1.reduce((x, y) => (x > y) ? x : y)

ar1.reduceRight((x, y) => x + y, 0)

[1, 2, 3, [4, 5, 6, [7, 8, 9]]].flat()

[1, 2, 3, [4, 5, 6, [7, 8, 9]]].flatMap(x => typeof x === 'number' ? x : x.flat())

const ar3 = []

ar3.push(1)
ar3.push(2)
ar3

ar3.pop()

ar3.unshift(3)
ar3
ar3.shift()
ar3

ar3.slice(2, 5)

ar3.slice(3, -1)

ar3.splice(7)
ar3.splice(4, 1)
ar3.splice(3, 1, 100)

ar3.fill(0)
ar3
ar3.fill(6, 1)
ar3
ar3.fill(4, 2, 5)
ar3

ar3.copyWithin(3, 4, 6)

ar3.indexOf(4)
ar3.lastIndexOf(4)

ar3.includes(6)

ar3.sort()

const ar4 = [
    {
        a: 1,
    },
    {
        a: 5,
    },
    {
        a: -4,
    },
    {
        a: 6,
    },
]

ar4.sort((a, b) => a.a - b.a)

ar4.reverse()

ar3.join(', ')

s = ''
for (let i = 0; i < ar3.length; i++) {
    s += (s === '' ? '' : ', ') + ar3[i]
}

[33332.5, 3334.9].toLocaleString()

Array.isArray([1,2])
Array.isArray(1)