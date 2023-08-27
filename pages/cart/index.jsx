import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>EXTRAS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src="/images/bbq2.png" alt="" width={50} height={50} />
                  <span>Burger Pizza</span>
                </td>
                <td>
                  <span>Ketchup ,Mayonnaise, Hot Sauce</span>
                </td>
                <td>$16.99</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="bg-secondary min-h-[calc(100vh_-_433px)] flex 
        justify-center  flex-col text-white p-12"
        >
          <Title addClass="text-[40px]">Cart Total</Title>
          <div className="mt-6">
            <b>Subtotal: </b>$16.99 <br />
            <b className="inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$16.99
          </div>
          <button className="btn-primary mt-4">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
