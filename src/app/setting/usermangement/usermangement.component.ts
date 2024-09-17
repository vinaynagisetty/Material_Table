import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-usermangement',
    templateUrl: './usermangement.component.html',
    styleUrls: ['./usermangement.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class UsermangementComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  ngOnInit() {
    // Show the spinner when the component loads
    this.spinner.show();

    // Hide the spinner after 5 seconds
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
