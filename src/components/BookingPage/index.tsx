"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "../BookingCard/BookingCard"; // Reuse the BookingCard component

interface Booking {
  _id: string;
  userId: string;
  banquetId: string;
  status: "Accepted" | "Pending" | "Confirmed" | "Cancelled";
  bookingDate: string;
  totalAmount: number;
  amountPaid: number;
  remainingBalance: number;
}

const BookingPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [selectedBanquet, setSelectedBanquet] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  // Fetch bookings from the API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        const data = await response.json();

        // Sort bookings by bookingDate (earliest first)
        const sortedBookings = data.sort(
          (a: Booking, b: Booking) =>
            new Date(a.bookingDate).getTime() -
            new Date(b.bookingDate).getTime(),
        );
        setBookings(sortedBookings);
        setFilteredBookings(sortedBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  // Handle filtering bookings
  useEffect(() => {
    let filtered = bookings;

    if (bookingDate) {
      filtered = filtered.filter((booking) =>
        booking.bookingDate.startsWith(bookingDate),
      );
    }

    if (selectedBanquet) {
      filtered = filtered.filter(
        (booking) => booking.banquetId === selectedBanquet,
      );
    }

    if (status) {
      filtered = filtered.filter((booking) => booking.status === status);
    }

    setFilteredBookings(filtered);
  }, [bookingDate, selectedBanquet, status, bookings]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Bookings</h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label
            htmlFor="bookingDate"
            className="mb-2 block text-sm font-medium"
          >
            Booking Date:
          </label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="banquet" className="mb-2 block text-sm font-medium">
            Banquet Hall:
          </label>
          <select
            id="banquet"
            value={selectedBanquet}
            onChange={(e) => setSelectedBanquet(e.target.value)}
            className="w-full rounded border p-2"
          >
            <option value="">All</option>
            <option value="banquetId1">Banquet Hall 1</option>
            <option value="banquetId2">Banquet Hall 2</option>
            {/* Dynamically populate banquet halls */}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Booking Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border p-2"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Display bookings */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        ) : (
          <p className="col-span-full text-center">
            No bookings found matching the filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
