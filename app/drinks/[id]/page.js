import SingleDrink from '@/components/SingleDrink';
import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchDrink = async (id) => {
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();

    return data.drinks?.[0];
  } catch (error) {
    throw new Error('Something went wrong when fetching a drink');
  }
};

const Drink = async ({ params }) => {
  const drink = await fetchDrink(params.id);

  if (!drink) {
    return (
      <div className="flex items-center justify-center w-full h-2/6">
        <p className="text-white">No drink found</p>
      </div>
    );
  }

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-8">
        &#8592; Back to drinks
      </Link>
      <SingleDrink drink={drink} />
    </div>
  );
};

export default Drink;
