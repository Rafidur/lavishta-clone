type Props = {
  label: string;
};
export default function LabelTag({ label }: Props) {
  return (
    <div className="absolute top-7 left-0 p-0.5 text-xs bg-pink-500  text-white">
      {label}
    </div>
  );
}
