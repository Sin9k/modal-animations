import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Portal from "../Portal";
import { useMount, ANIMATION_TIME } from "./useMount";

import styles from "./styles.module.css";
import animationStyles from "./animation.module.css";

const complexOverlayAnimation = {
  enterActive: animationStyles.overlayEnterActive,
  exitActive: animationStyles.overlayExitActive,
};

const complexContentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

export const ComplexAnimatedModal = ({ opened, onClose, children }) => {
  const { mounted, visible } = useMount({ opened });
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.container}>
        <CSSTransition
          in={visible}
          timeout={ANIMATION_TIME}
          nodeRef={overlayRef}
          classNames={complexOverlayAnimation}
        >
          <div
            ref={overlayRef}
            className={styles.overlay}
            role="button"
            tabIndex={0}
            onClick={onClose}
          />
        </CSSTransition>
        <CSSTransition
          in={visible}
          timeout={ANIMATION_TIME}
          nodeRef={contentRef}
          classNames={complexContentAnimation}
        >
          <div ref={contentRef} className={styles.content}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </Portal>
  );
};
