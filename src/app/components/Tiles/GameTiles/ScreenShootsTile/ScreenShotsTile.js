import { Carousel } from "react-responsive-carousel";
import styles from "./ScreenShotsTile.module.scss";

export const ScreenShotsTile = ({ setModalIsOpen, results }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Screen Shots</h2>
      <div className={styles.screenShots}>
        <Carousel dynamicHeight={true} width="100%" showThumbs={false}>
          {results?.map(({ id, image }) => (
            <div id={id} onClick={() => setModalIsOpen(true)}>
              <img alt="ScreenShot" src={image} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
