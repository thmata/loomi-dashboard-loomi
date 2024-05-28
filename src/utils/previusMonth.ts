export default function getPreviousMonthName() {
  const naw = new Date();
  const previus = new Date(naw.getFullYear(), naw.getMonth() - 1);
  const nomeMesAnterior = previus.toLocaleString("pt-BR", { month: "long" });
  return nomeMesAnterior;
}
