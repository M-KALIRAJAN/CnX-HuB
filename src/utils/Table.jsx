import React from "react";

export default function Table({ headers, columns, data }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 text-sm text-left rounded-lg overflow-hidden">
        <thead className="bg-[#EAD2FF] text-gray-700">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#F8F8F8]">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-200">
              {columns.map((key, colIndex) => (
                <td key={colIndex} className="px-4 py-2">{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
