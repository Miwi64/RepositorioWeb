const alicia = {
    nombre: 'Alicia',
    edad: 40,
    ingresos: [1000,500,1200,300]
}

const melanie = {
    nombre: 'Melanie',
    edad: 38,
    ingresos: [1070,555,200,800]
}

const ramon = {
    nombre: 'Ramon',
    edad: 20,
    ingresos: [100,505,201,7500]
}

const lista = [melanie, ramon, alicia]

lista.forEach(persona => console.log(persona.nombre));
let edades = lista.map(x => {
    return x.edad
});

/*
persona.ingresos.forEach(element => console.log(element));
for(let ingreso of persona.ingresos) console.log(ingreso)
for(let ingreso in persona.ingresos) console.log(ingreso)*/

