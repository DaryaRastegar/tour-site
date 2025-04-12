import React from "react";
import { useState } from "react";
import SendOTPForm from "../components/templates/SendOTPForm";
import CheckOTPForm from "../components/templates/CheckOTPForm";
import ModalContainer from "../components/modals/ModalContainer";

function AuthForm({ isOpen, setIsOpen }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <div>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
