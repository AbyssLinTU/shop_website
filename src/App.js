import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './components/Pages/MainPage/MainPage';
import { state } from './data.js';
import { AboutUs } from './components/Pages/AboutUs/AboutUs.jsx';
import { ViewPage } from './components/Pages/ViewPage/ViewPage.jsx';
import { StateProvider } from './context/context.jsx';
import { Basket } from './components/Pages/Basket/Basket.jsx';
import { useEffect } from 'react';
import { CatalogPage } from './components/Pages/CatalogPage/CatalogPage.jsx';
import React from 'react';
import { Order } from './components/Pages/Order/Order.jsx';
import { Complete } from './components/Pages/Complete/Complete.jsx';

// const path = '/shop-website/';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const App = () => {
  return (
    <div>
      <StateProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="App">
            <div className="header">
              <Header />
            </div>
            <div className="content">
              <Routes>
                <Route path="/*" element={<Navigate to="/main" />} />
                <Route path={`/main/:id`} element={<ViewPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/about" element={<AboutUs state={state} />} />
                <Route path="/basket" element={<Basket state={state} />} />
                <Route path="/order" element={<Order state={state} />} />
                <Route
                  path="/order/complete"
                  element={<Complete state={state} />}
                />
              </Routes>
            </div>
            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
};

export default App;
