const GifCards = ({game}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">

            <img className="w-full h-auto"
                src={
                    game.thumbnail
                }
                alt={
                    game.title
                }/>

            <div className="px-4 py-4">
                <div className="font-bold text-xl text-orange-500 mb-2">
                    {
                    game.title
                }</div>

            </div>
            <div className="px-5 py-4">
                {
                game.short_description && <div className="semi-bold text-sm mb-2">
                    {
                    game.short_description
                }</div>
            } </div>

            <div className=" px-5 py-1">
                {
                game.keys_left && <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                    {
                    game.keys_left
                } </span>
            } </div>
            <div className='px-3 py-4 flex justify-center'>
                <a href={
                        game.giveaway_url
                    }
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
                    Take It
                </a>
            </div>
        </div>
    );
};

export default GifCards;
