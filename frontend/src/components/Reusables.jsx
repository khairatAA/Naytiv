// This files contains all reusable components

// Search place holder
export function Placeholder({icon, text, placeholderText}) {
    return (
        <label class="relative inline-flex items-center">
            <span class="sr-only">{ text }</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src={ icon } class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" />
            </span>
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border
            border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500
            focus:ring-sky-500 focus:ring-1 sm:text-sm " required placeholder={ placeholderText } type="text" name="search"/>
        </label>
    )
  }

// Top Resturants
export function TopResturants({image, text}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-32 h-32 rounded-e-full">
                <img src={image} alt="Top resturants image" />
            </div>
            <div className="bg-yellow rounded-lg px-6 py-1">
                <p className=" font-medium text-lg">{text}</p>
            </div>
        </div>
    )
}

// Top Cities
export function TopCities({text}) {
    return (
        <div className="  flex items-center justify-center bg-light-yellow rounded-full px-6 py-1 text-center w-48 h-12 max-md:w-auto">
            <p className=" font-semibold text-lg">{text}</p>
        </div>
    )
}

// Authentication input field
export function AuthenticationInput({type, name, id, autoComplete, placeholder}) {
    return (
        <div>
            <input
                type={type}
                name={name}
                id={id}
                autoComplete={autoComplete}
                className="block flex-1 border rounded w-full bg-light-yellow py-2 pl-1 placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6 outline-0 hover:border-green invalid:text-red invalid:border-black"
                placeholder={placeholder}
                required
            />
        </div>
    )
}

// Form input and label
export function FormContent({title, type, name, id, autoComplete, placeholder, instruction}) {
    return (
        <div className=" flex flex-col justify-center items-start gap-1">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                {title}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                autoComplete={autoComplete}
                className="block flex-1 rounded w-full bg-light-grey py-2 pl-1 placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6 outline-0 hover:border-green invalid:text-red invalid:border-black"
                placeholder={placeholder}
                required
            />
            <p className="block text-xs font-normal leading-6 text-black">{instruction}</p>
        </div>
    )
}

