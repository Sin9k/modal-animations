import { useEffect, useRef, useState } from "react";

export const ANIMATION_TIME = 1000;

export const useMount = ({ opened }) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
      setTimeout(() => {
        setVisible(true);
      }, 0);
    } else if (!opened && mounted) {
      setVisible(false);
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
    visible,
  };
};
