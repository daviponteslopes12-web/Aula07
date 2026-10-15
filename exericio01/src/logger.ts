/**
 * Registrar acontecimentos de uma aplicação no app.log
 * conter (data, horario, mensagem_informada)
 */

import { appendFile, readFile } from "node:fs/promises";

const caminhoArquivo = "app.log";

export async function log(mensagem: string): Promise<void> {
    const data = new Date().toLocaleString("pt-BR");
    const registro = `[${data}] ${mensagem}\n`;

    await appendFile(caminhoArquivo, registro, "utf-8");
}

export async function lerLogs(): Promise<string[]> {
    try {
        const conteudo = await readFile(caminhoArquivo, "utf-8");

        return conteudo.split("\n").filter((linha) => linha.trim() !== "");
    } catch (error) {

        if (typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}