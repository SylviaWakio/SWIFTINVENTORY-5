import './App.css';
import React from 'react';
import ProductList from './ProductList';
import ProductForm from './productForm';
import Transaction from './Transaction';
import Form from './Form';

function App() {
  return (
    
    <div className="App">
      <ProductList />
            <ProductForm />
            <Transaction/>
            <Form/>

    </div>
  );
}

export default App;