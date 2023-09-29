import { Customer } from './customer.model';
import { PropertyImage } from './propertyImage.model';

export interface Auction {
  id: number;
  owner: Customer;
  images: PropertyImage[];
  views: number;
  auction_uuid: string; // min_length- 1
  auction_type: string; // enum[ REG, FOR ]
  opening_price: number;
  start_date: string; //date-time
  end_date: string; // date_time
  is_ended: boolean; // true
  time_left: string; // boolean
  city: string; // max_length-50 min_length-1
  district: string; // max_length-50 min_length-1
  address: string; // max_length-100 min_length-1
  category: string | null; // enum[ LAND_FOR_SALE, HOUSE_FOR_SALE ]
  property_use: string | null; // enum [ COMMERCIAL, MIXED, RESIDENTIAL ]
  title: string; // max_length-100 min_length-1
  description: string; // max_length-1000 min_length-1
  created_at: string; // date_time
  updated_at: string; // date_time
  occupied: boolean;
  no_bathrooms: number | null; //max-2147483647 min-0
  no_bedrooms: number | null; //max-15 min-0
  condition: string | null; //enum{NEW, USED, OLD}
  furnishing: string | null; // enum{FURNISHED, SEMI_FURNISHED, UNFURNISHED}
  square_meters: number | null; //max-2147483647 min- -2147483648
  length_sqm: number | null; //max-2147483647 min- -2147483648
  width_sqm: number | null; //max-2147483647 min- -2147483648
  parking_spaces: number | null; //max-2147483647 min- -2147483648
  secure_parking: boolean | null;
  status: boolean;
  ad_tier: string; //enum{EMERALD, GOLD, PLATINUM}
}
