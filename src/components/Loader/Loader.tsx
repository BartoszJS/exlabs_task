import React from "react";
import styles from "./Loader.module.scss";

import imageSvg from "../../assets/Eclipse200px.svg";

interface LoaderProps {
  height?: number;
  width?: number;
}

const Loader: React.FC<LoaderProps> = ({ height, width }) => {
  return (
    <div className={styles.loader}>
      <img src={imageSvg} alt='loader' height={height} width={width} />
    </div>
  );
};

export default Loader;
