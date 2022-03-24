import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ fourSushi, eatSushi, getSushi }) {
  const sushisList = fourSushi.filter(sushi => !sushi.eaten).map(s => 
    <Sushi 
        sushi={s} eatSushi={eatSushi}
    />
    )

  return (
    <div className="belt">
      {sushisList}
      <MoreButton getSushi={getSushi}/>
      {/* <Sushi /> */}
    </div>
  );
}

export default SushiContainer;
