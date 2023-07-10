export interface Billboard {
    id: string,
    label: String,
    imageUrl: String
}

export interface Category {
    id: string;
    name: String;
    billboard: Billboard
}

export interface Product {
    id : string;
    category : Category;
    name : string;
    price : string;
    isFeatured : boolean;
    size : Size;
    color : Color;
    images : Image[]
}

export interface Image {
    id : string;
    url : string;
}

export interface Size {
id : string;
value : string;
name : string;

}

export interface Color {
id : string;
name : string;
value : string;
}