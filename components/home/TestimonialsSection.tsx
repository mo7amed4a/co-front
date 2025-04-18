import Testimonial from "./Testimonial"

export default function TestimonialsSection({
  data
}:{
  data: any
}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-3xl">{data.title}</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {data?.ratings?.map((rate: any, index: number) => (
              <Testimonial key={index} data={rate} />
            ))}
        </div>
      </div>
    </section>
  )
}
