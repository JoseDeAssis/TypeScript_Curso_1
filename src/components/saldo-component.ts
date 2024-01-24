import Conta from "../types/Conta.js"
import { FormatoData } from "../types/FormatoData.js"
import { formatarData, formatarMoeda } from "../utils/formatter.js"

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement
const elemementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement

if(elemementoDataAcesso != null) {
    elemementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
}

renderizarSaldo()

function renderizarSaldo(): void {
    if(elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo())
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo()
    }
}

export default SaldoComponent