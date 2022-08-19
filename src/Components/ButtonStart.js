import React, { useEffect, useState } from "react";

function ButtonPlays (props){
 //Nous définissons l' secondsLeftétat défini sur 25 * 60 secondes comme valeur initiale.

    // const [secLeft, setSecleft]= useState(25 * 60);

//De plus, nous définissons l' timer état défini sur undefined comme valeur initiale.
    
    const [timer, setTimer]= useState();
    
    // La start fonction crée une minuterie avec la setIntervalfonction.   
    const start = () =>{
    
     
        const timer = setInterval(() => {
            if (props.session.minute > 0 && props.session.seconde>0) {
            props.setSession({...props.session,seconde: props.session.seconde-=1});
            console.log(props.session.seconde);
    //Si secondsLeft est 0, alors nous appelons clearIntervalpour effacer la minuterie.
            if (props.session.seconde === 0){
               props.setSession({...props.session,minute: props.session.minute-=1}) 
               props.setSession({...props.session, seconde : props.session.seconde += 59})
               //props.decrementation({ props.setSession({...props.session, minute: props.minute-1, seconde: 59})})
               //Nous exécutons le setIntrvalrappel toutes les secondes.
                
            }}
            
        }, 10);
        
    };
 // Arret de chhrono  quand secLeft est 0 en appelant clearInterval
    useEffect(() =>{
        if (props.session.seconde === 0 ){
            clearInterval(timer)
        }
        
    }, [props.session.seconde, timer]);
 // Le deuxième useEffect rappel qui renvoie une fonction à appeler clearIntervalpour effacer le minuteur lorsque nous démontons le composant.
    useEffect(() =>{

        
        return()=> clearInterval(timer)
    }, [timer]);

    return(
        <div className="buttonsOperation">
        <button onClick={start}>
        <img className="play" src="play-solid.svg" alt="" />
        </button>
       
        <img className="pause" src="pause-solid.svg" alt="" />
        <img className="rotate" src="rotate.svg" alt="" />
    </div>
    )
 }
 export default ButtonPlays
