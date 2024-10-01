const Card = ({ ticket }) => {
    const { title, priority, status,id,tag,user_available} = ticket;
  
    return (
      <div className="card">
        <div className="card-header">
        <p className="card-id" style={{}}>{id}</p>
        <p className="card-avatar">RK <span className={user_available ? "user-status live": "user-status gone"}></span></p>
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