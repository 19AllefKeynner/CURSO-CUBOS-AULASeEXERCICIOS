const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');
const btnEnvio = document.getElementById('envio')
const freteP = document.getElementById('freteP')

btnEnvio.addEventListener('click', function(){
    const inputFrete = document.getElementById('frete').value
    if(inputFrete.toLowerCase() === 'medeiros neto' || inputFrete.toLowerCase() === 'teixeira de freitas' ){
        if (inputFrete.toLowerCase() === 'medeiros neto'){
            freteP.style.color = "black"
            freteP.textContent = `Frete: R$ 10,00, Prazo de entrega: 2 dias úteis`
        }else if(inputFrete.toLowerCase() === 'teixeira de freitas'){
            freteP.style.color = "black"
            freteP.textContent = `Frete: R$ 8,00, Prazo de entrega: 1 dia útil`
        }
    }else if(inputFrete.toLowerCase() !== 'medeiros neto' || inputFrete.toLowerCase() !== 'teixeira de freitas' && inputFrete.length > 1){
        console.log(inputFrete)
        freteP.style.color = "black"
        freteP.textContent = `ainda não entregamos na sua região!`
    }if(inputFrete.toLowerCase() === '' ){
        freteP.style.color = "red"
        freteP.textContent = `Por favor digite algo`
    }
    
})


let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);

