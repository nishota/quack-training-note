export default function QuackCopyright() {
  const year = new Date().getFullYear();
  return (
    <p className="text-xs text-gray-600 text-center mt-8">
      &copy; {year} QUACK-TEAL.COM
    </p>
  );
}
