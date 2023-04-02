import React, { useEffect, useState } from "react";
import FileSaver from "file-saver";

import { download } from "../assets";

const Card = ({ _id, name, prompt, photo }) => {
  const [imageType, setImageType] = useState("jpg");

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <span className="absolute z-10 top-8 right-2">
            <select
              value={imageType}
              onChange={(e) => setImageType(e.target.value)}
            >
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="gif">GIF</option>
              <option value="jpeg">JPEG</option>
            </select>
          </span>
          <img
            onClick={() =>
              FileSaver.saveAs(photo, `download-${_id}.${imageType}`)(
                _id,
                photo
              )
            }
            src={download}
            alt="download"
            className="w-6 h-6 object-contain invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
