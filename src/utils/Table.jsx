

export default function Table({ headers, columns, data }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 text-sm text-left rounded-lg overflow-hidden">
        <thead className="bg-[#EAD2FF] text-gray-700">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-[#F8F8F8]">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-8 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-200">
                {columns.map((key, colIndex) => (
                  <td key={colIndex} className="px-3 py-2">
                    {/* Actions Button */}
                    {key === "Actions" ? (
                      <div className="flex items-center">
                        <button
                          className={`h-8 px-4 rounded-[10px] font-bold cursor-pointer ${row["Status"] !== "Active"
                              ? "bg-green-200 text-green-700"
                              : "bg-red-200 text-red-700"
                            }`}
                        >
                          {row["Status"] === "Active" ? "Deactive" : "Active"}
                        </button>
                      </div>
                    ) : key === "Status" ? (
                      row[key] === "Active" ? (
                        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-5 py-0.5 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-5 py-0.5 rounded-full">
                          Deactive
                        </span>
                      )
                    ) : key === "Progress" ? (
                      row[key] !== "read" ? (
                        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-5 py-0.5 rounded-full">
                          Read
                        </span>
                      ) : (
                        <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-5 py-0.5 rounded-full">
                          UnRead
                        </span>
                      )
                    ) :
                      (
                        row[key]
                      )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
