import React from "react";

type Props = {
  onClick: () => void;
};

export default function DeleteLink({ onClick }: Props) {
  return (
    <span style={{ cursor: "pointer", marginLeft: 5 }} onClick={onClick}>
      ✘
    </span>
  );
}
