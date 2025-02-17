import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_api = import.meta.env.VITE_IMAGE_URL;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const UpdateDoctor = () => {
  const update = useLoaderData();
  const { fees, about, experience, degree, speciality, image, name, _id } =
    update;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let imageUrl = image;
    if (data.image.length > 0) {
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);
      const res = await axiosPublic.post(imageHostingUrl, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      }
    }

    const updatedDoctor = {
      name: data.name,
      fees: data.fees,
      about: data.about,
      experience: data.experience,
      degree: data.degree,
      speciality: data.speciality,
      image: imageUrl,
    };

    const res = await axiosSecure.patch(`/doctors/${_id}`, updatedDoctor);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} has been updated successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/doctorslist");
    }
  };

  return (
    <Container>
      <SectionTitle heading={"Update Doctor Information"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 space-y-6 max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("name")}
            defaultValue={name}
            placeholder="Doctor's Name"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("fees")}
            defaultValue={fees}
            placeholder="Fees"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("experience")}
            defaultValue={experience}
            placeholder="Experience"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("degree")}
            defaultValue={degree}
            placeholder="Degree"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("speciality")}
            defaultValue={speciality}
            placeholder="Speciality"
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            type="file"
            {...register("image")}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <textarea
          {...register("about")}
          defaultValue={about}
          placeholder="About"
          className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
        >
          Update Doctor
        </button>
      </form>
    </Container>
  );
};

export default UpdateDoctor;
