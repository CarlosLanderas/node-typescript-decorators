import "reflect-metadata";


export default class Main {
   
    static bootstrap(program:any) {
        
        var programMetadata = Main.GetMetadata(program);        
        //Print found metadata in class
        console.log(programMetadata);

        //Log with be printed when calling getData
        new program().getData(5);

        //output
        //[ { name: 'field1', value: 'value1' },
        //  { name: 'field2', value: 'value2' } ]
        //  The method args are: [5]
        //The return value is: Data1,Data2,Data3
    }
     
    private static GetMetadata(obj:any): Array<IMetadata> {
          var componentInstance = new obj();
          return Reflect.getMetadata("metadata", componentInstance.constructor).Metadata;
    }
    
}