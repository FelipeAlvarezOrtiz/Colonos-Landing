import { useState } from "react";
import { FormContact } from "./form-contact";

type PropsForm = {
  name: string;
  mail: string;
  phone: number;
  message: string;
};

export function Contact() {
  const [clearInputs, setClearInputs] = useState(false);

  const handleSendMail = async (data: PropsForm) => {
    await fetch("https://mail-sender.neonexus.cl/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, phone: String(data.phone) }),
    })
      .then(() => {
        setClearInputs(true);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
    //   .finally(() => {
    //     setTimeout(() => {
    //       setClearInputs(false);
    //     }, 15000);
    //   });
  };

  return (
    <FormContact handleSendMail={handleSendMail} clearInputs={clearInputs} />
  );
}
