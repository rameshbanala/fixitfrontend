import { GrInProgress } from "react-icons/gr";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { OptionEl } from "../AdminPage/styledComponents";
import { BtnIcon, OptionBtn } from "./styledComponents";

const RenderFilterButtons = (props) => {
  const { button, activeButton, buttonItems, onChangeFilterOption } = props;
  const isActive = button.type === activeButton;
  const badgeType = () => {
    switch (button.type) {
      case buttonItems[0].type:
        return <GrInProgress />;
      case buttonItems[1].type:
        return <GoCheckCircleFill />;
      case buttonItems[2].type:
        return <BiSolidBadgeCheck />;
      case buttonItems[3].type:
        return <MdCancel />;
      default:
        return null;
    }
  };

  const getColors = () => {
    switch (button.type) {
      case buttonItems[0].type: // In Progress
        return { background: "#e08019", text: "#ffffff", border: "#cc6e10" };
      case buttonItems[1].type: // Completed
        return { background: "#4de622", text: "#ffffff", border: "#3ec71a" };
      case buttonItems[2].type: // Completed
        return { background: "#4de622", text: "#ffffff", border: "#3ec71a" };
      case buttonItems[3].type: // Cancelled
        return { background: "#e64022", text: "#ffffff", border: "#c53015" };
      default:
        return { background: "#000000", text: "#ffffff", border: "#333333" }; // Default color if type is not matched
    }
  };

  const { background, text, border } = getColors();

  const onChangeButton = () => {
    onChangeFilterOption(button.type);
  };
  return (
    <OptionEl>
      <OptionBtn
        $isactive={isActive}
        $background={background}
        $text={text}
        $border={border}
        onClick={onChangeButton}
      >
        <BtnIcon>{badgeType()}</BtnIcon>
        {button.displayText}
      </OptionBtn>
    </OptionEl>
  );
};

export default RenderFilterButtons;
