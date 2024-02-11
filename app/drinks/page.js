import DrinksList from '@/components/DrinksList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

const fetchDrinks = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.drinks;
  } catch (error) {
    throw new Error('Something went wrong when fetching drinks');
  }
};

const Drinks = async () => {
  const drinks = await fetchDrinks();

  return (
    <div className="grid grid-rows-[auto_5fr_32px] h-full">
      <h1 className="text-7xl mb-4">Drinks</h1>
      <div className="flex flex-wrap justify-center h-full overflow-scroll no-scrollbar">
        <DrinksList drinks={drinks} />
      </div>
    </div>
  );
};

export default Drinks;
