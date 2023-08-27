import { Tables, TableData } from "@/components/training-table";

const dataFromServer: TableData = [
   {
      key: "1111-7890",
      label: "種目名 (種別)",
      headers: ["日時", "重量(kg)", "回数", "ボリューム", "1RM"],
      data: [
         { key: "1", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "2", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "3", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
      ]
   },
   {
      key: "2222-7890",
      label: "バーベル ベンチプレス ",
      headers: ["日時", "重量(kg)", "回数", "ボリューム", "1RM"],
      data: [
         { key: "1", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "2", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "3", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
      ]
   },
   {
      key: "3333-7890",
      label: "バーベル スクワット ",
      headers: ["日時", "重量(kg)", "回数", "ボリューム", "1RM"],
      data: [
         { key: "1", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "2", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
         { key: "3", values: ["2023/8/26 6:06:41", "40", "10", "400", "60"] },
      ]
   },
]
// TODO: サーバからデータを取ってくる
// TODO: 検索オプション(日付、種目)
export default function AllTrainings() {
   return (
      <Tables values={dataFromServer}></Tables>
   )
}