import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Portal from "../Portal";
import { useMount, ANIMATION_TIME } from "./useMount";

import styles from "./styles.module.css";
import animationStyles from "./animation.module.css";

const simpleContentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

const simpleOverlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

export const SimpleAnimatedModal = ({ opened, onClose, children }) => {
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
          classNames={simpleOverlayAnimation}
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
          classNames={simpleContentAnimation}
        >
          <div ref={contentRef} className={styles.content}>
            {children}
          </div>
        </CSSTransition>
      </div>
    </Portal>
  );
};
