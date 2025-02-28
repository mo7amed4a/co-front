"use client"
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
import { Input } from "../ui/input";

import { DiplomaType } from "@/types/types";
import { api } from "@/lib/axios";
import { Button } from "../ui/button"
import React from "react"
import { QueryGetDiplomas } from "@/lib/queryGraphql";

export default function BookingForm() {
    const [diplomas, setDiplomas] = React.useState<DiplomaType[] | null>([])
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

      React.useEffect(() => {
        const fetchDiplomas = async () => {
          try {
            const resTwo = await api.post("", {
                query: QueryGetDiplomas
            })
            const {diplomas}:{diplomas:DiplomaType[]} = resTwo.data.data
            setDiplomas(diplomas);
          } catch (error) {
            console.error("Failed to fetch diplomas", error);
          }
        };
        fetchDiplomas();
      }, []);
  return (
    <form
    onSubmit={formik.handleSubmit}
    >
    <div className="grid gap-8 w-full">
        <div>
        <Input
            name="name"
            placeholder="Your Name"
            className="w-full border-0 rounded-none border-b-2 focus:border-transparent focus:ring-transparent sm:text-sm shadow-none"
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
            className="w-full border-0 rounded-none border-b-2 focus:border-transparent focus:ring-transparent sm:text-sm shadow-none"
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
            className="w-full border-0 rounded-none border-b-2 focus:border-transparent focus:ring-transparent sm:text-sm shadow-none"
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
            className="w-full border-0 rounded-none border-b-2 focus:border-transparent focus:ring-transparent sm:text-sm shadow-none"
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
            <SelectTrigger className="w-full border-0 rounded-none border-b-2 focus:border-transparent focus:ring-transparent sm:text-sm shadow-none">
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
        <Button type="submit" className="min-w-[180px] h-11 rounded-none">
            Booking
        </Button>
    </div>
    </form>
  )
}
