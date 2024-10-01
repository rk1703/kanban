const Card = ({ ticket,group }) => {
    const { title, priority, status, assigned_user,id,tag } = ticket;
    const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  
    return (
      <div className="card">
        <div className="card-header">
        <p className="card-id" style={{}}>{id}</p>
        <p className="card-avatar">RK <span>{""}</span></p>
        </div>
        <div className="card-body">
        <img src={`/icons/card-status/${status}.svg`} alt="status"></img>
        <p className="card-title">{title}</p>
        </div>
        <div className="card-footer">
          <img src={`/icons/card-priority/${priority}.svg`} alt="priority"></img>
        <p className="tag-feature"><span className="tag-dot"></span> {tag[0]}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  

  // {
  //   "id": "CAM-1",
  //   "title": "Update User Profile Page UI",
  //   "tag": [
  //     "Feature request"
  //   ],
  //   "userId": "usr-1",
  //   "status": "Todo",
  //   "priority": 4
  // },