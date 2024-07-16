
let char = `Hola mundo, soy Álvaro Urday Muñoz`
let num = char.length
let res = ``
let lista = []
for (let i = 0; i < num; i++) {
    res += char[i]
    lista.push(res)
}

for (let i = 0; i < num; i++) {
    setTimeout((arreglo = lista, index = i) => {
        console.log(`${arreglo[index]}\n`)
    }, i * 60);
}