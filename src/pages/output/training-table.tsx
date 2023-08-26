import { ReactNode } from "react"
import { TableData, TableItem, TdProps, ThProps } from "./training-table-type"
import { useRouter } from "next/router"

const ThClassName = (className: string = ""): string => `w-1/6 min-w-[100px] text-md font-semibold text-white p-2 lg:p-4 px-2 ${className}`
const TdClassName = (className: string = ""): string => `text-center font-light text-white p-1 bg-black border-b border-[#E8E8E8] ${className}`

const Th: React.FC<ThProps> = ({ header }): ReactNode => (
   <th className={ThClassName("border-b border-t border-[#E8E8E8]")}>
      {header}
   </th>
)

const Td: React.FC<TdProps> = ({ data }): ReactNode => (
   <td className={TdClassName()}>{data}</td>
)

const TableHeader: React.FC<TableItem> = ({ key, headers }): ReactNode =>
(
   <tr className="text-center">
      {headers.map((header, index) => <Th key={`${key}-th-${index}`} header={header} />)}
   </tr>
)

// TODO: 行をクリックしたら、レコードの編集削除画面へ遷移する
const TableRow: React.FC<TableItem> = ({ key, data }): ReactNode => {
   const router = useRouter()

   return data.map((items) => {
      const query = `${key}-${items.key}`
      return (
      <tr key={query} className="text-center" onClick={() => {
         router.push({
            pathname: '/input/training-data/update/[pid]',
            query: { pid: query },
         })
      }}>
         {items.values.map((data, index) => <Td key={`${key}-td-${index}`} data={data} />)}
      </tr>
   )})
}

export const Table: React.FC<TableData> = (data): ReactNode =>
   data.map(item => (
      <div key={item.key} className="max-w-full overflow-x-auto pb-3">
         <p className="text-white text-lg font-semibold p-3 lg:p-5">{item.label}</p>
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
