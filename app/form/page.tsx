"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import axios from "axios";
import { api, BaseUrl } from "@/lib/axios";
import { QueryHome } from "@/lib/queryGraphql";
import { HomeType } from "@/types/types";
import LogosChild from "@/components/home/LogosChild";

export default function DemoForm() {
  const [logos, setLogos] = useState([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    location: "",
    companyName: "",
    companySize: "",
    peopleToTrain: "",
    jobTitle: "",
    jobLevel: "",
    trainingNeeds: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post(BaseUrl + "/api/forms", {data:formData});
      console.log("Form submitted successfully:");
      setSuccess(true);
      // Optionally reset the form
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        location: "",
        companyName: "",
        companySize: "",
        peopleToTrain: "",
        jobTitle: "",
        jobLevel: "",
        trainingNeeds: "",
      });
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };


  const getLogos = async ()=> {
    const res = await api.post("", {
      query: QueryHome
    })
    const {homePage}:{homePage:HomeType} = res.data.data    
    setLogos(homePage?.logos?.image)
  }

  useEffect(() => {
    getLogos()
  }, [])
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 md:px-10 py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get your demo</h1>
          <p className="text-lg text-gray-600">
            Tell us your needs and we&apos;ll start on a custom plan to drive results.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">With Udemy as your learning partner, you can:</h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">
                Train your entire workforce with over 30,000+ courses in 16 languages
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Prep employees for over 200 industry-recognized certification exams</span>
            </li>

            <li className="flex items-start gap-2">
              <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">
                Develop highly skilled tech teams in risk-free practice environments
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">
                Identify emerging skills gaps, learning trends, and industry benchmarks
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Check className="h-6 w-6 text-teal-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Integrate content with your existing learning management system</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">Trusted by</h2>
          {/* Logos would go here */}
          {logos?.length > 0 && <LogosChild data={logos as any}/>}
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {success && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md">
              Form submitted successfully!
            </div>
          )}
          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="sr-only">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="sr-only">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData.lastName}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="workEmail" className="sr-only">
              Work Email *
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              placeholder="Work Email *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={formData.workEmail}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="sr-only">
              Phone Number *
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={formData.phoneNumber}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="sr-only">
              Where are you located? *
            </label>
            <div className="relative">
              <select
                id="location"
                name="location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData.location}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="" disabled>
                  Where are you located? *
                </option>
                <option value="Select...">Select...</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="companyName" className="sr-only">
              Company Name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Company Name *"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={formData.companyName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="companySize" className="sr-only">
                Company Size *
              </label>
              <div className="relative">
                <select
                  id="companySize"
                  name="companySize"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.companySize}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  <option value="" disabled>
                    Company Size *
                  </option>
                  <option value="Select...">Select...</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="peopleToTrain" className="sr-only">
                Number of people to train *
              </label>
              <div className="relative">
                <select
                  id="peopleToTrain"
                  name="peopleToTrain"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.peopleToTrain}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  <option value="" disabled>
                    Number of people to train *
                  </option>
                  <option value="Select...">Select...</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="jobTitle" className="sr-only">
                Job Title *
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="Job Title *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={formData.jobTitle}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="jobLevel" className="sr-only">
                Job Level *
              </label>
              <div className="relative">
                <select
                  id="jobLevel"
                  name="jobLevel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formData.jobLevel}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  <option value="" disabled>
                    Job Level *
                  </option>
                  <option value="Select...">Select...</option>
                  <option value="Entry">Entry</option>
                  <option value="Mid-Level">Mid-Level</option>
                  <option value="Senior">Senior</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                  <option value="VP">VP</option>
                  <option value="C-Level">C-Level</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="trainingNeeds" className="sr-only">
              What are your organization&apos;s training needs? (Optional)
            </label>
            <textarea
              id="trainingNeeds"
              name="trainingNeeds"
              placeholder="What are your organization's training needs? (Optional)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={formData.trainingNeeds}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div>
            <button
              type="submit"
              className={`w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-md transition-colors ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Get Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}