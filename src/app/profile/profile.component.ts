import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  // Profile FormGroup to contain FormControls
  profileForm = this.fb.group({
    title: [''],
    firstName: ['', Validators.required], // Signifies via Angular that this value must be present for the profileForm to be considered VALID
    lastName: [''],
    // Address sub FormGroup to contain further FormControls related to both 'Profile' and 'Address'
    address: this.fb.group({
      street: [''],
      town: ['', Validators.required], // Signifies via Angular that this value must be present for the profileForm to be considered VALID
      city: [''],
      county: [''],
      postCode: ['']
    })
  })

  /**
   * FormBuilder defined within the constructor provides a short-hand method to provide the structure needed
   * for FormGroups and FormControls without having to define them with new Form...(''), which is an example of
   * syntactic sugar (helps keep the flow of coding while still providing the functionality required).
   * @param fb FormBuilder
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  /**
   * Generate an alias of the 10th Doctor from 'Doctor Who' (Season 3, Episodes 8 + 9: 'Human Nature' + 'The Family of Blood').
   * This in turn will pass the validation needed for the FormGroup by providing the required fields of 'firstName' and 'town'.
   * We are not concerned with attributes that do not need to be updated, so we do not update them or pass them in as empty values.
   */
  updateProfile() {
    this.profileForm.patchValue({
      title: 'Mr',
      firstName: 'John',
      lastName: 'Smith',
      address: {
        street: 'Farringham School for Boys',
        town: 'Farringham'
      }
    })
  }
}
