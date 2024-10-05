// import Breadcrumb from "../Breadcrumbs/Breadcrumb";

// const Calendar = () => {
//   return (
//     <div className="mx-auto max-w-7xl">
//       <Breadcrumb pageName="Calendar" />

//       {/* <!-- ====== Calendar Section Start ====== --> */}
//       <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//         <table className="w-full">
//           <thead>
//             <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
//               <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Sunday </span>
//                 <span className="block lg:hidden"> Sun </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Monday </span>
//                 <span className="block lg:hidden"> Mon </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Tuesday </span>
//                 <span className="block lg:hidden"> Tue </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Wednesday </span>
//                 <span className="block lg:hidden"> Wed </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Thursday </span>
//                 <span className="block lg:hidden"> Thur </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Friday </span>
//                 <span className="block lg:hidden"> Fri </span>
//               </th>
//               <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Saturday </span>
//                 <span className="block lg:hidden"> Sat </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <!-- Line 1 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   1
//                 </span>
//                 <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
//                   <span className="group-hover:text-primary md:hidden">
//                     More
//                   </span>
//                   <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
//                     <span className="event-name text-sm font-semibold text-black dark:text-white">
//                       Redesign Website
//                     </span>
//                     <span className="time text-sm font-medium text-black dark:text-white">
//                       1 Dec - 2 Dec
//                     </span>
//                   </div>
//                 </div>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   2
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   3
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   4
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   5
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   6
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   7
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 1 --> */}
//             {/* <!-- Line 2 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   8
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   9
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   10
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   11
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   12
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   13
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   14
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 2 --> */}
//             {/* <!-- Line 3 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   15
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   16
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   17
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   18
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   19
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   20
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   21
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 3 --> */}
//             {/* <!-- Line 4 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   22
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   23
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   24
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   25
//                 </span>
//                 <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
//                   <span className="group-hover:text-primary md:hidden">
//                     More
//                   </span>
//                   <div className="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
//                     <span className="event-name text-sm font-semibold text-black dark:text-white">
//                       App Design
//                     </span>
//                     <span className="time text-sm font-medium text-black dark:text-white">
//                       25 Dec - 27 Dec
//                     </span>
//                   </div>
//                 </div>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   26
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   27
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   28
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 4 --> */}
//             {/* <!-- Line 5 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   29
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   30
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   31
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   1
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   2
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   3
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   4
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 5 --> */}
//           </tbody>
//         </table>
//       </div>
//       {/* <!-- ====== Calendar Section End ====== --> */}
//     </div>
//   );
// };

// export default Calendar;

// "use client";
// import React, { useEffect, useState } from "react";
// import InquiryCard from "../enquiryCards/EnquiryCard"; // Reuse the InquiryCard component

// interface Inquiry {
//   _id: string;
//   userId: string;
//   banquetId: string;
//   status: "Pending" | "Accepted" | "Rejected";
//   inquiryDate: string;
//   desiredBookingDate: string;
// }

// const EnquiriesPage: React.FC = () => {
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
//   const [selectedBanquet, setSelectedBanquet] = useState<string>("");
//   const [inquiryDate, setInquiryDate] = useState<string>("");
//   const [desiredBookingDate, setDesiredBookingDate] = useState<string>("");

//   const getTodayDateString = () => {
//     const today = new Date();
//     return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//   };

//   // Fetch inquiries from the API
//   useEffect(() => {
//     const fetchInquiries = async () => {
//       try {
//         const response = await fetch("/api/inquiries");
//         const data = await response.json();
//         // Sort inquiries by inquiryDate (latest first)
//         const sortedInquiries = data.sort(
//           (a: Inquiry, b: Inquiry) =>
//             new Date(b.inquiryDate).getTime() -
//             new Date(a.inquiryDate).getTime(),
//         );
//         setInquiries(sortedInquiries);
//         setFilteredInquiries(sortedInquiries);
//       } catch (error) {
//         console.error("Error fetching inquiries:", error);
//       }
//     };

//     fetchInquiries();
//   }, []);

//   // Handle filtering inquiries
//   useEffect(() => {
//     let filtered = inquiries;

//     if (inquiryDate) {
//       filtered = filtered.filter((inquiry) =>
//         inquiry.inquiryDate.startsWith(inquiryDate),
//       );
//     }

//     if (desiredBookingDate) {
//       filtered = filtered.filter((inquiry) =>
//         inquiry.desiredBookingDate.startsWith(desiredBookingDate),
//       );
//     }

//     if (selectedBanquet) {
//       filtered = filtered.filter(
//         (inquiry) => inquiry.banquetId === selectedBanquet,
//       );
//     }

//     setFilteredInquiries(filtered);
//   }, [inquiryDate, desiredBookingDate, selectedBanquet, inquiries]);

//   return (
//     <div className="p-6">
//       <h1 className="mb-4 text-2xl font-bold">Enquiries</h1>

//       {/* Filters */}
//       <div className="mb-6 flex space-x-4">
//         <div>
//           <label htmlFor="inquiryDate">Inquiry Date:</label>
//           <input
//             type="date"
//             id="inquiryDate"
//             value={inquiryDate}
//             onChange={(e) => setInquiryDate(e.target.value)}
//             className="rounded border p-2"
//           />
//         </div>

//         <div>
//           <label htmlFor="desiredBookingDate">Desired Booking Date:</label>
//           <input
//             type="date"
//             id="desiredBookingDate"
//             value={desiredBookingDate}
//             onChange={(e) => setDesiredBookingDate(e.target.value)}
//             className="rounded border p-2"
//           />
//         </div>

//         <div>
//           <label htmlFor="banquet">Banquet Hall:</label>
//           <select
//             id="banquet"
//             value={selectedBanquet}
//             onChange={(e) => setSelectedBanquet(e.target.value)}
//             className="rounded border p-2"
//           >
//             <option value="">All</option>
//             <option value="banquetId1">Banquet Hall 1</option>
//             <option value="banquetId2">Banquet Hall 2</option>
//             {/* Dynamically populate banquet halls */}
//           </select>
//         </div>
//       </div>

//       {/* Display inquiries */}
//       <div className="space-y-4">
//         {filteredInquiries.length > 0 ? (
//           filteredInquiries.map((inquiry) => (
//             <InquiryCard key={inquiry._id} inquiry={inquiry} />
//           ))
//         ) : (
//           <p>No inquiries found matching the filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnquiriesPage;

"use client";
import React, { useEffect, useState } from "react";
import InquiryCard from "../enquiryCards/EnquiryCard"; // Reuse the InquiryCard component

interface Inquiry {
  _id: string;
  userId: string;
  banquetId: string;
  status: "Pending" | "Accepted" | "Rejected";
  inquiryDate: string;
  desiredBookingDate: string;
}

const EnquiriesPage: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
  const [selectedBanquet, setSelectedBanquet] = useState<string>("");
  const [inquiryDate, setInquiryDate] = useState<string>("");
  const [desiredBookingDate, setDesiredBookingDate] = useState<string>("");

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  // Fetch inquiries from the API
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch("/api/inquiries");
        const data = await response.json();
        // Sort inquiries by inquiryDate (latest first)
        const sortedInquiries = data.sort(
          (a: Inquiry, b: Inquiry) =>
            new Date(b.inquiryDate).getTime() -
            new Date(a.inquiryDate).getTime(),
        );
        setInquiries(sortedInquiries);
        setFilteredInquiries(sortedInquiries);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();
  }, []);

  // Handle filtering inquiries
  useEffect(() => {
    let filtered = inquiries;

    if (inquiryDate) {
      filtered = filtered.filter((inquiry) =>
        inquiry.inquiryDate.startsWith(inquiryDate),
      );
    }

    if (desiredBookingDate) {
      filtered = filtered.filter((inquiry) =>
        inquiry.desiredBookingDate.startsWith(desiredBookingDate),
      );
    }

    if (selectedBanquet) {
      filtered = filtered.filter(
        (inquiry) => inquiry.banquetId === selectedBanquet,
      );
    }

    setFilteredInquiries(filtered);
  }, [inquiryDate, desiredBookingDate, selectedBanquet, inquiries]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Enquiries</h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label
            htmlFor="inquiryDate"
            className="mb-2 block text-sm font-medium"
          >
            Inquiry Date:
          </label>
          <input
            type="date"
            id="inquiryDate"
            value={inquiryDate}
            onChange={(e) => setInquiryDate(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="desiredBookingDate"
            className="mb-2 block text-sm font-medium"
          >
            Desired Booking Date:
          </label>
          <input
            type="date"
            id="desiredBookingDate"
            value={desiredBookingDate}
            onChange={(e) => setDesiredBookingDate(e.target.value)}
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
      </div>

      {/* Display inquiries */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredInquiries.length > 0 ? (
          filteredInquiries.map((inquiry) => (
            <InquiryCard key={inquiry._id} inquiry={inquiry} />
          ))
        ) : (
          <p className="col-span-full text-center">
            No inquiries found matching the filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default EnquiriesPage;
