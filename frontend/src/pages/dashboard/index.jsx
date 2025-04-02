import React from 'react'
import Button from "../../components/button"

export default function DashboardPage() {
  return (
    <main>
      <nav className='bg-blue-200'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
                />
                <div>
                  <div className="w-full flex justify-end">
                    <div className="flex space-x-4 justify-end">
                      <a
                      href="/"
                      aria-current="page"
                      className="text-blue-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Sair
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='mt-8 mx-auto sm:px-6 lg:px-8'>
        <div className='flex justify-between itens-center'>
          <h2 className='text-2xl font-semibold tracking-light text-pretty text-blue-800'>
            Booking List
          </h2>
          <div className='flex justify-end mb-4'>
            <Button text="New Reservation" onclick={() => setIsModalOpen(true)} />
          </div>
        </div>
        
      </div>
    </main>
  )
}
