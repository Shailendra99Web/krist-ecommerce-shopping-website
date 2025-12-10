import { CircleDollarSign, CreditCard, Headphones, Package } from "lucide-react";
import React from "react";

function OurServices() {
  const OurServicesData = [
    {
      title: "Free Shipping",
      icon: <Package />,
      description: "Free shipping for order above $150"
    },
    {
      title: "Money Guarantee",
      icon: <CircleDollarSign />,
      description: "Within 30 days for an exchange"
    },
    {
      title: "Online Support",
      icon: <Headphones />,
      description: "24 hours a day, 7 days a week"
    },
    {
      title: "Flexible Payment",
      icon: <CreditCard />,
      description: "Pay with mulitple credit cards"
    }
  ];

  return (
    <section className="max-w-primary mx-auto my-[100px]">
      <div className="flex items-center justify-between">
        {OurServicesData.map((item, index) => (
          <div key={index}>
            {React.cloneElement(item.icon, {
              className: "size-8"
            })}
            <div className="text-xl font-bold pt-5 pb-1">{item.title}</div>
            <div className="">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
