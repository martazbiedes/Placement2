// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Marta Biedes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the element with an id of add-gb and minus-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusButton = document.querySelector('#minus-gb')

// selecting the element with an id of add-cc and minus-cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusButton = document.querySelector('#minus-cc')

// selecting the element with an id of add-sugar and minus-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusButton = document.querySelector('#minus-sugar')


const totalValue = document.querySelector('#qty-total')

const gbValue = document.querySelector('#qty-gb')
const ccValue = document.querySelector('#qty-cc')
const sugarValue = document.querySelector('#qty-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    gb +=1
    updateTotal()

})

ccPlusBtn.addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')
    cc +=1
    updateTotal()

})

sugarPlusBtn.addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar + button was clicked!')
    sugar +=1
    updateTotal()

})

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

gbMinusButton.addEventListener('click', function () {
    // HINT: making sure table and button knows no negative values are allowed.
    console.log('Gingerbread - button was clicked!')
    const olTotal = parseInt(totalValue.innerHTML)
    if(gb === 0){
        console.log('Negative value is not allowed')
    }else{
        gb -=1
        updateTotal()
    }


    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

ccMinusButton.addEventListener('click', function () {
    // HINT: making sure table and button knows no negative values are allowed.
    console.log('Chocolate Chip - button was clicked!')
    const olTotal = parseInt(totalValue.innerHTML)
    if(cc === 0){
        console.log('Negative value is not allowed')
    }else{
        cc -=1
        updateTotal()
    }
})
sugarMinusButton.addEventListener('click', function () {
    // HINT: making sure table and button knows no negative values are allowed.
    console.log('Sugar - button was clicked!')
    const olTotal = parseInt(totalValue.innerHTML)
    if(sugar === 0){
        console.log('Negative value is not allowed')
    }else{
        sugar -=1
        updateTotal()
    }
})

//making it easier on myself to have the  total updated by creating function including all the cookie types
function updateTotal(){
    gbValue.innerHTML = gb
    ccValue.innerHTML = cc
    sugarValue.innerHTML = sugar
    totalValue.innerHTML = gb + cc + sugar
}

// TODO: Hook up event listeners for the rest of the buttons