import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function Searchbars() {
  return (
    <div className="flex justify-center gap-6 mt-5">
      {/* Location */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-[#e24d28] text-lg"
        />
        <input
          type="text"
          placeholder="Enter your locality"
          className="bg-white h-12 w-[260px] pl-10 rounded-md outline-none"
        />
      </div>

      {/* Search */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
        />
        <input
          type="text"
          placeholder="Search for restaurant, item or more"
          className="bg-white h-12 w-[380px] pl-10 rounded-md outline-none"
        />
      </div>
    </div>
  );
}
