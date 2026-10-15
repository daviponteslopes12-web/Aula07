import { readFile } from "node:fs/promises";

export async function buscarComSeguranca(caminho: string): Promise<string | null> {
    try {
        const conteudo = await readFile(caminho, "utf-8");

        return conteudo;
    } catch (error) {
        if (typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT") {
            return null;
        }

        throw error;
    }
}