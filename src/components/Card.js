const Card = ({ ticket }) => {
    const { title, priority, status, assigned_user } = ticket;
    const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  
    return (
      <div className="card">
        <h4>{title}</h4>
        <p>Status: {status}</p>
        <p>Priority: {priorityLabels[priority]}</p>
        <p>Assigned to: {assigned_user}</p>
      </div>
    );
  };
  
  export default Card;
  