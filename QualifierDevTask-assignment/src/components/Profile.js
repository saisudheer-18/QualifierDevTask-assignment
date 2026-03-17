import React from "react";
import { Camera } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col h-full bg-[#f7f8f9]">

      <div className="bg-white px-4 py-4 shadow-sm">
        <h1 className="text-base text-[19px] text-gray-700">
          Account Settings
        </h1>
      </div>

      <div className="px-4 py-5 mt-2">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/3d/9b/9f/3d9b9f6894a6b6c3c88c0cb7b1bcbb0d.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover" />
            <div className="absolute bottom-0 text-white right-0 w-4 h-5 bg-purple-500 rounded-full flex items-center justify-center">
              <Camera className="w-3 h-3" />
            </div>
          </div>

          <div className="mt-1">
            <h2 className="text-[15px] font-medium text-gray-900">Marry Doe</h2>
            <p className="text-[13px] text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-[14px] text-gray-700 mt-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="border-t border-dashed border-gray-300 mt-1" />
      <div className="flex-1" />

      <div className="pb-8">
        <div className="border-t border-dashed border-gray-300" />
      </div>

    </div>
  );
};
export default Profile;
