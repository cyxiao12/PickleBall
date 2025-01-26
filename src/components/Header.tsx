import { useState } from "react";

export const Header = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
      <div className="bg-white rounded-lg shadow-md px-2 md:px-8 py-2">
        <h2 className="text-sm font-bold md:text-lg">Header</h2>
        <p className="text-sm text-gray-500">Header description</p>
        <p className="text-sm text-gray-500">Count: {count}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
            setCount(count + 1);
        }}>Click me</button>
      </div>
    )
  }