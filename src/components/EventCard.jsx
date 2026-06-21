import { FaMapMarkerAlt } from "react-icons/fa";

function EventCard({ event }) {
  return (
    <div className="card">
      <img src={event.image} alt={event.title} />

      <div className="card-content">
        <div className="date">
          <span>{event.date.split(" ")[0]}</span>
          <h3>{event.date.split(" ")[1]}</h3>
        </div>

        <div className="details">
          <h4>{event.title}</h4>
        </div>
      </div>

      <div className="location">
        <FaMapMarkerAlt />
        <span>{event.location}</span>
      </div>
    </div>
  );
}

export default EventCard;
