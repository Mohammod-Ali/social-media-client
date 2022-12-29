import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";
import AboutModal from "./AboutModal";

const About = () => {
    // const [ about, setAbout ] = useState([])

    // useEffect( () => {
    //     fetch('http://localhost:5000/aboutdata')
    //     .then(res => res.json())
    //     .then(data => setAbout(data))
    // },[])

    const {data: about = [], refetch } = useQuery({
        queryKey: ['aboutData'],
        queryFn: () => fetch("http://localhost:5000/aboutdata")
        .then((res) => res.json())
      })

  return (
    <div>
      <div className="flex justify-around mt-8">
      <h1 className="text-5xl font-semibold mt-5">About:</h1>
      <div>
      <label htmlFor="about-modal" className="btn">
        Edit 
      </label>
      </div>
      </div>
      {/* The button to open modal */}


      <div>
      {
        about.map(data => <AboutCard
        key={data._id}
        data={data}
        ></AboutCard>)
      }
      </div>
      
      <AboutModal refetch={refetch}></AboutModal>
    </div>
  );
};

export default About;
