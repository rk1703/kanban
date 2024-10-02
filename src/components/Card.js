import './Card.css';

const Card = ({ ticket }) => {
    const { title, priority, status,id,tag,user_available, userName} = ticket;

    const avatarName = userName.split(" ").map((word) => word[0]).join("");
  
    return (
      <div className="card">
        <div className="card-header">
        <p className="card-id" style={{}}>{id}</p>
        <p className="card-avatar">{avatarName} <span className={user_available ? "live": "gone"}></span></p>
        </div>
        <div className="card-body">
        <img src={`/icons/card-status/${status}.svg`} alt="status"></img>
        <p className="card-title">{title}</p>
        </div>
        <div className="card-footer">
          <img src={`/icons/card-priority/${priority}.svg`} alt="priority"></img>
          {tag.map((tg,index) => (
            <p className="tag-feature" key={index}><span className="tag-dot"></span> {tg}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default Card;