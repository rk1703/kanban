const SortBySelector = ({ setSortBy, initial }) => {
    return (
      <select onChange={(e) => setSortBy(e.target.value)} className="select-btn" defaultValue={initial}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    );
  };
  
  export default SortBySelector;
  