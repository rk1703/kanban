const GroupBySelector = ({ setGroupBy }) => {
    return (
      <select onChange={(e) => setGroupBy(e.target.value)} className="select-btn">
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    );
  };
  
  export default GroupBySelector;