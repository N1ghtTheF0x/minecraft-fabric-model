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