import { Testimonial as TestimonialType } from "@/interfaces/testimonials.interface";

interface TestimonialProps {
  testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="grid grid-rows-[1fr_auto] md:h-full max-w-[500px]">
      <TestimonialContent testimonial={testimonial} />
      <TestimonialAuthor testimonial={testimonial} />
    </div>
  );
}

function TestimonialContent({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-white p-4 relative z-10 flex flex-col rounded-t-[50px] md:h-full">
      <span className="text-blue-800 text-[4rem] leading-none shrink-0 h-8">
        ❝
      </span>
      <div className="flex-1 flex items-center justify-center py-6">
        <p className="text-gray-600 text-left font-neue-montreal max-w-[90%] text-base leading-relaxed tracking-wide">
          {testimonial.content}
        </p>
      </div>
      <span className="text-blue-800 ml-auto text-[4rem] leading-none shrink-0 h-8">
        ❞
      </span>
    </div>
  );
}

function TestimonialAuthor({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-blue-800 p-3 w-full relative z-0 rounded-b-[50px] text-center">
      <h3 className="text-lg text-[#f7f7f7] font-neue-montreal-medium tracking-wide">
        {testimonial.name}
      </h3>
      <p className="text-gray-300 text-sm font-neue-montreal tracking-wider">
        {testimonial.role}
      </p>
    </div>
  );
}
