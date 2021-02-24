import { useStep } from "@context/stepContext";
import { Button } from "@styles/components";
import React, { useState } from "react";
import api from "src/services/api";
import { ConfirmWrapper } from "./style";
import Image from "next/image";
import notification from "src/utils/notification";

export default function ConfirmStep() {
  const { state, changeStep, changePoints } = useStep();
  const [loading, setLoading] = useState<boolean>();
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const { points, flavor, pasta } = state;

  const confirmOrder = async () => {
    setLoading(true);

    try {
      await api.post("/pizzas", { flavor, pasta });

      setIsConfirmed(true);

      await savePoints();
    } catch {
      notification("Erro ao processar seu pedido", "error");
    } finally {
      setLoading(false);
    }
  };

  const savePoints = async () => {
    setLoading(true);

    const newPoints = points + 20;

    try {
      await api.put("/points/1", { points: newPoints });

      changePoints(newPoints);
    } catch {
      notification("Erro ao processar seus pontos", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfirmWrapper>
      <Image width={100} height={100} src="/logo.png" />
      {!isConfirmed && (
        <>
          <ul>
            <li>Massa: {state.pasta}</li>

            <li>Sabor: {state.flavor}</li>
          </ul>

          <Button
            bgColor="light-green"
            disabled={loading}
            onClick={confirmOrder}
          >
            Confirmar pedido
          </Button>
        </>
      )}

      {isConfirmed && (
        <>
          <h2>Pedido realizado com sucesso</h2>

          {loading && <h3>Processando seus pontos...</h3>}

          {!loading && <h3> Você tem o total de {points} pontos </h3>}

          <Button bgColor="light-green" onClick={() => changeStep(1)}>
            Fazer outro pedido
          </Button>
        </>
      )}
    </ConfirmWrapper>
  );
}
