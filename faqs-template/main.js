document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const plusIcon = button.querySelector('.plus');
    const minusIcon = button.querySelector('.minus');

    // 2. დახურვა ყველა სხვა პასუხი (თუ სჭირდება)
    document.querySelectorAll('.answer').forEach(item => {
      if (item !== answer) {
        item.classList.remove('show');
        item.previousElementSibling.querySelector('.plus').style.display = 'block';
        item.previousElementSibling.querySelector('.minus').style.display = 'none';
      }
    });

    // 3. გახსნა/დახურვა მიმდინარე პასუხის
    answer.classList.toggle('show');
    plusIcon.style.display = answer.classList.contains('show') ? 'none' : 'block';
    minusIcon.style.display = answer.classList.contains('show') ? 'block' : 'none';
  });
});