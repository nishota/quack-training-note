import { Table, TableData } from "./table/training-table";

const dataFromServer: TableData = [
  {
    key: "3456-7890",
    label: "目標値",
    headers: ["種別", "種目", "目標重量(kg)", "目標回数", "1RM(kg)", "最大重量(kg)", "最大回数", "目標値更新日時"],
    data: [
      { key: "1", values: ["バーベル", "ベンチプレス", "40", "10", "60", "40", "10", "2023/8/26 6:06:41"] },
      { key: "2", values: ["バーベル", "スクワット", "40", "10", "60", "40", "10", "2023/8/26 6:06:41"] },
      { key: "3", values: ["バーベル", "デッドリフト", "40", "10", "60", "40", "10", "2023/8/26 6:06:41"] },
    ]
  },
]

// TODO: サーバからデータを取ってくる
export default function Goal() {
  return (
    <div className="container">
      <div className="flex flex-wrap mx-4">
        <div className="w-full">
          {Table(dataFromServer)}
        </div>
      </div>
    </div>
  );
}
