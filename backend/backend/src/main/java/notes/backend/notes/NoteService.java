package notes.backend.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<NoteDTO> getAllNotes() {
        return this.noteRepository.findAll().stream()
                .map(NoteMapper::toDTO)
                .collect(Collectors.toList());
    }

    public NoteDTO getNoteById(Long id) {
        if (!noteRepository.existsById(String.valueOf(id))) {
            throw new RuntimeException("No note with this ID found");
        }
        Note note = noteRepository.findById(String.valueOf(id)).get();
        return NoteMapper.toDTO(note);
    }

    public NoteDTO saveNote(NoteDTO noteDTO) {
        Note note = NoteMapper.toEntity(noteDTO);
        Note savedNote = noteRepository.save(note);
        return NoteMapper.toDTO(savedNote);
    }

    public NoteDTO updateNote(NoteDTO noteDTO) {
        if (!noteRepository.existsById(String.valueOf(noteDTO.getId()))) {
            throw new RuntimeException("Note not found");
        }
        Note note = NoteMapper.toEntity(noteDTO);
        Note updatedNote = noteRepository.save(note);
        return NoteMapper.toDTO(updatedNote);
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(String.valueOf(id));
    }

    public boolean existsById(Long id) {
        return noteRepository.existsById(String.valueOf(id));
    }
}
