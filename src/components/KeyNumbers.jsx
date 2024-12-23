import { CheckinIcon } from "../icons/CheckinIcon";
import { CheckoutIcon } from "../icons/CheckoutIcon";
import { MoneyIcon } from "../icons/MoneyIcon";
import { ReviewIcon } from "../icons/ReviewIcon";

export default function KeyNumbers() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div className="border border-gray-200 p-4 dark:bg-[#0B1120] dark:border-gray-800 rounded-xl shadow-md flex justify-between items-center">
        <div className="dark:text-white">
          <h2 className="text-xl font-normal leading-loose">Check-ins</h2>
          <p className="text-2xl font-semibold">12</p>
        </div>
        <div className="bg-[#E5F8ED] w-12 h-12 rounded-xl flex items-center justify-center">
          <CheckinIcon className="text-3xl text-[#22C55E]" />
        </div>
      </div>
      <div className="border border-gray-200 p-4 dark:bg-[#0B1120] dark:border-gray-800 rounded-xl shadow-md flex justify-between items-center">
        <div className="dark:text-white">
          <h2 className="text-xl font-normal leading-loose">Check-out</h2>
          <p className="text-2xl font-semibold">32</p>
        </div>
        <div className="bg-[#FEE8E2] w-12 h-12 rounded-xl flex items-center justify-center">
          <CheckoutIcon className="text-3xl text-[#EF4444]" />
        </div>
      </div>
      <div className="border border-gray-200 p-4 dark:bg-[#0B1120] dark:border-gray-800 rounded-xl shadow-md flex justify-between items-center">
        <div className="dark:text-white">
          <h2 className="text-xl font-normal leading-loose">Earnings</h2>
          <p className="">
            <span className="text-sm font-semibold">$</span>
            <span className="text-2xl font-semibold">4.293</span>
            <span className="text-sm text-gray-500">,68</span>
          </p>
        </div>
        <div className="bg-[#E5F8ED] w-12 h-12 rounded-xl flex items-center justify-center">
          <MoneyIcon className="text-2xl text-[#22C55E]" />
        </div>
      </div>
      <div className="border border-gray-200 p-4 dark:bg-[#0B1120] dark:border-gray-800 rounded-xl shadow-md flex justify-between items-center">
        <div className="dark:text-white">
          <h2 className="text-xl font-normal leading-loose">Reviews</h2>
          <p className="text-2xl font-semibold">
            <span>4.5</span>
            <span className="text-sm text-gray-500 ml-2">(100)</span>
          </p>
        </div>
        <div className="bg-[#E5F8ED] w-12 h-12 rounded-xl flex items-center justify-center">
          <ReviewIcon className="text-3xl text-[#22C55E]" />
        </div>
      </div>

    </div>
  );
}