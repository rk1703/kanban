import Card from "./Card";

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
              <img src={`/icons/SVG - Urgent Priority colour.svg`} alt={groupBy}></img>
              <h3>{group}</h3>
            </div>
            <div className="group-menu">
              <img src={`/icons/add.svg`} alt="add"/>
              <img src={`/icons/3dot.svg`} alt="menu"/>
            </div>
          </div>
          {groupedTickets[group].map((ticket) => (
            <Card key={ticket.id} ticket={ticket} group={group} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
