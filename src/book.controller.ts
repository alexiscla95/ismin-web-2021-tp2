import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { get } from 'http';
import { BookService } from './book.service'
import { Book } from './Book'


@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/books')
  getBooksOf(@Query('author') author: string): Book[] {
    return this.bookService.getBooksOf(author)
  }
  
  @Get('/books')
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks()
  }


  @Post('/books')
  addBook(@Body() body: Book): Book {
    this.bookService.addBook(body)
    return body
  }

  @Get('/books/:title')
  getBook(@Param('title') title: string ): Book {
    return this.bookService.getBook(title)
  }


}
