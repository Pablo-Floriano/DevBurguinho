const list = document.querySelector("ul")
const buttonshow = document.querySelector('.buttonshow')
const discountt = document.querySelector('.discount')
const sum = document.querySelector('.sum')
const filter = document.querySelector('.filter')

sum.addEventListener('click', sumAll)
discountt.addEventListener('click', discount)
buttonshow.addEventListener('click', ()=> showall(menuOptions))
filter.addEventListener('click', filteritem)
let myLi = ""

function showall(array){
    myLi = ''
    array.forEach((product) => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p>R$ ${Number(product.price).toFixed(2)}</p>
                </li>
        `
    
    })
    list.innerHTML = myLi
}

function discount(){
    const discountProducts = menuOptions.map(product =>({
        ...product,
        price: product.price * 0.9, 
    }))
    
    showall(discountProducts)
}

function sumAll(){
    const summenu = menuOptions.reduce((acc, price) => acc += price.price, 0)
    list.innerHTML = `
        <li>
                    <p>Soma total</p>
                    <p>R$ ${Number(summenu).toFixed(2)}</p>
                </li>
    `
}

function filteritem (){
    const itemfilter = menuOptions.filter(product => product.vegan)
    showall(itemfilter)
}

