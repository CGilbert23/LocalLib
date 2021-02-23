function findAccountById(accounts, id) {
  /* use find function to locate where the ID is, I believe it wants the whole object back*/
  let result = accounts.find((account) => account.id === id)
  return result;

}
/** */

function sortAccountsByLastName(accounts) {
/*call sort function (negative implies before hence A>B)*/
let result = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
return result;
}

/* Two arrays so double loop, basic would be to use a normal nested*/
function getTotalNumberOfBorrows(account, books) {
 let counter = books.reduce((acc, book) => {
  for (let item of book.borrows){
    if(account.id === item.id){
      acc+=1
    }
  }
return acc
},0)

return counter
}



/*FIND BOOKS CURRENTLY BORROWED BY AN ACCTT, THEN LINK THE AUTHOR*/
function getBooksPossessedByAccount(account, books, authors) {
  

const {id} = account
  let result = books.filter((item)=> {
    for (let book of item.borrows){
      if (book.returned === false && book.id === id){
        return true}
      }
    return false;
    })
   

  for (let element of result){
  const {authorId} = element
  let result1 = authors.find((auth) => authorId === auth.id)
    element.author = result1
    }
    return result 
  }

 




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
