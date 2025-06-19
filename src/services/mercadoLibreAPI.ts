import type { ApiResponse } from '../types/productTypes';
import axios from "axios";



const BASE_URL = 'https://api.mercadolibre.com';

export const searchProducts = async (query: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/products/search?status=active&site_id=MLM&q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};