import Card from "./Card";
import "./Board.css";

const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy]; // Dynamic grouping by status/user/priority
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

const Board = ({ tickets, groupBy }) => {
  // Group tickets based on selected option
  const groupedTickets = groupTickets(tickets, groupBy);

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="group-column">
          <div className="group-head">
            <div className="group-title">
              {groupBy === "userName" ? (
                <p className="card-avatar">RK <span className="user-status gone"></span></p>
              ) : (
                <img src={`/icons/${groupBy}/${group}.svg`} alt={groupBy} />
              )}

              <p>{group}</p>
              <p>{groupedTickets[group].length}</p>
            </div>
            <div className="group-menu">
              <img src={`/icons/menu-utility/add.svg`} alt="add" />
              <img src={`/icons/menu-utility/3dot.svg`} alt="menu" />
            </div>
          </div>
          {groupedTickets[group].map((ticket) => (
            <Card key={ticket.id} ticket={ticket}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
