import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_URL;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const AddDoctor = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await axiosPublic.post(imageHostingUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        const doctorData = {
          name: data.name,
          about: data.about,
          speciality: data.speciality,
          fees: parseFloat(data.fees),
          image: res.data.data.display_url,
          experience: data.experience,
          degree: data.degree,
        };

        const doctorRes = await axiosSecure.post("/doctors", doctorData);

        if (doctorRes.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Doctor added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add doctor. Please try again!",
      });
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <SectionTitle
        heading={"Add Doctor"}
        subHeading={"Choose your favourite doctor"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Doctor Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Doctor name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Degree
          </label>
          <input
            type="text"
            id="degree"
            placeholder="your degree"
            {...register("degree", { required: "degree is required" })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.degree && (
            <p className="text-red-500 text-sm">{errors.degree.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <input
            type="text"
            id="Experience"
            placeholder="Experience"
            {...register("experience", { required: "Experience is required" })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.experience.message}</p>
          )}
        </div>

        {/* Category Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Select Category
            </label>
            <select
              id="speciality"
              {...register("speciality", { required: "Category is required" })}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              <option value="">Select a speciality</option>
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Neurologist">Neurologist</option>
            </select>
            {errors.speciality && (
              <p className="text-red-500 text-sm">
                {errors.speciality.message}
              </p>
            )}
          </div>

          {/* Price Field */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Fees
            </label>
            <input
              type="number"
              id="fees"
              placeholder="Enter consultation fees"
              {...register("fees", { required: "Fees is required" })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.fees && (
              <p className="text-red-500 text-sm">{errors.fees.message}</p>
            )}
          </div>
        </div>

        {/* About Field */}
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About Doctor
          </label>
          <textarea
            id="about"
            rows={4}
            placeholder="Describe the doctor"
            {...register("about")}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Image Upload Field */}
        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            className="file-input w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EAB308] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
