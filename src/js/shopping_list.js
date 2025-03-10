// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { booksAPI } from "./booksAPI";
import amazon from '/src/images/png/amazon.png';
import appleBook from '/src/images/png/apple-books.png';
import Barners from '/src/images/png/barnes-and-noble.png';
import bucketTrash from '/src/images/png/trash-03.png'
import axios from "axios";



const photoItemsOne = [
    {
        img:amazon,
    }

]

const photoItemsTwo = [
    {
        img: appleBook,
    }
]

const photoItemsThree = [
    {
        img:Barners,
    }
]

const bucketCard = [
    {
        img:bucketTrash,
    }
]



// const paginationBtn = document.querySelector('div.shopping_booklist_pagination')
const shoppingListDiv = document.querySelector('ul.shopping_booklist');
const firstPage = document.querySelector('div.null-page');

// const removeCard =  document.querySelector('div.closer')
shoppingListDiv.innerHTML = "";
// const booksApi = new booksAPI();
const LOCALSTORAGE_KEY = "orderedBookID";
//  localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(["643282b1e85766588626a086","643282b1e85766588626a084","643282b1e85766588626a082"]));

// let orderedBooksId = [];   
const orderedBooksId_str = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
console.log(orderedBooksId_str);
// if (orderedBooksId_str === null) {
//     shoppingListDiv.innerHTML = '';
// } else{
//    orderedBooksId = JSON.parse(orderedBooksId_str);
//    orderedBooksId.forEach(id => { getOrderedBookCard(id);});
// } 

async function fetchBook(arr) {

  const arrayOfPromises = arr.map(async Id => {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${Id}`);
    return response
  });

  // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
  const books = await Promise.all(arrayOfPromises);
  console.log(books);
  return books
}

async function createMarcup(arr) {
  const markup = arr.map(({book_image, list_name, author, title, description, buy_links}) => 
  `<li class="book_card">
  <div class="book-image-div">
    <img class="book-image" src=${book_image} alt=${title}>
  </div>

  <div class="book_information">
    <p class="book-title">${title}</p>
    <p class="book-category">${list_name}</p>
    <p class="book-description">${description}</p>
    <p class="book-author">${author}</p>
  </div>

<div class="closer">
  <button class="closer-btn">
  <img class="image-bucket" src="${bucketCard[0].img}" alt="amazon">
  </button>
</div>

  <div class="market_places_div">
    <ul class="market_placers_list list">

          <li class="marketplacer_li_two">
            <a href="${buy_links[0].url}" class="marketplacer_li_link link">
              <img class="image-market" src="${photoItemsOne[0].img}" alt="amazon">
              
            </a>
          </li>

          <li class="marketplacer_li">
            <a href="${buy_links[1].url}" class="marketplacer_li_link link">
              <img src="${photoItemsTwo[0].img}" alt="apple-books">
              
            </a>
          </li>

          <li class="marketplacer_li">
            <a href="${buy_links[2].url}" class="marketplacer_li_link link">
              <img src="${photoItemsThree[0].img}" alt="barnes-and-noble">
            </a>
          </li>
</div>
</li>`
  ).join('')

  return markup
  }

async function createShoppingList() {
  const arrrr = [];
  const response = await fetchBook(orderedBooksId_str);

if (response.length) {
  firstPage.style.display = "none";

  
  response.forEach(({data}) => arrrr.push(data))
  console.log(arrrr)

  const read = await createMarcup(arrrr);
  console.log(read);
  shoppingListDiv.innerHTML = read;
} else {
  firstPage.style.display = "block";
}

}
  

createShoppingList();



//-----------ОПИС ФУНКЦІЙ ---------------------------------------------------------

// const markup = `
//            <button class="btn"><<</button>
//               <button class="btn"><</button>
//               <button class="btn-two">1</button>
//               <button class="btn-two">2</button>
//               <button class="btn-two none">3</button>
//               <button class="btn-many">...</button>
//               <button class="btn-three">></button>
//               <button class="btn-three">>></button>
              
// `

// async function getOrderedBookCard(book_id){
//     console.log("book_id=",book_id);
//     try {
//         const response = await booksApi.getBookById(book_id);  

//         //Якщо ми отримали на запит пустий масив даних (нічого не знайдено), виводимо повідомлення і виходимо з функції
//         if (response.data === 0){
//             return Notify.failure("Sorry, there are no book with that ID");
//         }
//         shoppingListDiv.innerHTML += `<li class="book_card">
 
//   <div class="book-image-div">
//     <img class="book-image" src=${response.data.book_image} alt=${response.data.title}>
//   </div>

//   <div class="book_information">
//     <p class="book-title">${response.data.title}</p>
//     <p class="book-category">${response.data.list_name}</p>
//     <p class="book-description">${response.data.description}</p>
//     <p class="book-author">${response.data.author}</p>
//   </div>

  // <div class="closer">
    
  //   <button class="closer-btn">
  //   <img class="image-bucket" src="${bucketCard[0].img}" alt="amazon">
  
  //   </button>
 
  // </div>

  //   <div class="market_places_div">
  //         <ul class="market_placers_list list">

  //           <li class="marketplacer_li_two">
  //             <a href="${response.data.buy_links[0].url}" class="marketplacer_li_link link">
  //               <img class="image-market" src="${photoItemsOne[0].img}" alt="amazon">
                
  //             </a>
  //           </li>

  //           <li class="marketplacer_li">
  //             <a href="${response.data.buy_links[1].url}" class="marketplacer_li_link link">
  //               <img src="${photoItemsTwo[0].img}" alt="apple-books">
                
  //             </a>
  //           </li>

  //           <li class="marketplacer_li">
  //             <a href="${response.data.buy_links[2].url}" class="marketplacer_li_link link">
  //               <img src="${photoItemsThree[0].img}" alt="barnes-and-noble">
  //             </a>
  //           </li>
    
  // </div>`
//         paginationBtn.innerHTML = markup;
//         firstPage.innerHTML = ''   // рендеримо картку книжки

//         //перевіряємо чи не пустий опис кнжки
//         const description = document.querySelector('.book-description');
//         if (description.textContent === ""){
//             description.textContent = "No description";
//         }
//     }catch(error) {                             //якщо запит повернув помилку, обровляємо її (виводимо у консоль)
//         console.log(error);
//     }
// }

// const fVlist = document.querySelector('.favorite-list');

// createMarcupFavorite(localArray.favorite, fVlist);

// fVlist.addEventListener('click', deleteBook)

// function deleteBook(event) {
//     event.preventDefault()
//     const book = findBook(event.target);
    

//     if(event.target.classList.contains('js-link')) {
//         createModal(book);
//     }

//     if(event.target.classList.contains('js-delete')) {
//         localStorage.removeItem(common.KEY_FAVORITE);
//         const removeBook = localArray.favorite.findIndex(item => item.name === book.name);
//         localArray.favorite.splice(removeBook, 1);
//         console.log(localArray.favorite);
//         localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(localArray.favorite));
//         createMarcupFavorite(localArray.favorite, fVlist);
//     }

//     if (event.target.classList.contains('js-basket')) {
//         const book = findBook((event.target));
//         const inStorage = localArray.basket.some(({id}) => id === book.id);
//         if (inStorage) {
//             return
//         }
//         localArray.basket.push(book);
//         localStorage.setItem(common.KEY_BASKET, JSON.stringify(localArray.basket))
//     }

// }