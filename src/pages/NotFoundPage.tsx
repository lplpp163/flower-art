import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <span className="text-6xl block mb-6">🌸</span>
      <h1 className="font-serif text-3xl font-bold text-text-primary mb-4">找不到頁面</h1>
      <p className="text-text-secondary mb-8">這個頁面好像不存在，回到首頁繼續探索花藝世界吧！</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-rose text-white rounded-full font-medium hover:bg-rose-dark transition-colors"
      >
        回到首頁
      </Link>
    </div>
  );
}
