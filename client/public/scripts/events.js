
const getEvents = async () => {
    const response = await fetch('/events');
    const data = await response.json();

    const app = document.getElementById('app');
    if (data) {
        data.map(concert => {
            const card = document.createElement('div');
            card.classList.add('card');

            const leftContainer = document.createElement('div');
            leftContainer.classList.add('card-left');

            const rightContainer = document.createElement('div');
            rightContainer.classList.add('card-right');

            leftContainer.style.backgroundImage = `url(${concert.image})`;

            const title = document.createElement('h2');
            title.textContent = concert.title;

            const artist = document.createElement('p');
            artist.textContent = `Artist: ${concert.artist}`;
            
            const ticketPrice = document.createElement('p');
            ticketPrice.textContent = `Ticket Price: $${concert.ticketPrice}`;

            const readMore = document.createElement('a');
            readMore.textContent = 'Read More';
            readMore.href = `/events/${concert.id}`;
            readMore.setAttribute('role', 'button');

            rightContainer.appendChild(title);
            rightContainer.appendChild(artist);
            rightContainer.appendChild(ticketPrice);
            rightContainer.appendChild(readMore);

            card.appendChild(leftContainer);
            card.appendChild(rightContainer);

            app.appendChild(card);
        })
    } else {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = "No events found.";
        app.appendChild(errorMessage);
    }

}

let requestedUrl = window.location.href.split('/').pop();
if (requestedUrl) {
    window.location.href = '../404.html';
} else {
    getEvents();
}