const myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title,author,pages){
    const book = new Book(title,author,pages);
    myLibrary.push(book)
}

addBookToLibrary("The Great Gatsby","F. Scott Fitzgerald",180);
addBookToLibrary("Ulysses","James Joyce",730);
addBookToLibrary(" In Search of Lost Time","Marcel Proust",3000);


const library = document.querySelector('#boite')

function createLib(){

    console.table(myLibrary);
    library.innerHTML = "";

    myLibrary.forEach(book => {
       
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');
    const check = document.createElement('input');
    const removeBook = document.createElement('button');

    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");
    check.classList.add("check");
    removeBook.classList.add("removeBook");

    title.innerText = "Title: " + book.title;
    author.innerText = "Author: " + book.author;
    pages.innerText = "Number of pages: " + book.pages;
    read.innerText = "Read: ";
    removeBook.innerText = "X";

    check.type = "checkbox"

    removeBook.addEventListener("click", ()=>{
        const card = removeBook.closest(".card");
        const index = Array.from(library.children).indexOf(card);
        myLibrary.splice(index,1);
        createLib();
    })

    const card = document.createElement('div');
    card.classList.add("card");
    library.appendChild(card);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBook);


    read.appendChild(check);
})
}

const addBook = document.querySelector("#addBook");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const newBookForm = document.querySelector("#newBookForm")

newBookForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    const formData = new FormData(newBookForm);
    const bookTitle = formData.get("book-title");
    const bookAuthor = formData.get("book-author");
    const bookPages = formData.get("book-pages");

    addBookToLibrary(bookTitle,bookAuthor,bookPages);
    createLib();

    newBookForm.reset();
    modal.close();

})

addBook.addEventListener("click",()=>{
    modal.showModal();
})

closeModal.addEventListener("click",()=>{
    modal.close();
})

createLib();


