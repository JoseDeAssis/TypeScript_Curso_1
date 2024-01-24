import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from '../utils/formatter.js';
import { FormatoData } from '../types/FormatoData.js';
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarEstado();
function renderizarEstado() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTrasacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTrasacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTrasacaoItem}
            </div>
        `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarEstado();
    }
};
export default ExtratoComponent;
