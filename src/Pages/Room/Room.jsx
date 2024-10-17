import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams(); // Get roomId from URL params
  const meetingContainerRef = useRef(null); // Ref to hold the container element

  const myMeeting = async (element) => {
    const appID = 664577502;
    const serverSecret = "c3971d7e7781a9522368a7da4f04a7fa";

    // Generate a username (you can customize it based on the user)
    const userName = "Guest" + Date.now(); 

    // Generate the kit token for the meeting
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      userName
    );

    // Create a ZegoUIKitPrebuilt instance
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    // Join the room if the zc object is valid
    if (zc && typeof zc.joinRoom === "function") {
      zc.joinRoom({
        container: element, // Assign the ref as container
        sharedLinks: [
          {
            name: "Copy Link",
            url: `http://localhost:3000/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    } else {
      console.error("Failed to create ZegoUIKit instance.");
    }
  };

  // UseEffect to ensure the meeting is initialized only once on component mount
  useEffect(() => {
    if (meetingContainerRef.current) {
      myMeeting(meetingContainerRef.current); // Call myMeeting only once with the container element
    }
  }, []);

  return (
    <div>
      <div ref={meetingContainerRef} /> {/* Container for ZegoCloud meeting */}
    </div>
  );
};

export default Room;
