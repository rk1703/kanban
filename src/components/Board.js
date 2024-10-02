import Card from "./Card";
import "./Board.css";

const groupTickets = (tickets, groupBy) => {
  const grouped = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy]; // Dynamic grouping by status/user/priority
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
  
  // Sort the grouped object based on its keys
  const sortedGroup = Object.keys(grouped)
    .sort() // Sort keys in ascending order (for strings or numbers)
    .reduce((sortedAcc, key) => {
      sortedAcc[key] = grouped[key]; // Add the tickets for each sorted key
      return sortedAcc;
    }, {});

  return sortedGroup;
};

const sortTickets = (tickets, sortBy) => {
  return tickets.sort((a, b) => {
    if (sortBy === "priority") {
      return b.priority - a.priority;
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
};

const Board = ({ tickets, sortBy, groupBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);
  const prioritGrpName = ["No Priority", "Low", "Medium", "High", "Urgent"];

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="group-column">
          <div className="group-head">
            <div className="group-title">
              {groupBy === "userName" ? (
                <p className="card-avatar">
                  RK <span className="user-status gone"></span>
                </p>
              ) : (
                <img src={`/icons/${groupBy}/${group}.svg`} alt={groupBy} />
              )}

              <p className="grp-title-name">
                {groupBy === "priority" ? prioritGrpName[group] : group}
              </p>
              <p className="grp-cnt">{groupedTickets[group].length}</p>
            </div>
            <div className="group-menu">
              <img src={`/icons/menu-utility/add.svg`} alt="add" />
              <img src={`/icons/menu-utility/3dot.svg`} alt="menu" />
            </div>
          </div>
          {sortTickets(groupedTickets[group], sortBy).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
