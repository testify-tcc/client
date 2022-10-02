import React from "react";

type Props = {
  children: React.ReactNode;
};

export function DefinitionDescription({ children }: Props) {
  return <p>{children}</p>;
}
