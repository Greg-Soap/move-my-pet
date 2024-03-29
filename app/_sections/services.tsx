"use client";
import UseMediaQuery from "@/lib/media-query";
import {
  ServiceCarouselComponent,
  ServicesData,
} from "../_components/service-carousel";
import ServiceCard from "../_components/service-card";

export default function Services() {
  let isPageWide = UseMediaQuery("(min-width: 769px)");
  return (
    <section
      className="w-full bg-secondary pt-24 pb-12 scroll-m-20"
      id="services"
    >
      <div className="container flex flex-col lg:flex-row justify-between  gap-20">
        <div className="max-w-[400px] flex flex-col">
          <h6 className="text-[#FFFFFFB2] text-[12px] tracking-[2.16px]">
            OUR UNIQUE SERVICES
          </h6>
          <h2 className="text-[#FFFFFF] font-bold font-heading text-[40px] leading-[56px]">
            We provide pet relocation services just for you
          </h2>
          <p className="text-[#FFFFFFCC] w-3/4 pt-10">
            We understand that every pet is unique and provide specialized pet
            relocation services that prioritize the well-being, comfort, and
            safety of your beloved pets.
          </p>
        </div>
        <div className="w-full lg:w-[700px] max-md:flex  max-md:gap-4 max-md:justify-center max-md:flex-wrap">
          {isPageWide ? (
            <ServiceCarouselComponent />
          ) : (
            ServicesData.map((data) => (
              <ServiceCard
                id={data.id}
                key={data.id}
                title={data.title}
                text={data.text}
                icon={data.icon}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
