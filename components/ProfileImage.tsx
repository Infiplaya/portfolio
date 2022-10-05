import Image from "next/future/image";
import profileImg from "../public/profile.png";

export default function ProfileImg() {
  return (
    <Image
      src={profileImg}
      alt="My picture"
      width={150}
      height={150}
      className="self-center border-solid border-2 border-blue-500 mb-5 rounded-full"
    ></Image>
  );
}
