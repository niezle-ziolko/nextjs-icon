import Icon from "../src/SvgIcon";

export default function Home() {
  return (
    <div>
      <h1>Test Icon Component</h1>
      <Icon
        width={50}
        height={50}
        alt="Test SVG"
        src="/test.svg"
      />
    </div>
  );
};
