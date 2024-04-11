import "./addProduct.css";
import FormAddProduct from "../../../components/ui/formAddProduct/formAddProduct";
import GlobalButton from "../../../components/ui/button/Button";
import NavbarAdmin from "../../../components/pages/adminNavbar/AdminNavbar";

export default function AddProduct() {
  return (
    <>
      <NavbarAdmin />
      <div className="addProduct-container">
        <div className="addProduct">
          <FormAddProduct />
          <GlobalButton
            content="Registrar Articulo"
            customClassButton="button-keep"
          />
        </div>
      </div>
    </>
  );
}
