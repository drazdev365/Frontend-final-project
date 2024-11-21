export default function Stat ({text, numb}){
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{text}</p>
      <p className="text-[2.125rem] font-bold">{numb}</p>
    </div>
  );
}