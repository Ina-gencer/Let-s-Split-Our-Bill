const btnCalculate = document.querySelector('#btnCalculate');
btnCalculate.addEventListener('click', result);

function result(e) {
    e.preventDefault();
    const bill = document.querySelector('#inputBill').value;
    const person = document.querySelector('#inputPerson').value;
    const tip = document.querySelector('#selection').value;

    if (bill === "" || person === "" || person < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Something went wrong!',
          })
    }
    
    else if(isNaN(bill) || isNaN(person)) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Something went wrong!',
          })
    p.style.display = 'none';

    }

    let a = bill / person;
    
    let b = bill * tip / person;
    
    let sum = a + b;
    

    a = a.toFixed(2);
    b = b.toFixed(2);
    sum = sum.toFixed(2);

    document.querySelector('.textBill').textContent = a;
    document.querySelector('.textTip').textContent = b;
    document.querySelector('.textTotal').textContent = sum;

}

const btnTip = document.querySelector('#btnTip');
btnTip.addEventListener('click', select);

function select(e) {
    e.preventDefault();
    selection.style.display = 'block';
} 