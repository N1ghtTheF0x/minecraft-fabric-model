export const getClassNameFromNS = (namespace: string) => namespace
    .split(".")
    .filter(segment => segment.length > 0)
    .at(-1)