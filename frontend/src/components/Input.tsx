


interface IInputProps { 
    labelText: string;
    icon?: any;
    type?: string;
}
  

export default function Input({ labelText, icon, type }: IInputProps) {
   


    return (
        <div className="flex ">
  
            <span className=" w-10 flex align-middle bg-gray-100/[90%] text-gray-500 px-2 "> {icon} </span>
        
            <input type={type || "text"} className="
      placeholder-gray-500  text-sm font-medium 
      w-full h-10 bg-gray-100/[90%] px-4 py-4 rounded-sm text-gray-600" placeholder={labelText}>
            </input>
        
        </div>
    )
}