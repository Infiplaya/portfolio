import Image from "next/future/image";
import profileImg from "../public/profilepic.png";

export default function ProfileImg() {
  return (
    <Image
      src={profileImg}
      alt="My picture"
      className="self-center border-solid border-4 border-blue-500 mb-5 rounded-full w-8/12 sm:w-56"
    ></Image>
  );
}
