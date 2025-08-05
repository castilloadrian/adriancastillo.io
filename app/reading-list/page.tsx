import Link from "next/link";
import { ThemeToggle } from "../../components/theme-toggle";

interface Book {
  name: string;
  author: string;
  rating: number;
  review: string;
  date: string;
  status?: string;
}

const books: Book[] = [
  {
    name: "Project Hail Mary",
    author: "Andy Weir",
    rating: 5,
    review: "tbd",
    date: "2024-12"
  },
  {
    name: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    rating: 4,
    review: "tbd",
    date: "2024-11"
  },
  {
    name: "Dune",
    author: "Frank Herbert",
    rating: 5,
    review: "tbd",
    date: "2024-10",
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function ReadingList() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="max-w-2xl mx-auto px-4 py-8 flex justify-between items-center">
        <span className="text-sm">adriancastillo.io</span>
        <ThemeToggle />
        <Link href="/" className="text-sm hover:underline">
          home
        </Link>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">reading list</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sort by: Date
          </button>
        </div>
        
        <div className="space-y-6">
          {books.map((book, index) => (
            <div key={index} className="flex justify-between items-start gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="text-lg">{book.name}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                {book.status && (
                  <p className="text-sm text-muted-foreground">{book.status}</p>
                )}
                {book.review !== "tbd" && (
                  <p className="text-sm text-muted-foreground leading-relaxed">{book.review}</p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <StarRating rating={book.rating} />
                <span className="text-sm text-muted-foreground">{book.date}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}