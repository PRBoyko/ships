import { piersWithData } from "../interfaces/piersWithData"

export default function checkFullPier(piers:piersWithData[]) {
    return piers.findIndex((pier: piersWithData) => {
        return pier.ifFull && !pier.isBusy
    })
}