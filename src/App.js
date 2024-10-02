import { useEffect, useState, useRef } from "react";
import "./App.css";
import GroupBySelector from "./components/GroupBySelector";
import SortBySelector from "./components/SortBySelector";
import Board from "./components/Board";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref && !ref.current.contains(event.target) && open) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, open, setOpen]);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        // Add user information to the tickets
        const updatedTickets = data.tickets.map((ticket) => {
          const user = data.users.find((u) => u.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unknown User",
            priorityName: ["No Priority", "Low", "Medium", "High", "Urgent"][
              ticket.priority
            ],
            user_available: user ? user.available : false,
          };
        });
        setTickets(updatedTickets);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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

  return (
    <div>
      <div className="dropdown" ref={ref}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className="display-btn"
        >
          <img src="/icons/dropdown/display.svg" alt="display" /> Display{" "}
          <img src="/icons/dropdown/down.svg" alt="down" />
        </button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <p>Grouping</p>
              <GroupBySelector setGroupBy={setGroupBy} />
            </li>
            <li className="menu-item">
              <p>Sorting</p>
              <SortBySelector setSortBy={setSortBy} />
            </li>
          </ul>
        ) : null}
      </div>
      <Board tickets={sortTickets(tickets, sortBy)} groupBy={groupBy} />
    </div>
  );
};

export default App;
