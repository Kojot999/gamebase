import styles from "./GameSeries.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const GameSeries = ({ gameSeries }) => {
  const data = gameSeries.results;
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <h2>Games from the same Series</h2>
      <Carousel>
        {data?.map(({ id, name, background_image: backgroundImage }) => (
          <div key={id}>
            <img alt={name} src={backgroundImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
