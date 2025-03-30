import { useState } from "react";

import { projectsData } from "@/data/projects.data";
import { testimonialsData } from "@/data/testimonials.data";
import { Carousel } from "@/features/common/carousel/carousel";
import Hero from "@/features/homepage/components/hero";
import ProjectPreview from "@/features/homepage/components/project-preview";
import Testimonial from "@/features/homepage/components/testimonial";
import { useSeo } from "@/hooks/use-seo";

export default function Homepage() {
  useSeo();

  const [showAllTestimonials, setShowAllTestimonials] =
    useState<boolean>(false);

  const visibleTestimonials = showAllTestimonials
    ? testimonialsData
    : testimonialsData.slice(0, 2);

  const projectsWithoutFirstOne = projectsData.slice(1);

  return (
    <section className="min-h-screen flex flex-col gap-24 items-center my-20 sm:my-40">
      <Hero />
      <div className="px-8 sm:px-16 w-full flex flex-col gap-8 sm:gap-16">
        <ProjectPreview key={projectsData[0].title} project={projectsData[0]} />
        <div className="w-full px-4 sm:px-8">
          <Carousel
            items={projectsWithoutFirstOne.map((project) => (
              <ProjectPreview
                key={project.title}
                project={project}
                isOnCarousel={true}
              />
            ))}
          />
        </div>
      </div>
      <div className="w-full px-8 sm:px-16 py-8 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-neue-montreal-medium text-center text-[#1a1a1a]">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 [@media(min-width:1000px)]:grid-cols-2 gap-24 lg:gap-32 mx-auto [@media(min-width:1000px)]:auto-rows-fr justify-items-center">
          {visibleTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        {!showAllTestimonials && testimonialsData.length > 2 && (
          <button
            onClick={() => setShowAllTestimonials(true)}
            className="bg-blue-800 hover:text-white hover:bg-blue-950 transition-colors duration-300 text-white px-4 py-2 rounded-md mr-auto ml-auto h-fit"
          >
            Ver más testimonios
          </button>
        )}
      </div>
    </section>
  );
}
