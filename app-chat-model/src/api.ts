export interface ApiDescriptor {
    version: string
}

export interface ApiRequest<T> {
    body: T
}