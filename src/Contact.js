// import React, { Component } from 'react';
// import Button from '../components/Button';
// import Layout from '../components/Layout';

// export class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fName: '',
//       lName: '',
//       email: '',
//       mobile: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleInterestChange = this.handleInterestChange.bind(this);
//   }
//   handleChange(e) {
//     console.log(e.target);
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   handleInterestChange(e) {
//     this.setState({
//       interest: [...this.state.interest, e.target.value],
//     });
//   }
//   render() {
//     const { fName, lName, mobile} = this.state;
//     console.log(this.state);
//     return (
//       <Layout>
//         <div className="contact">
//           <section className="input__section">
//             <label>First Name</label>
//             <input
//               type="text"
//               value={fName}
//               name="fName"
//               onChange={this.handleChange}
//             />
//           </section>
//           <section className="input__section">
//             <label>Last Name</label>
//             <input
//               type="text"
//               value={lName}
//               name="lName"
//               onChange={this.handleChange}
//             />
//           </section>
//           <section className="input__section">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               value={mobile}
//               name="mobile"
//               onChange={this.handleChange}
//             />
//           </section>
          
            
//           <section className="input__section">
//             <Button
//               buttonText="Submit"
//               onClick={() => {
//                 console.log(this.state);
//               }}
//             />
//           </section>
//         </div>
//       </Layout>
//     );
//   }
// }

// export default Contact;




import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", mobile: "" });
  function handleInputs(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("value", JSON.stringify(data));
    setData({ name: "", email: "", mobile: "" });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => {
              handleInputs(e);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Enter Mobile</label>
          <br />
          <input
            type="tel"
            name="mobile"
            value={data.mobile}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Contact;