
const getEvent = async () => {
    const requestedId = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/events')
    const data = await response.json();
    console.log(data)

    const event = data.find(event => event.id === requestedId);
    const eventContent = document.getElementById("event-content");

    if (event) {
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-image').src = event.image
        document.getElementById('event-description').textContent = event.description;
        document.getElementById('event-artist').textContent = `${event.artist}`;
        document.getElementById('event-ticket-price').textContent = `$${event.ticket_price}`;
        document.getElementById('event-venue-size').textContent = `${event.venue_size}`;
    } else {
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = "Event not found.";
        eventContent.innerHTML = '';
        eventContent.appendChild(errorMessage);
    }

}

getEvent()