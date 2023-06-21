import React, { useState, useEffect } from "react";
import { fetchBeers } from "../../api/beersApi";
import Pagination from "../Pagination/Pagination";
import { Beer } from "../../types/Beer";
import styles from "./BeerList.module.scss";
import Loader from "../Loader/Loader";
import SingleBeer from "./SingleBeer";

const BeerList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const beersPerPage = 12;

  useEffect(() => {
    const fetchBeersData = async () => {
      setLoading(true);
      const data = await fetchBeers(page, beersPerPage);
      setBeers(data);
      setLoading(false);
    };

    fetchBeersData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>BEER LIST</h1>

      {loading ? (
        <div className={styles.loader}>
          <Loader height={250} width={250} />
        </div>
      ) : (
        <ul className={styles.list}>
          {beers.map((beer) => (
            <SingleBeer key={beer.id} beer={beer} />
          ))}
        </ul>
      )}
      <Pagination page={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default BeerList;
