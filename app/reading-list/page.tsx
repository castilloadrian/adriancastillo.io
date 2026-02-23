'use client'

import Link from 'next/link'
import { ThemeToggle } from '../../components/theme-toggle'
import { useState, useMemo } from 'react'

interface Book {
  name: string;
  author: string;
  rating: number;
  review: string;
  date: string;
}

const books: Book[] = [
  {
    name: 'The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness',
    author: 'Morgan Housel',
    rating: 5,
    review: 'tbd',
    date: '2023-10',
  },
  {
    name: 'The Technological Republic: Hard Power, Soft Belief, and the Future of the West',
    author: 'Alex Karp and Nicholas W. Zamiska',
    rating: 3,
    review: 'tbd',
    date: '2025-09',
  },
  {
    name: 'The Coming Wave',
    author: 'Mustafa Suleyman',
    rating: 4,
    review: 'tbd',
    date: '2025-1',
  },
  {
    name: 'Project Hail Mary',
    author: 'Andy Weir',
    rating: 5,
    review: 'tbd',
    date: '2023-12',
  },
  {
    name: 'The Bitcoin Standard',
    author: 'Saifedean Ammous',
    rating: 4,
    review: 'tbd',
    date: '2024-11',
  },
  {
    name: 'Dune',
    author: 'Frank Herbert',
    rating: 5,
    review: 'tbd',
    date: '2025-11',
  },
  {
    name: 'The Art of Doing Science and Engineering: Learning to Learn',
    author: 'Richard W. Hamming',
    rating: 4,
    review: 'tbd',
    date: '2025-10',
  },
  {
    name: "Numbers Don't Lie",
    author: 'Vaclav Smil',
    rating: 5,
    review: 'tbd',
    date: '2024-11',
  },
  {
    name: 'Artemis',
    author: 'Andy Weir',
    rating: 3,
    review: 'tbd',
    date: '2024-07',
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReadingList() {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      if (sortOrder === 'newest') {
        return dateB.getTime() - dateA.getTime() // Newest first
      } else {
        return dateA.getTime() - dateB.getTime() // Oldest first
      }
    })
  }, [sortOrder])

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'newest' ? 'oldest' : 'newest'))
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="max-w-2xl mx-auto px-4 py-8 flex justify-between items-center">
        <span className="text-sm">adriancastillo.sh</span>
        <ThemeToggle />
        <Link href="/" className="text-sm hover:underline">
          home
        </Link>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-16 space-y-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">reading list</h2>
          <button
            onClick={toggleSort}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sort by: {sortOrder === 'newest' ? 'Newest ↓' : 'Oldest ↑'}
          </button>
        </div>

        <div className="space-y-6">
          {sortedBooks.map((book, index) => (
            <div key={index} className="flex justify-between items-start gap-4">
              <div className="flex-1 space-y-1">
                <h3 className="text-lg">{book.name}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                {book.review !== 'tbd' && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.review}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <StarRating rating={book.rating} />
                <span className="text-sm text-muted-foreground">
                  {book.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
