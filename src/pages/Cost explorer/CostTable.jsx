import React from "react";
import Loading from "../../commonComponent/Loading";

function CostTable({ table, groupBy ,loading,setLoading}){

console.log("Cost Table Data:", loading,table);



  if (!table || !table.data || !table.months ) {
     if (loading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <Loading />
      </div>
    );  }
  if(table.length === 0){
  return (
    <div className="w-full h-[300px] grid place-content-center text-gray-500">
      No data available
    </div>
  );
  }
}
  const { data, months } = table;

  return (
    <div className="w-full max-h-[400px] bg-white border border-slate-300 rounded-md overflow-hidden">
      <div className="max-h-[400px] overflow-y-scroll">
        <table className="min-w-full border-collapse table-fixed text-sm">
          <thead className="sticky top-0 bg-gray-100 z-20">
            <tr>
              <th className="min-w-[180px] px-3 py-2 border border-slate-300 text-left text-[11px] font-semibold">
                { groupBy}
              </th>
              {months.map((month) => (
                <th
                  key={month}
                  className="px-3 py-2 border border-slate-300 text-right text-[11px] font-semibold"
                >
                  {month}
                </th>
              ))}
              <th className="px-3 py-2 border border-slate-300 text-right text-[11px] font-semibold">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-2 border border-slate-300 text-[10px] font-medium">
                  {row.service}
                </td>
                {months.map((month) => (
                  <td
                    key={month}
                    className="px-3 py-2 border border-slate-300 text-right text-slate-700 text-[10px]"
                  >
                    ${row[month]?.toLocaleString() || "0"}
                  </td>
                ))}
                <td className="px-3 py-2 border border-slate-300 text-right text-slate-700 font-bold text-[10px]">
                  ${row.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="sticky bottom-0 bg-gray-100 z-30">
            <tr>
              <td className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-[#1945b7] text-[11px] font-bold">
                Total
              </td>
              {months.map((month) => {
                const sum = data.reduce((s, r) => s + (r[month] || 0), 0);
                return (
                  <td
                    key={month}
                    className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-right text-[#1945b7] font-bold text-[11px]"
                  >
                    ${sum.toLocaleString()}
                  </td>
                );
              })}
              <td className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-right text-[#1945b7] font-bold text-[11px]">
                ${data.reduce((s, r) => s + r.total, 0).toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default CostTable;
