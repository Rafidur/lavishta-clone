interface TextProps {
  sectionText?: string;
}

const SectionSeparator: React.FC<TextProps> = ({ sectionText }) => {
  return (
    <div className="text-2xl mb-10 relative after:content-[''] after:absolute   after:left-0 after:-bottom-3 after:h-0.5 after:w-full after:bg-pink-500">
      {sectionText}
    </div>
  );
};

export default SectionSeparator;
