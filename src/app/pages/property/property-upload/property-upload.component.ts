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

interface Image {
  file: File;
  url: string;
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
  selectedImages: Image[] = [];
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

  onUploadSuccess(event, index) {
    const response = JSON.parse(event[1]);
    const imageUrlArray: string[] = response.data.map((file) => file.url);

    const controls = this.registrationForm.get('uploaded_images') as FormArray;
    const control = new FormControl(imageUrlArray, Validators.required);
    controls.setControl(index, control);
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

  // onImageChange(event: Event, index: number) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const imageUrl = reader.result as string;
  //       const controls = this.registrationForm.get(
  //         'uploaded_images'
  //       ) as FormArray;
  //       controls.at(index).setValue(imageUrl);
  //       console.log(imageUrl);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  async onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement?.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        const file = inputElement.files[i];
        const url = await this.convertToBase64(file).then((url: string) => {
          this.selectedImages.push({ file, url });
        });
      }
    }
    console.log('The length of images: ' + this.selectedImages.length);
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          console.log('Here it is:' + reader.result);
        } else {
          reject('Error reading file.');
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  removeImage(index: number): void {
    if (index >= 0 && index < this.selectedImages.length) {
      this.selectedImages.splice(index, 1); // Remove the image at the specified index
    }
    console.log(this.selectedImages.length);
  }
}
