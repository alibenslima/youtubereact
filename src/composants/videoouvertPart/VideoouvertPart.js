import React from "react";

const VideoouvertPart = () => {
  return (
    <div>
      <iframe
        title="onetitle"
        style={{ width: "1000px", height: "600px" }}
        src="https://www.youtube.com/embed/V8G0ILBE-Ok"
        frameborder="0"
      />

      <h6 style={{ color: "blue", fontSize: "13px" }}>
        #"Dev #développement #future"
      </h6>
      <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
        "Le futur est là. Nous sommes prêts...et vous?""
      </h3>
    </div>
  );
};

export default VideoouvertPart;
