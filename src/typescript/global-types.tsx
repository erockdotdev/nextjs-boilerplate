import { LinkProps } from "next/link";

export type LinkType = {
  label: string;
} & React.PropsWithChildren<LinkProps>;
