import * as RiIcon from "react-icons/ri";

const subHeader = () => {
  return (
    <section className="pt-7 md:max-w-5xl w-[95%] mx-auto" dir="rtl">
      <div className="flex items-center justify-between flex-wrap">
        <div className="md:w-[115px] w-[85px] md:h-[115px] h-[85px] rounded-full bg-gray-100 dark:bg-[#252525] border dark:shadow-lg flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold md:text-base text-sm">Search</h6>

          <span className="text-blue-600 dark:text-white">
            <RiIcon.RiSearch2Line size={29} />
          </span>
        </div>
        <div className="md:w-[115px] w-[85px] md:h-[115px] h-[85px] rounded-full bg-gray-100 dark:bg-[#252525] border dark:shadow-lg flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold md:text-base text-sm">Payment</h6>
          <span className="text-blue-600 dark:text-white">
            <RiIcon.RiSecurePaymentLine size={29} />
          </span>
        </div>
        <div className="md:w-[115px] w-[85px] md:h-[115px] h-[85px] rounded-full bg-gray-100 dark:bg-[#252525] border dark:shadow-lg flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold md:text-base text-sm">Transport</h6>
          <span className="text-blue-600 dark:text-white">
            <RiIcon.RiFlightTakeoffLine size={29} />
          </span>
        </div>
        <div className="md:w-[115px] w-[85px] md:h-[115px] h-[85px] rounded-full bg-gray-100 dark:bg-[#252525] border dark:shadow-lg flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold md:text-base text-sm">Happiness</h6>

          <span className="text-blue-600 dark:text-white">
            <RiIcon.RiOpenArmLine size={29} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default subHeader;
