import { useEffect, useState, useRef } from "react";
import "./App.css";
import GroupBySelector from "./components/GroupBySelector";
import SortBySelector from "./components/SortBySelector";
import Board from "./components/Board";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || "priority");
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
    localStorage.setItem('sortBy', sortBy)
}, [sortBy])

useEffect(() => {
    localStorage.setItem('groupBy', groupBy)
}, [groupBy])

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
            user_available: user ? user.available : false,
          };
        });
        setTickets(updatedTickets);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
              <GroupBySelector setGroupBy={setGroupBy} initial={groupBy}/>
            </li>
            <li className="menu-item">
              <p>Sorting</p>
              <SortBySelector setSortBy={setSortBy} initial={sortBy}/>
            </li>
          </ul>
        ) : null}
      </div>
      <Board tickets={tickets} sortBy={sortBy} groupBy={groupBy} />
    </div>
  );
};

export default App;
