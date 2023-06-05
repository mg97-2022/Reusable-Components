import LangUtils from "@/utils/language";

const Checkbox = ({ name, label, input, register, containerClassName }) => (
  <div className={`flex items-center gap-2 ${containerClassName}`}>
    <input
      id={name}
      {...input}
      type="checkbox"
      {...register(name)}
      className="cursor-pointer rounded-2 rounded-[10px] border border-greyLightFifth outline-none w-6 h-6  px-2 accent-secondary"
    />
    <label
      htmlFor={name}
      className="cursor-pointer first-letter:capitalize lg:text-lg text-greyDark"
    >
      {LangUtils.FetchWord(label)}
    </label>
  </div>
);

export default Checkbox;
