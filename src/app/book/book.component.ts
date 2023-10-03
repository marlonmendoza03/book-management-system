import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  newTitle: string = "";
  newAuthor: string = "";
  books: BookModel[] = [];

  ngOnInit(): void{
    let savedBooks = localStorage.getItem("books");
    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook(){
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let newBook: BookModel = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor
      }

      this.books.push(newBook);
      this.newTitle = "";
      this.newAuthor = "";

      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }

  deleteBooks(index: number){
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
