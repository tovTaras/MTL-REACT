import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage';
import ItemPage from './pages/ItemPage';
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import Header from './components/header.js';
import Footer from './components/footer.js';
import styled from 'styled-components'
import React from 'react'
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from 'react-redux';

function App() {

  const isLogged = useSelector(state => state.login);

  return (
    <Router>
      <Page>
      {isLogged ? <Header /> : null}
        <Routes>
          
          <Route exact path="/register" element={<RegisterPage/>}>
          </Route>
          <Route exact path="/login" element={<LoginPage/>}>
          </Route>
          {pages.map(({ path, page }, key) => {
            if (isLogged) {
              return <Route key={key} exact path={path} element={page} />
            }
            else {
              return <Route key={key} exact path="/login" element={<LoginPage/>}/>
            }
          })}
        </Routes>
        <Footer />
      </Page>
    </Router>
  );
}

export default App;

const pages = [
  { 'path': '/', 'page': <HomePage/> },
  { 'path': '/catalog', 'page': <CatalogPage/> },
  { 'path': '/lawnmowers/:id', 'page': <ItemPage/> },
  { 'path': '/cart', 'page': <CartPage/> },
  { 'path': '/checkout', 'page': <CheckoutPage/> },
  { 'path': '/success', 'page': <SuccessPage/> }
]

const Page = styled.div`
  background-color: #22223a;
`;
