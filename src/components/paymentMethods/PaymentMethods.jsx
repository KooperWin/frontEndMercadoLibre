import styles from "./PaymentMethods.module.css";
import PlusImg from "../../assets/png/plus.png";

export function PaymentMethods() {
  return (
    <div className={styles.container}>
      <div className={styles.PaymentMethodsContainer}>
        <p>
          Paga comodo y seguro
          <br />
          con Mercado Pago
        </p>
        <div className={styles.midMenu}>
          <p>
            Hasta 3 meses sin intereses con:
            <br />
            <a href="/">Ver condiciones</a>
          </p>
          <img className={styles.imagenBanamex}
            height="90"
            width="190"
            src="https://hackathon.talent-network.org/wp-content/uploads/2019/04/t-hackaton-logo-citibanamex-600x260.png"
            alt="citibanamex"
          />
        </div>
        <div className={styles.rightMenu}>
          <img
            className={styles.plusImage}
            height="45"
            width="50"
            src={PlusImg}
            alt="PLUS"
          />
          <p className={styles.space}>_</p>
          <p>
            Mas medios de pago
            <br />
            <small>Ver todos</small>
          </p>
        </div>
      </div>
    </div>
  );
}
