// import React from "react";

// interface Banquet {
//   id: string;
//   name: string;
//   capacity: number;
//   features: string[];
//   packages: { name: string; price: number }[];
//   photos: string[];
// }

// interface BanquetCardProps {
//   banquet: Banquet;
//   onDelete: (id: string) => void;
//   onEdit: (id: string) => void;
// }

// const BanquetCard: React.FC<BanquetCardProps> = ({
//   banquet,
//   onDelete,
//   onEdit,
// }) => {
//   return (
//     <div className="rounded-lg bg-white p-4 shadow-lg">
//       <h3 className="text-xl font-bold">{banquet.name}</h3>
//       <div className="mt-2">
//         <p>Capacity: {banquet.capacity}</p>
//         <p>Features: {banquet.features.join(", ")}</p>
//         <div className="mt-2">
//           <p>Packages:</p>
//           <ul>
//             {banquet.packages.map((pkg, index) => (
//               <li key={index}>
//                 {pkg.name} - ${pkg.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-2">
//           {banquet.photos.map((photo, index) => (
//             <img
//               key={index}
//               src={photo}
//               alt={`Banquet ${index}`}
//               className="h-20 w-20 rounded-lg object-cover"
//             />
//           ))}
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end space-x-2">
//         <button
//           className="rounded bg-blue-500 px-4 py-2 text-white"
//           onClick={() => onEdit(banquet.id)}
//         >
//           Edit
//         </button>
//         <button
//           className="bg-red rounded px-4 py-2 text-white"
//           onClick={() => onDelete(banquet.id)} // Trigger delete when clicked
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BanquetCard;

import React, { useState } from "react";

interface Banquet {
  id: string;
  name: string;
  capacity: number;
  features: string[];
  packages: { name: string; price: number }[];
  photos: string[];
}

interface BanquetCardProps {
  banquet: Banquet;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const BanquetCard: React.FC<BanquetCardProps> = ({
  banquet,
  onDelete,
  onEdit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Slideshow for photos */}
      <div className="relative h-64">
        {banquet.photos.length > 0 && (
          <img
            src={banquet.photos[0]} // Display the first photo as the cover
            alt={`Cover for ${banquet.name}`}
            className="h-full w-full object-cover transition-all duration-500"
          />
        )}
      </div>

      {/* Banquet details */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{banquet.name}</h3>
        <p>Capacity: {banquet.capacity}</p>
        <button
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
          onClick={openModal} // Open modal on click
        >
          View Details
        </button>
        <div className="mt-2 flex justify-end space-x-2">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={() => onEdit(banquet.id)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 rounded px-4 py-2 text-white"
            onClick={() => onDelete(banquet.id)} // Trigger delete when clicked
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 max-w-lg rounded-lg bg-white p-6">
            <h3 className="text-xl font-bold">{banquet.name}</h3>
            <p>Capacity: {banquet.capacity}</p>
            <p>Features: {banquet.features.join(", ")}</p>
            <div className="mt-4">
              <p>Packages:</p>
              <ul>
                {banquet.packages.map((pkg, index) => (
                  <li key={index}>
                    {pkg.name} - ${pkg.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {banquet.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Banquet ${index}`}
                  className="h-24 w-full rounded-lg object-cover"
                />
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-gray-500 rounded px-4 py-2 text-white"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => onEdit(banquet.id)}
              >
                Edit
              </button>
              <button
                className="rounded bg-red px-4 py-2 text-white"
                onClick={() => onDelete(banquet.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BanquetCard;
