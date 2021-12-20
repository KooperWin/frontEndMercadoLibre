import { ShopGrid } from "../shop/ShopGrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ItemDetails } from "../../pages/ItemDetails";
import { LayoutComponent } from "../layout/LayoutComponent";
import { ShopLogin } from "../login/ShopLogin";
import { ShopRegister } from "../register/ShopRegister";
import { CategoriesComponent } from "../categories/CategoriesComponent";
import { ProductsbyCategorie } from "../productsListedbyCategorie/ProductsbyCategorie";
import { AddProduct } from "../sellproduct/AddProduct";
export function App() {
  return (
    <Router>
      <LayoutComponent />
      <main>
        <Routes>
          <Route
            exact
            path="/shop/:productId"
            element={<ItemDetails />}
          ></Route>
          <Route
            exact
            path="/productbycategorie/:categorieId"
            element={<ProductsbyCategorie />}
          ></Route>
          <Route
            path="/productcategories"
            element={<CategoriesComponent />}
          ></Route>
          <Route path="/loginpage" element={<ShopLogin />}></Route>
          <Route path="/registerpage" element={<ShopRegister />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/" element={<ShopGrid />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
