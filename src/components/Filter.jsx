import { useDispatch } from "react-redux";
import { setFilter } from "../features/propertySlice";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3">
      <div>
        <select
          onChange={(e) => dispatch(setFilter({ type: e.target.value }))}
          className="w-full p-1 border rounded"
        >
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
      <div>
        <select
          onChange={(e) => dispatch(setFilter({ status: e.target.value }))}
          className="w-full p-1 border rounded"
        >
          <option value="">Select Status</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
      </div>
    </div>
  );
}
