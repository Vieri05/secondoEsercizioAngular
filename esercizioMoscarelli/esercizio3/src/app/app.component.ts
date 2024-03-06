import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule , MatInputModule,MatTableModule, MatFormFieldModule ,FormsModule , CommonModule ,TestComponent, MatToolbarModule ,MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-moscarelli';
  buttonDisabled: boolean = false;
  subtitle = 'Person';
  editMode: boolean = false;

  person : Person = {
    name: "Vieri", surname: "Moscarelli", age: 19
  }

  modifyPersona: Person = {
    name: "", surname: "", age: 0
  }

  newPerson: Person = {
    name: "", surname: "", age: 0
  }

  personDelete : Person = {
    name: "", surname: "", age: 0
  }


  public persone:Person[] = [
    {name: 'Lorenzo', surname:'Lasagni', age: 18},
    {name: 'Matteo', surname:'Tinacci', age: 18},
    {name: 'Alessandro', surname:'Vizzini', age: 18},
  ]

 
  clickbutton = () => {
  this.title = "Hai cliccato"
    this.buttonDisabled = true;

    setTimeout (() =>{
      this.buttonDisabled = false;
    }, 3000);
  }
  addPerson = () => {
    if (this.editMode) {

    } else {
      this.persone.push(this.newPerson);
    }
    this.editMode = false;
   this.newPerson = {
    name: "", surname: "", age: 0
   }
  }

  deletePerson(index: number) {
    if (index >= 0 && index < this.persone.length) {
      this.persone.splice(index, 1);
    }
  }

  modifyElementName(index: number) {
    this.editMode = true;
    this.newPerson = this.persone[index];
  }
}
