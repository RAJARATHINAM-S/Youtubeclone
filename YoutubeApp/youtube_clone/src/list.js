import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const Listbox = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const List = ({ vedio, setVedio }) => {
  console.log(vedio);
  if (!vedio) return <div>....loading</div>;
  const Selected = (dell) => {
    console.log(dell);
    setVedio(dell);
  };
  return (
    <>
      <Grid container spacing={6}>
        <div>
          {vedio.length > 1
            ? vedio.map((data) => {
                return (
                  <>
                    <Listbox>
                      <Typography
                        variant="h6"
                        onClick={() => {
                          Selected(data);
                        }}
                      >
                        {data.snippet.title}
                      </Typography>
                    </Listbox>
                  </>
                );
              })
            : (data) => {
                return (
                  <>
                    <Listbox
                      onClick={() => {
                        Selected(data);
                      }}
                    >
                      <Typography variant="h6">{data.snippet.title}</Typography>
                      <h3>loading</h3>
                    </Listbox>
                  </>
                );
              }}
        </div>
      </Grid>
    </>
  );
};

export default List;
