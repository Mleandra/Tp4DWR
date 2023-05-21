const Pagination = ({currentPage, totalGame, totalPages, onPageChange}) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex m-2 flex-col items-center">
            <span className="text-sm text-gray-500">
                Page
                <span className="font-semibold">
                    {currentPage} </span>
                sur
                <span className="font-semibold ">
                    {totalPages} </span>Pages


            </span>
            <span className="font-semiboldtext-sm text-gray-500 ">
                {totalGame}
                Jeux
            </span>
            <div className="inline-flex xs:mt-0">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border-0 border-l border-blue-300 rounded-l hover:bg-blue-500"
                    onClick={handlePrevClick}>
                    <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                    </svg>
                    Precedant
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border-0 border-l border-blue-300 rounded-r hover:bg-blue-500 "
                    onClick={handleNextClick}>
                    Suivant
                    <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
