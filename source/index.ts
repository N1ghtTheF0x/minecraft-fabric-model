import { loadEntityCodec, unloadEntityCodec } from "./entity"
import { loadProjectSettings, unloadProjectSettings } from "./project"

BBPlugin.register(NAME,{
    title: TITLE,
    author: AUTHOR,
    icon: "icon-format_java",
    description: DESCRIPTION,
    version: VERSION,
    variant: "desktop",
    tags: ["Minecraft: Java Edition"],
    onload()
    {
        loadEntityCodec()
        loadProjectSettings()
    },
    onunload()
    {
        unloadEntityCodec()
        unloadProjectSettings()
    }
})