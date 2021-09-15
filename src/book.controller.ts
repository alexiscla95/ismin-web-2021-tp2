import { Controller, Get, Post, Body, Param, Query, Delete } from '@nestjs/common';
import { get } from 'http';
import { BookService } from './book.service'
import { Book } from './Book'


@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooksOf(@Query('author') author: string): Book[] {
    return this.bookService.getBooksOf(author)
  }
  
  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks()
  }


  @Post()
  addBook(@Body() body: Book): Book {
    this.bookService.addBook(body)
    return body
  }

  @Get(':title')
  getBook(@Param('title') title: string ): Book {
    return this.bookService.getBook(title)
  }

  @Delete(':title')
  deleteBook(@Param('title') title: string): void {
    this.bookService.deleteBook(title)
  }


}
