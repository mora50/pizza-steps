import * as S from "@styles/components";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Ticket } from "@styled-icons/heroicons-solid/Ticket";
import PastaStep from "@components/PastaStep";
import FlavorStep from "@components/FlavorStep";
import { useStep } from "@context/stepContext";
import ConfirmStep from "@components/ConfirmStep";
import api from "src/services/api";
import DefaultPizza from "@components/DefaultPizza";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const { state, changePoints } = useStep();
  const { step, points } = state;

  useEffect(() => {
    (async function () {
      try {
        const { data: response } = await api.get("/points");

        changePoints(response[0].points);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, [changePoints]);

  return (
    <div>
      <Head>
        <title>Pizzaria Happy :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Container>
        <S.Header>
          <S.Logo>
            <img src="/logo.png" alt="" />
            <h1> PIZZA </h1>
          </S.Logo>
          <S.Points>
            <strong> Pizza Points </strong>
            <div>
              <Ticket />
              <span> {!loading && points} </span>
            </div>
          </S.Points>
        </S.Header>

        {step === 1 && (
          <>
            {" "}
            <DefaultPizza /> <PastaStep />{" "}
          </>
        )}

        {step === 2 && <FlavorStep />}

        {step === 3 && <ConfirmStep />}
      </S.Container>
    </div>
  );
}
