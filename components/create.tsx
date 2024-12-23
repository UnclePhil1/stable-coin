import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateStablecoinModal = () => {
  const [image, setImage] = useState<string | null>(null);


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-4 text-lg">
            Create Stablecoin
          </button>
        </DialogTrigger>
        <DialogContent className="w-full flex flex-row p-0 rounded-none w-auto justify-center">
          <div className="w-auto hidden md:flex bg-secondary rounded-l-md flex-col justify-center items-center text-center px-[5%]">
            <DialogTitle className="text-white text-4xl font-bold">Self Owned</DialogTitle>
            <DialogDescription className="text-white text-4xl font-bold">Steady Value</DialogDescription>
          </div>
          <div className="w-full md:w-[600px] flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-primary text-3xl font-bold">
              Create your stablecoin
            </h1>
            <p className="text-primary text-md font-bold">
              Define your coins properties below{" "}
            </p>
            <div className="mt-8">
              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-primary"
                >
                  Token Image
                </label>
                <label className="block text-center cursor-pointer border-2 border-primary rounded-full">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-24 h-24 object-cover rounded-full mx-auto"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-gray-500">+</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-500"
                >
                  Token Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. My Stablecoin"
                  className="border rounded-md p-2 w-full md:w-[400px] focus:outline-secondary/50"
                />
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="symbol"
                  className="text-sm font-medium text-gray-500"
                >
                  Token Symbol
                </label>
                <input
                  type="text"
                  id="symbol"
                  placeholder="e.g. STBL"
                  className="border rounded-md p-2 w-full md:w-[400px] focus:outline-secondary/50"
                />
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="type"
                  className="text-sm font-medium text-gray-500"
                >
                  Fiat Bond
                </label>
                <Select>
                  <SelectTrigger className="md:w-[400px] focus:outline-secondary/50 border">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateStablecoinModal;
