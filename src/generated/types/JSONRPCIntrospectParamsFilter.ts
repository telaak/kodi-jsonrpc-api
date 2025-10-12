export interface JSONRPCIntrospectParamsFilter {
  getreferences?: boolean;
  id: string;
  type: "method" | "namespace" | "type" | "notification";
}