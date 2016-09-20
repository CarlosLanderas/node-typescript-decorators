export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    
    let originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args));
        let result = originalMethod.apply(this, args);               
        console.log("The return value is: " + result);              
        return result;                                              
    };
    
    return descriptor;
}