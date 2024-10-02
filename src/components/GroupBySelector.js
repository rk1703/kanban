const GroupBySelector = ({ setGroupBy, initial}) => {
    return (
      <select onChange={(e) => setGroupBy(e.target.value)} className="select-btn" defaultValue={initial}>
        <option value="status">Status</option>
        <option value="userName">User</option>
        <option value="priority">Priority</option>
      </select>
    );
  };
  
  export default GroupBySelector;