export interface Note {
    id: number;
    title: string;
    text: string;
}

export interface NoteCreate {
    title: string;
    text: string;
}