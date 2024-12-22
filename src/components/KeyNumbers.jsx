export default function KeyNumbers({ checkIns, checkOuts }){
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold">Check-ins</h2>
        <p className="text-2xl">{checkIns}</p>
      </div>
      <div className="bg-red-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold">Check-outs</h2>
        <p className="text-2xl">{checkOuts}</p>
      </div>
    </div>
  );
}