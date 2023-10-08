import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Transaction from './components/Transaction';
import SalesForm from './components/SalesForm';
// import ProductForm from './components/productForm';
// import ProductList from './components/ProductList';
import './App.css';


function App() {
  return (
    <Router>
      <nav className="bg-green-500 p-4 text-black text-lg font-bold">
        <ul className='container mx-auto flex justify-between'>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
          <Link to="/salesform">SALESFORM</Link>
          </li>
          <li>
          <Link to="/transactions">TRANSACTIONS</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route 
          path="/salesform"
          element={(
            <SalesForm />
          )}
          />
          <Route
          path="/transactions"
          element={(
            <Transaction />
          )}
          />
        </Routes>
      </div>
      {/* <div className="mt-10 font-roboto"> */}
        {/* <Navbar/> */}
        {/* <Routes> */}
          {/* <Route path="/transaction" element={<Transaction />} /> */}
          {/* <Route path="/salesform" element={<SalesForm />} />  */}



        {/* </Routes> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
