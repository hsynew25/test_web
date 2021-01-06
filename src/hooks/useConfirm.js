export function useConfirm(message = null, onConfirm, onCancel) {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = (e) => {
    e.preventDefault();
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
}
