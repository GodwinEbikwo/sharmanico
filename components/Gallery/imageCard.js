import Image from "next/image";

const WIDTH = 225;
const HEIGHT = 300;

export function ImageCard({ src, width, height }) {
  return (
    <li>
      <Image
        src={src}
        width={width ? width : WIDTH}
        height={height ? height : HEIGHT}
        alt="shit stuff"
        objectFit="cover"
      />
      <div className="flex flex-row flex-wrap">
        <span>Chair</span>
        <span>$45.00</span>
      </div>
    </li>
  );
}
