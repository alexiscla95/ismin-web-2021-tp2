import { Injectable } from '@nestjs/common'
import { Book } from './Book'

@Injectable()
export class BookService {
  private bookStore: Book[] = []

  addBook(book: Book): void {
    if (!this.bookStore.find(e => e === book)) {
      this.bookStore.push(book)
    }
  }

  getBook(name: string): Book | undefined {
    return this.bookStore.find(e => e.title === name)
  }

  getBooksOf(author: string): Book[] {
    return this.bookStore.filter(e => e.author === author)
  }

  getAllBooks(): Book[] {
    return this.bookStore.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  }

  getTotalNumberOfBooks(): number {
    return this.bookStore.length
  }

  deleteBook(title: string): void {
    this.bookStore = this.bookStore.filter(e => e.title !== title)
  }

  // getBooksPublishedBefore(aDate: string | Date): Book[] {
  //   const compareDate = new Date(aDate)
  //   return this.bookStore.filter(e => e.date <= compareDate)
  // }
}
