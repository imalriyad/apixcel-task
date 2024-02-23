"use client";
import Image from "next/image";
import play from "/public/Group 5.png";
import { useEffect, useState } from "react";
const Card = () => {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch("https://api.lyrics.ovh/suggest/podcast");
        const data = await res.json();
        setPodcasts(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, []);

  return (
    <div className="mt-10 grid grid-cols-4">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="relative w-[160px]">
          <Image
            src={podcast.artist.picture}
            alt="dp"
            width={160}
            className="object-cover rounded-3xl "
            height={160}
          />
          <Image
            src={play}
            alt="dp"
            width={35}
            height={35}
            className="object-cover cursor-pointer centered-div"
          />
          <h1 className="text-sm text-center py-2 text-white">Music Name</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
