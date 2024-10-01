import Card from "./Card";


const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];  // Dynamic grouping by status/user/priority
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };
  
  const Board = ({ tickets, groupBy, sortBy }) => {
    // Group tickets based on selected option
    const groupedTickets = groupTickets(tickets, groupBy);
  
    return (
      <div className="board">
        {Object.keys(groupedTickets).map(group => (
          <div key={group} className="group-column">
            <h3>{group}</h3>
            {groupedTickets[group].map(ticket => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Board;
  
  