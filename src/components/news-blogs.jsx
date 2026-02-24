import { CalendarDays } from "lucide-react";
import ARTICLES from "../sources/article.json";
function NewsBlogs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
              Latest News & Blog
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Stay updated with our latest health tips
            </h3>
          </div>
          <button className="bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap">
            View all news
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((a,key)=>{
                <article key={key} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
              <CalendarDays size={16} className="text-blue-600" />
              {a.date}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
              {a.title}
            </h4>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {a.description}
            </p>
          </article>
            })}
        </div>
      </div>
    </section>
  );
}

export default NewsBlogs;
