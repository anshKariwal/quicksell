// Importing necessary modules and components
import './Dropdown.css'; // Make sure to import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useBoxVisible from '../../assets/hooks/useBoxVisible';
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

// Dropdown component
const Dropdown = ({ setOrder, setGroup }) => {
  // Retrieving values from localStorage
  const group = localStorage.getItem('group');
  const order = localStorage.getItem('order');

  // Using custom hook for dropdown visibility
  const { ref, parentRef, isBoxVisible } = useBoxVisible(false);

  // Handling group change function
  const handleGroupChange = (e) => {
    setGroup(e.target.value.toLowerCase());
    localStorage.setItem('group', e.target.value.toLowerCase());
  }

  // Handling order change function
  const handleOrderChange = (e) => {
    setOrder(e.target.value.toLowerCase());
    localStorage.setItem('order', e.target.value.toLowerCase());
  }

  return (
    <div className="container">
      <div role="button" ref={parentRef} className='dropdown-container'>
        {/* Icon */}
        <HiMiniAdjustmentsHorizontal />
        <div className="button-text">
          <span>
            Display
          </span>
          <span>
            {/* Font Awesome chevron-down icon */}
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" style={{ color: "#6e7279" }} />
          </span>
        </div>
      </div>
      {/* Conditional rendering based on visibility */}
      {isBoxVisible && (
        <div className="box" ref={ref}>
          {/* Grouping dropdown */}
          <div className='box-unit'>
            <span className='title-drop-down'>Grouping</span>
            <select className='select-tags' onChange={handleGroupChange}>
              <option selected={group === 'status'}>Status</option>
              <option selected={group === 'user'}>User</option>
              <option selected={group === 'priority'}>Priority</option>
            </select>
          </div>
          {/* Ordering dropdown */}
          <div className='box-unit'>
            <span className='title-drop-down'>Ordering</span>
            <select className='select-tags' onChange={handleOrderChange}>
              <option selected={order === 'priority'}>Priority</option>
              <option selected={order === 'title'}>Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
