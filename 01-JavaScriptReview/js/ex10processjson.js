document.querySelector("main").innerHTML = "";
let movies = JSON.parse(jsonString);
console.log(movies);
movies.map(movie => {
    console.log(movie.title);
    console.log(movie.year);
    let genreStr = (Array.isArray(movie.genre)) ? movie.genre.join(", "): movie.genre;
    document.querySelector("main").innerHTML += `
        ${movie.title} (${genreStr})<br>
        ${movie.year}<br>
        ${movie.director}<br><br><hr>
            `
})

console.log(movies);
movies.forEach(element => {
    let newDiv = document.createElement("div");
    let titleText = document.createTextNode(element.title);    
    newDiv.appendChild(titleText);
    document.querySelector("main").appendChild(newDiv);
});

