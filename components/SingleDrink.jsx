const SingleDrink = ({ drink }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-60 m-2 rounded-xl h-[275px] bg-neutral-500/25">
      <h2 className="text-white mb-4">{drink.strDrink}</h2>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="w-32 h-32 rounded-lg"
      />
    </div>
  );
};

export default SingleDrink;
