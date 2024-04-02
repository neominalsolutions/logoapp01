var a = 5;

var a = 10;
console.log('a', a);

// let yada const ile aynı scope da aynı isimde değişken tanımlama yapamayız.
let x = 5;
console.log('x', x); // 5

if (true) {
	let x = 10;
	console.log('x', x); // 10
}

// const vs let
const nm = 10;
nm = 15; // ilk init aşamasında değer assign edilebilir alt satırlada değer değiştirilemez, let de değeri güncelleyebiliriz.
