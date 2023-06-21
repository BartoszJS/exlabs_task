import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBeerDetails } from "../../api/beersApi";
import { Beer } from "../../types/Beer";
import styles from "./BeerDetails.module.scss";
import Loader from "../Loader/Loader";

const BeerDetails: React.FC = () => {
  const [beer, setBeer] = useState<Beer | null>(null);
  const { beerId } = useParams<{ beerId: string }>();

  useEffect(() => {
    const fetchBeerDetailsData = async () => {
      if (beerId) {
        const data = await fetchBeerDetails(beerId);
        setBeer(data);
      }
    };

    fetchBeerDetailsData();
  }, [beerId]);

  if (!beer) {
    return (
      <div>
        <Loader height={250} width={250} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.details__photo}>
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className={styles.details__description}>
          <div className={styles.details__description_top}>
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>

            <div>
              <div>Description:</div>
              <div>{beer.description}</div>
            </div>
            <div className={styles.details__description_numbers}>
              <div>
                <span>ABV: {beer.abv} %</span>
              </div>
              <div>
                <span>IBU: {beer.ibu}</span>
              </div>
            </div>
          </div>
          <div>
            <h3>Ingredients: </h3>
            <div className={styles.details__description_ingredients}>
              <div className={styles.details__description_ingredients}>
                {beer.ingredients.malt.map((malt, index) => (
                  <span key={index}>{malt.name}, </span>
                ))}
                {beer.ingredients.hops.map((hop, index) => (
                  <span key={index}>{hop.name}, </span>
                ))}
              </div>
            </div>
            <div className={styles.details__description_button}>
              <Link
                className={styles.details__description_button_link}
                to='/exlabs_task'
              >
                Back to list
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
