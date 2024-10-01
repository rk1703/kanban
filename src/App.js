import { useEffect, useState } from 'react';
import './App.css';
import GroupBySelector from './components/GroupBySelector'; 
import SortBySelector from './components/SortBySelector';
import Board from './components/Board';


const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then(response => response.json())
      .then(data => {
        // Add user information to the tickets
        const updatedTickets = data.tickets.map(ticket => {
          const user = data.users.find(u => u.id === ticket.userId);
          return {
            ...ticket,
            assigned_user: user ? user.name : 'Unknown User',
            user_available: user ? user.available : false
          };
        });
        setTickets(updatedTickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const sortTickets = (tickets, sortBy) => {
    return tickets.sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };
  

  return (
    <div>
    <GroupBySelector setGroupBy={setGroupBy} />
    <SortBySelector setSortBy={setSortBy} />
    <Board tickets={sortTickets(tickets, sortBy)} groupBy={groupBy} />
  </div>
  );
};

export default App;
