import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Products</Title>
      <div className="overflow-auto max-h-[400px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="transition-all bg-secondary border-gray-700
         hover:bg-primary"
            >
              <td
                className="py-4 px-6 font-medium whitespace-nowrap
           hover:text-white flex items-center gap-x-1 justify-center"
              ></td>
              <td
                className="py-4 px-6 font-medium whitespace-nowrap
           hover:text-white"
              >
                63049e92
              </td>
              <td
                className="py-4 px-6 font-medium whitespace-nowrap
           hover:text-white"
              >
                Delicious Pizza
              </td>
              <td
                className="py-4 px-6 font-medium whitespace-nowrap
           hover:text-white"
              >
                $16.99
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
