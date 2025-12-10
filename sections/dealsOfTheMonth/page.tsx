"use client";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import { ArrowRight, Router } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DealOfTheMonthCountdown() {
  const router = useRouter();

  const [dealOfTheMonthCountdown, setDealOfTheMonthCountdown] = useState({
    days: 120,
    hours: 18,
    minutes: 15,
    seconds: 10
  });

  return (
    <section className="flex-center gap-8.5">
      <div className="flex w-138 flex-col gap-7">
        <div className="month-deal-title text-4xl">Deals of the Month</div>
        <div className="month-deal-description">
          It is the long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that is has a more-or-less normal distribution
          of letters
        </div>
        <div className="month-deal-countdown flex gap-5">
          <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
            <div className="text-3xl font-bold">
              {dealOfTheMonthCountdown.days}
            </div>
            <div className="text-xl">Days</div>
          </div>
          <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
            <div className="text-3xl font-bold">
              {dealOfTheMonthCountdown.hours}
            </div>
            <div className="text-xl">Hours</div>
          </div>
          <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
            <div className="text-3xl font-bold">
              {dealOfTheMonthCountdown.minutes}
            </div>
            <div className="text-xl">Mins</div>
          </div>
          <div className="flex-center h-21 w-21 flex-col rounded-xl border-2 border-gray-200">
            <div className="text-3xl font-bold">
              {dealOfTheMonthCountdown.seconds}
            </div>
            <div className="text-xl">Secs</div>
          </div>
        </div>
        <div className="month-deal-button">
          <ButtonWithBlackBg
            btntext="View All Products"
            className="!w-49 gap-3"
            icon={<ArrowRight size={17} />}
            onClick={() => router.push("/shop/allProducts")}
          />
        </div>
      </div>
      <img
        src="/images/deal_of_the_month.jpg"
        alt="deal_of_the_month"
        className="h-125 w-138 rounded-sm object-cover object-top"
      />
    </section>
  );
}

export default DealOfTheMonthCountdown;
