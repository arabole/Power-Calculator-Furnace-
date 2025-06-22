function showMessage() {
  const messagePara = document.getElementById('message');
  messagePara.textContent = 'Thanks for clicking the button!';
}

function calculateSum() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  // Convert string to number
  //const sum = Number(n1) + Number(n2);
  const charge = n1 / 0.94;
  const power1 = n2*30;
  const power  = power1/charge;


  // Display result
  document.getElementById('calcResult').textContent = `Result: ${power}`;
}
