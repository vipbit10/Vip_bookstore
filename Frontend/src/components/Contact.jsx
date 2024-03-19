import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/contact/contact", data);
      toast.success(response.data.message);
      navigate("/");

    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  const backgroundImageUrl = "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
   <div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>

<div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">CONTACT US</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Messages/Reviews</label>
            <textarea
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-xs text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
          >
            Send Message
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default Contact;
