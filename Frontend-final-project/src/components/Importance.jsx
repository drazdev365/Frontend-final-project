
function Importance({image,text}) {
  return (
    <div className=" flex flex-col gap-4">
      <img src={image} alt="" />
      <h6 className="w-[270px]">{text}</h6>
    </div>
  )
}

export default Importance