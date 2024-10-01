const SortBySelector = ({ setSortBy }) => {
    return (
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    );
  };
  
  export default SortBySelector;
  