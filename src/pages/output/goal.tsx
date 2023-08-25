import { Table } from "./training-table";
import { TableData } from "./training-table-type";

const dataFromServer: TableData = [
  {
     key: 0,
     label: "目標値",
     headers: ["種別","種目", "目標重量(kg)", "目標回数", "1RM(kg)", "最大重量(kg)", "最大回数", "目標値更新日時"],
     data: [
        ["バーベル","ベンチプレス", "40", "10", "60", "40", "10","2023/8/26 6:06:41"],
        ["バーベル","スクワット", "40", "10", "60", "40", "10","2023/8/26 6:06:41"],
        ["バーベル","デッドリフト", "40", "10", "60", "40", "10","2023/8/26 6:06:41"],
     ]
  },
]

// TODO: サーバからデータを取ってくる
export default function Goal() {
  return (
    <div className="container p-5">
       <div className="flex flex-wrap -mx-4">
          <div className="w-full">
             {Table(dataFromServer)}
          </div>
       </div>
    </div>
 );
}
