let cards = document.querySelectorAll('.card');
let h1 = document.querySelector('.personagens h1');
let btnRedesSociais = document.querySelectorAll('.social');

btnRedesSociais.forEach(icone => {
  icone.addEventListener('mouseover', function() {
    icone.style.transform = 'scale(0.8)';
    icone.style.transition = 'transform 400ms ease-in-out';
  })
})

btnRedesSociais.forEach(icone => {
  icone.addEventListener('mouseleave', function() {
    icone.style.transform = 'scale(1)';
  })
})

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transform = 'scale(1.1)';
    console.log(card);
    card.style.transition = 'transform 200ms ease-in-out';
  });
})

cards.forEach(card => {
  card.addEventListener('mouseleave', function() {
    card.style.transform = 'scale(1)';
  })
})
