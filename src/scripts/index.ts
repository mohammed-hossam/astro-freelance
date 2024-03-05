import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import { addPrevNextBtnsClickHandlers, addDotBtnsAndClickHandlers } from "./arrows-dots-buttons";

const OPTIONS = { loop: true };
function registerEmblaCarousel(className: string) {
  const emblaNode: HTMLElement | null = document.querySelector(`.embla__${className}`);
  const viewportNode: HTMLElement | undefined | null = emblaNode?.querySelector(".embla__viewport");
  if (emblaNode && viewportNode) {
    const prevBtn = emblaNode?.querySelector(".embla__button--prev");
    const nextBtn = emblaNode?.querySelector(".embla__button--next");
    const dotsNode = document.querySelector(`.embla__dots__${className}`);
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);

    if (dotsNode) {
      const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
        emblaApi,
        prevBtn,
        nextBtn
      );

      const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode);

      if (removePrevNextBtnsClickHandlers)
        emblaApi
          .on("destroy", removePrevNextBtnsClickHandlers)
          .on("destroy", removeDotBtnsAndClickHandlers);
    }
  }
}

document.addEventListener("astro:page-load", () => {
  registerEmblaCarousel("hero");
  registerEmblaCarousel("reviews");
});
