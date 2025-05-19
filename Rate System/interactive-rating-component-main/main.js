const rates = document.querySelectorAll('.rate-numbers');
const submitBtn = document.getElementById('submit');
const container = document.querySelector('.container');
const thanksBox = document.querySelector('.thanks-box');

let selectedRate = null;

rates.forEach(button => {
  button.addEventListener('click', () => {
    selectedRate = button.textContent;
    rates.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

submitBtn.addEventListener('click', () => {
  if (!selectedRate) {
    alert('გთხოვთ, აირჩიეთ რეიტინგი!');
    return;
  }
  
  container.style.display = 'none';
  thanksBox.style.display = 'flex';  
  
  const thanksBtn = document.querySelector('.thanks-btn');
  thanksBtn.textContent = `You selected ${selectedRate} of 5`;
});
