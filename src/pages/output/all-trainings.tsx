import { Table } from "./training-table";
import { TableData } from "./training-table-type";

const dataFromServer: TableData = [
   {
      key: 0,
      label: "種目名 (種別)",
      headers: ["日時", "重量(kg)", "回数", "ボリューム(kg)", "1RM"],
      data: [
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
      ]
   },
   {
      key: 1,
      label: "バーベル ベンチプレス ",
      headers: ["日時", "重量(kg)", "回数", "ボリューム(kg)", "1RM"],
      data: [
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
         ["2023/8/26 6:06:41", "40", "10", "400", "60"],
      ]
   },
]
// TODO: サーバからデータを取ってくる
export default function AllTrainings() {
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