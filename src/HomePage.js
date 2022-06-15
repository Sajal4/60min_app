// import React, { Component } from 'react';
// import Banner from './components/Banner';
// import Layout from './components/Layout';
// import { moviedata } from "./moviedata";

// export class HomePage extends Component {
//   render() {
//     return (
//       <Layout>
//         <Banner />
//       </Layout>
//     );
//   }
// }


import React from "react";
import { movieData } from "./moviedata";

function HomePage() {
  const { baseUrlImage, results } = movieData;
  console.log(results);
  return (
    <div className="flex wrap">
      {results.map((e) => {
        return (
          <div class="flex flex-col p5" key={e.id}>
            <img width="150px" src={`${baseUrlImage}${e.poster_path}`} alt="" />
            <h1 style={{ width: "50px" }}>{e.title}</h1>
            <p>{e.release_date}</p>
            
          </div>
        );
      })}
    </div>
  );
}


export default HomePage;
