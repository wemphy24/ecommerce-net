import React from "react";

export default function PaymentMethod(props) {
  const logo = props.logo;
  const title = props.title;
  const size = props.size;
  const enable = props.enable;
  return (
    <div className="w-96 p-6 border rounded-xl bg-white">
      <div className="flex items-center justify-between">
        <div className="method flex items-center gap-4">
          <input type="radio" value="option1" checked={enable} />
          <p className="font-medium">{title}</p>
        </div>
        <img src={logo} size={size} alt="" />
      </div>
    </div>
  );
}
