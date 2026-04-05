import { build } from "tsdown"
import PKG from "./package.json" with {type: "json"}

const TITLE = "Minecraft Mojang Model"

await build({
    entry: {
        [PKG.name]: "source/index.ts"
    },
    format: "iife",
    outputOptions: {
        entryFileNames: "[name].js"
    },
    platform: "node",
    define: {
        NAME: JSON.stringify(PKG.name),
        AUTHOR: JSON.stringify(PKG.author),
        DESCRIPTION: JSON.stringify(PKG.description),
        VERSION: JSON.stringify(PKG.version),
        TITLE: JSON.stringify(TITLE)
    },
    loader: {
        ".md": "text"
    }
})