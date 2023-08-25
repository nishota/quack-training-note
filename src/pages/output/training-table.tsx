import { ReactNode } from "react"
import { TableData, TdProps, ThProps } from "./training-table-type"

const ThClassName = (className: string = ""): string => `w-1/6 min-w-[160px] text-md font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ${className}`
const TdClassName = (className: string = ""): string => `text-center font-light text-white py-2 px-2 bg-black border-b border-[#E8E8E8] ${className}`
const Th: React.FC<ThProps> = ({ header }): ReactNode => (
   <th className={ThClassName("border-b border-t border-[#E8E8E8]")}>
      {header}
   </th>
)
const Td: React.FC<TdProps> = ({ data }): ReactNode => (
   <td className={TdClassName()}>{data}</td>
)
const TableHeader: React.FC<{ headers: string[] }> = ({ headers }): ReactNode =>
(
   <tr className="text-center">
      {headers.map((header, index) => <Th key={index} header={header} />)}
   </tr>
)

const TableRow: React.FC<{ data: string[][] }> = ({ data }): ReactNode =>
   data.map((items, index) => (
      <tr className="text-center" key={index}>
         {items.map((data, dataIndex) => <Td key={dataIndex} data={data} />)}
      </tr>
   ))

export const Table: React.FC<TableData> = (data): ReactNode =>
   data.map(item => (
      <div key={item.key} className="max-w-full overflow-x-auto">
         <div className="p-4">
            <p className="text-white text-lg font-semibold py-4 lg:py-7 px-3 lg:px-4">{item.label}</p>
         </div>
         <table className="table-auto w-full">
            <thead>
               {TableHeader(item)}
            </thead>
            <tbody>
               {TableRow(item)}
            </tbody>
         </table>
      </div>
   ))
