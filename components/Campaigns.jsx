import Image from "next/image";

const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] ">
      <div
        className="relative w-44 h-44 after:content-[''] border-[5px]
         border-primary rounded-full overflow-hidden "
      >
        <Image
          src="/images/bg3.jpg"
          alt=""
          layout="fill"
          className="hover:scale-105 transition-all "
          objectFit="cover"
        />
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-5">
      <CampaignsItem />
      <CampaignsItem />
    </div>
  );
};

export default Campaigns;
