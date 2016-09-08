require( '../styles/main.scss' );
const book = require("./book.handlebars");
const books = require('./books.json')

document.addEventListener("DOMContentLoaded", function() {
    books.books.forEach(function (el) {
        var list = document.getElementsByClassName('list')
        var div = document.createElement('div');
        div.classList.add('list__book')
    	div.innerHTML = book({
            title: el.title,
            cover: el.cover,
            url: el.url,
            authorUrl: el.authorUrl,
            author: el.author,
            level: el.level,
            info: el.info
    	});
    	list[0].appendChild(div);
    })
});
