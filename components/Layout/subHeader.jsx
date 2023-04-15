import * as RiIcon from "react-icons/ri";

const subHeader = () => {
  return (
    <section className="pt-10 max-w-5xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between">
        <div className="w-[120px] h-[120px] rounded-full bg-gray-100 border flex-col border-blue-500 flex items-center justify-center leading-7">
        <h6 className="font-semibold">Search</h6>
        
          <span className="text-blue-600">
            <RiIcon.RiSearch2Line size={36} />
          </span>
        </div>
        <div className="w-[120px] h-[120px] rounded-full bg-gray-100 border flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold">Payment</h6>
          <span className="text-blue-600">
            <RiIcon.RiSecurePaymentLine size={36} />
          </span>
        </div>
        <div className="w-[120px] h-[120px] rounded-full bg-gray-100 border flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold">Transport</h6>
          <span className="text-blue-600">
            <RiIcon.RiFlightTakeoffLine size={36} />
          </span>
        </div>
        <div className="w-[120px] h-[120px] rounded-full bg-gray-100 border flex-col border-blue-500 flex items-center justify-center leading-7">
          <h6 className="font-semibold">Happiness</h6>

          <span className="text-blue-600">
            <RiIcon.RiOpenArmLine size={36} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default subHeader;
