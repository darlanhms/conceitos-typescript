import { EnforcePrint } from "../../models/EnforcePrint"

export function printObjects(...objects: EnforcePrint[]) {
    objects.forEach(object => {
        console.log(object.toString())
    })
}