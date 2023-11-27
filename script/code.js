// functionality

// button variable
const btnCalc = document.querySelector('[data-calc]')

// function to 
function Convert () {
    // variable for input
    let age = document.querySelector('[data-inp]')
    
    //variable for the output
    let output = document.querySelector('[data-res]')

    // varaiable for result
    let res = (+age.value * 365).toFixed(2)
    
    // append to output
    if (+age.value < 0 ){
        output.textContent = "please enter a valid age"
    }else{
        output.textContent = `${res} is your age in days!`
    }
    
}
btnCalc.addEventListener('click', Convert)