
closebtn =  document.querySelector(".closeBtn")           //Selecting elements
addBtn = document.querySelector(".btnAdd")
bookForm =  document.getElementById("book-form")
btnSubmit = document.querySelector(".btnSubmit")
bookCard = document.querySelector(".books")
title = document.querySelector(".title")
screenContainer = document.querySelector(".container")
removeBookBtn = document.querySelector(".btnDelete")
let btnId = 3;
let index = [];

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
  
  for(let i = 0; i< myLibrary.length; i++){             
     titleName = document.createElement("p")                //Creating elements from User Input
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
 
  createBookCard ()

  };


  //remove Book
  removeBookBtn.addEventListener('click', () =>{
    screenContainer.removeChild(screenContainer.lastChild)
  })
    

// making book card and appending user input
function createBookCard (){       
  newBookCard = document.createElement("div")
  newBookCard.classList.add("books")
  screenContainer.appendChild(newBookCard)
  newBookCard.appendChild(titleName); 
  newBookCard.appendChild(authorName); 
  newBookCard.appendChild(pageNumber); 
  newBookCard.appendChild(readOrNot); 
  newBookCard.style.display = "block"
}


btnSubmit.addEventListener('click', function(e){
  e.preventDefault()                              //preventing default form action
  addBookToLibrary()
  myLibrary.push(newBook)                         //pushing book to array 
  document.querySelector('form').reset()          //removing user input from form fields
  closeForm()                                     //closing popout form
  displayBook ()
});
   


addBtn.addEventListener('click', function(){
    openForm()
}); 

closebtn.addEventListener('click', function(){
    closeForm()
   
}); 

function openForm(){    
  bookForm.style.display = "block"              //
}

function closeForm(){
   bookForm.style.display = "none"
}




