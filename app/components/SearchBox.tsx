export default function SearchBox(){
    return(
      <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl font-semibold text-[#83a598] mb-3">
            Buscar
          </h2>
  
          <input
            type="text"
            placeholder="Pesquise no blog..."
            className="w-full px-4 py-2 rounded-md bg-[#282828] text-[#ebdbb2] border border-[#3c3836] focus:outline-none focus:border-[#fe8019]"
          />
        </div>
    )
}