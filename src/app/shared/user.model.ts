export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: any;
    lng: any;
}

export interface Company {
    name: string;
    bs: string;
}

export interface UserDetails {
    id: number;
    name: string;
    username: string;
    email: string;
    profilepicture: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: Company;
}

export interface UserResponse {
    users: Array<UserDetails>;
}
