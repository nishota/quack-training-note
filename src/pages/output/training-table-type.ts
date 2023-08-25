export type TableItem = {
    key: number
    label: string
    headers: string[]
    data: string[][]
}

export type TableData = TableItem[]

export type ThProps = {
    header: string
}
export type TdProps = {
    data: string
}