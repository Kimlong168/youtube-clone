const VideoCard = ({
  thumnail,
  avatar,
  time,
  timestamp,
  title,
  channel,
  views,
  link,
}) => {
  return (
    <div>
      <div className="sm:rounded-lg hover:sm:rounded-none overflow-hidden cursor-pointer transition-all bg-gray-600 bg-blend-lighten hover:bg-blend-darken">
        <div className="relative">
          {/* <img
            className="object-cover w-full h-48  z-[-10]"
            src={thumnail}
            alt="thumnail"
          /> */}

          <iframe
            className="object-cover w-full h-48 z-[-10]"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <span className="absolute right-1 bottom-1 bg-black text-white rounded px-1 text-sm">
            {time}
          </span>
        </div>
      </div>
      <div className="flex gap-3 mt-3 px-2 sm:px-0">
        <div className="pt-2 basis-11">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src={avatar}
            alt="profile"
          />
        </div>
        <div className="w-11/12">
          <h4 className="text-md font-semibold line-clamp-2">{title}</h4>
          <p className="text-sm text-gray-500">{channel}</p>
          <p className="text-gray-500 text-sm">
            {views} Views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
