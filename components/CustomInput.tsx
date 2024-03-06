export default function CustomInput({ ...rest }) {
  return (
    <input
      {...rest}
      className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 text-gray-800"
      required
    />
  );
}
