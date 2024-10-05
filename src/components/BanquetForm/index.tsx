import React, { useState } from "react";

interface Banquet {
  id: string;
  name: string;
  capacity: number;
  features: string[];
  packages: { name: string; price: number }[];
  photos: string[]; // Will store base64 strings or URLs for photos
}

interface BanquetFormProps {
  banquet: Banquet | null;
  onSave: (banquet: Banquet) => void;
}

const BanquetForm: React.FC<BanquetFormProps> = ({ banquet, onSave }) => {
  const [name, setName] = useState(banquet?.name || "");
  const [capacity, setCapacity] = useState(banquet?.capacity || 0);
  const [features, setFeatures] = useState<string[]>(banquet?.features || []);
  const [packages, setPackages] = useState<{ name: string; price: number }[]>(
    banquet?.packages || [],
  );
  const [photos, setPhotos] = useState<string[]>(banquet?.photos || []); // Base64 images

  const handleAddPackage = () => {
    setPackages([...packages, { name: "", price: 0 }]);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setPhotos((prevPhotos) => [...prevPhotos, reader.result as string]);
          }
        };
        reader.readAsDataURL(file); // Read the file and convert it to base64
      });
    }
  };

  const handleSave = () => {
    onSave({
      id: banquet?.id || Date.now().toString(),
      name,
      capacity,
      features,
      packages,
      photos, // Store base64 encoded images
    });
  };

  return (
    <div className="bg-gray-100 mt-6 rounded-lg p-4">
      <h2 className="mb-4 text-lg font-bold">
        {banquet ? "Edit Banquet" : "Add Banquet"}
      </h2>

      <div className="space-y-4">
        <div>
          <label>Banquet Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label>Capacity:</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label>Features:</label>
          <textarea
            value={features.join(", ")}
            onChange={(e) => setFeatures(e.target.value.split(", "))}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label>Packages:</label>
          {packages.map((pkg, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={pkg.name}
                onChange={(e) =>
                  setPackages(
                    packages.map((p, i) =>
                      i === index ? { ...p, name: e.target.value } : p,
                    ),
                  )
                }
                className="w-1/2 rounded border p-2"
                placeholder="Package Name"
              />
              <input
                type="number"
                value={pkg.price}
                onChange={(e) =>
                  setPackages(
                    packages.map((p, i) =>
                      i === index ? { ...p, price: Number(e.target.value) } : p,
                    ),
                  )
                }
                className="w-1/2 rounded border p-2"
                placeholder="Price"
              />
            </div>
          ))}
          <button
            className="bg-blue-500 px-4 py-2 text-white"
            onClick={handleAddPackage}
          >
            Add Package
          </button>
        </div>

        <div>
          <label>Photos:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            className="text-gray-500 block w-full text-sm file:mr-4 file:rounded file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-white hover:file:bg-blue-600"
          />
          {/* Display uploaded photos */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Banquet Photo ${index}`}
                className="h-auto w-full rounded"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-green-500 px-4 py-2 text-white"
            onClick={handleSave}
          >
            {banquet ? "Save Changes" : "Add Banquet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BanquetForm;
