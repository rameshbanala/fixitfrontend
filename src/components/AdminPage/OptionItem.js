import { OptionEl, OptionBtn } from "./styledComponents";

const OptionItem = (props) => {
  const { optionData, activeOption, onChangeActiveOption } = props;
  const { optionType, displayText } = optionData;
  const isactive = activeOption === optionType;
  const onClickOption = () => {
    onChangeActiveOption(optionType);
  };
  return (
    <OptionEl>
      <OptionBtn onClick={onClickOption} $isactive={isactive}>
        {displayText}
      </OptionBtn>
    </OptionEl>
  );
};
export default OptionItem;
