import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/users/${user.email}`).then((res) => {
      setUserInfo(res.data);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl rounded-lg mt-10 text-white">
      <SectionTitle heading="User Profile" subHeading="Update your profile" />
      <div className="flex flex-col items-center gap-7 mt-6">
        {userInfo.map((userData, index) => (
          <div
            key={index}
            className="w-full p-6 bg-white bg-opacity-20 rounded-lg shadow-lg text-center"
          >
            <h1 className="text-4xl font-bold text-yellow-300">
              {userData?.name}
            </h1>
            <i className="text-2xl text-black ">{userData?.email}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
