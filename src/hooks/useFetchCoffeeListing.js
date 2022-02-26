import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchCoffeeListings = (size) => {
  const [coffeeListings, setCoffeeListings] = useState([]);
  const [allCoffeListings, setAllCoffeeListings] = useState([]);
  const [isFetching, setIsFetcing] = useState(false);

  const fetchCoffeeListing = async () => {
    setIsFetcing(true);
    try {
      const res = await axios.get(
        `https://random-data-api.com/api/coffee/random_coffee?size=${size}`
      );
      const listings = await res.data;
      setCoffeeListings(listings);
      setAllCoffeeListings(listings);
    } catch (err) {
      console.error(err.message);
    }
    setIsFetcing(false);
  };

  const filterCoffeeListings = (searchValue) => {
    setIsFetcing(true);
    try {
      const updatedListings = allCoffeListings.filter((coffee) =>
        String(coffee.blend_name)
          .toLowerCase()
          .includes(String(searchValue).toLowerCase())
      );
      setCoffeeListings(updatedListings);
    } catch (err) {
      console.error(err.message);
    }
    setIsFetcing(false);
  };

  const clearFilter = () => {
    setCoffeeListings(allCoffeListings);
  };

  useEffect(() => {
    fetchCoffeeListing();
  }, []);

  return { coffeeListings, filterCoffeeListings, clearFilter, isFetching };
};

export default useFetchCoffeeListings;
