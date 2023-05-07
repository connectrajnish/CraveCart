import { useEffect, useState } from "react";

const useOnline = () => {
    //this event listner should be setup once at the start only
    const [isOnline, setIsOnline] = useState(true);
    const handleOnline = ()=>{setIsOnline(true)};
    const handleOffline = ()=>{setIsOnline(false)};
    useEffect(()=>{
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        
        // remove the eventListner while leaving the component
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    
    return isOnline;
}
export default useOnline;