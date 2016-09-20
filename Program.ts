import {classMetadata} from "./decorators/class-metadata-decorator";
import {HttpService} from "./services/http-service";
import {log} from "./decorators/log-decorator";

@classMetadata({
   Metadata: [
       {name:"field1", value:"value1"},
       {name:"field2", value:"value2"}
   ]
})
export class Program  {
    private httpService:HttpService;
    constructor() {
        this.httpService = new HttpService();
    }
    @log
    getData(value:number){
        return this.httpService.getData(value);
    }
}