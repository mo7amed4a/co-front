import CardDiploma from "@/components/diploma/CardDiploma";
import { api } from "@/lib/axios";
import { QueryGetDiplomas } from "@/lib/queryGraphql";
import { DiplomaType } from "@/types/types";
import React from "react";
import Hero from "./_components/Hero";

export default async function page() {
  const resTwo = await api.post("", {
    query: QueryGetDiplomas,
  });
  const { diplomas }: { diplomas: DiplomaType[] } = resTwo.data.data;

  return (
    <div>
      <Hero />
      <div className="custom-container py-10 space-y-5">
        <div className="flex justify-center text-center">
          <h1 className="text-lg md:text-2xl font-bold py-4">Diplomas</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {diplomas.map((diploma) => (
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
