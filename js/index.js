// This JS can be expanded based on future requirements.
// For now, it's ready to handle click and hover events on the Interactive Elements.

document.querySelectorAll('.style-hover-card').forEach(card => {
    card.addEventListener('click', function() {
      alert('Explore more details about ' + card.querySelector('h3').innerText);
    });
  });
  