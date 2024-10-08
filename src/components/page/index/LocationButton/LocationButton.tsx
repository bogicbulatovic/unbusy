import React from "react";
import * as s from "./styles";
import { LocationButtonProps as Props } from "./props";
import { Spinner } from "../../../shared/Spinner/Spinner";

const LocationButton: React.FC<Props> = ({
  disabled,
  loading,
  onClick
}) => {
  return (
    <s.Root onClick={onClick} disabled={disabled}>
      {loading ? (
        <Spinner />
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
        </svg>
      )}
    </s.Root>
  );
};

export { LocationButton };
