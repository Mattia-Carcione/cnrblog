import type { InferEntrySchema, RenderedContent } from "astro:content";

type Post = {
    id: string;
    body?: string;
    collection: "blog";
    data: InferEntrySchema<"blog">;
    rendered?: RenderedContent;
    filePath?: string;
};


export function matchesSearch(post: Post, query: string) {
    if (!query) return true; // se non c'è ricerca mostra tutto
    const q = query.toLowerCase();

    // Normalizza array tag e category (può essere undefined)
    const tags = post.data.tags?.map((t) => t.toLowerCase()) || [];
    const categories = post.data.category?.map((c) => c.toLowerCase()) || [];
    
    // Cerco se q è contenuto in almeno un tag o category
    return (
        tags.some((t) => t.includes(q)) ||
        categories.some((c) => c.includes(q))
    );
}

export function preventEmptySearch() {
    const form = document.querySelector("form[role='search']") as HTMLFormElement | null;
    const input = document.querySelector("#search-input") as HTMLInputElement | null;

    if (form && input) {
        form.addEventListener("submit", (e) => {
            if (!input.value.trim()) {
                e.preventDefault();
            }
        });
    }
}
