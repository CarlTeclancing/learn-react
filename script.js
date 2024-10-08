//template literals

let name1 = "yuven"

let name2 = "carlson"

console.log(`my name is ${name1} ${name2}`)

//tinary operators

let isAdult = false
let isDrinking = isAdult ? "yes you can drink": "no you cant drink"
console.log(isDrinking)

//destructuring 

const id =1
const productName = "prodcutName"
const rating = "rating"

const product = {
    id,
    productName,
    rating
}
console.log(product)

const product2 ={
    description: "description",
    id,
    productName,
    rating
}

const { description} = product2;
console.log(description)

const array = [1,2,3,4,5]

let getarrayFirstValue = array[0]
let getarraySecondValue = array[1]
console.log(getarrayFirstValue)

const [first, second, third] = array
console.log(first, second, third)

//default parameters, spreadoperator and rest operators


function mulOfTwoNumbers(numb1=2, numb2=5){
    return numb1 * numb2
}
console.log(mulOfTwoNumbers(8,120))

const array2 = [1,2,3,4]

console.log(...array2, ...array)


function sumIfor(a, b){
    console.log(a,b)
    return 'yuven carlson'
}
console.log(sumIfor(1,2,3,4,5))

//map, filter, find, some , every, includes,indexof, findindex

const personArray=[
    {
        name: "yuven",
        age: 22,
        country: "cameroon"
    },
    {
        name: "favour",
        age: 20,
        country: "cameroon"
    },
    {
        name: "pela",
        age: 18,
        country: "cameroon"
    },
    {
        name: "Abigail",
        age: 19,
        country: "USA"
    }
]

//the map array loops through the entire array and returen the value
let getAllName = personArray.map((person)=>{
    return `${person.name} ${person.age} ${person.country}`
})
//console.log(getAllName)

//filter array functions

let getPersonFromCameroon = personArray.find((person)=>{
    return person.country === "cameroon"
})
console.log(getPersonFromCameroon)

getAllPersonsFromCameroon = personArray.filter((person)=>{
    return person.country === "cameroon"
})

console.log(getAllPersonsFromCameroon)

let checkSomeArrayMEthod = personArray.some((person)=>{
    return person.age> 40
})

console.log(checkSomeArrayMEthod)


let checkEveryArrayMethod = personArray.every((person)=>{
    return person.age > 10
})

console.log(checkEveryArrayMethod)


const fruitsArray = ["apple", "banana", "mango", "orange"]

console.log(fruitsArray.includes("apple"), fruitsArray.indexOf("mango"))

let getIndexOfPerson = personArray.findIndex((person)=>{
    return person.country === "USA"
})
console.log(getIndexOfPerson)


//async and await and understanding promise with api fetch 

let listOfProducts = document.querySelector('.list-of-products')

function renderProducts(products){
    products.forEach(product => {
        let productItem = document.createElement('li')
        productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        `
        listOfProducts.appendChild(productItem)
    });
}
async function getProducts(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        const results = await response.json()
        console.log(results)
        if(results?.products?.length > 0) renderProducts(results.products)
    }
    catch(err){
        console.log(err)
    }
}
listOfProducts.innerHTML = getProducts()