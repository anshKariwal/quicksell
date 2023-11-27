import './Cards.css'; // Ensure this CSS file exists and contains the styles
import UserProfile from '../UserProfile/UserProfile'; // Assuming UserProfile is in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {utility} from '../../assets/utility'

const Cards = (props) => {
  const { id, title, tags, user, ticket } = props; // Destructuring props
  const groupedBy = localStorage.getItem('group')
  const groupedByUser = groupedBy === 'user';
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <span className="feature-card-id">{id}</span>
        {!groupedByUser ? <UserProfile username={user.name} available={user.available}/> : null} 
      </div>
      <div className="feature-card-title">
        <div className="card-status">
          <div className="card-status-icon">{ (groupedBy !== 'status') ? utility.statusMap[ticket.status.toLowerCase()] : null}</div>
          <div className="card-status-title">{title}</div>
        </div>
      </div>
      <div className="feature-tags-and-icon">
        <div className="feature-card-tags">
        {(groupedBy !== 'priority') ? utility.priorityArr[ticket.priority] : null}
          {tags.map((tag, index) => (
            <div className='feature-request-btn-container' key={index}>
              <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#bec2c8",}} />
              <span className="feature-request-btn">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
