(function () {

    var library = {

        //TODO =================== rewatch https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
        // revealing module pattern

        let bookList = [];

        init: function () {
            this.cacheDom();
        },
        cacheDom: function() {
            this.$title = document.getElementsByName("booktitle")[0].value;
            this.author = document.getElementsByName("bookauthor")[0].value;
            this.numPages = document.getElementsByName("numpages")[0].value;
            this.read = document.getElementsByName("read");
        }
    }
})()




class Book {
    constructor(name = "NoName", author = "NoAuthor", pageNum = "0", readValue = "unread") {
        this.name = name;
        this.author = author;
        this.pageNum = pageNum;
        this.readValue = readValue;
    }
}

function bookInfo() {

    let readValue;

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