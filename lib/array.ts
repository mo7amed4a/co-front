import { DiplomaType } from "@/types/types";

export const getRandomTwo = (arr: DiplomaType[]) => {
    if (arr.length < 2) return arr; 
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, 2); 
};