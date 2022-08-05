import { Paper } from "@material-ui/core";
import React from "react";

const Display = (data) => {
  console.log(data);
  if (data.data === null) {
    return <div>...loading</div>;
  }
  if (data.data !== null && data.data.id !== null) {
    let id;
    let model = data.data.id ? data.data.id : data.data[0].id;
    console.log(data.data.id);
    console.log(model);
    id = model.videoId ? model.videoId : model.channelId;
    const source = `http://www.youtube.com/embed/${id}`;
    return (
      <>
        <div style={{ height: "70vh", width: "70vw" }}>
          <Paper elevation={6} style={{ height: "70%" }}>
            <iframe height="100%" width="100%" src={source} />
          </Paper>
        </div>
      </>
    );
  }
};

export default Display;
