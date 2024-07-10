import useEmblaCarousel from "embla-carousel-react"
import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import ".././styles/MyCarousel.css";
import picture from ".././assets/featuredevent4.jpg";

export default function MyCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

      return(
        <div class="embla" ref={emblaRef}>
            <div class="embla__container">
                <div class="embla__slide"> <img src={picture}></img></div>
                <div class="embla__slide"> <img src={picture}></img></div>
                <div class="embla__slide"> <img src={picture}></img></div>
                <div class="embla__slide"> <img src={picture}></img></div>
                <div class="embla__slide"> <img src={picture}></img></div>
                <div class="embla__slide"> <img src={picture}></img></div>
            </div>
        </div>
      )
}