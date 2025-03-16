"use client";

import { useEffect, useState } from "react";
import "../css/form-contact.css";

type PropsForm = {
  name: string;
  mail: string;
  phone: number;
  message: string;
};

type Props = {
  handleSendMail: (data: PropsForm) => void;
  clearInputs: boolean;
};

export function FormContact({ handleSendMail, clearInputs = false }: Props) {
  const [inputName, setInputName] = useState<string | null>(null);
  const [validName, setValidName] = useState(true);
  const [inputEmail, setInputEmail] = useState<string | null>(null);
  const [validEmail, setValidEmail] = useState(true);
  const [inputMessage, setInputMessage] = useState<string | null>(null);
  const [inputPhone, setInputPhone] = useState<string | null>(null);
  const [validPhone, setValidPhone] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [errorMail, setErrorMail] = useState(false);

  useEffect(() => {
    if (clearInputs) {
      clearForm();
    }
  }, [clearInputs]);

  const handleClickForm = () => {
    if (validateForm()) {
      handleSendMail({
        name: inputName!,
        mail: inputEmail!,
        phone: +inputPhone!,
        message: inputMessage!,
      });
    }
  };

  const validateForm = (): boolean => {
    let validNameInput = false;
    let validEmailInput = false;
    let validMessageInput = false;
    let validPhoneInput = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputName === null || inputName === "") {
      setValidName(validNameInput);
    } else {
      validNameInput = true;
      setValidName(validNameInput);
    }

    if (inputPhone === null || inputPhone === "") {
      setValidPhone(validPhoneInput);
    } else {
      validPhoneInput = true;
      setValidPhone(validPhoneInput);
    }

    if (
      (inputEmail === null && inputEmail === "") ||
      !emailRegex.test(inputEmail!)
    ) {
      setValidEmail(validEmailInput);
    } else {
      validEmailInput = true;
      setValidEmail(validEmailInput);
    }

    if (inputMessage === null || inputMessage === "") {
      setValidMessage(validMessageInput);
    } else {
      validMessageInput = true;
      setValidMessage(validMessageInput);
    }

    if (validNameInput && validEmailInput && validMessageInput) {
      setErrorMail(false);
      setValidName(true);
      setValidEmail(true);
      setValidMessage(true);

      return true;
    } else {
      return false;
    }
  };

  const clearForm = () => {
    setInputName("");
    setInputEmail("");
    setInputMessage("");
    setInputPhone("");
  };

  return (
    <div className="flex justify-center px-[16px] pt-[64px] md:p-[80px] mb-[80px]">
      <div className="max-w-[870px] h-auto px-[16px] md:px-[48px] py-[16px] outline-solid outline-[3px] outline-[#4fc685] rounded-[32px]">
        <h4 className="text-center font-normal font-stretch-normal line-height-[24px] text-[#1a3b2a] text-md md:text-[25px]">
          Envianos tus dudas o tu interés en trabajar con nosotros y te
          contactaremos pronto.
        </h4>
        <div className="flex flex-wrap justify-between gap-[32px] mt-[32px]">
          <input
            type="text"
            className={`w-full md:w-[43%] h-[50px] rounded-[16px] px-[16px] text-[16px] font-stretch-normal  ${
              validName
                ? "border-[#4fc685] border-[1px] border-solid valid"
                : "border-red-500 border-[1px] border-solid invalid"
            }`}
            placeholder="Nombre"
            value={inputName ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputName(event.target.value)
            }
          />
          <input
            type="number"
            maxLength={12}
            className={`w-full md:w-[43%] h-[50px] rounded-[16px] px-[16px] text-[16px] font-stretch-normal ${
              validPhone
                ? "border-[#4fc685] border-[1px] border-solid valid"
                : "border-red-500 border-[1px] border-solid invalid"
            }`}
            placeholder="Teléfono"
            value={inputPhone ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputPhone(event.target.value)
            }
          />
          <input
            type="email"
            className={`w-full h-[50px] rounded-[16px] px-[16px] text-[16px] font-stretch-normal ${
              validEmail
                ? "border-[#4fc685] border-[1px] border-solid valid"
                : "border-red-500 border-[1px] border-solid invalid"
            }`}
            placeholder="Correo"
            value={inputEmail ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setInputEmail(event.target.value)
            }
          />
          <textarea
            className={`w-full h-[150px] rounded-[16px] p-[16px] text-[16px] font-stretch-normal text-[#1a3b2a] ${
              validMessage
                ? "border-[#4fc685] border-[1px] border-solid valid"
                : "border-red-500 border-[1px] border-solid invalid"
            }`}
            style={{ resize: "none" }}
            placeholder="Mensaje"
            value={inputMessage ?? ""}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInputMessage(event.target.value)
            }
          ></textarea>
        </div>
        <button
          className="w-full h-[50px] rounded-[16px] bg-[#1a3b2a] text-white text-[16px] text-center cursor-pointer border-0 mt-[32px] btn-transition "
          onClick={handleClickForm}
        >
          Enviar
        </button>
        {clearInputs && (
          <div>
            {!errorMail ? (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  style={{ padding: 0, margin: 0, verticalAlign: "sub" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4fc685"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  ></path>
                </svg>
                <p className="text-[#1a3b2a] text-center text-[24px]">
                  Hemos recibido tu mensaje, responderemos lo más pronto
                  posible!{" "}
                </p>
              </div>
            ) : (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  style={{ padding: 0, margin: 0, verticalAlign: "middle" }}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="red"
                    fillRule="evenodd"
                    d="M8.6 1c1.6.1 3.1.9 4.2 2c1.3 1.4 2 3.1 2 5.1c0 1.6-.6 3.1-1.6 4.4c-1 1.2-2.4 2.1-4 2.4s-3.2.1-4.6-.7s-2.5-2-3.1-3.5S.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1m.5 12.9c1.3-.3 2.5-1 3.4-2.1c.8-1.1 1.3-2.4 1.2-3.8c0-1.6-.6-3.2-1.7-4.3c-1-1-2.2-1.6-3.6-1.7c-1.3-.1-2.7.2-3.8 1S2.7 4.9 2.3 6.3c-.4 1.3-.4 2.7.2 4q.9 1.95 2.7 3c1.2.7 2.6.9 3.9.6M7.9 7.5L10.3 5l.7.7l-2.4 2.5l2.4 2.5l-.7.7l-2.4-2.5l-2.4 2.5l-.7-.7l2.4-2.5l-2.4-2.5l.7-.7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-red-500 text-center text-[24px]">
                  No hemos podido enviar tu mensaje, intenta nuevamente o mas
                  tarde{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
