export function DomInjection(selector: string) {
    return function(target: any, key: string) {
        let elemento: Element;

        const getter = function() {
            if (!elemento) {
                elemento = document.querySelector(selector) as Element;
            }

            return elemento;
        }
        
        Object.defineProperty(target, key, {
            get: getter
        });
    }
}