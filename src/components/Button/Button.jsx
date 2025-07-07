export default function Button({ text, onClick, type = "button", icon = null }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center  justify-center gap-2 px-3 py-2 mb-3 bg-[#905CC1] text-white rounded-sm hover:bg-[#7b4ab0] transition duration-200"
    >
      {icon}
      {text}
    </button>
  );
}
