import React, { useState } from "react";
import Header from "./header";
import List from "./list";
import Display from "./display";
import Styled from "styled-components";
import api from "./link";
const Show = Styled.span`
display:flex;
flex-direction:row;
`;

const Mainpage = () => {
  const [check, setCheck] = useState(null);
  const handleSubmit = async (text) => {
    const dataz = await api.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAJHRhdRdIWVLFJYZBLYaKTe9vldM7XfeU",
        q: text,
      },
    });
    let detail=dataz.data.items
    setCheck(detail); ///check here
    console.log(dataz.data.items[0]);
  };
  return (
    <>
      <div>
        <Header onFormSubmit={handleSubmit} />
        <Show>
          <List vedio={check} setVedio={setCheck} />
          <Display data={check} />
        </Show>
      </div>
    </>
  );
};
export default Mainpage;
