import AboutSection from "@/components/home/AboutSection";
import BlogsSection from "@/components/home/blogs";
import DiplomasSection from "@/components/home/DiplomasSection";
import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/Hero";
import Team from "@/components/home/team";
import BookingForm from "@/components/layout/bookingForm";
import { api } from "@/lib/axios";
import { QueryHome } from "@/lib/queryGraphql";
import { HomeType } from "@/types/types";

export default async function Home() {
  const res = await api.post("", {
    query: QueryHome
  })
  const {homePage}:{homePage:HomeType} = res.data.data

  // const resTwo = await api.post("", {
  //   query: QueryGetDiplomas
  // })
  // const {diplomas}:{diplomas:DiplomaType[]} = resTwo.data.data

  return (
    <div>
      <Hero slides={homePage.slider} align="center"/>
      <DiplomasSection data={homePage.diplomas}/>
      {/* <BookingSection diplomas={diplomas}/> */}
      <AboutSection data={homePage.AboutSection}/>
      <Team />
      <BlogsSection blogs={homePage.blogs.blogs}/>
      <FAQSection faqs={homePage.faqs}/>
      <section className="bg--100 py-20">
        <div className="container grid grid-cols-2">
          <div>
            مش عارف اعمل اي هنا
          </div>
          <div>
            <div className="lg:w-3/4 mx-auto">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
