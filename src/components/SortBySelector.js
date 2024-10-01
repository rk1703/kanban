const SortBySelector = ({ setSortBy }) => {
    return (
      <select onChange={(e) => setSortBy(e.target.value)} className="select-btn">
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    );
  };
  
  export default SortBySelector;
  