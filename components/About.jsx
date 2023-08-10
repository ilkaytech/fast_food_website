import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="contaner mx-auto">
        <div className="relative w-[445px] h-[600px]">
          <Image src="/images/about-img.png" alt="" layout="fill" />
        </div>
        <div>
          <Title>We are Feane</Title>
          <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            modi odit nobis tenetur vero aspernatur, eveniet rem voluptate
            veniam error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
