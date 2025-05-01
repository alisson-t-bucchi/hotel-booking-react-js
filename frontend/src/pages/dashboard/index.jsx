import React from 'react'
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import Input from '../../components/Input';
import Table from '../../components/Table';
import { useState, useEffect } from 'react';
import { getBookings, createBooking } from "../../api";

export default function DashboardPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    people: "",
  });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getBookings().then((res) => {
      setBookings(res);
    });
  }, [refresh]);

  const headers = [
    {
      label: "Name",
      key: "name", 
    },
    {
      label: "Check-in date",
      key: "checkIn", 
    },
    {
      label: "Check-out date",
      key: "checkOut", 
    },
    {
      label: "Guests",
      key: "people", 
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    await createBooking({
      name: formData.name,
      checkIn: new Date(formData.checkIn).toISOString(),
      checkOut: new Date(formData.checkOut).toISOString(),
      people: parseInt(formData.people),
    });
    setRefresh(refresh + 1);
    setFormData({
      name: "",
      checkIn: "",
      checkOut: "",
      people: "",
    });
  };

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
        <Table headers={headers} data={bookings} />
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 border-b border-gray-200 pb-4 mb-4">
            New Booking
          </h2>
          <form className="flex flex-col gap-4 w-md" onSubmit={handleSubmit}>
            <Input
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              label="Check-in Date"
              name="checkin"
              type="date"
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
            />
            <Input
              label="Check-out Date"
              name="checkout"
              type="date"
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
            />
            <Input
              label="Guests"
              name="guests"
              type="number"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
            <Button text="Save" />
          </form>
        </Modal>
      )}
    </main>
  );
}

