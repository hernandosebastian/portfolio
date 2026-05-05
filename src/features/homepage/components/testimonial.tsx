import { Testimonial as TestimonialType } from "@/interfaces/testimonials.interface";

interface TestimonialProps {
  testimonial: TestimonialType;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div
      className="flex flex-col bg-white rounded-[8px] overflow-hidden h-full"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px",
      }}
    >
      {/* Quote body */}
      <div className="flex-1 p-8 flex flex-col gap-6">
        {/* Opening mark */}
        <span
          className="select-none"
          style={{ fontSize: "48px", lineHeight: 1, fontWeight: 500, color: "#171717" }}
          aria-hidden="true"
        >
          ❝
        </span>

        {/* Content */}
        <p
          className="text-[#4d4d4d] flex-1 whitespace-pre-wrap"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
        >
          {testimonial.content}
        </p>
      </div>

      {/* Author footer */}
      <div
        className="px-8 py-5 flex flex-col gap-1"
        style={{ borderTop: "1px solid #ebebeb" }}
      >
        <span
          className="text-[#171717]"
          style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.43 }}
        >
          {testimonial.name}
        </span>
        <span
          className="text-[#666666]"
          style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.33 }}
        >
          {testimonial.role}
        </span>
      </div>
    </div>
  );
}
