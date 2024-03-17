import MainLayout from "./layout/main-layout";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import UserLeyaut from "./layout/userLeyaut";
import Category from "./page/category/category";
import { UseSkror } from "./hook/UseSkror";
import ProductInfo from "./page/product/productInfo";
import Notfaunt from "./page/notfaunt/notfaunt";
import Login from "./layout/user/Login";
import Regerter from "./layout/user/regester";
import Profile from "./page/userProfile/profile";
import CreateProduct from "./page/createProduct/createProduct";

function App() {
  return (
    <>
      <UseSkror />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfaunt />} />
          <Route path="product/:category" element={<Category />} />
          <Route path="product/:category/:id" element={<ProductInfo />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/users" element={<UserLeyaut />}>
            <Route path="login" element={<Login />} />
            <Route path="regerter" element={<Regerter />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
