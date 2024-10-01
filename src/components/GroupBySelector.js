const GroupBySelector = ({ setGroupBy }) => {
    return (
      <select onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
    );
  };
  
  export default GroupBySelector;
  