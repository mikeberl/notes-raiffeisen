package notes.backend.notes;

public class NoteMapper {

    public static NoteDTO toDTO(Note note) {
        NoteDTO noteDTO = new NoteDTO();
        noteDTO.setId(note.getId());
        noteDTO.setTitle(note.getTitle());
        noteDTO.setText(note.getText());
        return noteDTO;
    }

    public static Note toEntity(NoteDTO noteDTO) {
        Note note = new Note();
        note.setId(noteDTO.getId());
        note.setTitle(noteDTO.getTitle());
        note.setText(noteDTO.getText());
        return note;
    }
}
