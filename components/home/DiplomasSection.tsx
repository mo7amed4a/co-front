import { Button } from "@/components/ui/button";
import { DiplomaType } from "@/types/types";
import Link from "next/link";
import React from "react";
import CardDiploma from "../diploma/CardDiploma";

export default function DiplomasSection({
  data,
}: {
  data: {
    title: string;
    diplomas: DiplomaType[];
  };
}) {
  return data && (
    <div className="custom-container py-10 space-y-5">
      <div className="flex justify-between">
        <h1 className="text-lg md:text-2xl font-bold">
          {/* Our <span className="text-secondary">Projects</span> */}
          {data.title}
        </h1>
        <Button asChild>
          <Link className="" href={"/diplomas"}>
            View All
          </Link>
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.diplomas.map((diploma) => (
          <div
            className="w-full"
            key={diploma.documentId}
          >
            <CardDiploma diploma={diploma} />
          </div>
        ))}
      </div>
    </div>
  );
}
