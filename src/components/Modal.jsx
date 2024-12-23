export default function Modal({ isOpen = false, onClose, children, isLoading = false, onAction, title = "", btnCaption = "" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 shadow-xl box-shadow">
      <div className="bg-white dark:bg-[#0B1120] rounded shadow-lg w-full max-w-md transform transition-transform scale-100">
        <form onSubmit={onAction}>
          <h2 className="text-2xl font-semibold p-5 border-b dark:text-white">{title}</h2>
          <div className="px-5 py-8">
            {children}
          </div>

          <div className="flex justify-end gap-3 p-5 border-t">
            <button onClick={onClose} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded">Close</button>
            <button type="submit" className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-3">
              {isLoading && <div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full " role="status" aria-label="loading">
              </div>}
              {btnCaption}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}