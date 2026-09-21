export interface SandboxRequest{studentId:string;image:string;command:string[];cpuSeconds:number;memoryMb:number;network:"disabled"|"restricted"}
export interface SandboxResult{exitCode:number;stdout:string;stderr:string;durationMs:number;filesChanged:string[]}
export interface LinuxSandbox{run(req:SandboxRequest):Promise<SandboxResult>}
export class DisabledSandbox implements LinuxSandbox{async run(){return{exitCode:1,stdout:"",stderr:"Real Linux sandbox is disabled in Phase 1.",durationMs:0,filesChanged:[]}}}