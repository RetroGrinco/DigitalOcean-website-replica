const vinili = [
    {
        name: "Abbey Road",
        author: "The Beatles",
        year: 1969,
        img: "https://example.com/images/abbey_road.jpg"
    },
    {
        name: "Dark Side of the Moon",
        author: "Pink Floyd",
        year: 1973,
        img: "https://example.com/images/dark_side_of_the_moon.jpg"
    },
    {
        name: "Rumours",
        author: "Fleetwood Mac",
        year: 1977,
        img: "https://example.com/images/rumours.jpg"
    },
    {
        name: "Thriller",
        author: "Michael Jackson",
        year: 1982,
        img: "https://example.com/images/thriller.jpg"
    },
    {
        name: "Nevermind",
        author: "Nirvana",
        year: 1991,
        img: "https://example.com/images/nevermind.jpg"
    },
    {
        name: "Back in Black",
        author: "AC/DC",
        year: 1980,
        img: "https://example.com/images/back_in_black.jpg"
    },
    {
        name: "Hotel California",
        author: "Eagles",
        year: 1976,
        img: "https://example.com/images/hotel_california.jpg"
    },
    {
        name: "The Wall",
        author: "Pink Floyd",
        year: 1979,
        img: "https://example.com/images/the_wall.jpg"
    },
    {
        name: "A Night at the Opera",
        author: "Queen",
        year: 1975,
        img: "https://example.com/images/a_night_at_the_opera.jpg"
    },
    {
        name: "Born to Run",
        author: "Bruce Springsteen",
        year: 1975,
        img: "https://example.com/images/born_to_run.jpg"
    },
    {
        name: "Let It Be",
        author: "The Beatles",
        year: 1970,
        img: "https://example.com/images/let_it_be.jpg"
    },
    {
        name: "The Joshua Tree",
        author: "U2",
        year: 1987,
        img: "https://example.com/images/the_joshua_tree.jpg"
    },
    {
        name: "Goodbye Yellow Brick Road",
        author: "Elton John",
        year: 1973,
        img: "https://example.com/images/goodbye_yellow_brick_road.jpg"
    },
    {
        name: "Exile on Main St.",
        author: "The Rolling Stones",
        year: 1972,
        img: "https://example.com/images/exile_on_main_street.jpg"
    },
    {
        name: "21",
        author: "Adele",
        year: 2011,
        img: "https://example.com/images/21.jpg"
    },
    {
        name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        author: "David Bowie",
        year: 1972,
        img: "https://example.com/images/ziggy_stardust.jpg"
    },
    {
        name: "Bridge Over Troubled Water",
        author: "Simon & Garfunkel",
        year: 1970,
        img: "https://example.com/images/bridge_over_troubled_water.jpg"
    }
];

function orderDisplay() {
    const container = document.getElementById("container");

    const order = vinili.sort((a, b) => a.anno - b.anno);

    order.forEach(vinile => {
        const vinileElement = document.createElement('div');
        vinileElement.className = 'vinile';
        vinileElement.innerHTML = `
            <img src="${vinile.img}" alt="${vinile.name}">
            <h2>${vinile.name}</h2>
            <p><strong>Autore:</strong> ${vinile.author}</p>
            <p><strong>Anno:</strong> ${vinile.year}</p>
        `;
        container.appendChild(vinileElement);
    });
}

document.addEventListener('DOMContentLoaded', orderDisplay);