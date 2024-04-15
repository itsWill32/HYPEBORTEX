import "./addProduct.css";
import FormAddProduct from "../../../components/ui/formAddProduct/formAddProduct";
import NavbarAdmin from "../../../components/pages/adminNavbar/AdminNavbar";

export default function AddProduct() {
  return (
    <>
      <NavbarAdmin />
      <div className="addProduct-container">
        <div className="addProduct">
          <FormAddProduct />
        </div>
      </div>
    </>
  );
}
