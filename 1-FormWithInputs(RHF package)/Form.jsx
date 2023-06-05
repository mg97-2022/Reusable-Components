import { useForm } from "react-hook-form";

const HomeInternalShipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { input1Name, input2Name } = errors || {};

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectInputField
        name="inputName"
        label="inputLabel"
        register={register}
        errorMessage={input1Name?.message}
      ></SelectInputField>
      <InputField
        register={register}
        type="inputType" // default is "text"
        name="inputName"
        label="inputLabelAndPlaceholder"
        errorMessage={input2Name?.message}
      />
      <CustomRadio
        name="inputName"
        register={register}
        radioInputsList={[]}
        defaultValue="defaultValue"
      />
    </form>
  );
};

export default HomeInternalShipping;
