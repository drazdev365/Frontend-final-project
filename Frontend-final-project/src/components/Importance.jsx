function Importance({ image, text }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center sm:w-[18rem] md:w-[20rem]">
      <img
        src={image}
        alt=""
        className="w-full h-auto max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem]"
      />
      <h6 className="text-center sm:text-lg">{text}</h6>
    </div>
  );
}

export default Importance;
