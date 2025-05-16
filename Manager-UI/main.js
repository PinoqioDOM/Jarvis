const bg = document.querySelector('.web-background');
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = themeToggleBtn.querySelector('.fa-sun');
const moonIcon = themeToggleBtn.querySelector('.fa-moon');
const heading = document.querySelector('.nav-bar-section h1');
const headerbBg = document.querySelector('header')
const removeBtn = document.querySelectorAll('.remove-btn')

let isDark = true; 

themeToggleBtn.addEventListener('click', () => {
  if (isDark) {
    bg.style.backgroundColor = 'hsl(0, 0%, 100%)'; 
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    heading.style.color = 'black';
    headerbBg.style.backgroundColor = 'hsl(227, 75%, 14%)';
  } else {
    bg.style.backgroundColor = 'hsl(227, 75%, 14%)'; 
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    heading.style.color = 'white';
    headerbBg.style.backgroundColor = '';
  }
  isDark = !isDark;
});

removeBtn.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    console.log('Removing card:', card);
    if (card) {
      card.remove();
    }
  });
});
