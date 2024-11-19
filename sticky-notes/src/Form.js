import { FaCheck } from "react-icons/fa6";

export default function Form({ text, editing, submitForm, submitEdit, displayInput }) {
  return (
    <div className="container text-center">
      <h5 className="display-5">Sticky Notes</h5>
      <div className="input-group">
        <button type="button" className="btn btn-primary" onClick={editing ? submitEdit : submitForm}>
          <FaCheck />
        </button>
        <textarea className="form-control" id="input" aria-label="Note" placeholder="Create a note" value={text} onChange={e => displayInput(e.target.value)}></textarea>
      </div>
      <hr className="border border-primary border-2 opacity-75" />
    </div>
  );
}