const GroupBySelector = ({ setGroupBy }) => {
    return (
      <select onChange={(e) => setGroupBy(e.target.value)} className="select-btn">
        <option value="status">Status</option>
        <option value="userName">User</option>
        <option value="priorityName">Priority</option>
      </select>
    );
  };
  
  export default GroupBySelector;