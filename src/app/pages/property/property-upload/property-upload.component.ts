import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeStyle,
} from '@angular/platform-browser';

export enum AdTier {
  EMERALD = 'Emerald',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
}

interface UniversityListing {
  university: string;
  city: string;
  address: string;
  rooms_available: number;
  bedroom_size_sqm: number;
  title: string;
  description: string;
  price: number;
  status: boolean;
  ad_tier: AdTier;
  uploaded_images: string[];
  tags: string[];
}

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload.component.html',
  styleUrls: ['./property-upload.component.scss'],
})
export class PropertyUploadComponent implements OnInit {
  registrationForm: FormGroup;

  getAdTierValues(): string[] {
    return Object.values(AdTier) as string[];
  }

  constructor() {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      university: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      rooms_available: new FormControl(''),
      bedroom_size_sqm: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      status: new FormControl(''),
      ad_tier: new FormControl(''),
      uploaded_images: new FormArray([]),
      tags: new FormControl(''),
    });
  }

  addImageControl() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.registrationForm.get('uploaded_images')).push(control);
  }

  removeImageControl(index: number) {
    (
      (<FormArray>this.registrationForm.get('uploaded_images')) as FormArray
    ).removeAt(index);
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.registrationForm.reset();
  }

  get controls() {
    return (this.registrationForm.get('uploaded_images') as FormArray).controls;
  }

  onImageChange(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        const controls = this.registrationForm.get(
          'uploaded_images'
        ) as FormArray;
        controls.at(index).setValue(imageUrl);
        console.log(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }
}
