import Link from 'next/link';

const DrinksList = ({ drinks }) => {
  return drinks.map((drink) => (
    <Link
      key={drink.idDrink}
      href={`/drinks/${drink.idDrink}`}
      className="flex flex-col items-center justify-center p-8 w-60 m-2 rounded-xl bg-neutral-500"
    >
      <h2 className="text-white mb-4">{drink.strDrink}</h2>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="w-32 h-32 rounded-lg"
      />
    </Link>
  ));
};

export default DrinksList;
