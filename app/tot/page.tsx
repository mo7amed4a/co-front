import RichViewer from "@/components/diploma/RichViewer";
import { api, BaseUrl } from "@/lib/axios";
import { Image as ImageType } from "@/types/types";
import Image from "next/image";
import HeroAbout from "./_components/Hero";

export const dynamic = "force-dynamic";

type SectionType = {
  id: string;
  title_section: string;
  description: string;
  image: ImageType[];
};

export default async function TOTPage() {
  const res = await api.post("", {
    query: `query totPage {
       totPage {
          tot_hero {
              title
              description
              background {
                alternativeText
                url
              }  
            }
            tot_sections {
              id
              title_section
              description
              image {
                alternativeText
                url
              }
            }
          }
      }`,
  });
  console.log(res.data);

  const data = res.data.data.totPage;

  return data && (
    <div>
      <HeroAbout data={data.tot_hero} />
      <section className="grid gap-y-20 py-20">
        {data?.tot_sections?.map((section: SectionType) => (
          <div
            className={`flex flex-col lg:flex-row items-start gap-10 odd:lg:flex-row-reverse w-full`}
            key={section.id}
          >
            <div className={`lg:w-2/5 z-10 h-full px-4 md:px-0 ${section?.image?.length > 2 && "lg:!w-2/4"}`}>
              <div className={`grid gap-y-4 lg:!sticky top-20 ${section?.image?.length > 2 && "grid-cols-2 gap-4"}`}>
                {section?.image.map((img, index) => (
                  <Image
                    key={index}
                    src={BaseUrl + img.url}
                    alt={img.alternativeText}
                    width={1400}
                    height={1000}
                    className="object-cover w-full h-[450px] max-w-full"
                  />
                ))}
              </div>
            </div>
            <div className={`w-full flex items-center h-full lg:w-3/5 px-4 md:px-10 lg:px-16 ${section?.image?.length > 2 && "lg:!w-2/4"}`}>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
                  {section.title_section}
                </h1>
                <div className="text-gray-600 leading-relaxed text-lg">
                  <RichViewer content={section.description as any} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}