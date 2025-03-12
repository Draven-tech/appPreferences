import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  value: number = 50;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  radio1: string = '';
  radio2: string = '';

  resetSettings() {
    this.option1 = false;
    this.option2 = false;
    this.option3 = false;
    this.value = 50;
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.radio1 = '';
    this.radio2 = '';
  }
}
