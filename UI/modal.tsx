import { ComponentPropsWithoutRef, Fragment } from "react";

type ModalProps = ComponentPropsWithoutRef<"div">;

const Modal = (props: ModalProps) => {
  return <div>{props.children}</div>;
};

export const ModalOverlay = (props: ModalProps) => {
  return (
    <Fragment>
      <div className="overlay"></div>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Modal;