var library = (function () {

    class Book{
        constructor(name, author, pageNum){
            this.name = name;
            this.author = author;
            this.pageNum = pageNum;
        }
    }
    
    let bookList = [];

    return addBook
})();

function addBook(){
    let title = document.getElementsByName("booktitle")[0];
    let read = document.getElementsByName("read");

    for(let i in read){
        if (read[i].checked)
        console.log(read[i].value);
    }

}