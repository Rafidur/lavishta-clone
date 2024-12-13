type Props = {
  percentage?: number;
};
export default function PercentageTag({ percentage }: Props) {
  return (
    <div className="absolute top-0 left-0 p-0.5 text-xs bg-pink-500  text-white">
      {percentage}% OFF
    </div>
  );
}
