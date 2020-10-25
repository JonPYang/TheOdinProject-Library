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
    var title = document.getElementsByName("booktitle")[0];
    console.log(title.value);
}