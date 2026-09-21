export type Progress={xp:number,completedTasks:string[]};
export const defaultProgress:Progress={xp:0,completedTasks:[]};
export function loadProgress():Progress{try{return JSON.parse(localStorage.getItem("islearn-progress")||JSON.stringify(defaultProgress))}catch{return defaultProgress}}
export function saveProgress(p:Progress){localStorage.setItem("islearn-progress",JSON.stringify(p))}