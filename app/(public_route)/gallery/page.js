"use client";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Image from "next/legacy/image";
import img1 from "@/public/images/blog/1.jpg";
import TeamCallTOAction from "@/components/Team/TeamCallTOAction";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function GalleryPage() {
  const initialImagesToShow = 12;
  const increment = 8; // Increment by 8 images when "Show More" is clicked
  const [imagesToShow, setImagesToShow] = useState(initialImagesToShow);
  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setImagesToShow((prevCount) => prevCount + increment);
      setLoading(false);
    }, 1000); // Delay of 1 second (1000 milliseconds)
  };

  return (
    <>
      <PageHeader title="Gallery" />
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: Math.min(imagesToShow, 20) }, (_, i) => (
            <div key={i}>
              <Dialog>
                <DialogTrigger className="cursor-zoom-in">
                  <div className="relative">
                    <Image
                      src={img1}
                      alt="gallery Image"
                      width={500}
                      height={400}
                      className="rounded"
                    />
                    <div className="bg-black absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={img1}
                    alt="gallery Image"
                    width={800}
                    height={600}
                    className="rounded"
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        {imagesToShow < 20 && (
          <div className="text-center mt-4">
            <button
              onClick={handleShowMore}
              className=" hover:bg-gray-700 hover:text-white font-semibold py-2 px-4 rounded text-slate-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Show More"}
            </button>
          </div>
        )}
        <TeamCallTOAction />
      </section>
    </>
  );
}

export default GalleryPage;
