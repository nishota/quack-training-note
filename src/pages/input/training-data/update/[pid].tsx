import { useRouter } from 'next/router';

export default function EditRecord() {
  const router = useRouter();
  const { pid } = router.query;

  return <p>RecordId: {pid}</p>;
};
