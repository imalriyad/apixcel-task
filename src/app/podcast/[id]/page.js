"use client";

import Image from "next/image";
import play from "/public/Group 5.png";
import pause from "/public/pause.png";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "@/utils/SearchContext";
import Card from "@/components/shared/Card";
const PodcastPage = ({ params }) => {
  const [podcast, setPodcast] = useState([]);
  const { searchText } = useSearch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [related, setRelated] = useState([]);
  const audioRef = useRef(null);
  const { id } = params;

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/${searchText}`);
        const data = await res.json();
        const singlePodcast = data?.data?.find(
          (podcast) => podcast.id === parseInt(id)
        );
        setPodcast(singlePodcast);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, [searchText, id]);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://api.lyrics.ovh/suggest/Related`);
        const data = await res.json();
        setRelated(data.data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      }
    };

    fetchPodcast();
  }, []);

  const handlePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, []);
  return (
    <div className="bg-[#191919] min-h-screen text-white">
      <div className="relative ">
        <Image
          src={podcast?.album?.cover_xl}
          alt="dp"
          width={300}
          className="object-cover opacity-90 w-full h-[250px] "
          height={250}
        />
        {isPlaying ? (
          <Image
            src={pause}
            onClick={handlePlay}
            alt="dp"
            width={40}
            height={40}
            className="object-cover cursor-pointer centered-div"
          />
        ) : (
          <Image
            src={play}
            onClick={handlePlay}
            alt="dp"
            width={40}
            height={40}
            className="object-cover cursor-pointer centered-div"
          />
        )}

        <audio ref={audioRef} src={podcast?.preview} type="audio/mp3" />
      </div>
      <div className="py-8">
        <h1 className="text-sm">
          Music, often regarded as a universal language, possesses a profound
          impact on individuals and societies alike. While it has long been
          celebrated for its ability to evoke emotions, foster connections, and
          uplift spirits, the flip side of the melody reveals a spectrum of
          adverse effects that are often overlooked
        </h1>
      </div>

      <div className="pt-4" onClick={() => handleButtonClick("Related")}>
        <button className="btn btn-sm border-none px-8 text-white bg-[#3B3B3B] hover:bg-[#3B3B3B] rounded-3xl">
          Related
        </button>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-8">
          {related.map((podcast) => (
            <Card podcast={podcast} key={podcast.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
