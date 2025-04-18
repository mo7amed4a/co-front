import Testimonial from "@/components/home/Testimonial";
import { api } from "@/lib/axios";
import React from "react";
import HeroFeedback from "./_components/Hero";

export default async function page() {
  const res = await api.post("", {
    query: `query Ratings {
            feedbackPage {
                hero {
                    title
                    description
                    background {
                        alternativeText
                        url
                    }
                }
            }
            ratings {
                comment
                full_name
                image {
                    alternativeText
                    url
                }
                job
            }
        }`,
  });
  const data = res.data.data.ratings;
  const hero = res.data.data.feedbackPage.hero;
  return  data &&  (
    <div>
      {hero && <HeroFeedback data={hero} />}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
                Feedback
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {data?.map((rate: any, index: number) => (
              <Testimonial key={index} data={rate} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
