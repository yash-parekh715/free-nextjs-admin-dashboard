// components/InquiryCard.tsx

// import { useState } from "react";

// type Inquiry = {
//   id: string;
//   date: string;
//   brief: string;
//   details: string;
// };

// type InquiryCardProps = {
//   inquiry: Inquiry;
// };

// const EnquiryCard: React.FC<InquiryCardProps> = ({ inquiry }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="mb-4 transform rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
//       <div className="mb-2 flex items-center justify-between">
//         <div className="text-lg font-bold">{inquiry.date}</div>
//         <button
//           className="text-sm text-orange-500 hover:text-orange-700 focus:outline-none"
//           onClick={toggleExpand}
//         >
//           {expanded ? "Close Details" : "View Details"}
//         </button>
//       </div>
//       <div className={`${expanded ? "block" : "hidden"} text-gray-700 mt-2`}>
//         {inquiry.details}
//       </div>
//     </div>
//   );
// };

// export default EnquiryCard;

import React from "react";

interface EnquiryCardProps {
  inquiry: {
    _id: string;
    userId: string;
    banquetId: string;
    status: string;
    inquiryDate: string;
    desiredBookingDate: string;
  };
}

const EnquiryCard: React.FC<EnquiryCardProps> = ({ inquiry }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h3 className="text-lg font-bold">{inquiry.status}</h3>
      <p>Inquiry Date: {new Date(inquiry.inquiryDate).toLocaleDateString()}</p>
      <p>
        Desired Booking Date:{" "}
        {new Date(inquiry.desiredBookingDate).toLocaleDateString()}
      </p>
      <p>User ID: {inquiry.userId}</p>
      <p>Banquet ID: {inquiry.banquetId}</p>
    </div>
  );
};

export default EnquiryCard;
