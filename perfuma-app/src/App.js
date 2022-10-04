
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductMen from './pages/ProductMen';
import ProductWomen from './pages/ProductWomen';
import Sale from './pages/Sale';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Whistlist from './pages/Wishlist';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="nuoc-hoa-nam" element={<ProductMen />}/>
        <Route path="nuoc-hoa-nu" element={<ProductWomen />}/>
        <Route path="khuyen-mai" element={<Sale />}/>
        <Route path="tin-tuc" element={<Blog />}/>
        <Route path="lien-he" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="login" element={<Login />}/>
        <Route path="san-pham-yeu-thich" element={<Whistlist />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
