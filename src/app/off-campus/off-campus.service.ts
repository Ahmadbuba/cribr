import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Property } from '../shared/models/property.model';

interface PropertyResponse {
  count: number;
  next: string;
  previous: string;
  results: Property[];
}

@Injectable({
  providedIn: 'root',
})
export class OffCampusService {
  // propertiesUrl = 'https://cribr.up.railway.app/api/properties/';
  propertiesUrl = environment.apiUrl + 'properties/';

  constructor(private http: HttpClient) {}

  getAllProperties() {
    return this.http.get<PropertyResponse>(this.propertiesUrl);
  }
}
