import { Link, useNavigate } from "react-router-dom";
import styles from "./LayoutComponent.module.css";
import MercadoLogo from "../../assets/svg/mercado-libre-logo.svg";
import SearchButton from "../../assets/png/search.png";
import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

export function LayoutComponent() {
  toast.configure();

  const query = useQuery();
  const search = query.get("name");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?name=" + searchText);
  };

  const cookies = new Cookies();
  let tokenUser = cookies.get("jwtCookie");
  let tokenjwt = localStorage.getItem("jwt-token");

  function Logout() {
    toast("Cerraste Sesion. Hasta pronto");
    localStorage.removeItem("persist:root");
    localStorage.removeItem("email");
    localStorage.removeItem("jwt-token");
    sessionStorage.removeItem("persist:root");
    sessionStorage.removeItem("jwt-token");
    cookies.remove("csrftoken");
    cookies.remove("jwt-token");
    cookies.remove("jwtCookie");
  }

  return (
    <header className={styles.navHeader}>
      <ul className={styles.firstMenu}>
        <div className={styles.leftMenu}>
          <Link className={styles.navLogo} to="/">
            <img
              width="120px"
              height="50px"
              src={MercadoLogo}
              alt="MercadoLibreLogo"
            />
          </Link>
          <li className={`${styles.clickable} ${styles.postalCode}`}>
            Enviar a Jesus <br />
            CP 85890
          </li>
        </div>
        <div>
          <input
            className={styles.SearchInput}
            type="text"
            placeholder="Buscar categorias, productos y mas..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className={styles.buttonzone}>
          <img
            onClick={handleSubmit}
            height="25px"
            width="25px"
            className={styles.clickable}
            src={SearchButton}
            alt="imagenSearch"
          />
        </div>
        <Link to="/productcategories">
          <li className={styles.clickable}>Categorias</li>
        </Link>
        {tokenUser && tokenjwt ? (
          <Link to="/addProduct">
            <li className={styles.clickable}>Vender</li>
          </Link>
        ) : (
          <li className={styles.clickable}></li>
        )}
      </ul>
      <ul className={styles.secondMenu}>
        {tokenUser && tokenjwt ? (
          <li className={styles.clickable}>{localStorage.getItem("email")}</li>
        ) : (
          <li className={styles.clickable}></li>
        )}
        {!tokenUser && !tokenjwt ? (
          <div className={styles.loginlogoutDIV}>
            <li className={(styles.clickable, styles.loginlogoutLI)}>
              <Link to="/registerpage">Crea tu cuenta</Link>
            </li>
            <li>
              <Link to="/loginpage">Inicia Sesion</Link>
            </li>
          </div>
        ) : (
          <li onClick={Logout}>
            <Link to="/">Cerrar Sesion</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
