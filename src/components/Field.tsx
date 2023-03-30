interface FieldProps {
  label: string
  type: string
}
export function Field({ label, type }: FieldProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="card-number">{label}</label>
      <input
        id="card-number"
        className="w-full border border-gray-700 hover:border-[1.5px] focus-within:border-purple-600 rounded p-3 outline-none bg-gray-900 text-gray-400"
        type={type}
        onChange={event => {}}
      />
    </div>
  )
}
