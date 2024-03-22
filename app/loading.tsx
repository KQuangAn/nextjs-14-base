type LoadingProps = {
  width: number;
  height: number;
};

export default function Loading({ width, height }: LoadingProps) {
  return <div className={`w-[${width}px] h-[${height}px]`}> loading ...</div>;
}
