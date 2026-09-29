declare module "qz-tray" {
  const qz: {
    websocket: {
      connect: (options?: any) => Promise<void>;
      disconnect: () => Promise<void>;
      isActive: () => boolean;
      getConnectionInfo: () => any;
    };
    security: {
      setCertificatePromise: (promiseFn: () => Promise<string>) => void;
      setSignaturePromise: (promiseFn: (toSign: string) => Promise<string>) => void;
    };
    configs: {
      create: (printer?: string | null, options?: any) => any;
    };
    printers: {
      find: (query?: string) => Promise<string | string[]>;
      getDefault: () => Promise<string>;
      details: () => Promise<any[]>;
      startListening?: (printers?: string | string[] | null, options?: any) => Promise<void>;
      stopListening?: () => Promise<void>;
      getStatus?: () => Promise<any>;
      clearQueue?: (options?: any) => Promise<void>;
    };
    print: (config: any, data: any[]) => Promise<void>;
    version: string;
  };
  export interface QZPrinterDetail {
    name: string;
    driver?: string;
    density?: number;
    connection?: string;
    trays?: string[];
    isDefault?: boolean;
    [key: string]: any;
  }
  export default qz;
}

declare module "esc-pos-encoder" {
  export default class EscPosEncoder {
    constructor();
    initialize(): this;
    codepage(codepage: string): this;
    text(text: string): this;
    line(text: string): this;
    newline(): this;
    bold(enable?: boolean): this;
    underline(enable?: boolean): this;
    italic(enable?: boolean): this;
    align(alignment: "left" | "center" | "right"): this;
    size(width: "small" | "normal", height?: "small" | "normal"): this;
    cut(partial?: boolean): this;
    encode(): Uint8Array;
  }
}
