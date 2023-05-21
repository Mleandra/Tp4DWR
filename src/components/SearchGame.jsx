// eslint-disable-next-line react/prop-types
const SearchGame = ({ searchValue, setSearchValue }) => {
  return (
    <form className="relative my-4">
      <label htmlFor="search" className="mb-2 "></label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg border border-gray-300  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Recherche..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchGame;
