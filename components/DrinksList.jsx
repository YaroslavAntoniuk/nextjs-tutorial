import Link from 'next/link';
import SingleDrink from './SingleDrink';

const DrinksList = ({ drinks }) => {
  return drinks.map((drink) => (
    <Link key={drink.idDrink} href={`/drinks/${drink.idDrink}`}>
      <SingleDrink key={drink.idDrink} drink={drink} />
    </Link>
  ));
};

export default DrinksList;
