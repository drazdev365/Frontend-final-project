export default function Footers({ text1, text2, text3, text4 }) {
  return (
    <div className="text-white flex flex-col gap-4 py-8 px-6 md:px-12">
      <h1 className="text-[1.75rem] font-medium text-center sm:text-left">
        {text1}
      </h1>
      <h2 className="text-sm sm:text-base">{text2}</h2>
      <h2 className="text-sm sm:text-base">{text3}</h2>
      <h2 className="text-sm sm:text-base">{text4}</h2>
    </div>
  );
}
