// import React, { Component } from 'react';
// import '../components/';
// import md5 from 'md5';

// class Signin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   // Handle input changes
//   handleInputChange = (event) => {
//     const target = event.target;
//     let value = target.value;
//     const name = target.name;

//     if (name === 'password') {
//       value = md5(value); // Hash password
//     }

//     this.setState({
//       [name]: value,
//     });

//     document.getElementById(name).style.fontFamily = 'Montserrat black';
//   };

//   // Set input to empty when focused
//   setEmptyValue = (event) => {
//     const name = event.target.name;
//     document.getElementById(name).value = '';
//   };

//   // Handle form submission
//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     try {
//       const response = await fetch('YOUR_API_URL/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       // Handle the response data, e.g., save the token
//       console.log('Login successful', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   render() {
//     return (
//       <div className="login">
//         <h4>Welcome!</h4>
//         <form onSubmit={this.handleSubmit}>
//           <div className="text_area">
//             <input
//               type="text"
//               id="email"
//               name="email"
//               defaultValue={this.state.email}
//               onChange={this.handleInputChange}
//               onFocus={this.setEmptyValue}
//               className="text_input"
//             />
//           </div>
//           <div className="text_area">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               defaultValue={this.state.password}
//               onChange={this.handleInputChange}
//               onFocus={this.setEmptyValue}
//               className="text_input"
//             />
//           </div>
//           <input type="submit" value="SIGN IN" className="btn" />
//         </form>
//         <br />
//         <br />
//         <br />
//         <br />
//         <button className="btn signup-btn" onClick={this.handleSignUp}>
//           Sign Up
//         </button>
//         <p className="swaaba">Swaaba-Aralee Limited</p>
//       </div>
//     );
//   }
// }

// export default Signin;
