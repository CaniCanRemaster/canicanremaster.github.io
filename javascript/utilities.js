export async function renderElement(path = "") {
    let element = document.createElement("div");
    element.innerHTML = await (await fetch(path)).text();
    return element;
}

export async function fetchResource(path = "") {
    return await (await fetch(path)).text();
}