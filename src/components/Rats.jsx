import { useState } from "react";

import RatsCard from "./RatsCard";

const Rats = (props) => {
  const [ratInfo, setRatInfos] = useState([]);

  return (
    <>
      <div className="rat-global">
        {ratInfo.map((ratMap) => (
          <RatsCard
            key={ratMap.id}
            image={ratMap.image}
            name={ratMap.name}
            prix={ratMap.prix}
            description={ratMap.description}
          />
        ))}
      </div>
    </>
  );
};

export default Rats;
