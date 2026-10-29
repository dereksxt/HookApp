import { useState,useEffect } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}
export const TrafficLightWithEffect = () => {
    
    const [light, setLight] = useState('red');
    const [coutdown, setCoutdown] = useState(5);

    useEffect(() => {
        if (coutdown === 0) return;

        const intervalId = setInterval(() => {
            setCoutdown((prev) => prev -1)
        },1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [coutdown])
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 
            className="text-white text-3xl font-thin"> Semaforo useEffect 
        </h1>
        <h2 className="text-white text-xl">Coutdown {coutdown}</h2>
        <div className={`w-32 h-32 ${
            light === 'red' ? colors[light] : 'bg-gray-500'
            } rounded-full`}></div>

        <div className={`w-32 h-32 ${
            light === 'yellow' ? colors[light] : 'bg-gray-500'
            } rounded-full`}></div>

        <div className={`w-32 h-32 ${
            light === 'green' ? colors[light] : 'bg-gray-500'
            } rounded-full`}></div>
      </div>
    </div>
  );
};