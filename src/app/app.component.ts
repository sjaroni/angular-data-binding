import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-data-binding';

  // one way data-binding
  inputValueOne: string = 'banana';

  // two way data-binding
  inputValueTwo: string = 'in a box';
  inputValueTwoChange($event: KeyboardEvent) {
    // console.log($event);
    const value = ($event.target as HTMLInputElement).value;
    // console.log(value);
    this.inputValueTwo = value;
  }

  // ngmodel
  inputValueThree: string = 'lemon';
  inputValueThreeChange(value: string) {
    // console.log(value);
    this.inputValueThree = value;
  }

  // form
  searchForm = {
    searchValue: 'kiwi',
  };
  onSearchSubmit(): void {
    console.log(this.searchForm);
  }
}
