const SearchBar = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-red-600 text-white rounded disable:bg-gray-300"
      >
        Back
      </button>
      <span className="text-gray-700">
        {page} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-green-600 text-white rounded disable:bg-gray-300"
      >
        Straight
      </button>
    </div>
  );
};

export default SearchBar;
