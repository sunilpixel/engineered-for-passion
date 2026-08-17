import Timeline from "./common/Timeline";
import Document from "./Document";
import Home from "./Home";

const CenterContent = ({ activeId }: CenterContentProps) => {
  switch (activeId) {
    case 1:
      return (
        <div className="flex items-center justify-center text-white">
          Pricing
        </div>
      );

    case 2:
      return <Document key={activeId} />;

    case 3:
      return (
        <div className="flex items-center justify-center text-white">
          Performance
        </div>
      );

    case 4:
      return (
        <div className="flex items-center justify-center text-white">Chat</div>
      );

    case 5:
      return <Timeline key={activeId} />;

    case 6:
      return (
        <div className="flex items-center justify-center text-white">File</div>
      );

    default:
      return <Home />;
  }
};

export default CenterContent;
