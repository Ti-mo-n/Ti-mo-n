import { Link, useParams } from 'react-router-dom';
import { FaBed, FaWifi, FaBath, FaTv, FaParking, FaTh } from 'react-icons/fa'; 
import { BsHeart } from 'react-icons/Bs';
import { Button } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { hostels } from './ExplorePage';  // Import the data from ExplorePage
import BookingDetails from './BookingDetails';
import './HostelList.css';

const HostelList = () => {
  const addToFavorites = () => {
    // Implement logic to add hostel to favorites
  };

  const params = useParams();
  const hostelId = params.id;

  // Filter the hostels based on the ID from the route parameters
  const hostel = hostels.filter((hostel) => {
    return hostel.id === Number(hostelId);
  })[0];

  // Function to toggle the visibility of the booking details
  function openBooking() {
    const book = document.getElementById("booking");

    if (book.classList.contains("hideBooking")) {
      book.classList.remove("hideBooking");
      book.classList.add("showBooking");
    } else {
      book.classList.add("hideBooking");
      book.classList.remove("showBooking");
    }
  }

  return (
    <section>
      <div className='details-card'>
        <div style={{ float: "left", marginLeft: "-430px" }}>

          {/* Link to navigate back to the list of hostels */}
          <Link to="/hostels">
            <button className='back'>back</button>
          </Link>

          {/* Display hostel images */}
          <div className='imgs'>
            {hostel.images.map((image, index) => (
              <div key={index}>
                <img src={`/src/images/${image}`} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Display hostel information */}
          <div className="hostel-info">
            <h2>{hostel.name}</h2>
            <h4>Price:</h4> <p>{hostel.price}</p>
            <h4>Location:</h4> <p>{hostel.location}</p>
            <h4>Description</h4> <p>{hostel.description}</p>

            {/* Display amenities if available */}
            <div className="amenities">
              {hostel.amenities && hostel.amenities.length > 0 && (
                <>
                  <p><FaBed /> {hostel.amenities.includes('Bed') && 'Bed'}</p>
                  <p><FaWifi /> {hostel.amenities.includes('Wifi') && 'Wifi'}</p>
                  <p><FaTh /> {hostel.amenities.includes('Bathroom') && 'Bathroom'}</p>
                  <p><FaTv /> {hostel.amenities.includes('TV') && 'TV'}</p>
                  <p><FaBath /> {hostel.amenities.includes('Bathroom') && 'Bathroom'}</p>
                  <p><FaParking /> {hostel.amenities.includes('Free Parking') && 'Free Parking'}</p>
                </>
              )}
            </div>

            {/* Button to add hostel to favorites */}
            <Button className="action-button" onClick={() => addToFavorites(hostel)}>
              <BsHeart /> Add to Favorites
            </Button>

            {/* Button to open the booking details */}
            <button className="book-now-button" onClick={openBooking}>Book Now</button>
          </div>
        </div>

        {/* Booking details component (initially hidden) */}
        <div style={{ position: "fixed", right: "30px" }} className='hideBooking' id="booking">
          <BookingDetails />
        </div>
      </div>
    </section>
  );
};

export default HostelList;
