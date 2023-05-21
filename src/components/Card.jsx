const Card = ({ game }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full" src={game.thumbnail} alt={game.title} />

      <div className="px-4 py-4">
        <div className="font-bold text-xl text-orange-500 mb-2">
          {game.title}
        </div>
      </div>
      <div className="px-5 py-4">
        {game.short_description && (
          <div className="semi-bold text-sm mb-2">{game.short_description}</div>
        )}{" "}
      </div>
      <div className="px-5 py-4">
        {game.genre && (
          <span className="inline-block  bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            {game.genre}{" "}
          </span>
        )}
        {game.platform && (
          <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            {game.platform}{" "}
          </span>
        )}{" "}
      </div>
    </div>
  );
};

export default Card;
