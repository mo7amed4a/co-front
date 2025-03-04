"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "@/lib/axios";
import { toast } from "sonner";

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.post("", {
          query: `
            mutation CreateContact($data: ContactInput!) {
              createContact(data: $data) {
                name
                email
                phone
                message
              }
            }
          `,
          variables: { data: values },
        });
        toast.success("Done");
        resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl order-1 lg:order-2">
      <h2 className="text-primary font-manrope text-4xl font-semibold leading-10 mb-11">
        Send Us A Message
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {['name', 'email', 'phone', 'message'].map((field) => (
          <div key={field} className="mb-10">
            <input
              type="text"
              name={field}
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                // @ts-expect-error @ts-ignore
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
                {/* @ts-expect-error @ts-ignore */}
                {formik.touched[field] && formik.errors[field] && (
                // @ts-expect-error @ts-ignore
              <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-primary shadow-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
