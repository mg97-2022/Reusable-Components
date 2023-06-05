import { useState } from "react";
import RadioInput from "./RadioInput";

const CustomRadio = ({
  name,
  register,
  className,
  defaultValue,
  radioInputsList,
}) => {
  const [checkedValue, setCheckedValue] = useState(defaultValue);

  const radioChangeHandler = ({ target }) => setCheckedValue(target.value);

  return (
    <div
      className={`${className} flex items-center flex-wrap gap-3 md:gap-5`}
      onChange={radioChangeHandler}
    >
      {radioInputsList.map((radioValue) => (
        <RadioInput
          name={name}
          key={radioValue}
          value={radioValue}
          register={register}
          checkedValue={checkedValue}
        />
      ))}
    </div>
  );
};

export default CustomRadio;
