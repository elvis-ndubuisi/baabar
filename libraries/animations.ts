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
