import { TARGET_CODEC, TEMPLATE_NAME, TEMPLATE_NAMESPACE, TEMPLATE_RENDER_STATE, TEMPLATE_RENDER_STATE_CLASS } from "./constants"
import { getProjectNamespace, getProjectRenderState, getProjectRenderStateClassName } from "./project"

import FILE from "./template/file.txt"
import FIELD from "./template/field.txt"
import MODEL_PART from "./template/model_part.txt"
import BONE from "./template/bone.txt"
import CUBE from "./template/cube.txt"

interface IModdedEntityTemplate
{
    name: string
    flip_y: boolean
    integer_size: boolean
    file: string
    field: string
    model_part: string
    bone: string
    cube: string
    animation_template: string
}

const mojang: IModdedEntityTemplate = {
    name: TEMPLATE_NAME,
    flip_y: true,
    integer_size: false,
    get file()
    {
        return FILE
            .replaceAll(TEMPLATE_RENDER_STATE,getProjectRenderState())
            .replaceAll(TEMPLATE_RENDER_STATE_CLASS,getProjectRenderStateClassName()!)
            .replaceAll(TEMPLATE_NAMESPACE,getProjectNamespace())
    },
    field: FIELD,
    model_part: MODEL_PART,
    bone: BONE,
    cube: CUBE,
    animation_template: "mojang"
}

export function loadEntityCodec(): void
{
    Codecs[TARGET_CODEC].templates[TEMPLATE_NAME] = mojang
}

export function unloadEntityCodec(): void
{
    delete Codecs[TARGET_CODEC].templates[TEMPLATE_NAME]
}