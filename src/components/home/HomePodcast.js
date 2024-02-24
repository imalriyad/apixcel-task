"use client";
import { useEffect, useState } from "react";
import Card from "../shared/Card";
import { useSearch } from "@/utils/SearchContext";
const HomePodcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const { searchText, setSearchText } = useSearch();

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/${searchText}`);
        const data = await res.json();
        setPodcasts(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, [searchText]);

  const tags = ["For You", "Popular", "Trend", "Pop", "Edm", "Rock"];

  return (
    <div>
      <div className="flex justify-around flex-wrap gap-4 w-full py-8">
        {tags.map((tag) => (
          <button
            onClick={() => setSearchText(tag)}
            className="btn btn-sm border-none px-8 text-white bg-[#3B3B3B] hover:bg-[#3B3B3B] rounded-3xl"
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        {podcasts.map((podcast) => (
          <Card podcast={podcast} key={podcast.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomePodcast;
