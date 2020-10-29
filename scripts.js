// (function () {

//     var library = {

//         //TODO =================== rewatch https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
//         // revealing module pattern

//         

//         init: function () {
//             this.cacheDom();
//         },
//         cacheDom: 
//     }
// })()


class Book {
    constructor(name = "NoName", author = "NoAuthor", pageNum = "0", readValue = "unread") {
        this.name = name;
        this.author = author;
        this.pageNum = pageNum;
        this.readValue = readValue;
    }
}

function bookInfo() {
    let title = document.getElementsByName("booktitle")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let numPages = document.getElementsByName("numpages")[0].value;
    let read = document.getElementsByName("read");
    let readValue;

    let bookList = [];

    for (let i in read) {
        if (read[i].checked)
            readValue = read[i].value;
    }

    //TODO ================== INPUT VALIDATION
    title = title || "NoBookTitle";
    author = author || "NoAuthor";
    numPages = numPages || "0";
    readValue = readValue || "Unread";

    console.log(`Title: ${title}, Author: ${author}, Number of Pages: ${numPages}, Read:${readValue}`);
    let newBook = new Book(title, author, numPages, readValue);
    bookList.push(newBook);
    console.log(`Current Library: ${bookList}`)
}

function addBook(bookInfo){
    
}