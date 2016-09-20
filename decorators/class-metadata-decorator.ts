import "reflect-metadata";

export function classMetadata(metadata: IMetadata){
    return function (target: Function) {
      Reflect.defineMetadata("metadata", metadata, target);
  }
}