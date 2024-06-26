export const checkPerson = (age: number) => {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
          const originalMethod = descriptor.value;
  
          descriptor.value = function () {
              if(age < 18) {
                  console.log("Estamos cadastrando como menor de idade.");
              } else {
                  console.log("Estamos cadastrando como maior de idade.");
                  return originalMethod.apply(this);
              }
          }
  
    }
  }