"use client";

import type { ReactNode } from "react";

interface ExpandToggleProps {
  controlsId: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const ExpandToggle = ({
  controlsId,
  expanded,
  onToggle,
  children,
}: ExpandToggleProps) => {
  return (
    <h2 className="expand-heading">
      <button
        type="button"
        className="expand-toggle text-hover-gray"
        aria-expanded={expanded}
        aria-controls={controlsId}
        onClick={onToggle}
      >
        <span className="expand-chevron" aria-hidden="true">
          {expanded ? "−" : "+"}
        </span>
        <span>{children}</span>
      </button>
    </h2>
  );
};

export default ExpandToggle;
