import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ page, showNext }) => {
  const locale = useLocale()
  const currentPage = +page
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div className={`flex font-medium text-black dark:text-gray-100 ${additionalClassName}`}>
      {currentPage !== 1 && (
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a>
          <button
            rel="prev"
            className="block cursor-pointer "
          >
            ← {locale.PAGINATION.PREV}
          </button>
        </a>
      </Link>
      )}
      {showNext && (
        <Link href={`/page/${currentPage + 1}`}>
          <a>
            <button rel="next" className="block cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {locale.PAGINATION.NEXT} →
              </span>
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination
