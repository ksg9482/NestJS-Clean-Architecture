import { Book } from "src/core/entities";

//crm 서비스 추상화
export abstract class CrmServices {
    abstract bookAdded(book: Book): Promise<boolean>;
}