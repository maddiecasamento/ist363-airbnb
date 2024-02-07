//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("cllllickeddddd!")
    mobileMenu.classList.add("active");
}); // end of menuBtn click

// "event name", callback function
closeBtn.addEventListener("click", function() {
    //console.log("cllllickeddddd!")
    mobileMenu.classList.remove("active");
}); // end of menuBtn click

// variables
// const roomName = "Luxury King Room";
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription = 'a beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.';

// const room = {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description: 'a beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.'
// };

//array
const rooms = [
    {
        name: 'Luxury King Room',
        price: 300,
        guests: 2,
        description: 'a beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.'
    },
    {
        name: 'Luxury King Room',
        price: 300,
        guests: 2,
        description: 'a beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.'
    },
    {
        name: 'Luxury King Room',
        price: 300,
        guests: 2,
        description: 'a beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.'
       },
    ]; // end of rooms

    rooms.forEach((room) => {

        const roomArticle = document.createElement('article');
        roomArticle.classList.add('room');

        const roomNameElement = document.createElement('h3');
        roomArticle.classList.add('room--name');
        roomNameElement.textContent = room.name;

        const roomDescriptionElement = document.createElement('p');
        roomDescriptionElement.classList.add('room--description');
        roomDescriptionElement.textContent = room.description;

        const roomPriceElement = document.createElement('p');
        roomPriceElement.textContent = `Price: ${room.price}`;

        const roomGuestsElement = document.createElement('p');
        roomGuestsElement.textContext = `Guests: ${room.guests}`;

        roomArticle.appendChild(roomNameElement);
        roomArticle.appendChild(roomDescriptionElement);
        roomArticle.appendChild(roomPriceElement);
        roomArticle.appendChild(roomGuestsElement);

        document.body.appendChild(roomArticle);


    });


// create elements

