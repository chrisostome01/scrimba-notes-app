import React from "react";

export default function Sidebar({
  notes,
  newNote,
  currentNote,
  setCurrentNoteId,
  deleteNote,
}) {
  const noteElements = notes.map((note) => {
    const { body, id } = note;
    const { id: currentNoteId } = currentNote;
    return (
      <div key={id}>
        <div
          className={`title ${id === currentNoteId ? "selected-note" : ""}`}
          onClick={() => setCurrentNoteId(id)}
        >
          <h4 className="text-snippet">
            {body.split("\n")[0].replace(/[#]/gi, "")}
          </h4>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(id);
            }}
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
