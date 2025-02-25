import VideoCard from "./VideoCard";
import avatar from "../assets/avatar.jpg";
import thumnail from "../assets/thumnail.jpg";
import kimlong from "../assets/kimlong.jpg";
import kimlongThumnail from "../assets/kimlongThumnail.jpg";
import Short from "./Short";
const VideoContainer = ({ handleShowSideBar }) => {
  return (
    <div
      className="pr-0 pl-0 sm:pr-24 sm:pl-24 md:ml-24 pt-32 md:pr-12 md:pl-10 mb-5"
      onClick={() => {
        handleShowSideBar(false);
        document.body.style.overflow = "auto";
      }}
      id="vdo-container"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-x-5 gap-y-14">
        <VideoCard
          thumnail={kimlongThumnail}
          avatar={kimlong}
          time={"26:36"}
          timestamp="1 day ago"
          title="How to become a loyal boyfriend "
          channel="Kimlong Chann"
          views="1.2M"
          link={"https://www.youtube.com/embed/nP_uy6xeEaM"}
        />

        <VideoCard
          thumnail={thumnail}
          avatar={avatar}
          time={"1:23:06"}
          timestamp="1 hour ago"
          title="How to make a website using HTML CSS Bootstrap | website turtorial lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          channel="Easy Tutorials"
          views="1.2M"
          link={"https://www.youtube.com/embed/1X7fZoDs9KU"}
        />
        <VideoCard
          thumnail={kimlongThumnail}
          avatar={kimlong}
          time={"26:36"}
          timestamp="1 day ago"
          title="How to become a loyal boyfriend "
          channel="Kimlong Chann"
          views="1.2M"
          link={"https://www.youtube-nocookie.com/embed/5-bWpeHiTzs?controls=0"}
        />

        <VideoCard
          thumnail={kimlongThumnail}
          avatar={kimlong}
          time={"26:36"}
          timestamp="1 day ago"
          title="How to become a loyal boyfriend "
          channel="Kimlong Chann"
          views="1.2M"
          link={"https://www.youtube-nocookie.com/embed/Z7f7wjYO_vI?controls=0"}
        />

        <VideoCard
          thumnail={thumnail}
          avatar={avatar}
          time={"1:23:06"}
          timestamp="1 hour ago"
          title="How to make a website using HTML CSS Bootstrap | website turtorial lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          channel="Easy Tutorials"
          views="1.2M"
          link={"https://www.youtube-nocookie.com/embed/LKBcuY9a22I?controls=0"}
        />

        <VideoCard
          thumnail={thumnail}
          avatar={avatar}
          time={"1:23:06"}
          timestamp="1 hour ago"
          title="How to make a website using HTML CSS Bootstrap | website turtorial lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
          channel="Easy Tutorials"
          views="1.2M"
          link={"https://www.youtube-nocookie.com/embed/bWQBncpct1s?controls=0"}
        />
      </div>

      <div className="p-4 md:p-0">
        <Short />
      </div>
    </div>
  );
};

export default VideoContainer;
