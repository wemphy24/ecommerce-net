import React from "react";
import Navbar from "../components/Navbar.jsx";
import PaymentMethod from "../components/PaymentMethod.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import BCA from "../assets/BCA.png";
import Paypal from "../assets/Paypal.png";
import Qris from "../assets/Qris.png";

export default function Transaction() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>

      <div className="main-payment flex-grow">
        <div className="flex items-center justify-center gap-8">
          <div className="payment-detail w-96 p-6 border rounded-xl bg-white m-6">
            <p className="font-medium text-lg">Payment details</p>
            <div className="flex items-center justify-between my-4">
              <p>Price plan</p>
              <p>Rp. 400,000</p>
            </div>
            <div className="flex items-center justify-between my-4">
              <p>Kode unik</p>
              <p>- Rp. 0</p>
            </div>
            <div className="flex items-center justify-between my-4">
              <p>PPN 11%</p>
              <p>- Rp. 44,000</p>
            </div>
            <div className="flex items-center justify-between my-4">
              <p>Total transfer</p>
              <p>Rp. 356,000</p>
            </div>
          </div>
          <div className="payment-detail flex flex-col gap-2">
            <PaymentMethod
              enable="true"
              title="BCA VA"
              logo={BCA}
              size="w-6"
            ></PaymentMethod>
            <PaymentMethod
              title="Paypal"
              logo={Paypal}
              size="w-6"
            ></PaymentMethod>
            <PaymentMethod title="Qris" logo={Qris} size="w-6"></PaymentMethod>
          </div>
        </div>
        <div className="font-medium flex justify-center">
          <Button label="Payment" size="w-96"></Button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
