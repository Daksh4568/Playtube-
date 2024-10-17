<<<<<<< HEAD
import React from "react";
import moment from "moment/moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
=======
import React from "react";
import moment from "moment/moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
>>>>>>> 741f9e865cb3776803bc21a74be3629e9fb5fafb
