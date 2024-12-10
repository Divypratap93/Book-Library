document.addEventListener('DOMContentLoaded', () => {

const myLibrary = [];

function Book(title,author,pages,read){
   this.name = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
    
}

function addBookToLibrary(name,author,pages,read)

{


const book1 = new Book(name,author,pages,read);
myLibrary.push(book1);
console.log(myLibrary[0]);
displayBooks();

}

Book.prototype.toggleRead = function() { // Method to toggle the read status
   this.read = !this.read;
   };

function displayBooks(){
   const tbVar = document.getElementById('table');
    const tbody = tbVar.querySelector('tbody') || document.createElement('tbody'); // Get or create tbody
    tbVar.appendChild(tbody); // Ensure tbody is appended if it wasn't in the HTML

    tbody.innerHTML = ''; // Clear only the rows (not the header)

   myLibrary.forEach((Book,index)=>{
      
      const bookData = document.createElement('tr');
      tbody.appendChild(bookData);
      
      // Create <td> elements
      const tdName = document.createElement('td');
      const tdAuthor = document.createElement('td');
      const tdPages = document.createElement('td');
      const tdRead = document.createElement('td');
      const tdDelete = document.createElement('td');
      const tdToggle = document.createElement('td');
      
      // Append <td> elements to the row
      bookData.appendChild(tdName);
      bookData.appendChild(tdAuthor);
      bookData.appendChild(tdPages);
      bookData.appendChild(tdRead);
      bookData.appendChild(tdDelete);
      bookData.appendChild(tdToggle);
      
      // Create <p> elements
      const pName = document.createElement('p');
      const pAuthor = document.createElement('p');
      const pPages = document.createElement('p');
      const pRead = document.createElement('p');
      const pDelete = document.createElement('button');
      const pToggle = document.createElement('button');
      
      // Add text to <p> elements
      pName.textContent = Book.name;
      pAuthor.textContent = Book.author;
      pPages.textContent = Book.pages;
      pRead.textContent = `${Book.read ? 'No' : 'Yes'}`;
      pDelete.textContent = "Delete";
      pToggle.textContent = "Change read Status";
      pDelete.onclick = function (){

         remove(index);
      }
      pToggle.onclick = function(){
      toggle(index);
      }
      
      
      // Append <p> elements to <td>
      tdName.appendChild(pName);
      tdAuthor.appendChild(pAuthor);
      tdPages.appendChild(pPages);
      tdRead.appendChild(pRead);
      tdDelete.appendChild(pDelete);
      tdToggle.appendChild(pToggle);

      
      
   });

}


function remove (index){
   myLibrary.splice(index,1);
   displayBooks();
}

function toggle(index){
   myLibrary[index].toggleRead();
   displayBooks();
}






const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const form = document.getElementById('bookForm');

  // Get the buttons
  const openPopupButton = document.getElementById('openPopup');
  const closePopupButton = document.getElementById('closePopup');


openPopupButton.addEventListener('click',()=>{
   popup.style.display = 'block';
   overlay.style.display = 'block';
});

 // Hide the popup and overlay
 const closePopup = () => {
   popup.style.display = 'none';
   overlay.style.display = 'none';
   form.reset();
 };

 closePopupButton.addEventListener('click', closePopup);
 overlay.addEventListener('click', closePopup);


 // Handle form submission
 const button = document.querySelector('.submitButton');
 button.addEventListener('click', (event) => {
     event.preventDefault(); // Prevent form submission
     // Get input values
     const name = document.getElementById('name').value;
     const author = document.getElementById('author').value;
     const pages = document.getElementById('pages').value;
     const read = document.getElementById('read').value;

     // Call addBookToLibrary
     addBookToLibrary(name, author, pages, read);

     closePopup();
 });
});
