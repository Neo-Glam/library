const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages,
    this.read = read;
}

function addBookToLibrary(title,author,pages,read){
    const book = new Book(title,author,pages,read);
    myLibrary.push(book)
}

addBookToLibrary("The Great Gatsby","F. Scott Fitzgerald",180,"read");
addBookToLibrary("Ulysses","James Joyce",730,"read");
addBookToLibrary(" In Search of Lost Time","Marcel Proust",3000," not read");

const library = document.querySelector('#library')

myLibrary.forEach(book => {
    const title = document.createElement('td');
    const author = document.createElement('td');
    const pages = document.createElement('td');
    const read = document.createElement('td');

    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    title.innerText = "Title: " + book.title;
    author.innerText = "Author: " + book.author;
    pages.innerText = "Number of pages: " + book.pages;
    read.innerText = "Status: " + book.read;

    library.appendChild(title);
    library.appendChild(author);
    library.appendChild(pages);
    library.appendChild(read);
})


