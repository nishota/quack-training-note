// TODO: 筋トレアプリ用のロゴを考える
import { Flex } from "@aws-amplify/ui-react";
import Image from "next/image"

type ImageProps = {
  width: number;
  height: number;
};

export default function QuackLogo(props: ImageProps) {
  const { width, height } = props;
  return (
    <Flex>
      <Image
        src="https://contents.quack-teal.com/img/kamo_colorful.png"
        alt="Quack Logo"
        width={width}
        height={height}
        priority
      />
    </Flex>
  );
}
