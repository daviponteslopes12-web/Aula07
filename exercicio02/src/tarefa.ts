import { readFile, writeFile } from "node:fs/promises";

interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

const caminhoArquivo = "tarefas.json";

async function lerTarefas(): Promise<Tarefa[]> {
    try {
        const conteudo = await readFile(caminhoArquivo, "utf-8");

        return JSON.parse(conteudo) as Tarefa[];
    } catch (error) {
        if ( typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

async function salvarTarefas(tarefas: Tarefa[]): Promise<void> {
    const conteudo = JSON.stringify(tarefas, null, 4);

    await writeFile(caminhoArquivo, conteudo, "utf-8");
}

export async function concluir(id: number): Promise<boolean> {
    const tarefas = await lerTarefas();

    const tarefa = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefa) {
        return false;
    }

    tarefa.concluida = true;

    await salvarTarefas(tarefas);

    return true;
}

export async function remover(id: number): Promise<boolean> {
    const tarefas = await lerTarefas();

    const tarefaExiste = tarefas.some((tarefa) => tarefa.id === id);

    if (!tarefaExiste) {
        return false;
    }

    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);


    await salvarTarefas(tarefasAtualizadas);

    return true;
}