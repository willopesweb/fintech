import { IVenda } from "../Context/DataContext";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};
