import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Section = ({title, content, isVisible, setIsVisible})=>{
    return (
        <div className="instamart-section">
            <h3>{title}</h3>
            {isVisible?<button onClick={()=>{setIsVisible("")}}>Hide</button>:<button onClick={()=>{setIsVisible(title.toLowerCase())}}>Show</button>}
            <p>{isVisible && content}</p>
        </div>
    );
};

const Instamart = () => {
    const[visibleSection, setIsVisibleSection] = useState("about");
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Instamart</h1>
            <Section
                title={'About'}
                content={'Instamart is a chain of online convenience stores that provides instant meals, snacks, fruits and vegetables, ice creams and other things through virtual convenience stores. Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs. You can download the Instamart app on Google Play Store and get all your groceries delivered to your doorstep hassle-free.'}
                isVisible={visibleSection == 'about'}
                setIsVisible={(sec)=>{setIsVisibleSection(sec)}}
            />
            
            
            <Section
                title={'Products'}
                content={'Instamart offers a wide range of products such as daily essentials, fresh fruits & veggies, dairy, bread & eggs, snacks & indulgences and emergency supplies delivered in minutes. Swiggy’s Instamart will likely be in the non-food category. These include cleaning equipment, toilet cleaners and dustbin bags. You can also buy a Swiggy One membership for unlimited free delivery on orders above ₹99.'}
                isVisible={visibleSection == 'products'}
                setIsVisible={(sec)=>{setIsVisibleSection(sec)}}    
            />
            <Section
                title={'Contact'}
                content={user.email+' ('+user.name+')'}
                isVisible={visibleSection == 'contact'}
                setIsVisible={(sec)=>{setIsVisibleSection(sec)}}    
            />
            <Section
                title={'Careers'}
                content={'No Careers Available!!!'}
                isVisible={visibleSection == 'careers'}
                setIsVisible={(sec)=>{setIsVisibleSection(sec)}}    
            />
        </div>
    );
};

export default Instamart;