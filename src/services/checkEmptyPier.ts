import { piersWithData } from "../interfaces/piersWithData"

export default function checkEmptyPier(piers:piersWithData[]) {
    return piers.findIndex((pier: piersWithData) => {
        return !pier.ifFull && !pier.isBusy
    })
}