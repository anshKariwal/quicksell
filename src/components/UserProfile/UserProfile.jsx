import {NameInitialsAvatar} from 'react-name-initials-avatar';
import './userProfile.css';
import {utility} from '../../assets/utility'

function UserProfile(props) {
  const { username, available } = props;
  const colors = utility.colors;
  return (
    <div className="user-profile">
      <div className={`online-bubble online-bubble-${available}`}></div>
      <NameInitialsAvatar
        name={username}
        size="30px"
        borderStyle='none'
        borderWidth='0px'
        bgColor={colors[Math.floor(Math.random() * colors.length)]}
        textColor='white'
        textWeight="node"
      />
    </div>
  );
}

export default UserProfile;