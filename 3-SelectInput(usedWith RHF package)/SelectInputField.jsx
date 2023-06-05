import LangUtils from "@/utils/language";

const SelectInputField = ({
  type,
  name,
  input,
  label,
  children,
  register,
  labelColor,
  inputHeight,
  errorMessage,
  required = true,
  otherValidations,
  containerClassName,
}) => (
  <div className={`flex flex-col justify-between w-full ${containerClassName}`}>
    <label
      className={`${
        labelColor ? labelColor : "text-black"
      } mb-2 md:mb-3 text-sm md:text-base first-letter:capitalize ${
        errorMessage && "text-red-500"
      }`}
      htmlFor={name}
    >
      {`${LangUtils.FetchWord(label)}${required && !errorMessage ? " *" : ""}`}
      {!!errorMessage && <span>{LangUtils.FetchWord(errorMessage)}</span>}
    </label>
    <select
      className={`bg-white text-sm md:text-base rounded-[10px] border border-[#C7C7C7] outline-none px-2 ${
        inputHeight ? inputHeight : "h-[40px] md:h-[50px] xl:h-[60px]"
      } ${errorMessage && "border-red-500"}`}
      id={name}
      type={type || "text"}
      {...register(name, {
        required: {
          value: required,
          message: "isRequired",
        },
        ...otherValidations,
      })}
      {...input}
    >
      {children}
    </select>
  </div>
);
export default SelectInputField;
