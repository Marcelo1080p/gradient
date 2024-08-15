import React from "react";
import { Select } from "antd";
import { ICfgBGServices } from "../../../pages/generateGradient/Generate/services/ICfgBGServices";

interface Props {
  cfgBG: ICfgBGServices;
  updateCfgBG: (newCfg: ICfgBGServices) => void;
}

export const SelectDirection: React.FC<Props> = ({ cfgBG, updateCfgBG }) => {
  const handleChange = (value: string) => {
    console.log("Selected value:", value);
    if (value !== null) {
      updateCfgBG({ ...cfgBG, direction: value });
    }
  };

  return (
    <Select
      className="pqp"
      style={{ width: 200 }}
      onChange={handleChange}
      placeholder="Animation Direction"
      value={cfgBG.direction || "Linear"}
      options={[
        {
          label: <span>Directions</span>,
          title: "directions",
          options: [
            { label: <span>Linear</span>, value: "linear" },
            { label: <span>Alternate</span>, value: "alternate" },
            {
              label: <span>Alternate-Reverse</span>,
              value: "alternate-reverse",
            },
            { label: <span>Normal</span>, value: "normal" },
          ],
        },
      ]}
    />
  );
};
