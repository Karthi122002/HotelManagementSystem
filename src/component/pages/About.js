import './About.css';
import { FaHotel, FaUserTie, FaUsers } from 'react-icons/fa';

export default function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="about-heading">About Us</h2>
                <h1 className="about-title">Welcome to <span>ROYAL HOTEL</span></h1>
                <p className="about-description">
                    The hotel chains strive to consistently provide unparalleled levels of luxury, comfort,
                    and service to exceed the expectations of guests. They also put efforts into ensuring
                    the complete satisfaction of every guest, anticipating and fulfilling their needs with a
                    focus on personalized service. So it’s obvious that each hotel chain’s main mission and
                    vision is to be the most hospitable company in the world by creating and delivering
                    exceptional experiences to its guests.
                </p>
                <div className="stats-container">
                    <div className="stat-card">
                        <FaHotel className="icon hotel-icon" />
                        <h2 className="stat-number">234</h2>
                        <p className="stat-label">Rooms</p>
                    </div>
                    <div className="stat-card">
                        <FaUserTie className="icon staff-icon" />
                        <h2 className="stat-number">1234</h2>
                        <p className="stat-label">Staffs</p>
                    </div>
                    <div className="stat-card">
                        <FaUsers className="icon clients-icon" />
                        <h2 className="stat-number">2234</h2>
                        <p className="stat-label">Clients</p>
                    </div>
                </div>
                <button className="explore-button">Explore More</button>
            </div>
            <div className="image-gallery">
                <img src={require("../../Assets/about-1.jpg")} className="home-pic" alt="Resort View" />
                <img src={require("../../Assets/about-2.jpg")} className="home-pic" alt="Poolside" />
                <img src={require("../../Assets/about-3.jpg")} className="home-pic" alt="Luxury Hotel" />
                <img src={require("../../Assets/about-4.jpg")} className="home-pic" alt="Lounge Area" />
            </div>
        </section>
    )
}
