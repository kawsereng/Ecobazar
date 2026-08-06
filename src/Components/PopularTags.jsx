
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const PopularTags = () => {


const [selectedTag, setSelectedTag] = useState("Low fat"); // default selected
const POPULAR_TAGS = [
  'Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 
  'Bread', 'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'
];

  return (
    <>
    <div>
  <div className="flex items-center justify-between font-bold text-gray-900 mb-4 text-lg">
    <h3>Popular Tag</h3>
    <FiChevronDown className="text-sm text-gray-500" />
  </div>

  <div className="flex flex-wrap gap-2">
    {POPULAR_TAGS.map((tag, idx) => (
      <span
        key={idx}
        onClick={() => setSelectedTag(tag)}
        className={`text-xs px-3 py-1.5 rounded-md cursor-pointer transition-all duration-200 ${
          selectedTag === tag
            ? "bg-[#00B207] text-white font-medium"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {tag}
      </span>
    ))}
  </div>
</div>
    </>
  )
}

export default PopularTags;
