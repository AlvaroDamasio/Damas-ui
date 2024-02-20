

export default function Badge(props){
    return(
        <div className="w-18 h-6 px-10 py-3 bg-gray-400 rounded-md flex items-center">
            <h3>
                {props.children}
            </h3> 
        </div>
    )
}