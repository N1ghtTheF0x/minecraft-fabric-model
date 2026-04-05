import { PROJECT_NAMESPACE, PROJECT_RENDERSTATE, TARGET_CODEC, TEMPLATE_NAME } from "./constants"
import { getClassNameFromNS } from "./utils"

let properties: Array<Property> = []

const ENTITY_MODEL_CONDITION: ConditionResolvable = {
    formats: [TARGET_CODEC],
    method: () => getProjectModdedEntityVersion() === TEMPLATE_NAME
}
const DEFAULT_RENDERSTATE = "com.example.mod.ExampleRenderState"
const DEFAULT_NAMESPACE = "com.example.mod"

export function loadProjectSettings(): void
{
    if(properties.length > 0) return
    properties = [
        new Property(ModelProject,"string",PROJECT_RENDERSTATE,{
            label: "Render State",
            description: "Name of Entity RenderState class (including namespace)",
            default: DEFAULT_RENDERSTATE,
            condition: ENTITY_MODEL_CONDITION
        }),
        new Property(ModelProject,"string",PROJECT_NAMESPACE,{
            label: "Namespace",
            description: "Namespace of Entity Model",
            default: DEFAULT_NAMESPACE,
            condition: ENTITY_MODEL_CONDITION
        })
    ]
}

export function unloadProjectSettings(): void
{
    for(const property of properties)
        property.delete()
    properties = []
}

export const getProjectRenderState = (): string => Project[PROJECT_RENDERSTATE] ?? DEFAULT_RENDERSTATE
export const getProjectNamespace = (): string => Project[PROJECT_NAMESPACE] ?? DEFAULT_NAMESPACE
export const getProjectModdedEntityVersion = (): string => Project["modded_entity_version"] ?? ""
export const getProjectRenderStateClassName = () => getClassNameFromNS(getProjectRenderState())