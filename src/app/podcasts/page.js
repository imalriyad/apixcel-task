"use client";
import { useEffect, useState } from "react";
import Card from "@/components/shared/Card";
import { useSearch } from "@/utils/SearchContext";
const Podcastpage = () => {
  const [foryou, setForyou] = useState([]);
  const [populer, setPopuler] = useState([]);
  const [trend, setTrend] = useState([]);
  const { setSearchText } = useSearch();
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/foryou`);
        const data = await res.json();
        setForyou(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, []);
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/populer`);
        const data = await res.json();
        setPopuler(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, []);
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/trend`);
        const data = await res.json();
        setTrend(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, []);

  const handleButtonClick = (text) => {
    setSearchText(text);
  };

  return (
    <div className="py-4">
      {/* Podcast - foryou*/}
      <button className="btn btn-sm border-none px-8 text-white bg-[#3B3B3B] hover:bg-[#3B3B3B] rounded-3xl">
        For You
      </button>
      <div
        onClick={() => handleButtonClick("For You")}
        className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-8"
      >
        {foryou?.map((podcast) => (
          <Card podcast={podcast} key={podcast.id}></Card>
        ))}
      </div>

      {/* Podcast - Popular*/}
      <div
        onClick={() => handleButtonClick("Popular")}
        className="pt-4 cursor-pointer"
      >
        <button className="btn btn-sm border-none px-8 text-white bg-[#3B3B3B] hover:bg-[#3B3B3B] rounded-3xl">
          Popular
        </button>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-8">
          {populer?.map((podcast) => (
            <Card podcast={podcast} key={podcast.id}></Card>
          ))}
        </div>
      </div>

      {/* Podcast - Trend*/}
      <div className="pt-4" onClick={() => handleButtonClick("Trend")}>
        <button className="btn btn-sm border-none px-8 text-white bg-[#3B3B3B] hover:bg-[#3B3B3B] rounded-3xl">
          Trend
        </button>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-8">
          {trend.map((podcast) => (
            <Card podcast={podcast} key={podcast.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcastpage;
