import { useRouter } from "next/router"

export default function Data() {
  const router = useRouter()
  const { pid } = router.query;
  return (
    <>
      <div>This is {pid}</div>
    </>
  )
}