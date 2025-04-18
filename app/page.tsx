import AboutSection from "@/components/home/AboutSection";
import BlogsSection from "@/components/home/blogs";
import ComingSoonSection from "@/components/home/ComingSoonSection";
import DiplomasSection from "@/components/home/DiplomasSection";
import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/Hero";
import Logos from "@/components/home/Logos";
import RegisterSection from "@/components/home/RegisterSection";
import Team from "@/components/home/team";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TOTSection from "@/components/home/TOTSection";
import { api } from "@/lib/axios";
import { QueryHome } from "@/lib/queryGraphql";
import { HomeType } from "@/types/types";

export const dynamic = "force-dynamic"

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
      <ComingSoonSection soon={homePage.coming_soon} />
      <AboutSection data={homePage.AboutSection}/>
      <DiplomasSection data={homePage.diplomas}/>
      <TOTSection data={homePage.tot}/>
      <Team team={homePage.team.teams}/>
      <TestimonialsSection data={homePage.rating} />
      <FAQSection faqs={homePage.faqs}/>
      <RegisterSection data={homePage.register}/>
      <BlogsSection blogs={homePage.blogs.blogs}/>
      {homePage.logos && <Logos data={homePage.logos}/>}
    </div>
  );
}
