import { useEffect, useState } from 'react';
import useFetchCoffeeListings from 'hooks/useFetchCoffeeListing';
import CoffeeListings from 'components/CoffeeListings';

function App() {
  const LISTINGS_SIZE = 28;
  const [filterValue, setFilterValue] = useState('');
  const { isFetching, coffeeListings, filterCoffeeListings, clearFilter } =
    useFetchCoffeeListings(LISTINGS_SIZE);

  const handleFilterValueChange = (evt) => {
    setFilterValue(evt.target.value);
  };

  const handleClearFilter = () => {
    setFilterValue('');
    clearFilter();
  };

  useEffect(() => {
    let debounceSearch = null;
    if (filterValue.length > 0) {
      debounceSearch = setTimeout(() => {
        filterCoffeeListings(filterValue);
      }, 2000);
    }

    // clean up
    return () => {
      clearTimeout(debounceSearch);
    };
  }, [filterValue]);

  return (
    <div className='app'>
      <div className='app-intro'>
        <h1>Coffee Listings App</h1>
        <p>
          Get to know more about different types of coffee brewed all across the
          world.
        </p>
      </div>
      <div className='filter'>
        <input
          value={filterValue}
          onChange={handleFilterValueChange}
          type='text'
          placeholder='Search by Coffee Name'
        />
        <button onClick={handleClearFilter}>Clear Filter</button>
      </div>
      {isFetching && <span>Loading...</span>}
      {!isFetching && coffeeListings && coffeeListings.length > 0 && (
        <CoffeeListings coffeeListings={coffeeListings} />
      )}
    </div>
  );
}

export default App;
