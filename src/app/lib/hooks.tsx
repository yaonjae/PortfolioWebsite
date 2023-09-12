"use client";

import { useInView } from "react-intersection-observer";
import { useActivePageContext } from "../context/active-page-context";
import { useEffect } from "react";
import type { PageName } from "./types";

export function usePageInView( pageName: PageName, threshold = 0.75 ) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive } = useActivePageContext();

  useEffect(() => {
    if (inView) {
      setActive(pageName);
    }
  }, [inView, setActive, pageName]);
  return {
    ref,
    inView,
  };
}
