document.addEventListener('DOMContentLoaded', () => {

const myLibrary = [];

function Book(title,author,pages,read){
   this.name = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
    
}

function addBookToLibrary()

{

const userInput =  prompt("Enter Book Name");
const Book1 = new Book(userInput);
myLibrary.push(Book1);

}

//const tableRow = document.querySelector('row');
//const tableData = document.createElement('td');
//tableRow.appendChild(tableData);

const button = document.querySelector('.submitButton');
button.addEventListener('click',()=>{
    prompt('hello');
});
})