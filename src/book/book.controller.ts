import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/data.dto";

@Controller('book')
export class BookController {
  constructor(private dataService:BookService){}

  @Post('/post')
  addData(@Body() book:Book){
    return this.dataService.addBook(book)
  }

  @Put('/update')
  updateData(@Body() book:Book){
    return this.dataService.updateBook(book)
  }

  @Delete('/delete/:id')
  deleteData(@Param('id') bookId:string){
    return this.dataService.deleteBook(bookId)
  }
@Get('/get')
findAllBook():Book[]{
    return this.dataService.getAllBook()
}

}