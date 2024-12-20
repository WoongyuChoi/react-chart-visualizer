import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { usePlaying } from "./usePlayingContext";
import usePlayingStore from "../store/playing";

const useDynamicData = (
  initialData: any,
  updateDataFn: (data: any) => any,
  queryKey: string
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  // const { isPlaying } = usePlaying();
  const { isPlaying } = usePlayingStore();

  const { data: data, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      return Promise.resolve(updateDataFn(initialData));
    },
    refetchInterval: isVisible && isPlaying ? 5000 : false, // 차트가 보일 때만 갱신
    enabled: isVisible && isPlaying && !firstLoad, // 초기에는 비활성화
    initialData: initialData, // 초기 데이터 설정
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true); // 보일 때 활성화
        setTimeout(() => {
          setFirstLoad(false); // 첫 화면 진입 시에 5초 후부터 주기적 갱신이 시작
        }, 5000);
      } else {
        setIsVisible(false); // 숨길 때 비활성화
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (containerRef.current instanceof Element) {
      observer.observe(containerRef.current);
    } else {
      console.warn("containerRef is not attached to a DOM element");
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying, refetch]);

  useEffect(() => {
    if (isVisible) {
      console.log(`${queryKey} 5초마다 데이터 갱신 중...`, data);
    }
  }, [data]);

  return { data, containerRef };
};

export default useDynamicData;
