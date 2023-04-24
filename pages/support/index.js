import Select from "react-select";
import Container from "@/container/Container";

const options = [
  { value: "Account", label: "Account" },
  { value: "Sales", label: "Sales" },
  { value: "Accounting", label: "Accounting" },
  { value: "Complaint", label: "Complaint" },
];

const Support = () => {
  return (
    <Container>
      <section className="h-screen place-items-center grid">
        <form className="border border-slate-400 border-solid w-[30%] mx-auto rounded py-2 px-3 shadow">
          <h3 className="text-3xl font-semibold text-blue-500 text-center">
            Support
          </h3>
          <div className="my-3">
            <Select placeholder="Category" options={options} />
          </div>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="my-3 rounded pl-3 h-[38px] w-full border border-gray-400 outline-none border-solid focus:duration-300 focus:transition-all focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            className="my-3 rounded pl-3 h-[120px] resize-none w-full border border-gray-400 outline-none border-solid focus:duration-300 focus:transition-all focus:border-blue-500"
          ></textarea>
          <button className="text-xl rounded transition-all duration-300  h-[45px] w-full border text-white bg-blue-500 border-none ">
            Send
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Support;
