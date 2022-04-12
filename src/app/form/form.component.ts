import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  name = new FormControl(''); // Initial state for 'name' set as an empty string. Using FormControl grants you get immediate access to listen for, update, and validate the state of the form input.

  constructor() { }

  ngOnInit(): void { }

  /**
   * Forms the quote 'Hello Pirates!' from Brian Blessed character 'The Pirate King' from the aardman film 'The Pirates! In an adventure with Scientists" 
   */
  updateName() {
    this.name.setValue('Pirates!');
  }
}
