export interface Product {
  id: string;
  title: string;
  price: number;
  original_price?: number;
  thumbnail: string;
  condition: 'new' | 'used';
  shipping: {
    free_shipping: boolean;
  };
}

export interface ApiResponse {
  results: Product[];
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
}