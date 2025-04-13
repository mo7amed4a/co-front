import CardDiploma from "@/components/diploma/CardDiploma";
import RichViewer from "@/components/diploma/RichViewer";
import { Button } from "@/components/ui/button";
import { api, BaseUrl } from "@/lib/axios";
import { diplomaString } from "@/lib/queryGraphql";
import { DiplomaType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const res = await api.post("", {
    query: `query About {
        about {
          title
          description
          image {
            alternativeText
            url
          }
          social {
            links {
              text
              link
              color
            }
          }
        }
          diplomas ${diplomaString}
      }`,
  });
  const data = res.data.data.about;
  const diplomas = res.data.data.diplomas;

  return data && (
    <div>
      {/* Classic and Chic About Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="w-full h-[450px] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src={BaseUrl + data.image.url}
                  alt={data.image.alternativeText}
                  width={1400}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              {/* <Avatar className="w-full h-full">
                <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-4xl">
                  {data.title.charAt(0)}
                </AvatarFallback>
              </Avatar> */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-tight">
              {data.title}
            </h1>
            <div className="text-gray-600 leading-relaxed text-lg">
              <RichViewer content={data.description} />
            </div>
            <div className="flex flex-wrap gap-4">
              {data.social.links.map(
                (link: {
                  text: string;
                  link: string;
                  color:
                    | "secondary"
                    | "link"
                    | "default"
                    | "destructive"
                    | "outline"
                    | "ghost"
                    | null
                    | undefined;
                }) => (
                  <Button
                    key={link.text}
                    variant={link.color || "default"}
                    className="rounded-full px-6 hover:shadow-md transition-shadow duration-300"
                    asChild
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      dangerouslySetInnerHTML={{ __html: link.text }}
                    ></a>
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Diplomas Section */}
      <section className="custom-container py-10 space-y-5">
        <div className="flex justify-end">
          <Button
            asChild
            className="rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            <Link href={"/diplomas"}>View All</Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {diplomas.map((diploma: DiplomaType) => (
            <div className="w-full" key={diploma.documentId}>
              <CardDiploma diploma={diploma} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}