import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Beer as BeerType } from "../../types/Beer";
import styles from "./BeerList.module.scss";

interface BeerProps {
  beer: BeerType;
}

const Beer: React.FC<BeerProps> = ({ beer }) => {
  return (
    <li key={beer.id}>
      <Link to={`/details/${beer.id}`}>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className={styles.beer}
        >
          <div className={styles.beer__abv}>{beer.abv} %</div>

          <div>
            <img
              className={styles.beer_img}
              src={beer.image_url}
              alt={beer.name}
            />
            <div className={styles.beer_name}>{beer.name}</div>
          </div>
          <div className={styles.beer_border}></div>
          <div>
            <div>{beer.tagline}</div>
          </div>
        </motion.div>
      </Link>
    </li>
  );
};

export default Beer;
