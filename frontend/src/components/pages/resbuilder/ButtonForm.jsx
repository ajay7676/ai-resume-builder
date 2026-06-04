
const ButtonForm = ({handleSave}) => {
  return (
      <div className="mt-8">
          <button
            onClick={handleSave}
            className="rounded-lg border border-green-500 bg-green-100 px-5 py-2 text-sm text-green-700 transition hover:bg-green-200"
          >
            Save Changes
          </button>
        </div>
  )
}

export default ButtonForm