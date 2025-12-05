import React from "react";
const data = [
    {
      service: "Amazon Elastic Compute Cloud",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 39086.88,
      "Jul 2025": 42441.19,
      "Aug 2025": 36717.95,
      "Sep 2025": 38043.52,
      "Oct 2025": 33826.71,
      "Nov 2025": 31048.98,
      total: 221165.23,
    },
    {
      service: "Savings Plans for AWS Compute Usage",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 24480.0,
      "Jul 2025": 25296.0,
      "Aug 2025": 25296.0,
      "Sep 2025": 24480.0,
      "Oct 2025": 25296.0,
      "Nov 2025": 24480.0,
      total: 149328.0,
    },
    {
      service: "Amazon Relational Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 144295.94,
    },
    {
      service: "Amazon Relational Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 144295.94,
    },
    {
      service: "Amazon Relational  Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 144295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 144295.94,
    },
     {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 5.94,
    },
     {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 145.94,
    },
     {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 145.94,
    },
     {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
    {
      service: "Amazon  Database Service",
      "Jan 2025": 39086.88,
      "Feb 2025": 42441.19,
      "Mar 2025": 36717.95,
      "Apr 2025": 38043.52,
      "May 2025": 33826.71,
      "Jun 2025": 25434.85,
      "Jul 2025": 24148.67,
      "Aug 2025": 24200.03,
      "Sep 2025": 24554.95,
      "Oct 2025": 23718.76,
      "Nov 2025": 22238.68,
      total: 295.94,
    },
  ];

function CostTable() {
  const monthKeys = Object.keys(data[0]).filter(
    (k) => k !== "service" && k !== "total"
  );

  return (
    <div className="w-full h-[400px] bg-white border border-slate-300 rounded-md overflow-hidden">
      <div className="max-h-[400px] overflow-y-scroll">
        <table className="min-w-full border-collapse table-fixed text-sm">

          {/* ---------- HEADER ---------- */}
          <thead className="sticky top-0 bg-gray-100 z-20">
            <tr>
              <th className="min-w-[180px] px-3 py-2 border border-slate-300 text-left text-[11px] font-semibold">
                Service
              </th>

              {monthKeys.map((month) => (
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

          {/* ---------- BODY ---------- */}
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-2 border border-slate-300 text-[10px] font-medium">
                  {row.service}
                </td>

                {monthKeys.map((month) => (
                  <td
                    key={month}
                    className="px-3 py-2 border border-slate-300 text-right text-slate-700 text-[10px]"
                  >
                    ${row[month].toLocaleString()}
                  </td>
                ))}

                <td className="px-3 py-2 border border-slate-300 text-right text-slate-700 font-bold text-[10px]">
                  ${row.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>

          {/* ---------- FOOTER (NOW INSIDE SAME TABLE) ---------- */}
          <tfoot className="sticky bottom-0 bg-gray-100 z-30">
            <tr>
              <td className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-[#1945b7]  text-[11px] font-bold">
                Total
              </td>

              {monthKeys.map((month) => {
                const sum = data.reduce((s, r) => s + r[month], 0);
                return (
                  <td
                    key={month}
                    className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-right text-[#1945b7]  font-bold text-[11px]"
                  >
                    ${sum.toLocaleString()}
                  </td>
                );
              })}

              <td className="px-3 py-2 bg-[#dbe6f8] border border-[#869bc3] text-right text-[#1945b7]  font-bold text-[11px]">
                $
                {data.reduce((s, r) => s + r.total, 0).toLocaleString()}
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
}

export default CostTable;
