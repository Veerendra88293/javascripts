const movies = {
    movie1: {
        title: "THE BATMAN",
        year: 2010,
        genre: "Crime",
        director: "Quentin",
        src: "image.png"
    },
    movie2: {
        title: "SPIDERMAN",
        year: 1972,
        genre: "Crime",
        director: "Francis Ford Coppola",
        src: "spider.png"
    },
    movie3: {
        title: "OPPENHIMER",
        year: 1994,
        genre: "Sci-Fi",
        director: "Christopher Nolan",
        src: "https://via.placeholder.com/150?text=Oppenhimer"
    },
    movie4: {
        title: "JOKER",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
        src: "https://via.placeholder.com/150?text=Joker"
    }
};
const button_=document.getElementById("searchBtn")
const input_value=document.getElementById("searchBar")
button_.onclick=function(){
    const inputtext = input_value.value;
    Object.values(movies).forEach(function(value){
if (value.title.toUpperCase().includes(inputtext.toUpperCase())) {
    let img_none=document.querySelectorAll(".card")
    .forEach(function(value){
value.classList.add("none")
    })
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const img = document.createElement("img");
    img.src = value.src;
    img.classList.add("img")
    cardDiv.appendChild(img);

    const title = document.createElement("h2");
    title.textContent = value.title;
    cardDiv.appendChild(title);

    document.body.appendChild(cardDiv);
}

    });
    
}

// Custom cursor circle
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
});