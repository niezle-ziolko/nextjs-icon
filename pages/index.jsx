import Icon from "../src/Icon";

export default function Home() {
  return (
    <div>
      <h1>Test Icon Component</h1>
      <Icon src="/test.svg" width={50} height={50} alt="Test SVG" />
    </div>
  );
}
