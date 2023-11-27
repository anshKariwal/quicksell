import "./Headings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "../UserProfile/UserProfile";
import { utility } from "../../assets/utility";

const getIcon = (group, user = { name: "", available: false }, title = "") => {
  const iconMap = {
    user: <UserProfile username={user?.name} available={user?.available} />,
    priority: utility.priorityMap[title.toLowerCase()],
    status: utility.statusMap[title.toLowerCase()],
  };
  return <span className="icon-header">{iconMap[group.toLowerCase()]}</span>;
};
const Headings = (props) => {
  const { title, number, group, user } = props;

  return (
    <div className="container">
      <div className="left">
        {getIcon(
          group,
          user?.find((user) => user?.name === title),
          title
        )}
        <span className="title">{title}</span>
        <span className="number">{number}</span>
      </div>
      <div className="right">
        <FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "#6e7279" }} />
        <FontAwesomeIcon
          icon="fa-solid fa-ellipsis"
          style={{ color: "#6e7279" }}
        />
      </div>
    </div>
  );
};

export default Headings;
