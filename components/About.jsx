import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px] flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Title addClass="text-[40px]">We are Feane</Title>
          <p className="my-5 flex flex-col items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            magnam nobis fuga ex quasi animi recusandae debitis iusto laborum,
            eius quo. Ullam error quo aut? Officiis, doloribus. Modi fugiat ad
            nostrum autem reiciendis expedita repellendus illum omnis voluptatem
            provident distinctio quisquam eos corrupti ipsa temporibus
            perferendis deleniti officia sapiente, magni ut! Accusamus, adipisci
            quod eveniet facilis eius reprehenderit omnis corrupti!
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
