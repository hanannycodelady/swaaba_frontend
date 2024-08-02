import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import InquiryForm from "../components/InquiryForm";
import "../components/car.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCarId, setSelectedCarId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/v1/cars");
        setCars(response.data.cars);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cars");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleBuyNow = (carId) => {
    // Navigate to the checkout page with the car ID
    navigate(`/checkout/${carId}`);
  };

  const toggleInquiryForm = (carId) => {
    // Toggle inquiry form visibility for the selected car
    if (selectedCarId === carId) {
      setSelectedCarId(null);
    } else {
      setSelectedCarId(carId);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img
            src={car.images[0]?.path || "default-image-path.jpg"}
            alt={`${car.make} ${car.model}`}
            className="car-image"
          />
          <div className="car-details">
            <h3>
              {car.year} 
              {car.make} 
              {car.model}
            </h3>
            <p>{car.description}</p>
            <p>Price: ${car.price.toLocaleString()}</p>

            <div className="car-actions">
              <button
                className="btn inquiry-btn"
                onClick={() => toggleInquiryForm(car.id)}
              >
                {selectedCarId === car.id ? "Close Inquiry" : "Inquiry"}
              </button>
              <button
                className="btn buy-now-btn"
                onClick={() => handleBuyNow(car.id)}
              >
                Buy Now
              </button>
            </div>

            {selectedCarId === car.id && (
              <div className="inquiry-form-container">
                <InquiryForm carId={car.id} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
