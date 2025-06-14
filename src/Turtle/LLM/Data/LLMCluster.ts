export enum LLMClusterType {
    RAW = 0,
    TURTLE = 1
}


export default class LLMCluster {
    uid = ""
    name = "localhost"
    url = "http://localhost:11434"
    type = LLMClusterType.RAW
    xApiKey = ""
    org = ""
    energyConsumption = 0

    ToJson(): any {
        return {
            uid: this.uid,
            name: this.name,
            url: this.url,
            xApiKey: this.xApiKey,
            org: this.org,
            energyConsumption: this.energyConsumption,
        }
    }

    FromJson(json: any): any {
        this.uid = json.uid ?? ""
        this.name = json.name ?? ""
        this.url = json.url ?? ""
        this.xApiKey = json.xApiKey ?? ""
        this.org = json.org ?? ""
        this.energyConsumption = json.energyConsumption ?? 0
    }


}