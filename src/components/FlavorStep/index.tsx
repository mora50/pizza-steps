import { useStep } from "@context/stepContext";
import { useEffect, useState } from "react";
import * as S from "@styles/components";
import api from "src/services/api";
import { FlavorImgWrapper } from "./style";
import LoadingAllScreen from "@components/LoadingAllScreen";
import notification from "src/utils/notification";

export default function FlavorStep() {
  const [flavours, setFlavours] = useState<[{ id: number; name: string }]>();
  const [loading, setLoading] = useState<boolean>(true);
  const { addFlavor, changeStep } = useStep();

  useEffect(() => {
    (async function () {
      try {
        const { data: response } = await api.get("/filling");

        setFlavours(response);
      } catch {
        notification("Erro ao carregar os sabores", "error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleFlavor = (flavorName: string) => {
    changeStep(3);
    addFlavor(flavorName);
  };
  return (
    <>
      <S.TitleStep>Escolha seu recheio</S.TitleStep>

      {loading && <LoadingAllScreen />}

      {!loading && (
        <S.CardsWrapper>
          {flavours.map((flavor, i) => (
            <S.Cards key={i} onClick={() => handleFlavor(flavor.name)}>
              <FlavorImgWrapper>
                <img src={`/flavor-${i + 1}.webp`} alt="Pizza calabresa" />
              </FlavorImgWrapper>
              <S.Content>
                <h2>{flavor.name}</h2>
              </S.Content>
            </S.Cards>
          ))}
        </S.CardsWrapper>
      )}
    </>
  );
}
