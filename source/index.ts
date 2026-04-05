import { loadEntityCodec, unloadEntityCodec } from "./entity"
import { loadProjectSettings, unloadProjectSettings } from "./project"
import ABOUT from "../ABOUT.md"

BBPlugin.register(NAME,{
    title: TITLE,
    author: AUTHOR,
    icon: "icon-format_java",
    description: DESCRIPTION,
    about: ABOUT,
    version: VERSION,
    variant: "both",
    tags: ["Minecraft: Java Edition"],
    repository: "https://github.com/N1ghtTheF0x/minecraft-fabric-model",
    bug_tracker: "https://github.com/N1ghtTheF0x/minecraft-fabric-model/issues",
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