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
import { api, BaseUrl } from "@/lib/axios";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button"
import React from "react"
import { QueryGetDiplomas } from "@/lib/queryGraphql";
import Image from "next/image";
  
  export default function BookingDrawer({children,diploma}: {children: React.ReactNode,diploma?: DiplomaType}) {
    const [diplomas, setDiplomas] = React.useState<DiplomaType[] | null>([])
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          country: "",
          diploma: diploma?.documentId || "",
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
        <main className="w-full">
            <Drawer>
                <DrawerTrigger className="!w-full">{children}</DrawerTrigger>
                <DrawerContent className={`${ diploma ? "h-[70vh] md:h-[60vh]" : "md:h-]"}`}>
                    <DrawerHeader className="container max-w-7xl mx-auto space-y-10 overflow-y-scroll md:overflow-y-auto">
                        {diploma ? <div className="flex flex-col md:flex-row gap-4">
                            <Image src={BaseUrl + diploma?.image?.url} className="size-20 md:size-40 hidden md:block" alt={diploma?.image?.alternativeText || "alt"} width={1500} height={1500} />
                            <div className="space-y-4 flex flex-col justify-center">
                                <DrawerTitle>{diploma.text}</DrawerTitle>
                                <DrawerDescription>{diploma.description}</DrawerDescription>
                            </div>
                        </div>: 
                        <div className="flex justify-center gap-4">
                          <span className="text-2xl font-bold uppercase">Register Diploma</span>
                        </div>
                        }
                        <form
                            onSubmit={formik.handleSubmit}
                            >
                            <div className={`grid gap-8 ${diploma ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2"}`}>
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
                                <Button type="submit" className="min-w-[180px] h-11">
                                    Booking
                                </Button>
                            </div>
                            </form>
                    </DrawerHeader>
                    <DrawerFooter>
                       
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>      
        </main>
    )
  }
  