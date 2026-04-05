/// <reference types="blockbench-types" />

declare module "*.txt"
{
    const content: string
    export default content
}

declare const NAME: string
declare const DESCRIPTION: string
declare const AUTHOR: string
declare const VERSION: string
declare const TITLE: string