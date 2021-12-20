import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

const slideImages = [
  "https://http2.mlstatic.com/D_NQ_641469-MLA48580258375_122021-OO.webp",
  "https://http2.mlstatic.com/D_NQ_958015-MLA48593537697_122021-OO.webp",
  "https://http2.mlstatic.com/D_NQ_971718-MLA48602402179_122021-OO.webp",
  "https://http2.mlstatic.com/D_NQ_650995-MLA48535525753_122021-OO.webp",
];

export function Slideshow() {
  return (
    <div className={styles.SlideShowContainer}>
      <Slide easing="ease">
        <div className={styles.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className={styles.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className={styles.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className={styles.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
    </div>
  );
}
