package notes.backend.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        Note savedNote = noteService.saveNote(note);
        return ResponseEntity.ok().body(savedNote);
    }

    @PutMapping
    public ResponseEntity<Note> updateNote(@RequestBody Note note) {
        try {
            noteService.updateNote(note);
            return ResponseEntity.ok().body(note);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<Note> deleteNote(@RequestBody Note note) {
        noteService.deleteNote(note);
        return ResponseEntity.ok().body(note);
    }
}
