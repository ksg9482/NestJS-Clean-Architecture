import { Injectable } from '@nestjs/common';
import { Book } from 'src/core/entities';
import {DataServices, CrmServices} from 'src/core/abstracts'

@Injectable()
export class BookService {
    constructor(
        private dataServices: DataServices,
        private crmServices: CrmServices
    ) {}
        //책 추가 유즈케이스는 추상화에만 의존한다. 생성자에서 dataServices, crmServices만 주입한다.
        //서비스의 실제 구현이 무엇인지 알지 못한 채 서비스를 사용한다.
        //외부 서비스 구현에 대한 변경 사항은 유즈케이스 비즈니스 로직에 영향을 미치지 않는다.
    async createBook(book:Book): Promise<Book> {
        try {
            const createdBook = await this.dataServices.books.create(book);
            await this.crmServices.bookAdded(createdBook);

            return createdBook
        } catch (error) {
            throw error
        }
    }
}
