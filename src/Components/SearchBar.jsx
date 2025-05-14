const SearchBar = ({ query, onChange, onSearchClick, suggestions = [], onSelect }) => {
  return (
    <div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or company..."
          value={query}
          onChange={onChange}
          aria-label="Job search"
        />
        <button className="btn btn-primary" onClick={onSearchClick}>
          Search
        </button>
      </div>

      {suggestions?.length > 0 && (
        <ul className="list-group mb-3" role="listbox">
          {suggestions.map((sug) => (
            <li
              key={sug.id}
              className="list-group-item list-group-item-action"
              onClick={() => onSelect(sug)}
              style={{ cursor: "pointer" }}
              role="option"
            >
              {sug.title} at {sug.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
