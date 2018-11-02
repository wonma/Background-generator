let codeL = document.querySelector('.h3Left')
let codeR = document.querySelector('.h3Right')
let bgCSS = document.querySelector('.h3Center')
let title = document.querySelector('h1')
let copyright = document.querySelector('span')
let body = document.querySelector('#body')
let inputL = document.querySelector('.color1')
let inputR = document.querySelector('.color2')

/////////// Mistake Block ///////////
// let valueColorL = inputL.value  //
// let valueColorR = inputR.value  //  This way, the variableColorL now has 'static' value...!!!!
/////////////////////////////////////  So it doesn't change the input value on the fly.

// reassign value to background of body with body styling css 
let changeBodyColor = function () {
    let valueColorL = inputL.value
    let valueColorR = inputR.value
    body.style.background = `linear-gradient(to right, ${valueColorL} , ${valueColorR})`

    codeL.textContent = `${valueColorL}`
    codeR.textContent = `${valueColorR}`
    bgCSS.textContent = body.style.background + `;`

    title.style.color = `${valueColorL}`
    copyright.style.color = `${valueColorL}`
}
    
// Shoot the function!
inputL.addEventListener('input', changeBodyColor)
inputR.addEventListener('input', changeBodyColor)

console.log('wtf')