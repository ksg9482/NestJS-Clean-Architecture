import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/core/dtos';
import { Book } from 'src/core/entities';

@Injectable()
export class BookFactoryService {
    
    createNewBook(createBookDto:CreateBookDto):Book {
    return {
        title: createBookDto.title,
        author: {firstName:'', lastName: ''},
        genre: {name:''},
        publishDate:new Date()
    }
    }
}
