
closebtn =  document.querySelector(".closeBtn")           //Selecting elements
addBtn = document.querySelector(".btnAdd")
bookForm =  document.getElementById("book-form")
btnSubmit = document.querySelector(".btnSubmit")
bookCard = document.querySelector(".books")
title = document.querySelector(".title")
screenContainer = document.querySelector(".container")
let btnId = 0;


let myLibrary = [];           //Library Array 

  function Book (title, author, pages, read){               //Constructor Function
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages in the book,  Read:${this.read}`);
    }
  }

let newBook = new Book()

function addBookToLibrary(){
  newBook.title = document.getElementById("title").value;             //Filling Book object with User Input
  newBook.author = document.getElementById("author").value;
  newBook.pages = document.getElementById("pages").value;
  newBook.read = document.getElementById("read").value;
}
 
function displayBook (){
  newBookCard = document.createElement("div")
  newBookCard.classList.add("books")
  screenContainer.appendChild(newBookCard)
  removeBookBtn = document.createElement("button")
  removeBookBtn.classList.add('removeBtn')
  removeBookBtn.textContent = "Remove"
  removeBookBtn.value = btnId;

  
  for(let i = 0; i< myLibrary.length; i++){
     titleName = document.createElement("p")
     titleName.classList.add("titleFonts")
     titleName.textContent = `${myLibrary[i].title}`

     authorName = document.createElement("p")
     authorName.classList.add("bookFonts")
     authorName.textContent = `By: ${myLibrary[i].author}`

     pageNumber = document.createElement("p")
     pageNumber.classList.add("bookFonts")
     pageNumber.textContent = `Pages: ${myLibrary[i].pages}`

     readOrNot = document.createElement("p")
     readOrNot.classList.add("readFonts")
     readOrNot.textContent = `Read: ${myLibrary[i].read}`
  }
  newBookCard.appendChild(titleName); 
  newBookCard.appendChild(authorName); 
  newBookCard.appendChild(pageNumber); 
  newBookCard.appendChild(readOrNot); 
  newBookCard.appendChild(removeBookBtn); 
  newBookCard.style.display = "block"
  btnId++

  removeBookBtn.addEventListener('click', (e) =>{
    c = screenContainer.childNodes
    console.log(c)
    
  });

}

btnSubmit.addEventListener('click', function(e){
  e.preventDefault()
  addBookToLibrary()
  myLibrary.push(newBook)
  console.log(myLibrary);
  document.querySelector('form').reset()
  closeForm()
  displayBook ()
});
   


addBtn.addEventListener('click', function(){
    openForm()
}); 

closebtn.addEventListener('click', function(){
    closeForm()
   
}); 

function openForm(){
  bookForm.style.display = "block"
}

function closeForm(){
   bookForm.style.display = "none"
}



