import { useState } from "react";
import EventCard from "../components/EventCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/EventHistory.css";

const events = [
  {
    image: "/images/event1.jpg",
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Concert"
  },
  {
    image: "/images/event2.jpg",
    title: "Cultural Dance Festival",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Festival"
  },
  {
    image: "/images/event3.jpg",
    title: "IoT 101 Workshop",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Workshop"
  },
  {
    image: "/images/event4.jpg",
    title: "Tech Expo",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Workshop"
  },
  {
    image: "/images/event5.jpg",
    title: "CSE Gathering",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Meetup"
  },
  {
    image: "/images/event6.jpg",
    title: "Prize Pool Competition",
    date: "APR 14",
    location: "University of Moratuwa",
    category: "Competition"
  }
];

export default function EventHistory() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Workshops", "Popular", "Latest", "University", "Price"];

  const filteredEvents = selectedFilter === "All" 
    ? events 
    : events.filter(event => event.category === selectedFilter);

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        
        {/* Header Section */}
        <div className="header-section">
          <h1>All Events</h1>
          <div className="filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="event-grid">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
