document.querySelectorAll('.floating-container input').forEach((el) => {
  el.addEventListener('focus', (e) => {
    e.currentTarget.parentElement.classList.add('active');
  });
  el.addEventListener('blur', (e) => {
    if (!e.target.value)
      e.currentTarget.parentElement.classList.remove('active');
  });
});
