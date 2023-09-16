import { useQuery } from "@tanstack/react-query";
import React from "react";
import AboutCard from "./AboutCard";
import AboutModal from "./AboutModal";

const About = () => {
  const { data: about = [], refetch } = useQuery({
    queryKey: ["aboutData"],
    queryFn: () =>
      fetch("https://social-media-server-pi-opal.vercel.app/aboutdata").then(
        (res) => res.json()
      ),
  });

  return (
    <div>
      <div className="flex justify-around mt-8">
        <h1 className="text-5xl font-semibold mt-5">About:</h1>
        {/* The button to open modal */}
        <div>
          <label htmlFor="about-modal" className="btn">
            Edit
          </label>
        </div>
      </div>

      <div>
        {about.map((data) => (
          <AboutCard key={data._id} data={data}></AboutCard>
        ))}
      </div>

      <AboutModal refetch={refetch}></AboutModal>
    </div>
  );
};

export default About;
