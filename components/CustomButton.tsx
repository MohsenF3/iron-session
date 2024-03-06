export default function CustomButton({ text }: { text: string }) {
  return (
    <button className="bg-[#292929]  self-start border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-2 text-base hover:border-[#fff] cursor-pointer transition">
      {text}
    </button>
  );
}
