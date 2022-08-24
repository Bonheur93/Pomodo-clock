import React, { useRef } from "react";

function ButtonPlays (props){
 //Nous définissons l' secondsLeftétat défini sur 25 * 60 secondes comme valeur initiale.

    // const [secLeft, setSecleft]= useState(25 * 60);

//De plus, nous définissons l' timer état défini sur undefined comme valeur initiale.
    let intervale = useRef(0);
    
    
    // La start fonction crée une minuterie avec la setIntervalfonction.   
    const start = () =>{
    
     
         intervale.current = setInterval(() => {
            if (props.session.minute >0 && props.session.seconde>0) {
            props.setSession({...props.session,seconde: props.session.seconde-=1});
            
            
    //Si secondsLeft est 0, alors nous appelons clearIntervalpour effacer la minuterie.
            }
            if (props.session.seconde === 0){
                props.setSession({...props.session,minute: props.session.minute-=1}) 
                props.setSession({...props.session, seconde : props.session.seconde += 59})
                //props.decrementation({ props.setSession({...props.session, minute: props.minute-1, seconde: 59})})
                //Nous exécutons le setIntrvalrappel toutes les secondes.
                 
             }
             if (props.session.minute ===0 && props.session.seconde>0) {
                props.setSession({...props.session,seconde: props.session.seconde-=1});
             
             }
             if (props.session.minute ===0 && props.session.seconde===0) {
                clearInterval(intervale.current)
             }
            
        }, 1000);
        
    };

 // Arret de chhrono  quand secLeft est 0 en appelant clearInterval
//     useEffect(() =>{
//         if (props.session.seconde === 0 ){
//             clearInterval(intervale)
//         }
        
//     }, [props.session.seconde, timer]);
//  // Le deuxième useEffect rappel qui renvoie une fonction à appeler clearIntervalpour effacer le minuteur lorsque nous démontons le composant.
//     useEffect(() =>{

        
//         return()=> clearInterval(intervale)
//     }, [timer]);

 const pause = () =>{
    // props.setSession({...props.session,minute: props.session.    }) ;
    // props.setSession({...props.session,seconde: props.session.seconde});
    clearInterval(intervale.current)


 }

 const reset = () =>{

    clearInterval(intervale.current)
 
    props.setSession({...props.session,seconde: 0, minute:25})
 }



    return(
        <div className="buttonsOperation">
        <button onClick={start}>
        <img className="play" src="play-solid.svg" alt="" />
        </button>
       
       <button onClick={pause}>
         <img className="pause" src="pause-solid.svg" alt="" />
       </button>
       
       <button onClick={reset}>
        <img className="rotate" src="rotate.svg" alt="" />
       </button>
        
    </div>
    )
 }
 export default ButtonPlays
