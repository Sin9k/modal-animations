import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./Layout/const";

export const useMount = ({ opened }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
  };
};
