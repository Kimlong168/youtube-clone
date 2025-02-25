

const ShortVdoCard = () => {
  return (
    <div className="w-full  flex-nowrap">
      <div className="w-100 h-[370px] bg-gray-600 rounded-md overflow-hidden">
        {/* <img
          className="w-full h-full object-cover"
          src={
            "https://i.ytimg.com/vi/fmN3gEGhRxg/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCZAYfsGFwjD0f32hoY8bivD1jBRw"
          }
          alt="vdo_short"
        /> */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/opLzc7xnCqE"
          title="Marble Run ASMR☆ HABA Wave Slope, Skeloeton Car #shorts #marblerun @marblerunone"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="leading-5 mt-4 ">
        <div className="flex justify-between shortTitle cursor-pointer ">
          <p className="line-clamp-2 w-11/12 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, repellendus.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 rotate-90 dot"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <small className="text-gray-400 py-2">1M views</small>
      </div>
    </div>
  );
};

export default ShortVdoCard;
