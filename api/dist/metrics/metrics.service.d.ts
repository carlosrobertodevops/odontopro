type RegistryLike = {
    metrics: () => Promise<string>;
    contentType?: string;
};
export declare class MetricsService {
    readonly registry: RegistryLike;
    readonly httpHistogram: any;
    constructor();
    metrics(): Promise<string>;
    getContentType(): string;
}
export {};
