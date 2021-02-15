/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

type placementEnum =
  | "bottomEnd"
  | "bottomMid"
  | "bottomStart"
  | "bottom"
  | "leftEnd"
  | "leftStart"
  | "left"
  | "rightEnd"
  | "rightStart"
  | "right"
  | "topEnd"
  | "topStart"
  | "top";

export type ButtonProps = {
  /**  툴팁 보이는 여부*/
  open: boolean;
  /** 툴팁 위치*/
  placement?: placementEnum;
  theme?: "mint";
  content: React.ReactNode;
  targetRef: any;
};

const Tooltip = ({
  theme = "mint",
  content,
  open,
  targetRef,
  placement = "bottomEnd"
}: ButtonProps) => {
  const [childrenDomRect, setChildrenDomRect] = React.useState<DOMRect | null>(
    null
  );

  React.useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      if (rect) {
        setChildrenDomRect(rect);
      }
    }
  }, [targetRef]);

  if (!open) {
    return;
  }

  return (
    <React.Fragment>
      <div css={[wrapper, getPlacement(childrenDomRect, placement)]}>
        <div css={[arrowStyle, themes[theme]]} />
        <div css={[messageStyle, themes[theme]]}>{content}</div>
      </div>
    </React.Fragment>
  );
};

const arrowStyle = css`
  width: 8px;
  height: 8px;
  top: -4px;
  position: absolute;
  left: 20px;
  transform: rotate(-45deg);
`;

const childrenStyle = css`
  display: initial;
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
`;

const wrapper = css`
  width: max-content;
  height: max-content;
  position: absolute;
  top: 0;
  left: 0;
`;

const messageStyle = css`
  padding: 8px 16px;
  border-radius: 20px;
`;

const getPlacement = (rect: DOMRect | null, placement: placementEnum) => {
  console.log(rect);
  const arrow = { x: -25, y: 8 };
  if (rect) {
    switch (placement) {
      case "bottomEnd":
        return css`
          transform: translate(
            ${rect.right + arrow.x}px,
            ${rect.bottom + arrow.y}px
          );
        `;
      case "bottomStart":
        return css`
          transform: translate(
            ${rect.left - arrow.y * 3}px,
            ${rect.bottom + arrow.y}px
          );
        `;
      case "bottomMid":
        return css`
          transform: translate(
            ${rect.left + rect.width / 2 + arrow.x}px,
            ${rect.bottom + arrow.y}px
          );
        `;
      default:
        return css`
          transform: translate(
            ${rect.right + arrow.x}px,
            ${rect.bottom + arrow.y}px
          );
        `;
    }
  }
};

const themes = {
  mint: css`
    background: #2ac1bc;
    color: #fff;
  `
};

export default Tooltip;
