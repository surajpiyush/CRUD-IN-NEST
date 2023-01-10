import { Injectable } from "@nestjs/common";
import { Book } from "./data/data.dto";
@Injectable()
export class BookService {
public books:Book[]=[]

addBook(book:Book):string{
    this.books.push(book)
    return 'book successfully added'
}
updateBook(book:Book):string{
    let index=this.books.findIndex((currentBook)=>{
       return currentBook.id==book.id;

    })
     this.books[index]=book;
     return 'book has been updated'
}
deleteBook(bookId:string):string{
    this.books=this.books.filter((item)=>{
        return item.id!=bookId
    });
    return 'book has been deleted'
}
getAllBook():Book[]{
    return this.books;
}

}