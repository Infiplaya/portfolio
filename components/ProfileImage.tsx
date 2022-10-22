import Image from "next/future/image";
import profileImg from "../public/profilepic.png";

export default function ProfileImg() {
  return (
    <div className="flex flex-col mt-10">
      <Image
        src={profileImg}
        alt="My picture"
        className="self-center shadow shadow-gray-500 overflow-hidden mb-5 rounded-full w-5/12 sm:w-40"
      ></Image>
      <h1 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r dark:from-lime-400 dark:via-pink-300 dark:to-lime-400 from-blue-800 via-orange-800 to-blue-800 background-animate">
        Paweł Sobaniec
      </h1>
    </div>
  );
}
