import { ReactNode } from "react"
import { useRouter } from "next/router"

export type TableItem = {
  key: string
  label: string
  headers: string[]
  data: { key: string, values: string[] }[]
}

export type TableData = TableItem[]

export type ThProps = {
  header: string
}
export type TdProps = {
  data: string
}

const ThClassName = (className: string = ""): string => `w-1/6 min-w-[100px] text-md font-semibold p-2 lg:p-4 px-2 ${className}`
const TdClassName = (className: string = ""): string => `text-center font-light p-1 border-b border-[#E8E8E8] ${className}`

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
  <tr className="text-center bg-gray-200 text-gray-900 hover:bg-gray-500">
    {headers.map((header, index) => <Th key={`${key}-th-${index}`} header={header} />)}
  </tr>
)

// TODO: 行をクリックしたら、レコードの編集削除画面へ遷移する
const TableRow: React.FC<TableItem> = ({ key, data }): ReactNode => {
  const router = useRouter()

  return data.map((items) => {
    const query = `${key}-${items.key}`
    return (
      <tr key={query} className="text-center hover:bg-blue-400" onClick={() => {
        router.push({
          pathname: '/data/[pid]',
          query: { pid: query },
        })
      }}>
        {items.values.map((data, index) => <Td key={`${key}-td-${index}`} data={data} />)}
      </tr>
    )
  })
}

type TableProps =
{
  values: TableData
}

export function Tables({values}: TableProps) {
  return values.map(item => (
    <>
      <p className="text-black text-lg font-semibold p-3 lg:p-5">{item.label}</p>
      <div className="container">
        <div className="flex flex-wrap mx-4">
          <div className="w-full">
            <div key={item.key} className="max-w-full overflow-x-auto pb-3">
              <table className="table-auto w-full">
                <thead>
                  {TableHeader(item)}
                </thead>
                <tbody>
                  {TableRow(item)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  ))
}
