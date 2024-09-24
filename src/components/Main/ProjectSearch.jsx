import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/actions";
import { useEffect, useState } from "react";

export default function ProjectSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const [tempInput, setTemInput] = useState(searchTerm);

  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(setSearchTerm(tempInput));
    }, 500);
    return () => clearTimeout(timeId);
  }, [tempInput, dispatch]);

  const handleSearch = (event) => {
    setTemInput(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search articles..."
          value={tempInput}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

ProjectSearch.propTypes = { setSearchTerm: PropTypes.func.isRequired };
