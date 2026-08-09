import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback) => {
  const observer = useRef(null);

  const lastElementRef = (node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return lastElementRef;
};

export default useInfiniteScroll;