import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

export function ItemCard({ product }) {
  const imageUrl = product.imgUrl;
  return (
    <div className={styles.containercard}>
      <li className={styles.itemcard}>
        <Link to={"/shop/" + product.id}>
          <img className={styles.itemimage} src={imageUrl} alt={product.name} />
          <hr className={styles.hrr} />
          <div>{product.name}</div>
          <div>${product.price}</div>
        </Link>
      </li>
    </div>
  );
}
