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