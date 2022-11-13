import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Book } from 'src/core/entities';
export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    authorId: any;

    @IsNotEmpty()
    genre: any;

    @IsDate()
    publishDate: Date;
}