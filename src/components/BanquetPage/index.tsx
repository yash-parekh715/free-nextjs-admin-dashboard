// "use client";
// import React, { useEffect, useState } from "react";
// import BanquetCard from "../BanquetCard";
// import BanquetForm from "../BanquetForm";

// interface Banquet {
//   id: string;
//   name: string;
//   capacity: number;
//   features: string[];
//   packages: { name: string; price: number }[];
//   photos: string[];
// }

// const BanquetsPage: React.FC = () => {
//   const [banquets, setBanquets] = useState<Banquet[]>([]);
//   const [editingBanquet, setEditingBanquet] = useState<Banquet | null>(null);
//   const [showForm, setShowForm] = useState(false); // Toggle for showing the form

//   // Load banquets from localStorage
//   useEffect(() => {
//     const storedBanquets = JSON.parse(localStorage.getItem("banquets") || "[]");
//     setBanquets(storedBanquets);
//   }, []);

//   // Save banquets to localStorage
//   const saveBanquets = (newBanquets: Banquet[]) => {
//     setBanquets(newBanquets);
//     localStorage.setItem("banquets", JSON.stringify(newBanquets));
//   };

//   // Handle delete
//   const handleDelete = (id: string) => {
//     const updatedBanquets = banquets.filter((banquet) => banquet.id !== id);
//     saveBanquets(updatedBanquets);
//   };

//   // Handle edit
//   const handleEdit = (id: string) => {
//     const banquetToEdit = banquets.find((banquet) => banquet.id === id);
//     if (banquetToEdit) {
//       setEditingBanquet(banquetToEdit);
//       setShowForm(true); // Show the form when editing
//     }
//   };

//   // Handle adding a new banquet
//   const handleAddNewBanquet = () => {
//     setEditingBanquet(null); // Clear the editing banquet
//     setShowForm(true); // Show the form for adding
//   };

//   return (
//     <div className="space-y-6 p-6">
//       <h1 className="mb-4 text-2xl font-bold">Manage Banquets</h1>

//       {/* List of Banquets */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {banquets.map((banquet) => (
//           <BanquetCard
//             key={banquet.id}
//             banquet={banquet}
//             onDelete={handleDelete}
//             onEdit={handleEdit}
//           />
//         ))}
//       </div>

//       {/* Add/Edit Banquet Modal */}
//       <div className="mt-6">
//         <button
//           className="rounded bg-green-500 px-4 py-2 text-white"
//           onClick={handleAddNewBanquet} // Call the function to add a new banquet
//         >
//           Add New Banquet
//         </button>
//       </div>

//       {/* Show the form when showForm is true */}
//       {showForm && (
//         <BanquetForm
//           banquet={editingBanquet}
//           onSave={(banquet) => {
//             const updatedBanquets = editingBanquet
//               ? banquets.map((b) => (b.id === banquet.id ? banquet : b))
//               : [...banquets, { ...banquet, id: Date.now().toString() }];
//             saveBanquets(updatedBanquets);
//             setShowForm(false); // Hide the form after saving
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default BanquetsPage;

"use client";
import React, { useEffect, useState } from "react";
import BanquetCard from "../BanquetCard";
import BanquetForm from "../BanquetForm";

interface Banquet {
  id: string;
  name: string;
  capacity: number;
  features: string[];
  packages: { name: string; price: number }[];
  photos: string[];
}

const BanquetsPage: React.FC = () => {
  const [banquets, setBanquets] = useState<Banquet[]>([]);
  const [editingBanquet, setEditingBanquet] = useState<Banquet | null>(null);
  const [showForm, setShowForm] = useState(false); // Toggle for showing the form

  // Load banquets from localStorage
  useEffect(() => {
    const storedBanquets = JSON.parse(localStorage.getItem("banquets") || "[]");
    setBanquets(storedBanquets);
  }, []);

  // Save banquets to localStorage
  const saveBanquets = (newBanquets: Banquet[]) => {
    setBanquets(newBanquets);
    localStorage.setItem("banquets", JSON.stringify(newBanquets));
  };

  // Handle delete
  const handleDelete = (id: string) => {
    const updatedBanquets = banquets.filter((banquet) => banquet.id !== id);
    saveBanquets(updatedBanquets); // Update both state and localStorage
  };

  // Handle edit
  const handleEdit = (id: string) => {
    const banquetToEdit = banquets.find((banquet) => banquet.id === id);
    if (banquetToEdit) {
      setEditingBanquet(banquetToEdit);
      setShowForm(true); // Show the form when editing
    }
  };

  // Handle adding a new banquet
  const handleAddNewBanquet = () => {
    setEditingBanquet(null); // Clear the editing banquet
    setShowForm(true); // Show the form for adding
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="mb-4 text-2xl font-bold">Manage Banquets</h1>

      {/* List of Banquets */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {banquets.map((banquet) => (
          <BanquetCard
            key={banquet.id}
            banquet={banquet}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* Add/Edit Banquet Modal */}
      <div className="mt-6">
        <button
          className="rounded bg-green-500 px-4 py-2 text-white"
          onClick={handleAddNewBanquet} // Call the function to add a new banquet
        >
          Add New Banquet
        </button>
      </div>

      {/* Show the form when showForm is true */}
      {showForm && (
        <BanquetForm
          banquet={editingBanquet}
          onSave={(banquet) => {
            const updatedBanquets = editingBanquet
              ? banquets.map((b) => (b.id === banquet.id ? banquet : b))
              : [...banquets, { ...banquet, id: Date.now().toString() }];
            saveBanquets(updatedBanquets);
            setShowForm(false); // Hide the form after saving
          }}
        />
      )}
    </div>
  );
};

export default BanquetsPage;
