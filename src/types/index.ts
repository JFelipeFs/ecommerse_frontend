export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface User {
  email: string;
  password: string;
}

export interface CartItem extends Product {
  quantity: number;
}