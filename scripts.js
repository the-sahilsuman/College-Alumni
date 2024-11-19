function filterAlumni() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const year = card.querySelector('p').textContent.toLowerCase();
      if (name.includes(searchValue) || year.includes(searchValue)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
  
    if (!name.value.trim()) {
      alert('Please enter your name');
      e.preventDefault();
      return;
    }
    if (!validateEmail(email.value)) {
      alert('Please enter a valid email address');
      e.preventDefault();
      return;
    }
    if (!message.value.trim()) {
      alert('Please enter your message');
      e.preventDefault();
      return;
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }