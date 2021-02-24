import { useStep } from "@context/stepContext";
import { useEffect, useState } from "react";
import * as S from "@styles/components";
import api from "src/services/api";
import LoadingAllScreen from "@components/LoadingAllScreen";
import notification from "src/utils/notification";

interface Pastas {
  id: number;
  name: string;
  attributes: [string];
}

export default function PastaStep() {
  const [pastas, setPastas] = useState<Pastas[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const { addPasta, changeStep } = useStep();

  useEffect(() => {
    (async function () {
      try {
        const { data: response } = await api.get("/pastas");

        setPastas(response);
      } catch {
        notification("Erro ao carregar as massas", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handlePasta = (pastaName: string) => {
    changeStep(2);
    addPasta(pastaName);
  };

  return (
    <>
      <S.TitleStep>Escolha sua massa</S.TitleStep>

      {loading && <LoadingAllScreen />}

      {!loading && (
        <S.CardsWrapper>
          {pastas.map((pasta, i) => (
            <S.Cards key={pasta.id} onClick={() => handlePasta(pasta.name)}>
              <img src={`/pizza-${i + 1}.jpg`} alt="Pizza calabresa" />
              <S.Content>
                <h2>{pasta.name}</h2>

                <ul>
                  {pasta.attributes.map((attr) => (
                    <li>{attr}</li>
                  ))}
                </ul>
              </S.Content>
            </S.Cards>
          ))}
        </S.CardsWrapper>
      )}
    </>
  );
}
