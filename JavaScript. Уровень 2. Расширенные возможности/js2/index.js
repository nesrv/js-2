function a(a, b) {
    return a + b
}

const b = function (a, b) {
    return a + b
}

const c = (a, b) => a + b

a(1, 2)
b(3, 4)
c(5, 6)

const d = function () {
    console.log(this);
    const e = () => {
        console.log(this);
    }
}

console.log([2, 4, 5, 6, 7, 9, 2].filter(x => x > 6))

const e = () => {
    console.log('e');
    return 1
}

const f = () => ({
    a: 1,
    b: 2,
})


const g = (db, f = a => a) => {
    db.connect()
    f(db)
}


function hypo(a, b) {

    const square = x => x * x

    return Math.sqrt(square(a) + square(b))
}

const h = function () {
    let i = 111
    console.log(i)
    return i
}

console.log(i)


const j = []
j.push(1)

const k = {
    a: 0,
    sum: function () {
        return this.a
    },
    mult() {
        return this.sum()
    },
    name: () => 'name',
}

k.name()
k.sum()


class A {
    mult() {
        return this.sum()
    }
}

a(1, 2)

const total = a(3, 6) + b(3, 7)


const m = (data, f) => {
    return f?.(data)
}

l([1, 2, 3])

m([0, 7, 2], x => x.filter(y => y > 5))?.map(x => x * x)

const ar1 = [1, 2, 3]

ar1?.[4]


const n = {
    a: [],
    push(x) {
        this.a.push(x)
        return this
    },
    pop() {
        this.a.pop()
        return this
    },
    length() {
        return this.a.length
    },
}

n.push(1)
n.pop()
n.a

n.push(1).pop().a


const o = new Object()





const p = () => {
    const q = a => a * a

    return q
}

const r = () => {
    const s = a => a * a

    return s
}

const t = (b, f) => {
    f().call(b)
    f().apply(b, [])
}

t(1, p)
t(2, q)

const u = Math.max.apply(Math, [1, 2, 3])


const v = {
    a: 1,
    b: 2,
}

const w = {
    a: 3,
    b: 4,
}

const x = (f = (a, b) => a + b, obj, args = []) => {
    return f.apply(obj, args)
}

const y = function () {
    return this.a - this.b
}

x(y, w)

'1' + Number(1).toString()

for (let item of { a: 1, b: 2 }) {

}

`${a} as string`

'str'

    ; /[0-9]+/.test('3874')

const z = function (a, b = 1, s = 1) {
    return a + b + s
}

z(1, 2, 3)
z(1, 2)
z(1)
z()

const max = (m1 = -Infinity, ...args) => {
    let maxValue = m1
    for (let item of args) {
        if (maxValue < item) {
            maxValue = item
        }
    }
    return maxValue
}

max()
max(1)
max(1, 23, 4, 5, 67, 8)

const maxOld = (m1 = -Infinity) => {
    let maxValue = m1
    for (let item of arguments) {
        if (maxValue < item) {
            maxValue = item
        }
    }
    return maxValue
}

const arr1 = [3, 5, 8, 12, 5, 8, 4, 6]
max(...arr1)

function component({ children, a, b, c }) {
    return a + b + c
}

function c2(obj) {
    obj.a + obj.b + obj.c
}

const { o1, o2, o3 } = {
    o1: '',
    o2: 1,
    o3: 1,
    o4: '',
}

const useState = (initialState) => {
    let state = initialState

    const change = (newState) => {
        state = newState
    }

    return [state, change]
}

const [r1, c1] = useState(0)
c1(1)


const states = (init) => {
    let state = init

    const change = (newState) => {
        state = newState
    }

    return {
        currentState: state,
        changeState: change,
    }
}

const { currentState, changeState } = states('init')
changeState('run')


function drawCircle({ x = 0, y = 0, raduis = 10, color: [r = 255, g = 255, b = 255] }) { }



const drawLine = ({ x1 = 0, y1 = 0, x2 = 0, y2 = 0 }) => {
    if (typeof x1 !== 'number') {
        throw new TypeError('args must to be a numbers')
    }


}

drawLine({ x1: '1', x2: 2, y1: 3, y2: 4 })


function square(x) {
    return x * x
};

const sq1 = square
    ;

sq1(3)


const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operate = (a, b, f) => {
    return f(a, b)
}

operate(1, 2, add)

operate(operate(1, 2, multiply), operate(3, 4, multiply), add)
// (1*2) + (3*4)

const operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

const operate2 = (a, b, f) => {
    if (typeof operators[f] !== 'function')
        throw "unknown"
    return operators[f](a, b)
}



counter.value = 0

function counter() {
    return counter.value++
}

counter()
counter()
counter()
counter()




// n! = 1 * 2 * ... * n

const factorial1 = n => {
    return n === 1 ? 1 : n * factorial1(n - 1)
}

factorial1(5)
factorial1(6)

const factorial2 = function (n) {
    if (!(n in factorial2) && n > 0)
        factorial2[n] = n * factorial2(n - 1)
    return factorial2[n]
}

factorial2[1] = 1


function f1() {
    let scope = '1'

    function f2() {
        return scope
    }

    return f2
}
let scope = '2'
const f3 = f1()
f3()


// CRUD(L)
const interfaceCrud = function () {
    const resource = []

    function list() {
        return resource
    }

    function create(r) {
        resource.push(r)
    }

    return { resource, list, create }
}

const { resource, list, create } = interfaceCrud()

create(1)
list()
create(2)
list()


const f4 = (fargs = ['sum'], fname = 'sum', ...args) => {
    for (f of fargs) {
        if (f.name === fname) {
            return crud[fname](...args)
        }
    }
}

const f5 = function (a) {
    return this[a]
}

f5('a')

const o4 = {
    a: 1,
}

const o5 = {
    a: 2,
}

f5.call(o4, 'a')
f5.call(o5, 'a')


function f6(b) {
    return this.a + b
}

const f7 = f6.bind(o4)
f7(2)

function f8(b, c, d) {
    return this.a + b + c + d
}

const f9 = f8.bind(o5, 3)
f9(0, 0)
const f10 = f8.bind(o5, 10)
f10(0, 0)

const f11 = new Function('a', 'b', 'return a + b')



const f12 = f => {
    return function (...args) {
        return !f.apply(this, args)
    }
}

const f13 = x => x % 2 === 0

const f14 = f12(f13)

f13(4)

f14(4)


const f15 = (db, sql, cb) => {
    const result = db.execute(sql)
    cb(result)
}

const f16 = (conn, sql, cb) => {
    const db = pg.connect(conn)
    f15(db, sql, cb)
}



function memoize(f) {
    const cache = new Map()

    return function (...args) {
        const key = args.join('+')
        if (cache.has(key)) {
            console.log(key, 'in cache');
            return cache.get(key)
        }
        console.log(key, 'not cache');
        const result = f.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const factorial3 = memoize(n => n === 1 ? 1 : n * factorial3(n - 1))

factorial3(4)
factorial3(5)

