const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col ">
        <div
          className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10
    overflow-x-auto w-full"
        >
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
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
      </div>
    </div>
  );
};

export default Order;
