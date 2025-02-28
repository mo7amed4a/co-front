import CardDiploma from "@/components/diploma/CardDiploma";
import RichViewer from "@/components/diploma/RichViewer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { api, BaseUrl } from "@/lib/axios";
import { DiplomaType } from "@/types/types";
import Link from "next/link";

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
          diplomas {
    documentId
    text
    description
    long_description
    image {
      alternativeText
      url
    }
    images {
      alternativeText
      url
    }
    createdAt
  }
      }`,
  });
  const data = res.data.data.about
  const diplomas = res.data.data.diplomas

  return data && (
    <div>
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <div className="mb-8">
          <Avatar className="w-40 h-40 mx-auto bg-primary">
            <AvatarImage
              src={BaseUrl + data.image.url}
              className="-mt-5 h-[95%]"
              alt={data.image.alternativeText}
            />
            <AvatarFallback>{data.title}</AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-4xl font-extrabold mt-6 text-primary">
          {data.title}
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          <RichViewer content={data.description} />
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.services && data.services.services.map((service: { title: string; description: [] }, index: number) => 
          <div key={index}>
            <h2 className="text-2xl font-semibold text-secondary">
              {service.title}
            </h2>
            <p className="text-gray-400 mt-2">
              <RichViewer content={service.description} />
            </p>
          </div>)}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {
            data.social.links.map((link: { text: string; link: string, color: "secondary" | "link" | "default" | "destructive" | "outline" | "ghost" | null | undefined}) => (
              <Button variant={link.color} asChild key={link.text}>
                <a href={link.link} target="_blank" dangerouslySetInnerHTML={{__html: link.text}}></a>
              </Button>
            ))
          }
        </div>
      

      </div>
      <div className="custom-container py-10 space-y-5">
      <div className="flex justify-end">
        
        <Button asChild>
          <Link className="" href={"/diplomas"}>
            View All
          </Link>
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {diplomas.map((diploma:DiplomaType) => (
          <div
            className="w-full"
            key={diploma.documentId}
          >
            <CardDiploma diploma={diploma} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
