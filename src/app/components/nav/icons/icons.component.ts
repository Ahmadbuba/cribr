import { Component } from '@angular/core';
import { Icon } from './icon.interface';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent {

  iconNames:Icon[]= [
    {name:'home', description:'Homes'},
    {name:'details', description:'Mechanics'},
    {name:'business_center', description:'Hospitals'},
    {name:'medical_services', description:'Medicals'},
    {name:'h_mobiledata_badge', description:'Hotels'}
  ];
  
}
