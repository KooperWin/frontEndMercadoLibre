import styles from "./EndBanner.module.css";

export function EndBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.menuContainer}>
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg"
            alt="imagen tarjeta"
          />
          <p>Elige como pagar</p>
          <p>
            Con Mercado Pago, paga con tarjeta, débito o efectivo. También
            puedes pagar en hasta 12 mensualidades sin tarjeta con Mercado
            Crédito.
          </p>
          <p className={styles.links}>Cómo pagar con Mercado Pago</p>
        </div>
        <div className={styles.menuContainer}>
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg"
            alt="imagen envios"
          />
          <p>Envio gratis desde $299</p>
          <p>
            Con solo estar registrado en Mercado Libre, tienes envíos gratis en
            millones de productos seleccionados.
          </p>
          <p className={styles.links}>Conoce más sobre este beneficio</p>
        </div>
        <div className={styles.menuContainer}>
          <img
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg"
            alt="imagen seguridad"
          />
          <p>Seguridad, de principio a fin</p>
          <p>
            ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </p>
          <p className={styles.links}>Cómo te protegemos</p>
        </div>
        <hr />
      </div>
      <div className={styles.downContainerLast}>
        <p>Trabaja con nosotros</p>
        <p>Terminos y condiciones</p>
        <p>Como cuidamos tu privacidad</p>
        <p>Ayuda</p>
      </div>
      <p className={styles.downtext}>
        Copyright © 1999-2021 DeRemate.com de México S. de R.L. de C.V."
      </p>
      <p className={styles.downtext}>
        Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito
        Juarez, 03940 Ciudad de México, CDMX, Mexico
      </p>
    </div>
  );
}
