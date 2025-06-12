import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // NgClass için eklendi

@Component({
  selector: 'app-root',
  standalone: true,
  // CommonModule'ü NgClass için import ediyoruz
  imports: [RouterOutlet, FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  work: string = "";
  todos: string[] = [];
  editIndex: number | null = null; 


  save() {
    if (this.editIndex !== null) {

      this.todos[this.editIndex] = this.work;
      this.editIndex = null; 
    } else {
      this.todos.push(this.work);
    }
    this.work = ""; 
  }


  delete(index: number) {
    this.todos.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = null;
      this.work = "";
    } else if (this.editIndex !== null && index < this.editIndex) {
      this.editIndex--;
    }
  }

  edit(index: number) {
    this.work = this.todos[index];
    this.editIndex = index; 
  }
}
