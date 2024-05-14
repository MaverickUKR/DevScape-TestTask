import { useState } from "react";
import "./MyModal.css";

const MyModal = ({ open, disableGlobalScroll, children }) => {
  useEffect(() => {
    if (disableGlobalScroll && open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">{children}</div>
    </div>
  );
};

function SomeComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </MyModal>
    </div>
  );
}

export default SomeComponent;
