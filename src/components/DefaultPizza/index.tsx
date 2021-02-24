import { useStep } from "@context/stepContext";
import * as S from "@styles/components";
import { useEffect, useState } from "react";
import api from "src/services/api";
import { DefaultPizzaWrapper, Separator } from "./style";

const DefaultPizza: React.FC = () => {
  const [defaultPizza, setDefaultPizza] = useState<{
    pasta: string;
    flavor: string;
  }>();
  const [loading, setLoading] = useState<boolean>(true);
  const { addFlavor, changeStep, addPasta } = useStep();

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const { data: response } = await api.get("/pizzas/4");

        setDefaultPizza(response);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDefaultPizza = () => {
    addFlavor(defaultPizza.flavor);
    addPasta(defaultPizza.pasta);
    changeStep(3);
  };

  return (
    !loading && (
      <>
        <DefaultPizzaWrapper>
          <>
            <S.Cards onClick={() => handleDefaultPizza()}>
              <img src="/default-pizza.jpg" />
              <div>
                Recomendação do dia <h2> Pizza do Césão </h2>
                <ul>
                  <li> massa: {defaultPizza?.pasta}</li>
                  <li> sabor: {defaultPizza?.flavor} </li>
                </ul>
              </div>
            </S.Cards>
          </>
        </DefaultPizzaWrapper>

        <Separator> ou </Separator>
      </>
    )
  );
};

export default DefaultPizza;
