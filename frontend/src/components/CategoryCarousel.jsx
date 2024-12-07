import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "Graphic Designer",
  "FullStack Developer",
  "Blockchain Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="  md:basis-1/2 lg-basis-1/3">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full text-[#605678] hover:bg-[#9B7EBD]"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-full bg-[#9B7EBD] hover:bg-[#605678]" />
        <CarouselNext className="rounded-full bg-[#9B7EBD] hover:bg-[#605678]" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
