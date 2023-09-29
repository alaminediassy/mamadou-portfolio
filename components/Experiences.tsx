import Link from 'next/link'
import React from 'react'

const Experience = () => {
  return (
    <div className="relative flex flex-col w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden
    overflow-y-scroll p-20">

      <div className="max-w-sm p-6 items-center text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="#">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </Link>
          <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <Link href="#" className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
          </Link>
      </div>

    </div>
  )
}

export default Experience