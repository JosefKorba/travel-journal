import Data from "../components/Data";
import styles from "./Card.module.css";
import { FaLocationDot } from "react-icons/fa6";
function Card() {
  return (
    <article>
      {Data.map((journal) => {
        const {
          id,
          title,
          location,
          googleMapsUrl,
          startDate,
          endDate,
          description,
          imageUrl,
        } = journal;
        return (
          <div className={styles.card} key={id}>
            <div>
              <img className={styles.cardImg} src={imageUrl} alt="" />
            </div>
            <div>
              <div className={styles.cardLocation}>
                <FaLocationDot className={styles.locationDot} />
                <span className={styles.location}>{location}</span>
                <a className={styles.locationMap} href={googleMapsUrl}>
                  View on Google Maps
                </a>
              </div>
              <h1 className={styles.cardTitle}>{title}</h1>
              <h3 className={styles.cardDate}>
                {startDate} - {endDate}
              </h3>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default Card;
