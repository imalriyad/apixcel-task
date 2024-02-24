import Image from "next/image";
import play from "/public/Group 5.png";
import Link from "next/link";
const Card = ({ podcast }) => {
  return (
    <>
      <div className="relative ">
        <Image
          src={podcast?.artist.picture}
          alt="dp"
          width={160}
          className="object-cover rounded-3xl w-full "
          height={160}
        />
        <Link href={`/podcast/${podcast.id}`}>
          <Image
            src={play}
            alt="dp"
            width={35}
            height={35}
            className="object-cover cursor-pointer centered-div"
          />
        </Link>
        <h1 className="text-sm text-center py-2 text-white">
          {podcast?.artist.name}
        </h1>
      </div>
    </>
  );
};

export default Card;
