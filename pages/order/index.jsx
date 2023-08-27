import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div
        className="min-h-[calc(100vh_-_433px)] flex justify-center
    items-center flex-col p-10 min-w-[1000px]"
      >
        <div className="flex items-center flex-1  w-full max-h-28 ">
          <table className="w-full text-sm text-center text-gray-500 ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary  ">
                <td
                  className="py-4 px-6 font-medium whitespace-nowrap hover:text-white
            flex items-center gap-x-1 justify-center"
                >
                  <span>63107F5559</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>ilkay öztürk</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Çankaya Sk.Ata Apt.No:7 Kızılay/Ankara
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $16.99
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-6 ">
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col items-center animate-pulse">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
