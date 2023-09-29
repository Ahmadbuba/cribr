export interface Customer {
  phone1: string|null; // max_length 14
  user_id: string;
  profile_image: string|null; //uri
  account_type : string; // enum[EMERALD, GOLD, PLATINUM]
  verified_agent : boolean;
  phone2: string|null; // max_length 14
  phone3: string|null; // max_length 14
  likes: number;
  seller_score: number;
  university: string|null; // max_length 50
}
