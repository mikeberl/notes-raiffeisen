package notes.backend.notes;

import jakarta.validation.Valid;
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
    public List<NoteDTO> getAllNotes() {
        return noteService.getAllNotes();
    }

    @PostMapping
    public ResponseEntity<NoteDTO> createNote(@Valid @RequestBody NoteDTO noteDTO) {
        NoteDTO savedNote = noteService.saveNote(noteDTO);
        return ResponseEntity.ok().body(savedNote);
    }

    @PutMapping
    public ResponseEntity<NoteDTO> updateNote(@Valid @RequestBody NoteDTO noteDTO) {
        try {
            NoteDTO updatedNote = noteService.updateNote(noteDTO);
            return ResponseEntity.ok().body(updatedNote);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        if (noteService.existsById(id)) {
            noteService.deleteNote(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
