import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../app/globals.css";
// Assumi che styles.module.css contenga le tue classi CSS

function Input() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  return (
    <div>
      <button onClick={() => setShowInput(!showInput)}>Mostra input</button>
      <CSSTransition
        in={showInput}
        timeout={300} // Durata dell'animazione in millisecondi
        classNames={{
          enter: "input-enter",
          enterActive: "input-enter-active",
          exit: "input-exit",
          exitActive: "input-exit-active",
        }}
        unmountOnExit
        nodeRef={inputRef} // Utilizza nodeRef per passare la ref direttamente all'elemento
      >
        <input type="text" ref={inputRef} />
      </CSSTransition>
    </div>
  );
}

export default Input;
