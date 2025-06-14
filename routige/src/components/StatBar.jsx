export default function StatBar({ label = "XP", value = "0%", level = 0 }) {
  return (
    <div className="w-full mb-4 mt-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-400 flex items-center gap-1">
          <span>⭐</span> {label}
        </span>
        <span className="text-xl text-gray-300">{level}</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-yellow-500 h-2 rounded-full"
          style={{ width: value }}
        ></div>
      </div>

      <div className="mt-1 text-right text-sm text-gray-400">
        {value}
      </div>
    </div>
  );
}