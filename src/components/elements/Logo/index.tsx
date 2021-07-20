import Image from "next/image";

export default function Logo({ alt }: { alt: string }) {
  return (
    <Image src="/static/images/flux.png" alt={alt} width="50" height="50" />
  );
}
