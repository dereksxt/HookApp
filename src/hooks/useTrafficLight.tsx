import { useEffect,useState } from "react"


const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}
// tipado
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light,setLight] = useState<TrafficLightColor>('red')
    const [coutdown,setCoutdown] = useState(5)

    // coutdown effect
    useEffect(() => {
        if(coutdown === 0) return;

        const intervalId = setInterval(() =>{
            setCoutdown((prev) => prev -1)
        },1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [coutdown])


    // cambiar el color del efecto
    useEffect(() => {
        if (coutdown > 0) return;

        const timer = setTimeout(() => {
        setCoutdown(5);
    
        if (light === 'red') {
      setLight('green');
        } else if (light === 'yellow') {
      setLight('red');
        } else if (light === 'green') {
      setLight('yellow');
        }
    }, 0);

  // Limpieza del timeout
  return () => clearTimeout(timer);   
    }, [coutdown,light])
   return{
    // props
    coutdown,
    colors,
    light
   };
};