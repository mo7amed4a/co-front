"use client"

import type React from "react"
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BaseUrl } from "@/lib/axios"

// Validation schema using Yup
const RatingSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  job: Yup.string().required("Job title is required"),
  comment: Yup.string().required("Comment is required").min(10, "Comment is too short"),
  image: Yup.mixed().nullable(),
})

export default function AddTestimonialPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [statusMessage, setStatusMessage] = useState("")
  const [, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = event.currentTarget.files?.[0] || null
    if (file) {
      // Validate file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB")
        return
      }
      setSelectedFile(file)
      setFieldValue("image", file)

      // Create image preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const submitRating = async (values: any) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create FormData object to send all data
      const formData = new FormData()
      formData.append("full_name", values.full_name)
      formData.append("job", values.job)
      formData.append("comment", values.comment)
      if (values.image) {
        formData.append("image", values.image)
      }

      // Log FormData contents for debugging
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`)
      }

      // Send data to REST API
      const response = await axios.post(`${BaseUrl}/api/ratings`, {
        data: values
      })

      if (response.status >= 200 && response.status < 300) {
        setSubmitStatus("success")
        setStatusMessage("Testimonial submitted successfully!")
      } else {
        throw new Error("Failed to submit testimonial")
      }
    } catch (error: any) {
      console.error("Error submitting testimonial:", error)
      setSubmitStatus("error")
      setStatusMessage(
        error.response?.data?.message ||
          "An error occurred while submitting the testimonial. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-3xl">
      <Card className="w-full shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Add New Feedback</CardTitle>
          <CardDescription>Share your feedback and experience with us</CardDescription>
        </CardHeader>
        <CardContent>
          {submitStatus && (
            <Alert
              className={`mb-6 ${submitStatus === "success" ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}
            >
              {submitStatus === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{submitStatus === "success" ? "Success" : "Error"}</AlertTitle>
              <AlertDescription>{statusMessage}</AlertDescription>
            </Alert>
          )}

          <Formik
            initialValues={{
              full_name: "",
              job: "",
              comment: "",
              image: null,
            }}
            validationSchema={RatingSchema}
            onSubmit={submitRating}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Field
                    as={Input}
                    id="full_name"
                    name="full_name"
                    placeholder="Enter your full name"
                    className={`${errors.full_name && touched.full_name ? "border-red-500" : ""}`}
                  />
                  <ErrorMessage name="full_name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job">Job Title</Label>
                  <Field
                    as={Input}
                    id="job"
                    name="job"
                    placeholder="Enter your job title"
                    className={`${errors.job && touched.job ? "border-red-500" : ""}`}
                  />
                  <ErrorMessage name="job" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Comment</Label>
                  <Field
                    as={Textarea}
                    id="comment"
                    name="comment"
                    placeholder="Enter your comment and feedback about your experience"
                    className={`${errors.comment && touched.comment ? "border-red-500" : ""} min-h-[120px]`}
                  />
                  <ErrorMessage name="comment" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="space-y-2 hidden">
                  <Label htmlFor="image">Profile Picture (Optional)</Label>
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => document.getElementById("image-upload")?.click()}
                    >
                      <Upload className="h-10 w-10 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Click to select an image or drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG, or GIF up to 2MB</p>
                      <input
                        id="image-upload"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setFieldValue)}
                      />
                    </div>

                    {previewUrl && (
                      <div className="mt-4 relative">
                        <img
                          src={previewUrl || "/placeholder.svg"}
                          alt="Preview"
                          className="w-24 h-24 object-cover rounded-full border"
                        />
                        <button
                          type="button"
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs"
                          onClick={() => {
                            setSelectedFile(null)
                            setPreviewUrl(null)
                            setFieldValue("image", null)
                          }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                  <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Testimonial"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  )
}