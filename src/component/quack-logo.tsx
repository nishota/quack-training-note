// TODO: 筋トレアプリ用のロゴを考える
import Image from "next/image"

type ImageProps = {
  width: number;
  height: number;
};

export default function QuackLogo(props: ImageProps) {
  const { width, height } = props;
  return (
    <Image
      src="/kamo_colorful.png"
      alt="Quack Logo"
      width={width}
      height={height}
      priority
    />
  );
}
