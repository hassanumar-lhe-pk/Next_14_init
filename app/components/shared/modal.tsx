import Button from "./button";

interface ModalProps {
  title: string;
  body: JSX.Element;
  secondButton: boolean;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FooterButtonProps {
  onClose: () => void;
  secondButton: boolean;
  secondBtnText: string;
  onClick: () => void;
  className?: string;
}

const FooterButtons: React.FC<FooterButtonProps> = ({
  onClose,
  secondButton,
  secondBtnText,
  onClick,
}) => (
  <>
    <Button
      className="w-28 h-12 !text-red-500 text-sm font-bold bg-transparent"
      text="Close"
      onClick={onClose}
    />
    {secondButton && (
      <Button className="w-32 h-12 ml-5" text={secondBtnText} onClick={onClick} />
    )}
  </>
);

const Modal: React.FC<ModalProps> = ({
  title,
  body,
  secondButton,
  showModal,
  setShowModal,
}) => (
  <>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <p className="text-xl font-semibold">{title}</p>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer*/}
              <div
                className={`flex items-center ${
                  secondButton ? "justify-end" : "justify-center"
                } p-6 border-t border-solid border-blueGray-200 rounded-b`}
              >
                <FooterButtons
                  onClose={() => setShowModal(false)}
                  secondButton={secondButton}
                  secondBtnText="Save Changes"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
);

export default Modal;
