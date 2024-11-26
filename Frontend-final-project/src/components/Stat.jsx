export default function Stat({ text, numb }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xs sm:text-sm lg:text-base">{text}</p>
      <p className="text-[2.125rem] font-bold text-center sm:text-3xl lg:text-4xl">
        {numb}
      </p>
    </div>
  );
}
