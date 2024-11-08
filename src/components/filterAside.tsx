import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

interface FilterAsideProps {
  filters: {
    ascending: boolean;
    descending: boolean;
    includeOutOfStock: boolean;
    fastDeliveryOnly: boolean;
    rating: number;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      ascending: boolean;
      descending: boolean;
      includeOutOfStock: boolean;
      fastDeliveryOnly: boolean;
      rating: number;
    }>
  >;
}

export const FilterAside: React.FC<FilterAsideProps> = ({
  filters,
  setFilters,
}) => {
  return (
    <aside className="w-64  border border-gray-300 rounded-lg bg-gray-800  text-white shadow-md p-4">
      <p className="text-2xl font-bold mb-4">Filter Products</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.ascending}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                ascending: e.target.checked,
                descending: false,
              }))
            }
          />
          <label>Price: Low to High</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.descending}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                descending: e.target.checked,
                ascending: false,
              }))
            }
          />
          <label>Price: High to Low</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.includeOutOfStock}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                includeOutOfStock: e.target.checked,
              }))
            }
          />
          <label>Include Out of Stock</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.fastDeliveryOnly}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                fastDeliveryOnly: e.target.checked,
              }))
            }
          />
          <label>Fast Delivery Only</label>
        </div>
        <div className="flex items-center gap-2">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setFilters((prev) => ({ ...prev, rating: star }))}
              className="cursor-pointer"
            >
              {filters.rating >= star ? (
                <IoIosStar className="text-yellow-500" />
              ) : (
                <IoIosStarOutline />
              )}
            </span>
          ))}
        </div>
        <button
          onClick={() =>
            setFilters({
              ascending: false,
              descending: false,
              includeOutOfStock: false,
              fastDeliveryOnly: false,
              rating: 0,
            })
          }
          className="bg-gray-200 text-gray-800 py-1 px-2 rounded-lg w-full mt-4"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
};
