function findAuthorById(authors, id) {
  /*use find to grab the author object with matching id*/

  let result = authors.find((author) => author.id ===id)
  return result 

}

function findBookById(books, id) {
  /*same as above for books*/
  let result = books.find((book) => book.id === id)
  return result
}

/*filter gets us into array, for in gets us into object*/
function partitionBooksByBorrowedStatus(books) {
 
  let result = books.filter((item) => {
    for (let book of item.borrows){
      return book.returned === false;
    }
  });

  let result2 = books.filter((item) => {
    for (let book of item.borrows){
      return book.returned === true;
    }
  })

  return [result, result2];
}
  


function getBorrowersForBook(book, accounts) {

    let result = book.borrows.map((item) => {
      for (let account of accounts) {
        if (item.id === account.id) {
          return { ...item, ...account };
        }
      }
      
    })

    
    if (result.length > 10) {
      return result.slice(0, 10);
    } else {
      return result;
    }

}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
