"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { DiplomaType } from "@/types/types";
import { api } from "@/lib/axios";

export default function BookingSection({
  diplomas,
}: {
  diplomas: DiplomaType[];
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      diploma: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      country: Yup.string().required("Country is required"),
      diploma: Yup.string().required("Diploma is required"),
    }),
    onSubmit: async (values) => {
      try {
        await api.post("", {
          query: `mutation CreateBooking($data: BookingInput!) {
              createBooking(data: $data) {
                name
                email
                phone
                country
                diplomas {
                  documentId
                }
              }
            }`,
          variables: {
            data: {
              country: values.country,
              diplomas: values.diploma.toString(),
              email: values.email,
              name: values.name,
              phone: values.phone,
            },
          },
        });
        toast.success("Booking successful");
        formik.resetForm();
      } catch (error) {
        console.error("Booking failed", error);
      }
    },
  });

  return (
    <div className="custom-container pb-16">
      <div
        className="w-full -mt-10 lg:-mt-20 bg-white relative z-10 rounded-xl space-y-10 p-10 md:p-20"
        style={{ boxShadow: "0px 2px 4px 0px #00000040" }}
      >
        <div className="flex justify-center items-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Booking Now!
          </h2>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row justify-center lg:gap-10 md:items-center gap-4"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                className="min-w-[180px] border-2 h-11 border-primary text-primary font-medium"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name && (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <Input
                name="email"
                placeholder="Email"
                className="min-w-[180px] border-2 h-11 border-primary text-primary font-medium"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div>
              <Input
                name="phone"
                placeholder="Phone Number"
                className="min-w-[180px] border-2 h-11 border-primary text-primary font-medium"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone && (
                <div className="text-red-500 text-xs">
                  {formik.errors.phone}
                </div>
              )}
            </div>
            <div>
              <Input
                name="country"
                placeholder="Country"
                className="min-w-[180px] border-2 h-11 border-primary text-primary font-medium"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
              {formik.errors.country && (
                <div className="text-red-500 text-xs">
                  {formik.errors.country}
                </div>
              )}
            </div>
            <div>
              <Select
                onValueChange={(value) =>
                  formik.setFieldValue("diploma", value)
                }
                value={formik.values.diploma}
              >
                <SelectTrigger className="min-w-[180px] border-2 h-11 border-primary text-primary font-medium">
                  <SelectValue placeholder="Diploma" />
                </SelectTrigger>
                <SelectContent>
                  {diplomas?.map((item) => (
                    <SelectItem key={item.documentId} value={item.documentId}>
                      {item.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.errors.diploma && (
                <div className="text-red-500 text-xs">
                  {formik.errors.diploma}
                </div>
              )}
            </div>

            <div className="flex justify-center xld:col-span-full">
              <Button type="submit" className="min-w-[180px] h-11">
                Booking
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
