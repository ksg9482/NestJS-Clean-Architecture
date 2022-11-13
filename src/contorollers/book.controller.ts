import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookDto, CreateBookResponseDto } from 'src/core/dtos';
import { BookFactoryService, BookService } from '../services/use-cases/book';

@Controller('api/book')
export class BookController {
  constructor(
    private bookService: BookService,
    private bookFactoryService: BookFactoryService,
  ) { }

  @Post()
  async createBook(@Body() bookDto: CreateBookDto) {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);
      const createdBook = await this.bookService.createBook(book);

      createBookResponse.success = true;
      createBookResponse.createdBook = createdBook;
      
    } catch (error) {
      // report and log error
      createBookResponse.success = false;
    }

    return createBookResponse;
  }
}

//검증은 bookDto 객체의 후드 아래에서 NestJS에 의해 이루어진다.
//bookFactoryService는 Dto를 비즈니스 로직을 위해 book 객체로 변환하는데 사용된다.
//유즈케이스 서비스를 호출한다
//사용자에 대한 응답을 만든다