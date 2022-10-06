import { gsap, Power3, Elastic } from "gsap";

export const anim_menuOut = (
  node1: HTMLDivElement | null,
  node2: HTMLDivElement | null
) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: Power3.easeInOut,
    stagger: { amount: 0.07 },
  });
};

export const anim_menuIn = (
  node1: HTMLDivElement | null,
  node2: HTMLDivElement | null
) => {
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });
};

export const anim_menuInReveal = (
  node1: HTMLDivElement | null,
  node2: HTMLDivElement | null
) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: Power3.easeInOut,
    stagger: { amount: 0.1 },
  });
};

export const anim_infoIn = (node: HTMLDivElement | null) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: Power3.easeInOut,
  });
};

export const anim_linkText = (
  link1: HTMLAnchorElement | null,
  link2: HTMLAnchorElement | null,
  link3: HTMLAnchorElement | null,
  link4: HTMLAnchorElement | null
) => {
  gsap.from([link1, link2, link3, link4], {
    duration: 0.8,
    y: 90,
    delay: 0.1,
    ease: Power3.easeInOut,
    stagger: { amount: 0.5 },
  });
};

export const anim_linkHover = (target: any) => {
  gsap.to(target, {
    duration: 0.4,
    skewX: 6,
    y: 3,
    ease: Power3.easeOut,
  });
};

export const anim_linkExit = (target: any) => {
  gsap.to(target, {
    duration: 0.4,
    skewX: 0,
    y: -3,
    ease: Power3.easeOut,
  });
};

export const anim_showcaseImg = (
  showcase: HTMLDivElement | null,
  revealImg: HTMLDivElement | null,
  img: HTMLImageElement | null
) => {
  const tween = gsap
    .timeline()
    .to(showcase, { duration: 0, css: { visibility: "visible" } })
    .to(revealImg, {
      duration: 1.4,
      delay: 0.5,
      ease: Power3.easeInOut,
      css: { height: "0%", width: "0%" },
    })
    .from(img, {
      duration: 1.4,
      scale: 1.6,
      ease: Power3.easeInOut,
      immediateRender: false,
      delay: -1.4,
    });

  return tween;
};

export const anim_headingTween = (
  headingSiblings: any,
  subHead: HTMLHeadingElement | null
) => {
  return gsap
    .timeline()
    .from(headingSiblings("h1"), {
      duration: 1,
      y: 90,
      ease: Power3.easeInOut,
      stagger: 0.4,
      immediateRender: false,
    })
    .from(subHead, {
      duration: 1,
      x: -100,
      immediateRender: false,
      delay: -1.3,
    });
};

export const anim_shortenLanding = (
  heading: HTMLHeadingElement | null,
  inputGroup: HTMLDivElement | null,
  urlRef: HTMLHeadingElement | null
) => {
  return gsap
    .timeline()
    .from(heading, {
      duration: 1,
      scale: 5,
      ease: Power3.easeInOut,
      immediateRender: false,
    })
    .from(inputGroup, {
      duration: 0.7,
      delay: -0.7,
      opacity: 0,
      y: 100,
      immediateRender: false,
    })
    .to(urlRef, { duration: 0.5, opacity: 1 });
};

export const anim_shortenImg = (
  imgRight: HTMLImageElement | null,
  imgleft: HTMLImageElement | null,
  imgTop: HTMLImageElement | null
) => {
  return gsap
    .timeline()
    .from(imgRight, {
      duration: 1,
      ease: Elastic.easeInOut,
      x: 500,
      immediateRender: false,
    })
    .from(imgleft, {
      duration: 1,
      ease: Elastic.easeInOut,
      y: 200,
      delay: -1,
      immediateRender: false,
    })
    .from(imgTop, {
      duration: 0.8,
      immediateRender: false,
      ease: Power3.easeInOut,
      scale: 0,
      delay: -1,
    });
};
