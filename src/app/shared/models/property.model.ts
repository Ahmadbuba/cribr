import { Customer } from './customer.model';
import { PropertyImage } from './propertyImage.model';

export interface Property {
  id: number;
  owner: Customer;
  status: boolean;
  city: string;  // max_length-50 min_length-1
  district: string; // max_length-50 min_length-1
  address: string; // max_length-100 min_length-1
  title: string; // max_length-100 min_length-1
  description: string; // max_length-1000 min_length-1
  category: string|null; // enum{FOR SALE, FOR RENT, SHORT_LET}
  property_types: string|null; //enum{FLAT, HOUSE, LAND, COMMERCIAL, EVENT_CENTER}
  subtypes_flat: string|null; //enum{MINI_FLAT, SELF_CONTAIN}
  subtypes_house: string|null; //enum{DETACHED_BUNGALOW, DETACHED_DUPLEX, SEMI_DETACHED_BUNGALOW, SEMI_DETACHED DUPLEX, TERRACED_BUNGALOW, TERRACED,DUPLEX}
  subtypes_land: string|null;  // enum{COMMERCIAL, INDUSTRIAL, MIXED_USE, RESIDENTIAL}
  subtypes_commercial: string|null //enum{CHURCH, FACTORY, FILLING_STATION, HOTEL, OFFICE, PLAZA, RESTAURANT, SCHOOL, SHOP, WAREHOUSE}
  created_at: string;
  updated_at: string;
  no_bedrooms: number|null; //max-15 min-0
  no_bathrooms: number|null; //max-2147483647 min-0
  condition: string|null; //enum{NEW, RECENT, UNDERCONST, OLD}
  square_meters: number|null; //max-2147483648 min- -2147483647
  length_sqm: number|null; //max-2147483648 min- -2147483647
  width_sqm: number|null; //max-2147483648 min- -2147483647
  furnishing: string|null; // enum{FURNISHED, SEMI_FURNISHED, UNFURNISHED}
  parking_spaces: number|null; //max-2147483648 min- -2147483647
  secure_parking: boolean|null; 
  price: number; //max-2147483648 min- -2147483647
  negotiable: boolean;
  ad_tier: string; //enum{EMERALD, GOLD, PLATINUM}
  images: PropertyImage[];
  views: number;
  tags: []; //min_length - 1
  liked: string;
}
