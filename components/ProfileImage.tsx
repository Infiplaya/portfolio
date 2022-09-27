import Image from "next/image";
import profileImg from "../public/profile.png";

export default function ProfileImg() {
  return (
    <div className="self-center border-solid border-2 border-blue-500 w-52 h-52 mb-5 rounded-full">
      <Image
        src={profileImg}
        alt="My picture"
        className="rounded-full border-solid"
      ></Image>
    </div>
  );
}
