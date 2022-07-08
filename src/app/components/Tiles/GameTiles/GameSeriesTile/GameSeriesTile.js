import styles from "./GameSeries.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const GameSeriesTile = ({ gameSeries }) => {
  const data = gameSeries.results;

  return (
    <div className={styles.wrapper}>
      <h2>Games from the same Series</h2>
      <Carousel dynamicHeight={true} width="100%" showThumbs={false}>
        {data?.map(({ id, name, background_image: backgroundImage }) => (
          <Link key={id} to={`/game/${id}`}>
            <div className={styles.content}>
              <img alt={name} src={backgroundImage} />
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
