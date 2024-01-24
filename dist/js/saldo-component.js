let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elemementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elemementoDataAcesso != null) {
    const dataAcesso = new Date();
    elemementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
