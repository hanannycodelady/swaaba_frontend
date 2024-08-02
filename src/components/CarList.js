// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../components/car.css';

// const CarList = () => {
//   const [cars, setCars] = useState([]);
//   // const [uploadedImages, setUploadedImages] = useState([]); // Currently not used

//   useEffect(() => {
//     fetchCars();
//   }, []);

//   const fetchCars = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/api/v1/cars');
//       console.log('Response from API:', response.data)
//       setCars(response.data.cars);
//       console.log(response.data.cars);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
      
//     }
//   };

//   return (
//     <div>
//       <h2>Car List</h2>
//       {/* Display loading message while fetching data */}
//       {cars.length === 0 && <p>Loading cars...</p>}
//       <div className="car-grid">
//         {cars.map((car) => (
//           <div className="car-item" key={car.id}>
//             <div className="car-image-container">
//               <img src={`http://127.0.0.1:5000${car.url}`} alt={`${car.make} ${car.model}`} />
//             </div>
//             <div className="car-details">
//               <h3>{car.make} {car.model}</h3>
//               <p>Year: {car.year}</p>
//               <p>Price: ${car.price}</p>
//               <p>Description: {car.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarList;
