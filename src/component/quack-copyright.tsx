export default function QuackCopyright() {
  const year = new Date().getFullYear();
  return (
    <p className="text-xs text-gray-600 text-center mt-8">
      &copy; 2023-{year} QUACK-TEAL.COM
    </p>
  );
}
