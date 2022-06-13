export type Server = {
  id: number;
  name: string;
};

export interface GetServersApi {
  servers: Array<Server>;
}
