import useFlashMessage from "../hooks/useFlashMessages";
import { useCallback } from "react";

export default function useErroPadrao() {
  const { setFlashMessage } = useFlashMessage();

  const setErroPadrao = useCallback(
    (erro) => {
      const mensagem = erro.status ? erro.response.data.message : erro.message;
      setFlashMessage(mensagem, "erro");
      return mensagem;
    },
    [setFlashMessage]
  );

  return { setErroPadrao };
}
