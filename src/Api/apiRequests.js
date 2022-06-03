import { createRequest } from "./createRequest";

export const loadAuthors = createRequest("/authors");
export const loadLocations = createRequest("/locations");
export const loadPaintings = createRequest("/paintings");
