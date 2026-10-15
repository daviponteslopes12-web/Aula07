import { concluir, remover } from "./tarefa.js";

async function main(): Promise<void> {
    const tarefaConcluida = await concluir(1);

    if (tarefaConcluida) {
        console.log("Tarefa concluida com sucesso");
    } else {
        console.log("Tarefa não encontrada");
    }

    const tarefaRemovida = await remover(2);

    if (tarefaRemovida) {
        console.log("Tarefa removida com sucesso");
    } else {
        console.log("Tarefa não encontrada");
    }
}

main().catch(console.error);