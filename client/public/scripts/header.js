
const header = document.querySelector('header');
header.className = 'header';
header.style.backgroundImage = 'url("/background.jpg")';

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

const headerTitle = document.createElement('h1');
headerTitle.className = 'header-title';
headerTitle.textContent = 'Ortega Listicle';

const headerDescription = document.createElement('p');
headerDescription.className = 'header-description';
headerDescription.textContent = 'A listicle of the best things in life';

headerLeft.appendChild(headerTitle);
headerLeft.appendChild(headerDescription);

const homeButton = document.createElement('button');
homeButton.className = 'home-button';
homeButton.textContent = 'Home';
homeButton.addEventListener('click', () => {
  window.location.href = '/';
});

headerRight.appendChild(homeButton);

header.appendChild(headerContainer);