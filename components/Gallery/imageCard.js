import Image from "next/image";

const WIDTH = 450;
const HEIGHT = 600;

export function ImageCard({ src, width, height }) {
  return (
    <li>
      <Image
        src={src}
        width={width ? width : WIDTH}
        height={height ? height : HEIGHT}
        alt="shit stuff"
      />
    </li>
  );
}
