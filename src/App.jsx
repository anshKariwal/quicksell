import './App.css'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faPlus, faEllipsis, faFilter } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// HTTP client
import axios from 'axios'

// React hooks
import { useEffect, useState } from 'react'

// Custom utility function import
import { utility } from './assets/utility';

// Component imports
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'

// Adding Font Awesome icons to the library
library.add(fas, faCircle, faPlus, faEllipsis, faFilter);

// App component
function App() {
  // State variables
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  const [groupVal, setGroupVal] = useState(localStorage.getItem('group') || "status");
  const [orderVal, setOrderVal] = useState(localStorage.getItem('order') || "priority");
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  // Fetching data from API using useEffect hook
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // API call to retrieve data
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const tickets = res.data.tickets;
        const users = res.data.users;
  
        let newData = {};
  
        // Logic to organize data based on different criteria
        if (groupVal === 'status') {
          utility.status.forEach(val => {
            newData[val.toLowerCase()] = [];
          });
          tickets.forEach(ticket => {
            newData[ticket.status.toLowerCase()].push(ticket);
          });
        } else if (groupVal === 'user') {
          users.forEach(user => {
            newData[user.id] = [];
          });
          tickets.forEach(ticket => {
            newData[ticket.userId.toLowerCase()].push(ticket);
          });
        } else if (groupVal === 'priority') {
          utility.priority.forEach(value => {
            newData[value.toLowerCase()] = [];
          });
          tickets.forEach(ticket => {
            newData[utility.priority[ticket.priority].toLowerCase()].push(ticket);
          });
        }
  
        // Updating state with organized data
        setData(newData);
        setUsers(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Calling fetchData function
  }, [groupVal, orderVal]);
  

  return (
    <>
      {/* Navbar component */}
      <Navbar setOrder={setOrderVal} setGroup={setGroupVal} />
      <div className="ticketSection">
        {/* Mapping through data to render Section components */}
        {Object.keys(data).map((key, index) => (
          <Section key={index} name={groupVal !== "user" ? key : users.find(({id}) => id === key)?.name} tickets={data[key]} users={users} order={orderVal} group={groupVal}/>
        ))}
      </div>
    </>
  )
}

export default App
