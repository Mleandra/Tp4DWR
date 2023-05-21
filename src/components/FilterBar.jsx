import React from 'react';

const FilterBar = ({
    sortFilter,
    platformFilter,
    categoryFilter,
    setSortFilter,
    setPlatformFilter,
    setCategoryFilter
}) => {

    const handleSortChange = (event) => {
        setSortFilter(event.target.value);
    };

    const handlePlatformChange = (event) => {
        setPlatformFilter(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    return (
        <div className="flex justify-between mb-4">
            <div>
                <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900"></label>
                <select id="sort"
                    value={sortFilter}
                    onChange={handleSortChange}
                    className='block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg border border-gray-300  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300'>

                    <option seleected value="">All</option>
                    <option value="release-date">Release Date</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="popularity">Popularity</option>
                    <option value="relevance">Relevance</option>
                </select>
            </div>
            <div>
                <label htmlFor="platformFilter" className="block mb-2 text-sm font-medium text-gray-900"></label>

                <select id="platformFilter"
                    value={platformFilter}
                    onChange={handlePlatformChange}
                    className='block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg border border-gray-300  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300'>
                    <option selected value="">All</option>
                    <option value="pc">PC</option>
                    <option value="browser">Browser</option>
                </select>
            </div>
            <div>
                <label htmlFor="categoryFilter" className="block mb-2 text-sm font-medium text-gray-900"></label>
                <select id="categoryFilter"
                    value={categoryFilter}
                    onChange={handleCategoryChange}
                    className='block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg border border-gray-300  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300'>

                    <option selected value="">All</option>
                    <option value="mmorpg">MMORPG</option>
                    <option value="shooter">Shooter</option>
                    <option value="Social">Social</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
