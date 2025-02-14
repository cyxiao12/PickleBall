import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="w-24 h-24 text-black border border-black px-4 py-2 rounded-none"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
