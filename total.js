
const totalSelector = document.querySelector('.total');
const amounts = document.querySelectorAll('.expense-mount');

function sumCalculated () {
  const arr = [30, 20, 27, 27, 75, 35];
  const reducer = (accumulator, curr) => accumulator + curr;
  const total = arr.reduce(reducer);

  totalSelector.value = total;

  console.log(total);

  amounts.forEach((amount)=>{
    let count = amount.value;
    let thetotal = count++;
    console.log(thetotal);
    
    
  })

  
  
  
}

totalSelector.addEventListener('click', sumCalculated());