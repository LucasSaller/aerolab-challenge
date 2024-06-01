import React from "react";
import { Filter } from "./types";
interface FiltersProps {
  active: Filter;
  onChange: (filter: Filter) => void;
}

const FILTERS: Filter[] = [
  Filter.MostRecent,
  Filter.HighestPrice,
  Filter.LowetPrice,
];
const Filters = ({ active, onChange }: FiltersProps) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <h2 className="text-gray-800/50">Sort by: </h2>
      <div className="flex flex-row gap-3">
        {FILTERS.map((filter, id) => (
          <button
            onClick={() => onChange(filter)}
            key={id}
            className={` tracking-tighter font-light  rounded-xl py-2 px-4 ${
              active === filter
                ? "bg-sky-300 text-white "
                : "bg-gray-300 text-black/30"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
