function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  let counter=0;
for (let account of accounts){
  if (account){
    counter+=1
  }
}
return counter
}

function getBooksBorrowedCount(books) {
 
  const result = books.filter((item) => {
    for (let book of item.borrows){
      return book.returned === false;
    }
  })
  
  return result.length

}

function getMostCommonGenres(books) {
let result ={}
 for (let book of books){
   const {genre} = book
   if (result[genre]){
     result[genre]+=1
   }
   else {result[genre]=1}
   
  }

 let key = Object.keys(result)
 let array =[]
 for (let ele of key){
   array.push({name: ele, count: result[ele]})
 }

 let newArray = array.sort((itemA, itemB) => itemB.count - itemA.count)
 
 if (newArray.length>5){
   return newArray.slice(0,5);
 }
 return newArray

}



/* similar but instead of counting genres its borrowed amount*/
function getMostPopularBooks(books) {
  let popBooks = {}
  for (let book of books){
      let count = book.borrows.length
      popBooks[book.title]=count
  }
  let array = []
  let key = Object.keys(popBooks)
  for (let ele of key){
    array.push({name: ele, count: popBooks[ele]})
  }
  let newArray = array.sort((numA,numB) => numB.count - numA.count)
  
  let final = newArray.splice(0,5)
  return final


}




function getMostPopularAuthors(books, authors) {
  /*1) Go through and grab all the authors*/
  /*2) Grab Authors names
  /*3) Count total borrows for all books and return in an object
  /*4) Sort top 5*/
  
    const popBooks = {};
    for (const book of books) {
      let name;
      let count = book.borrows.length;
      for (let author of authors) {
        const { first, last } = author.name;
        if (book.authorId === author.id) {
          name = `${first} ${last}`;
        }
      }
      if (popBooks[name]){
        popBooks[name] += count
      }
      else {popBooks[name] = count}
    }
    
    let result1 = Object.entries(popBooks).map(([name,count])=> ({name,count}))
    let sorted = result1.sort((numA,numB) => numB.count - numA.count)
    

    let final = sorted.splice(0,5)
    return final

  }
  





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
