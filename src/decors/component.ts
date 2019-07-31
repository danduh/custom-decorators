export declare interface Component {

}

export interface ComponentConfig {
    selector: string;
    templateUrl: string;
    styleUrls: string[];

}

export function Component(conf: ComponentConfig) {
    return async function (clazz) {
        const elem = document.createElement(conf.selector);
        let tmpl = await fetch(`build/${conf.templateUrl}`).then(str => str.text());
        let _cl = new clazz();
        Object.keys(_cl).forEach(baseClPr => {
            tmpl = tmpl.replace(`{{ ${baseClPr} }}`, _cl[baseClPr])
        });
        elem.innerHTML = tmpl;
        document.body.appendChild(elem);
        return _cl
    };
}
