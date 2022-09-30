import { gsap, Power3 } from "gsap";

export const anim_menuOut = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: Power3.easeInOut,
    stagger: { amount: 0.07 },
  });
};

export const anim_menuIn = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });
};

export const anim_menuInReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: Power3.easeInOut,
    stagger: { amount: 0.1 },
  });
};

export const anim_infoIn = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: Power3.easeInOut,
  });
};

export const anim_linkText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
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

export const anim_showcaseImg = (showcase, revealImg, img) => {
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

export const anim_headingTween = (headingSiblings, subHead) => {
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
