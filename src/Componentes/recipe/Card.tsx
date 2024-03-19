import { cardOverView, cardProp, cardPreparation } from '../../types';

function Card({ children }: cardProp) {
  return <article>{children}</article>;
}

export function CardOverview({ desc, title }: cardOverView) {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{desc}</p>
    </Card>
  );
}

export function CardPreparation({ title, data }: cardPreparation) {
  const dataList = Object.entries(data);
  return (
    <Card>
      <h2>{title}</h2>
      <ul>
        {dataList.map((el, i) => (
          <li>
            <span>{el[0]}</span> : {el[1]}
          </li>
        ))}
      </ul>
    </Card>
  );
}
