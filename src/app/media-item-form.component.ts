import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
    });
  }

  yearValidator(control: FormControl) {
    // not a required field
    if (control.value.trim().length === 0) {
      console.log('no year value present');
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;

    if (year >= minYear && year <= maxYear) {
      // year is valid
      console.log(year +' is between ' + minYear + " and " + maxYear);
      return null;
    } else {
      console.log(year +' is NOT between ' + minYear + " and " + maxYear);
      return {year: true};
    }
  }
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
