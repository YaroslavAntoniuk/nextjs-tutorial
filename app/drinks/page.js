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
    <div className="h-full">
      <h1 className="text-7xl mb-4">Drinks</h1>
      <div className="flex flex-wrap justify-center h-full overflow-scroll no-scrollbar relative">
        {drinks.map((drink) => (
          <div
            key={drink.idDrink}
            className="flex flex-col items-center justify-center p-8 w-60 m-2 rounded-xl bg-neutral-500"
          >
            <h2 className="text-white mb-4">{drink.strDrink}</h2>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="w-32 h-32 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
