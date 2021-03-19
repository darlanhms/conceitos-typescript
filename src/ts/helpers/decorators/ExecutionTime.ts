export function ExecutionTime() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();

            const value =  originalMethod.apply(this, args)
            
            const t2 = performance.now();

            console.log(`O método ${propertyKey} demorou ${t2 - t1}ms para executar`);

            return value;
        }

        return descriptor;
    }
}