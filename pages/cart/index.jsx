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
        justify-center  flex-col text-white p-8"
        >
          <Title>Cart Total</Title>
          <div>
            <span>Subtotal: $16.99</span>
            <span>Discount: $0.00</span>
            <span>Total: $16.99</span>
          </div>
          <button className="btn-primary">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
