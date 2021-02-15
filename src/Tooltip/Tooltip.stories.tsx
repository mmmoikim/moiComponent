/** @jsx jsx */
import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import { jsx, css } from "@emotion/core";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "components|Tooltip",
  component: Tooltip,
  decorators: [withKnobs]
};

const contentWrapper = css`
  width: 500px;
  height: 500px;
  background: #333;
  padding: 100px 100px;

  button {
    width: 100px;
    height: 100px;
  }
`;

export const tooltip = () => {
  const placement = select(
    "placement",
    ["bottomEnd", "bottomStart", "bottomMid"],
    "bottomEnd"
  );
  const targetRef = useRef(null);
  return (
    <React.Fragment>
      <div css={contentWrapper}>
        <button ref={targetRef}>버튼</button>
        <Tooltip
          open={true}
          targetRef={targetRef}
          placement={placement}
          content={
            <div>
              <div>툴팁 메세지</div>
            </div>
          }
        />
      </div>
    </React.Fragment>
  );
};

tooltip.story = {
  name: "Default"
};
