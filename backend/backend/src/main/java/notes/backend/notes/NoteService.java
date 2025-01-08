package notes.backend.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(final NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    public Note updateNote(Note note) {
        return noteRepository.findById(String.valueOf(note.getId())).map(demo -> {
            demo.setTitle(note.getTitle());
            demo.setText(note.getText());
            return noteRepository.save(demo);
        }).orElseThrow(() -> new RuntimeException("Notizia con id: " + note.getId() + " non trovata"));
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id.toString());
    }
}
