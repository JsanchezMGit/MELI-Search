import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Loading from './components/Loading';
import Error from './components/Error';
import { searchProducts } from './services/mercadoLibreAPI';
import type { Product } from './types/productTypes';
// import AuthRedirect from  './components/AuthRedirect';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchTerm: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await searchProducts(searchTerm);
      
      if (data.results && data.results.length > 0) {
        setProducts(data.results);
      } else {
        setProducts([]);
        setError('No se encontraron productos. Intenta con otro término de búsqueda.');
      }
    } catch (err) {
      setError('Error al buscar productos. Por favor, intenta nuevamente.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>   
     {/* <AuthRedirect /> */}
      <div className="app">
        <h1>Buscador de Mercado Libre</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <Loading />}
        {error && <Error message={error} />}
        
        {!loading && !error && products.length > 0 && (
          <ProductList products={products} />
        )}
      </div>    
    </BrowserRouter>
  );
}

export default App;