import { ExecutionTime } from "../helpers/decorators/ExecutionTime";

export abstract class View<T> {
    private element: Element;

    constructor(selector: string, private scape?: boolean) {
        this.element = document.querySelector(selector) as Element
    }

    @ExecutionTime()
    update(model: T): void {
        let template = this.template(model);

        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }

        this.element.innerHTML = template;
    }

    abstract template(model: T): string
}