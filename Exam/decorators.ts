export function Upgraded(target: object, propertyKey: string, descriptor: PropertyDescriptor) {


    const originalMethod = descriptor.value;

    if (typeof originalMethod !== 'function') {
        throw new Error(`Upgraded can only be applied to methods.`);
    }

    descriptor.value = function (...args: any[]) {
        const originalResult = originalMethod.apply(this, args);
        return originalResult * 1.75;
    }

}

