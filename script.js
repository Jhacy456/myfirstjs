// const button = document.getElementById('btn')


// button.addEventListener('click', console.log('ggggg'))

// const age = 44
// console.log(age)

// let males = 50
// console.log(50)

// const stringVaariable = 'aba'
// const numberValue = 800
// const objectValue = {
//     name: 'ama',
//     color: 'black',
//     age: 60
// }
// console.log(stringVaariable)
// console.log(numberValue)
// console.log(objectValue.color)


// const firstname = 'Ohene'
// const lastname = 'Mills'
// const fullname = firstname + lastname
// console.log(fullname)
// const displayName = `${firstname} ${lastname}`
// console.log(displayName)

// const parent = {
//     name: 'Ohene Mills',
//     location: 'Adenta',
//     numberofchildren: 1,
//     child: {
//         name: "Jace",
//         age: 12
//     }



// }
// console.log(parent.child.age)

// const parentHistory = `Mr ${parent.name} leaves in ${parent.location} with ${parent.numberofchildren} child ${parent.child.name} who is ${parent.child.age} years of age.`
// console.log(parentHistory)


// const animals = ['dogs', 'cats', 'lions', 'goats']
// const evenNumbers = [2, 4, 6, 8, 10]
// const movies = [{ title: 'world apart' }, { seasons: 2 }]
// console.log(animals[1])
// console.log(evenNumbers[0])
// console.log(movies[0].title)



// const fruits = [
//     {
//         name: 'mango',
//         color: 'yellow',
//         price: 5,
//         size: 'small',
//         isripe: true
//     },

//     {
//         name: 'banana',
//         color: 'green',
//         price: 5,
//         size: 'small',
//         isripe: false
//     },

//     {
//         name: 'orange',
//         color: 'orange',
//         price: 5,
//         size: 'small',
//         sripe: true
//     },

//     {
//         name: 'kiwi',
//         color: 'green',
//         price: 5,
//         size: 'big',
//         isripe: true
//     },

//     {
//         name: 'guava',
//         color: 'green',
//         price: 5,
//         size: 'small',
//         isripe: false
//     },


// ]
// console.log(fruits)

// funtions
// function addNumbers(a, b){
//     return a + b
// }

// console.log(addNumbers(1, 3))

// function multiply(a, b){
// return a * a
// }
// console.log(multiply(4))

// function governmentName(lastname, firstname){
//     return `${lastname}  ${firstname}`
    
// }

// console.log(governmentName('Ohene', 'Mills'))

// function addition(arr) {
//     return arr[0] + arr[1]
// }
// console.log(addition(arr=[2,4,6,8]))





async function fecthData(url){
try{
    const response = await fetch(url)
    const data = await response.json()

    data.map((item) => console.log(item))
    console.log(data[0])

} catch (error) {
    console.log(error)
}

  
}
fecthData("https://jsonplaceholder.typicode.com/posts")

const url = "https://jsonplaceholder.typicode.com/posts"

async function fetchUrl(){
const response = await fetch(url)
console.log(response)
}

fetchUrl()
