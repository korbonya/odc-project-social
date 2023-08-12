export default function TextField(props) {
  const {label, type, placeholder} = props
  return (
    <div className="flex flex-col w-full">
        <label className="text-white my-1 text-2xl" for="textField">{label}</label>
        <input className="py-4 px-8 bg-black/75 text-xl text-gray-800" type={type} placeholder={placeholder} />
    </div>
  )
}
