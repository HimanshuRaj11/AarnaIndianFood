
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Printer
 * 
 */
export type Printer = $Result.DefaultSelection<Prisma.$PrinterPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tax
 * 
 */
export type Tax = $Result.DefaultSelection<Prisma.$TaxPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model KOT
 * 
 */
export type KOT = $Result.DefaultSelection<Prisma.$KOTPayload>
/**
 * Model KOTItem
 * 
 */
export type KOTItem = $Result.DefaultSelection<Prisma.$KOTItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  MANAGER: 'MANAGER',
  OWNER: 'OWNER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printer`: Exposes CRUD operations for the **Printer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Printers
    * const printers = await prisma.printer.findMany()
    * ```
    */
  get printer(): Prisma.PrinterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tax`: Exposes CRUD operations for the **Tax** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxes
    * const taxes = await prisma.tax.findMany()
    * ```
    */
  get tax(): Prisma.TaxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kOT`: Exposes CRUD operations for the **KOT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KOTS
    * const kOTS = await prisma.kOT.findMany()
    * ```
    */
  get kOT(): Prisma.KOTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kOTItem`: Exposes CRUD operations for the **KOTItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KOTItems
    * const kOTItems = await prisma.kOTItem.findMany()
    * ```
    */
  get kOTItem(): Prisma.KOTItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Branch: 'Branch',
    User: 'User',
    Printer: 'Printer',
    Category: 'Category',
    Tax: 'Tax',
    Product: 'Product',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    KOT: 'KOT',
    KOTItem: 'KOTItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "branch" | "user" | "printer" | "category" | "tax" | "product" | "invoice" | "invoiceItem" | "kOT" | "kOTItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Printer: {
        payload: Prisma.$PrinterPayload<ExtArgs>
        fields: Prisma.PrinterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrinterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrinterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findFirst: {
            args: Prisma.PrinterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrinterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findMany: {
            args: Prisma.PrinterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          create: {
            args: Prisma.PrinterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          createMany: {
            args: Prisma.PrinterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrinterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          delete: {
            args: Prisma.PrinterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          update: {
            args: Prisma.PrinterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          deleteMany: {
            args: Prisma.PrinterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrinterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrinterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          upsert: {
            args: Prisma.PrinterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          aggregate: {
            args: Prisma.PrinterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrinter>
          }
          groupBy: {
            args: Prisma.PrinterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrinterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrinterCountArgs<ExtArgs>
            result: $Utils.Optional<PrinterCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tax: {
        payload: Prisma.$TaxPayload<ExtArgs>
        fields: Prisma.TaxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findFirst: {
            args: Prisma.TaxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findMany: {
            args: Prisma.TaxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          create: {
            args: Prisma.TaxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          createMany: {
            args: Prisma.TaxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          delete: {
            args: Prisma.TaxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          update: {
            args: Prisma.TaxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          deleteMany: {
            args: Prisma.TaxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          upsert: {
            args: Prisma.TaxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          aggregate: {
            args: Prisma.TaxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTax>
          }
          groupBy: {
            args: Prisma.TaxGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxCountArgs<ExtArgs>
            result: $Utils.Optional<TaxCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      KOT: {
        payload: Prisma.$KOTPayload<ExtArgs>
        fields: Prisma.KOTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KOTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KOTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          findFirst: {
            args: Prisma.KOTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KOTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          findMany: {
            args: Prisma.KOTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>[]
          }
          create: {
            args: Prisma.KOTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          createMany: {
            args: Prisma.KOTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KOTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>[]
          }
          delete: {
            args: Prisma.KOTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          update: {
            args: Prisma.KOTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          deleteMany: {
            args: Prisma.KOTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KOTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KOTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>[]
          }
          upsert: {
            args: Prisma.KOTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTPayload>
          }
          aggregate: {
            args: Prisma.KOTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKOT>
          }
          groupBy: {
            args: Prisma.KOTGroupByArgs<ExtArgs>
            result: $Utils.Optional<KOTGroupByOutputType>[]
          }
          count: {
            args: Prisma.KOTCountArgs<ExtArgs>
            result: $Utils.Optional<KOTCountAggregateOutputType> | number
          }
        }
      }
      KOTItem: {
        payload: Prisma.$KOTItemPayload<ExtArgs>
        fields: Prisma.KOTItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KOTItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KOTItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          findFirst: {
            args: Prisma.KOTItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KOTItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          findMany: {
            args: Prisma.KOTItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>[]
          }
          create: {
            args: Prisma.KOTItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          createMany: {
            args: Prisma.KOTItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KOTItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>[]
          }
          delete: {
            args: Prisma.KOTItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          update: {
            args: Prisma.KOTItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          deleteMany: {
            args: Prisma.KOTItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KOTItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KOTItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>[]
          }
          upsert: {
            args: Prisma.KOTItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KOTItemPayload>
          }
          aggregate: {
            args: Prisma.KOTItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKOTItem>
          }
          groupBy: {
            args: Prisma.KOTItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<KOTItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.KOTItemCountArgs<ExtArgs>
            result: $Utils.Optional<KOTItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    branch?: BranchOmit
    user?: UserOmit
    printer?: PrinterOmit
    category?: CategoryOmit
    tax?: TaxOmit
    product?: ProductOmit
    invoice?: InvoiceOmit
    invoiceItem?: InvoiceItemOmit
    kOT?: KOTOmit
    kOTItem?: KOTItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    branches: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | CompanyCountOutputTypeCountBranchesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    users: number
    products: number
    invoices: number
    kots: number
    printers: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchCountOutputTypeCountUsersArgs
    products?: boolean | BranchCountOutputTypeCountProductsArgs
    invoices?: boolean | BranchCountOutputTypeCountInvoicesArgs
    kots?: boolean | BranchCountOutputTypeCountKotsArgs
    printers?: boolean | BranchCountOutputTypeCountPrintersArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountKotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KOTWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountPrintersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type PrinterCountOutputType
   */

  export type PrinterCountOutputType = {
    receiptUsers: number
    kotUsers: number
  }

  export type PrinterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiptUsers?: boolean | PrinterCountOutputTypeCountReceiptUsersArgs
    kotUsers?: boolean | PrinterCountOutputTypeCountKotUsersArgs
  }

  // Custom InputTypes
  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrinterCountOutputType
     */
    select?: PrinterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeCountReceiptUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeCountKotUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
    kots: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
    kots?: boolean | InvoiceCountOutputTypeCountKotsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountKotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KOTWhereInput
  }


  /**
   * Count Type KOTCountOutputType
   */

  export type KOTCountOutputType = {
    items: number
  }

  export type KOTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | KOTCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * KOTCountOutputType without action
   */
  export type KOTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTCountOutputType
     */
    select?: KOTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KOTCountOutputType without action
   */
  export type KOTCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KOTItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    email: string | null
    phone: string | null
    website: string | null
    VATNumber: string | null
    logoUrl: string | null
    description: string | null
    currencyName: string | null
    currencyCode: string | null
    currencySymbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    email: string | null
    phone: string | null
    website: string | null
    VATNumber: string | null
    logoUrl: string | null
    description: string | null
    currencyName: string | null
    currencyCode: string | null
    currencySymbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    street: number
    city: number
    state: number
    country: number
    zipCode: number
    email: number
    phone: number
    website: number
    VATNumber: number
    logoUrl: number
    description: number
    currencyName: number
    currencyCode: number
    currencySymbol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    website?: true
    VATNumber?: true
    logoUrl?: true
    description?: true
    currencyName?: true
    currencyCode?: true
    currencySymbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    website?: true
    VATNumber?: true
    logoUrl?: true
    description?: true
    currencyName?: true
    currencyCode?: true
    currencySymbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    website?: true
    VATNumber?: true
    logoUrl?: true
    description?: true
    currencyName?: true
    currencyCode?: true
    currencySymbol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email: string | null
    phone: string
    website: string | null
    VATNumber: string | null
    logoUrl: string | null
    description: string | null
    currencyName: string
    currencyCode: string
    currencySymbol: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    VATNumber?: boolean
    logoUrl?: boolean
    description?: boolean
    currencyName?: boolean
    currencyCode?: boolean
    currencySymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    VATNumber?: boolean
    logoUrl?: boolean
    description?: boolean
    currencyName?: boolean
    currencyCode?: boolean
    currencySymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    VATNumber?: boolean
    logoUrl?: boolean
    description?: boolean
    currencyName?: boolean
    currencyCode?: boolean
    currencySymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    VATNumber?: boolean
    logoUrl?: boolean
    description?: boolean
    currencyName?: boolean
    currencyCode?: boolean
    currencySymbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street" | "city" | "state" | "country" | "zipCode" | "email" | "phone" | "website" | "VATNumber" | "logoUrl" | "description" | "currencyName" | "currencyCode" | "currencySymbol" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      branches: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      street: string
      city: string
      state: string
      country: string
      zipCode: string
      email: string | null
      phone: string
      website: string | null
      VATNumber: string | null
      logoUrl: string | null
      description: string | null
      currencyName: string
      currencyCode: string
      currencySymbol: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branches<T extends Company$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Company$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly street: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly state: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly zipCode: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly VATNumber: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly currencyName: FieldRef<"Company", 'String'>
    readonly currencyCode: FieldRef<"Company", 'String'>
    readonly currencySymbol: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.branches
   */
  export type Company$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    invoiceSequence: number | null
    kotSequence: number | null
  }

  export type BranchSumAggregateOutputType = {
    invoiceSequence: number | null
    kotSequence: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    email: string | null
    phone: string | null
    invoiceSequence: number | null
    kotSequence: number | null
    active: boolean | null
    printerName: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    email: string | null
    phone: string | null
    invoiceSequence: number | null
    kotSequence: number | null
    active: boolean | null
    printerName: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    street: number
    city: number
    state: number
    country: number
    zipCode: number
    email: number
    phone: number
    invoiceSequence: number
    kotSequence: number
    active: number
    printerName: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    invoiceSequence?: true
    kotSequence?: true
  }

  export type BranchSumAggregateInputType = {
    invoiceSequence?: true
    kotSequence?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    invoiceSequence?: true
    kotSequence?: true
    active?: true
    printerName?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    invoiceSequence?: true
    kotSequence?: true
    active?: true
    printerName?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    street?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    email?: true
    phone?: true
    invoiceSequence?: true
    kotSequence?: true
    active?: true
    printerName?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email: string | null
    phone: string
    invoiceSequence: number
    kotSequence: number
    active: boolean
    printerName: string | null
    companyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    invoiceSequence?: boolean
    kotSequence?: boolean
    active?: boolean
    printerName?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Branch$companyArgs<ExtArgs>
    users?: boolean | Branch$usersArgs<ExtArgs>
    products?: boolean | Branch$productsArgs<ExtArgs>
    invoices?: boolean | Branch$invoicesArgs<ExtArgs>
    kots?: boolean | Branch$kotsArgs<ExtArgs>
    printers?: boolean | Branch$printersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    invoiceSequence?: boolean
    kotSequence?: boolean
    active?: boolean
    printerName?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Branch$companyArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    invoiceSequence?: boolean
    kotSequence?: boolean
    active?: boolean
    printerName?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | Branch$companyArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    email?: boolean
    phone?: boolean
    invoiceSequence?: boolean
    kotSequence?: boolean
    active?: boolean
    printerName?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street" | "city" | "state" | "country" | "zipCode" | "email" | "phone" | "invoiceSequence" | "kotSequence" | "active" | "printerName" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Branch$companyArgs<ExtArgs>
    users?: boolean | Branch$usersArgs<ExtArgs>
    products?: boolean | Branch$productsArgs<ExtArgs>
    invoices?: boolean | Branch$invoicesArgs<ExtArgs>
    kots?: boolean | Branch$kotsArgs<ExtArgs>
    printers?: boolean | Branch$printersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Branch$companyArgs<ExtArgs>
  }
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Branch$companyArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      kots: Prisma.$KOTPayload<ExtArgs>[]
      printers: Prisma.$PrinterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      street: string
      city: string
      state: string
      country: string
      zipCode: string
      email: string | null
      phone: string
      invoiceSequence: number
      kotSequence: number
      active: boolean
      printerName: string | null
      companyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Branch$companyArgs<ExtArgs> = {}>(args?: Subset<T, Branch$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Branch$usersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Branch$productsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Branch$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kots<T extends Branch$kotsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$kotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    printers<T extends Branch$printersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$printersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly street: FieldRef<"Branch", 'String'>
    readonly city: FieldRef<"Branch", 'String'>
    readonly state: FieldRef<"Branch", 'String'>
    readonly country: FieldRef<"Branch", 'String'>
    readonly zipCode: FieldRef<"Branch", 'String'>
    readonly email: FieldRef<"Branch", 'String'>
    readonly phone: FieldRef<"Branch", 'String'>
    readonly invoiceSequence: FieldRef<"Branch", 'Int'>
    readonly kotSequence: FieldRef<"Branch", 'Int'>
    readonly active: FieldRef<"Branch", 'Boolean'>
    readonly printerName: FieldRef<"Branch", 'String'>
    readonly companyId: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.company
   */
  export type Branch$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Branch.users
   */
  export type Branch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Branch.products
   */
  export type Branch$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Branch.invoices
   */
  export type Branch$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Branch.kots
   */
  export type Branch$kotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    where?: KOTWhereInput
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    cursor?: KOTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KOTScalarFieldEnum | KOTScalarFieldEnum[]
  }

  /**
   * Branch.printers
   */
  export type Branch$printersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    cursor?: PrinterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    branchId: string | null
    phone: string | null
    isActive: boolean | null
    department: string | null
    designation: string | null
    receiptPrinterId: string | null
    kotPrinterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    branchId: string | null
    phone: string | null
    isActive: boolean | null
    department: string | null
    designation: string | null
    receiptPrinterId: string | null
    kotPrinterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    branchId: number
    phone: number
    isActive: number
    department: number
    designation: number
    receiptPrinterId: number
    kotPrinterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    branchId?: true
    phone?: true
    isActive?: true
    department?: true
    designation?: true
    receiptPrinterId?: true
    kotPrinterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    branchId?: true
    phone?: true
    isActive?: true
    department?: true
    designation?: true
    receiptPrinterId?: true
    kotPrinterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    branchId?: true
    phone?: true
    isActive?: true
    department?: true
    designation?: true
    receiptPrinterId?: true
    kotPrinterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    branchId: string | null
    phone: string | null
    isActive: boolean
    department: string | null
    designation: string | null
    receiptPrinterId: string | null
    kotPrinterId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    branchId?: boolean
    phone?: boolean
    isActive?: boolean
    department?: boolean
    designation?: boolean
    receiptPrinterId?: boolean
    kotPrinterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    branchId?: boolean
    phone?: boolean
    isActive?: boolean
    department?: boolean
    designation?: boolean
    receiptPrinterId?: boolean
    kotPrinterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    branchId?: boolean
    phone?: boolean
    isActive?: boolean
    department?: boolean
    designation?: boolean
    receiptPrinterId?: boolean
    kotPrinterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    branchId?: boolean
    phone?: boolean
    isActive?: boolean
    department?: boolean
    designation?: boolean
    receiptPrinterId?: boolean
    kotPrinterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "branchId" | "phone" | "isActive" | "department" | "designation" | "receiptPrinterId" | "kotPrinterId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    receiptPrinter?: boolean | User$receiptPrinterArgs<ExtArgs>
    kotPrinter?: boolean | User$kotPrinterArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      receiptPrinter: Prisma.$PrinterPayload<ExtArgs> | null
      kotPrinter: Prisma.$PrinterPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      branchId: string | null
      phone: string | null
      isActive: boolean
      department: string | null
      designation: string | null
      receiptPrinterId: string | null
      kotPrinterId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receiptPrinter<T extends User$receiptPrinterArgs<ExtArgs> = {}>(args?: Subset<T, User$receiptPrinterArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kotPrinter<T extends User$kotPrinterArgs<ExtArgs> = {}>(args?: Subset<T, User$kotPrinterArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly branchId: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly department: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly receiptPrinterId: FieldRef<"User", 'String'>
    readonly kotPrinterId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.receiptPrinter
   */
  export type User$receiptPrinterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
  }

  /**
   * User.kotPrinter
   */
  export type User$kotPrinterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Printer
   */

  export type AggregatePrinter = {
    _count: PrinterCountAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  export type PrinterMinAggregateOutputType = {
    id: string | null
    name: string | null
    printerName: string | null
    type: string | null
    isDefault: boolean | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrinterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    printerName: string | null
    type: string | null
    isDefault: boolean | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrinterCountAggregateOutputType = {
    id: number
    name: number
    printerName: number
    type: number
    isDefault: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrinterMinAggregateInputType = {
    id?: true
    name?: true
    printerName?: true
    type?: true
    isDefault?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrinterMaxAggregateInputType = {
    id?: true
    name?: true
    printerName?: true
    type?: true
    isDefault?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrinterCountAggregateInputType = {
    id?: true
    name?: true
    printerName?: true
    type?: true
    isDefault?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrinterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printer to aggregate.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Printers
    **/
    _count?: true | PrinterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrinterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrinterMaxAggregateInputType
  }

  export type GetPrinterAggregateType<T extends PrinterAggregateArgs> = {
        [P in keyof T & keyof AggregatePrinter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrinter[P]>
      : GetScalarType<T[P], AggregatePrinter[P]>
  }




  export type PrinterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithAggregationInput | PrinterOrderByWithAggregationInput[]
    by: PrinterScalarFieldEnum[] | PrinterScalarFieldEnum
    having?: PrinterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrinterCountAggregateInputType | true
    _min?: PrinterMinAggregateInputType
    _max?: PrinterMaxAggregateInputType
  }

  export type PrinterGroupByOutputType = {
    id: string
    name: string
    printerName: string
    type: string
    isDefault: boolean
    branchId: string
    createdAt: Date
    updatedAt: Date
    _count: PrinterCountAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  type GetPrinterGroupByPayload<T extends PrinterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrinterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrinterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrinterGroupByOutputType[P]>
            : GetScalarType<T[P], PrinterGroupByOutputType[P]>
        }
      >
    >


  export type PrinterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    printerName?: boolean
    type?: boolean
    isDefault?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    receiptUsers?: boolean | Printer$receiptUsersArgs<ExtArgs>
    kotUsers?: boolean | Printer$kotUsersArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    printerName?: boolean
    type?: boolean
    isDefault?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    printerName?: boolean
    type?: boolean
    isDefault?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectScalar = {
    id?: boolean
    name?: boolean
    printerName?: boolean
    type?: boolean
    isDefault?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrinterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "printerName" | "type" | "isDefault" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["printer"]>
  export type PrinterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    receiptUsers?: boolean | Printer$receiptUsersArgs<ExtArgs>
    kotUsers?: boolean | Printer$kotUsersArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrinterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type PrinterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $PrinterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Printer"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      receiptUsers: Prisma.$UserPayload<ExtArgs>[]
      kotUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      printerName: string
      type: string
      isDefault: boolean
      branchId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["printer"]>
    composites: {}
  }

  type PrinterGetPayload<S extends boolean | null | undefined | PrinterDefaultArgs> = $Result.GetResult<Prisma.$PrinterPayload, S>

  type PrinterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrinterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrinterCountAggregateInputType | true
    }

  export interface PrinterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Printer'], meta: { name: 'Printer' } }
    /**
     * Find zero or one Printer that matches the filter.
     * @param {PrinterFindUniqueArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrinterFindUniqueArgs>(args: SelectSubset<T, PrinterFindUniqueArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Printer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrinterFindUniqueOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrinterFindUniqueOrThrowArgs>(args: SelectSubset<T, PrinterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrinterFindFirstArgs>(args?: SelectSubset<T, PrinterFindFirstArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrinterFindFirstOrThrowArgs>(args?: SelectSubset<T, PrinterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Printers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Printers
     * const printers = await prisma.printer.findMany()
     * 
     * // Get first 10 Printers
     * const printers = await prisma.printer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printerWithIdOnly = await prisma.printer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrinterFindManyArgs>(args?: SelectSubset<T, PrinterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Printer.
     * @param {PrinterCreateArgs} args - Arguments to create a Printer.
     * @example
     * // Create one Printer
     * const Printer = await prisma.printer.create({
     *   data: {
     *     // ... data to create a Printer
     *   }
     * })
     * 
     */
    create<T extends PrinterCreateArgs>(args: SelectSubset<T, PrinterCreateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Printers.
     * @param {PrinterCreateManyArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrinterCreateManyArgs>(args?: SelectSubset<T, PrinterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Printers and returns the data saved in the database.
     * @param {PrinterCreateManyAndReturnArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Printers and only return the `id`
     * const printerWithIdOnly = await prisma.printer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrinterCreateManyAndReturnArgs>(args?: SelectSubset<T, PrinterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Printer.
     * @param {PrinterDeleteArgs} args - Arguments to delete one Printer.
     * @example
     * // Delete one Printer
     * const Printer = await prisma.printer.delete({
     *   where: {
     *     // ... filter to delete one Printer
     *   }
     * })
     * 
     */
    delete<T extends PrinterDeleteArgs>(args: SelectSubset<T, PrinterDeleteArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Printer.
     * @param {PrinterUpdateArgs} args - Arguments to update one Printer.
     * @example
     * // Update one Printer
     * const printer = await prisma.printer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrinterUpdateArgs>(args: SelectSubset<T, PrinterUpdateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Printers.
     * @param {PrinterDeleteManyArgs} args - Arguments to filter Printers to delete.
     * @example
     * // Delete a few Printers
     * const { count } = await prisma.printer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrinterDeleteManyArgs>(args?: SelectSubset<T, PrinterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrinterUpdateManyArgs>(args: SelectSubset<T, PrinterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers and returns the data updated in the database.
     * @param {PrinterUpdateManyAndReturnArgs} args - Arguments to update many Printers.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Printers and only return the `id`
     * const printerWithIdOnly = await prisma.printer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrinterUpdateManyAndReturnArgs>(args: SelectSubset<T, PrinterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Printer.
     * @param {PrinterUpsertArgs} args - Arguments to update or create a Printer.
     * @example
     * // Update or create a Printer
     * const printer = await prisma.printer.upsert({
     *   create: {
     *     // ... data to create a Printer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Printer we want to update
     *   }
     * })
     */
    upsert<T extends PrinterUpsertArgs>(args: SelectSubset<T, PrinterUpsertArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterCountArgs} args - Arguments to filter Printers to count.
     * @example
     * // Count the number of Printers
     * const count = await prisma.printer.count({
     *   where: {
     *     // ... the filter for the Printers we want to count
     *   }
     * })
    **/
    count<T extends PrinterCountArgs>(
      args?: Subset<T, PrinterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrinterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrinterAggregateArgs>(args: Subset<T, PrinterAggregateArgs>): Prisma.PrismaPromise<GetPrinterAggregateType<T>>

    /**
     * Group by Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrinterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrinterGroupByArgs['orderBy'] }
        : { orderBy?: PrinterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrinterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Printer model
   */
  readonly fields: PrinterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Printer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrinterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiptUsers<T extends Printer$receiptUsersArgs<ExtArgs> = {}>(args?: Subset<T, Printer$receiptUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kotUsers<T extends Printer$kotUsersArgs<ExtArgs> = {}>(args?: Subset<T, Printer$kotUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Printer model
   */
  interface PrinterFieldRefs {
    readonly id: FieldRef<"Printer", 'String'>
    readonly name: FieldRef<"Printer", 'String'>
    readonly printerName: FieldRef<"Printer", 'String'>
    readonly type: FieldRef<"Printer", 'String'>
    readonly isDefault: FieldRef<"Printer", 'Boolean'>
    readonly branchId: FieldRef<"Printer", 'String'>
    readonly createdAt: FieldRef<"Printer", 'DateTime'>
    readonly updatedAt: FieldRef<"Printer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Printer findUnique
   */
  export type PrinterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findUniqueOrThrow
   */
  export type PrinterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findFirst
   */
  export type PrinterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findFirstOrThrow
   */
  export type PrinterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findMany
   */
  export type PrinterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printers to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer create
   */
  export type PrinterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to create a Printer.
     */
    data: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
  }

  /**
   * Printer createMany
   */
  export type PrinterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Printer createManyAndReturn
   */
  export type PrinterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Printer update
   */
  export type PrinterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to update a Printer.
     */
    data: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
    /**
     * Choose, which Printer to update.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer updateMany
   */
  export type PrinterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
  }

  /**
   * Printer updateManyAndReturn
   */
  export type PrinterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Printer upsert
   */
  export type PrinterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The filter to search for the Printer to update in case it exists.
     */
    where: PrinterWhereUniqueInput
    /**
     * In case the Printer found by the `where` argument doesn't exist, create a new Printer with this data.
     */
    create: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
    /**
     * In case the Printer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
  }

  /**
   * Printer delete
   */
  export type PrinterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter which Printer to delete.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer deleteMany
   */
  export type PrinterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printers to delete
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to delete.
     */
    limit?: number
  }

  /**
   * Printer.receiptUsers
   */
  export type Printer$receiptUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Printer.kotUsers
   */
  export type Printer$kotUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Printer without action
   */
  export type PrinterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
  }


  /**
   * Model Tax
   */

  export type AggregateTax = {
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  export type TaxAvgAggregateOutputType = {
    percentage: number | null
  }

  export type TaxSumAggregateOutputType = {
    percentage: number | null
  }

  export type TaxMinAggregateOutputType = {
    id: string | null
    taxName: string | null
    percentage: number | null
    taxCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxMaxAggregateOutputType = {
    id: string | null
    taxName: string | null
    percentage: number | null
    taxCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxCountAggregateOutputType = {
    id: number
    taxName: number
    percentage: number
    taxCode: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxAvgAggregateInputType = {
    percentage?: true
  }

  export type TaxSumAggregateInputType = {
    percentage?: true
  }

  export type TaxMinAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    taxCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxMaxAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    taxCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxCountAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    taxCode?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tax to aggregate.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxes
    **/
    _count?: true | TaxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxMaxAggregateInputType
  }

  export type GetTaxAggregateType<T extends TaxAggregateArgs> = {
        [P in keyof T & keyof AggregateTax]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTax[P]>
      : GetScalarType<T[P], AggregateTax[P]>
  }




  export type TaxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxWhereInput
    orderBy?: TaxOrderByWithAggregationInput | TaxOrderByWithAggregationInput[]
    by: TaxScalarFieldEnum[] | TaxScalarFieldEnum
    having?: TaxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxCountAggregateInputType | true
    _avg?: TaxAvgAggregateInputType
    _sum?: TaxSumAggregateInputType
    _min?: TaxMinAggregateInputType
    _max?: TaxMaxAggregateInputType
  }

  export type TaxGroupByOutputType = {
    id: string
    taxName: string
    percentage: number
    taxCode: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  type GetTaxGroupByPayload<T extends TaxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxGroupByOutputType[P]>
            : GetScalarType<T[P], TaxGroupByOutputType[P]>
        }
      >
    >


  export type TaxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    taxCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    taxCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    taxCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectScalar = {
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    taxCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taxName" | "percentage" | "taxCode" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tax"]>

  export type $TaxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tax"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taxName: string
      percentage: number
      taxCode: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tax"]>
    composites: {}
  }

  type TaxGetPayload<S extends boolean | null | undefined | TaxDefaultArgs> = $Result.GetResult<Prisma.$TaxPayload, S>

  type TaxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxCountAggregateInputType | true
    }

  export interface TaxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tax'], meta: { name: 'Tax' } }
    /**
     * Find zero or one Tax that matches the filter.
     * @param {TaxFindUniqueArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxFindUniqueArgs>(args: SelectSubset<T, TaxFindUniqueArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tax that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxFindUniqueOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxFindFirstArgs>(args?: SelectSubset<T, TaxFindFirstArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxes
     * const taxes = await prisma.tax.findMany()
     * 
     * // Get first 10 Taxes
     * const taxes = await prisma.tax.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxWithIdOnly = await prisma.tax.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxFindManyArgs>(args?: SelectSubset<T, TaxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tax.
     * @param {TaxCreateArgs} args - Arguments to create a Tax.
     * @example
     * // Create one Tax
     * const Tax = await prisma.tax.create({
     *   data: {
     *     // ... data to create a Tax
     *   }
     * })
     * 
     */
    create<T extends TaxCreateArgs>(args: SelectSubset<T, TaxCreateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxes.
     * @param {TaxCreateManyArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxCreateManyArgs>(args?: SelectSubset<T, TaxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taxes and returns the data saved in the database.
     * @param {TaxCreateManyAndReturnArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tax.
     * @param {TaxDeleteArgs} args - Arguments to delete one Tax.
     * @example
     * // Delete one Tax
     * const Tax = await prisma.tax.delete({
     *   where: {
     *     // ... filter to delete one Tax
     *   }
     * })
     * 
     */
    delete<T extends TaxDeleteArgs>(args: SelectSubset<T, TaxDeleteArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tax.
     * @param {TaxUpdateArgs} args - Arguments to update one Tax.
     * @example
     * // Update one Tax
     * const tax = await prisma.tax.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxUpdateArgs>(args: SelectSubset<T, TaxUpdateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxes.
     * @param {TaxDeleteManyArgs} args - Arguments to filter Taxes to delete.
     * @example
     * // Delete a few Taxes
     * const { count } = await prisma.tax.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxDeleteManyArgs>(args?: SelectSubset<T, TaxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxUpdateManyArgs>(args: SelectSubset<T, TaxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes and returns the data updated in the database.
     * @param {TaxUpdateManyAndReturnArgs} args - Arguments to update many Taxes.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tax.
     * @param {TaxUpsertArgs} args - Arguments to update or create a Tax.
     * @example
     * // Update or create a Tax
     * const tax = await prisma.tax.upsert({
     *   create: {
     *     // ... data to create a Tax
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tax we want to update
     *   }
     * })
     */
    upsert<T extends TaxUpsertArgs>(args: SelectSubset<T, TaxUpsertArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxCountArgs} args - Arguments to filter Taxes to count.
     * @example
     * // Count the number of Taxes
     * const count = await prisma.tax.count({
     *   where: {
     *     // ... the filter for the Taxes we want to count
     *   }
     * })
    **/
    count<T extends TaxCountArgs>(
      args?: Subset<T, TaxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxAggregateArgs>(args: Subset<T, TaxAggregateArgs>): Prisma.PrismaPromise<GetTaxAggregateType<T>>

    /**
     * Group by Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxGroupByArgs['orderBy'] }
        : { orderBy?: TaxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tax model
   */
  readonly fields: TaxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tax.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tax model
   */
  interface TaxFieldRefs {
    readonly id: FieldRef<"Tax", 'String'>
    readonly taxName: FieldRef<"Tax", 'String'>
    readonly percentage: FieldRef<"Tax", 'Float'>
    readonly taxCode: FieldRef<"Tax", 'String'>
    readonly isActive: FieldRef<"Tax", 'Boolean'>
    readonly createdAt: FieldRef<"Tax", 'DateTime'>
    readonly updatedAt: FieldRef<"Tax", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tax findUnique
   */
  export type TaxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findUniqueOrThrow
   */
  export type TaxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findFirst
   */
  export type TaxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findFirstOrThrow
   */
  export type TaxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findMany
   */
  export type TaxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Taxes to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax create
   */
  export type TaxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to create a Tax.
     */
    data: XOR<TaxCreateInput, TaxUncheckedCreateInput>
  }

  /**
   * Tax createMany
   */
  export type TaxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tax createManyAndReturn
   */
  export type TaxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tax update
   */
  export type TaxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to update a Tax.
     */
    data: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
    /**
     * Choose, which Tax to update.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax updateMany
   */
  export type TaxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax updateManyAndReturn
   */
  export type TaxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax upsert
   */
  export type TaxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The filter to search for the Tax to update in case it exists.
     */
    where: TaxWhereUniqueInput
    /**
     * In case the Tax found by the `where` argument doesn't exist, create a new Tax with this data.
     */
    create: XOR<TaxCreateInput, TaxUncheckedCreateInput>
    /**
     * In case the Tax was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
  }

  /**
   * Tax delete
   */
  export type TaxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter which Tax to delete.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax deleteMany
   */
  export type TaxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taxes to delete
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to delete.
     */
    limit?: number
  }

  /**
   * Tax without action
   */
  export type TaxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    price: number | null
    description: string | null
    category: string | null
    isAvailable: boolean | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    price: number | null
    description: string | null
    category: string | null
    isAvailable: boolean | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    code: number
    price: number
    description: number
    category: number
    isAvailable: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    price?: true
    description?: true
    category?: true
    isAvailable?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    price?: true
    description?: true
    category?: true
    isAvailable?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    price?: true
    description?: true
    category?: true
    isAvailable?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    code: string
    price: number
    description: string | null
    category: string
    isAvailable: boolean
    branchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    isAvailable?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    isAvailable?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    isAvailable?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | Product$branchArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    isAvailable?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "price" | "description" | "category" | "isAvailable" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Product$branchArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      price: number
      description: string | null
      category: string
      isAvailable: boolean
      branchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Product$branchArgs<ExtArgs> = {}>(args?: Subset<T, Product$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly isAvailable: FieldRef<"Product", 'Boolean'>
    readonly branchId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.branch
   */
  export type Product$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    subtotal: number | null
    discount: number | null
    taxAmount: number | null
    total: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    subtotal: number | null
    discount: number | null
    taxAmount: number | null
    total: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    invoiceIdTrack: string | null
    branchId: string | null
    clientName: string | null
    clientPhone: string | null
    subtotal: number | null
    discount: number | null
    taxAmount: number | null
    total: number | null
    paymentMode: string | null
    invoiceStatus: string | null
    billedById: string | null
    notes: string | null
    delete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    invoiceIdTrack: string | null
    branchId: string | null
    clientName: string | null
    clientPhone: string | null
    subtotal: number | null
    discount: number | null
    taxAmount: number | null
    total: number | null
    paymentMode: string | null
    invoiceStatus: string | null
    billedById: string | null
    notes: string | null
    delete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceId: number
    invoiceIdTrack: number
    branchId: number
    clientName: number
    clientPhone: number
    subtotal: number
    discount: number
    taxAmount: number
    total: number
    paymentMode: number
    invoiceStatus: number
    billedById: number
    notes: number
    delete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    subtotal?: true
    discount?: true
    taxAmount?: true
    total?: true
  }

  export type InvoiceSumAggregateInputType = {
    subtotal?: true
    discount?: true
    taxAmount?: true
    total?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceId?: true
    invoiceIdTrack?: true
    branchId?: true
    clientName?: true
    clientPhone?: true
    subtotal?: true
    discount?: true
    taxAmount?: true
    total?: true
    paymentMode?: true
    invoiceStatus?: true
    billedById?: true
    notes?: true
    delete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    invoiceIdTrack?: true
    branchId?: true
    clientName?: true
    clientPhone?: true
    subtotal?: true
    discount?: true
    taxAmount?: true
    total?: true
    paymentMode?: true
    invoiceStatus?: true
    billedById?: true
    notes?: true
    delete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceId?: true
    invoiceIdTrack?: true
    branchId?: true
    clientName?: true
    clientPhone?: true
    subtotal?: true
    discount?: true
    taxAmount?: true
    total?: true
    paymentMode?: true
    invoiceStatus?: true
    billedById?: true
    notes?: true
    delete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName: string | null
    clientPhone: string | null
    subtotal: number
    discount: number
    taxAmount: number
    total: number
    paymentMode: string
    invoiceStatus: string
    billedById: string
    notes: string | null
    delete: boolean
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoiceIdTrack?: boolean
    branchId?: boolean
    clientName?: boolean
    clientPhone?: boolean
    subtotal?: boolean
    discount?: boolean
    taxAmount?: boolean
    total?: boolean
    paymentMode?: boolean
    invoiceStatus?: boolean
    billedById?: boolean
    notes?: boolean
    delete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    kots?: boolean | Invoice$kotsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoiceIdTrack?: boolean
    branchId?: boolean
    clientName?: boolean
    clientPhone?: boolean
    subtotal?: boolean
    discount?: boolean
    taxAmount?: boolean
    total?: boolean
    paymentMode?: boolean
    invoiceStatus?: boolean
    billedById?: boolean
    notes?: boolean
    delete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    invoiceIdTrack?: boolean
    branchId?: boolean
    clientName?: boolean
    clientPhone?: boolean
    subtotal?: boolean
    discount?: boolean
    taxAmount?: boolean
    total?: boolean
    paymentMode?: boolean
    invoiceStatus?: boolean
    billedById?: boolean
    notes?: boolean
    delete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    invoiceIdTrack?: boolean
    branchId?: boolean
    clientName?: boolean
    clientPhone?: boolean
    subtotal?: boolean
    discount?: boolean
    taxAmount?: boolean
    total?: boolean
    paymentMode?: boolean
    invoiceStatus?: boolean
    billedById?: boolean
    notes?: boolean
    delete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "invoiceIdTrack" | "branchId" | "clientName" | "clientPhone" | "subtotal" | "discount" | "taxAmount" | "total" | "paymentMode" | "invoiceStatus" | "billedById" | "notes" | "delete" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    kots?: boolean | Invoice$kotsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    billedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      billedBy: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
      kots: Prisma.$KOTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      invoiceIdTrack: string
      branchId: string
      clientName: string | null
      clientPhone: string | null
      subtotal: number
      discount: number
      taxAmount: number
      total: number
      paymentMode: string
      invoiceStatus: string
      billedById: string
      notes: string | null
      delete: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kots<T extends Invoice$kotsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$kotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceId: FieldRef<"Invoice", 'String'>
    readonly invoiceIdTrack: FieldRef<"Invoice", 'String'>
    readonly branchId: FieldRef<"Invoice", 'String'>
    readonly clientName: FieldRef<"Invoice", 'String'>
    readonly clientPhone: FieldRef<"Invoice", 'String'>
    readonly subtotal: FieldRef<"Invoice", 'Float'>
    readonly discount: FieldRef<"Invoice", 'Float'>
    readonly taxAmount: FieldRef<"Invoice", 'Float'>
    readonly total: FieldRef<"Invoice", 'Float'>
    readonly paymentMode: FieldRef<"Invoice", 'String'>
    readonly invoiceStatus: FieldRef<"Invoice", 'String'>
    readonly billedById: FieldRef<"Invoice", 'String'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly delete: FieldRef<"Invoice", 'Boolean'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice.kots
   */
  export type Invoice$kotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    where?: KOTWhereInput
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    cursor?: KOTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KOTScalarFieldEnum | KOTScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    total: number | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    name: string | null
    price: number | null
    quantity: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    productId: number
    name: number
    price: number
    quantity: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    price?: true
    quantity?: true
    total?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    price?: true
    quantity?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    productId: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt: Date
    updatedAt: Date
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    quantity?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "productId" | "name" | "price" | "quantity" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["invoiceItem"]>
  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      productId: string | null
      name: string
      price: number
      quantity: number
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceItem model
   */
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
    readonly productId: FieldRef<"InvoiceItem", 'String'>
    readonly name: FieldRef<"InvoiceItem", 'String'>
    readonly price: FieldRef<"InvoiceItem", 'Float'>
    readonly quantity: FieldRef<"InvoiceItem", 'Int'>
    readonly total: FieldRef<"InvoiceItem", 'Float'>
    readonly createdAt: FieldRef<"InvoiceItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InvoiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItem updateManyAndReturn
   */
  export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model KOT
   */

  export type AggregateKOT = {
    _count: KOTCountAggregateOutputType | null
    _min: KOTMinAggregateOutputType | null
    _max: KOTMaxAggregateOutputType | null
  }

  export type KOTMinAggregateOutputType = {
    id: string | null
    kotNo: string | null
    branchId: string | null
    tableNo: string | null
    status: string | null
    invoiceId: string | null
    invoiceMongoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KOTMaxAggregateOutputType = {
    id: string | null
    kotNo: string | null
    branchId: string | null
    tableNo: string | null
    status: string | null
    invoiceId: string | null
    invoiceMongoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KOTCountAggregateOutputType = {
    id: number
    kotNo: number
    branchId: number
    tableNo: number
    status: number
    invoiceId: number
    invoiceMongoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KOTMinAggregateInputType = {
    id?: true
    kotNo?: true
    branchId?: true
    tableNo?: true
    status?: true
    invoiceId?: true
    invoiceMongoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KOTMaxAggregateInputType = {
    id?: true
    kotNo?: true
    branchId?: true
    tableNo?: true
    status?: true
    invoiceId?: true
    invoiceMongoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KOTCountAggregateInputType = {
    id?: true
    kotNo?: true
    branchId?: true
    tableNo?: true
    status?: true
    invoiceId?: true
    invoiceMongoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KOTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KOT to aggregate.
     */
    where?: KOTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTS to fetch.
     */
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KOTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KOTS
    **/
    _count?: true | KOTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KOTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KOTMaxAggregateInputType
  }

  export type GetKOTAggregateType<T extends KOTAggregateArgs> = {
        [P in keyof T & keyof AggregateKOT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKOT[P]>
      : GetScalarType<T[P], AggregateKOT[P]>
  }




  export type KOTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KOTWhereInput
    orderBy?: KOTOrderByWithAggregationInput | KOTOrderByWithAggregationInput[]
    by: KOTScalarFieldEnum[] | KOTScalarFieldEnum
    having?: KOTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KOTCountAggregateInputType | true
    _min?: KOTMinAggregateInputType
    _max?: KOTMaxAggregateInputType
  }

  export type KOTGroupByOutputType = {
    id: string
    kotNo: string
    branchId: string
    tableNo: string
    status: string
    invoiceId: string | null
    invoiceMongoId: string | null
    createdAt: Date
    updatedAt: Date
    _count: KOTCountAggregateOutputType | null
    _min: KOTMinAggregateOutputType | null
    _max: KOTMaxAggregateOutputType | null
  }

  type GetKOTGroupByPayload<T extends KOTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KOTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KOTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KOTGroupByOutputType[P]>
            : GetScalarType<T[P], KOTGroupByOutputType[P]>
        }
      >
    >


  export type KOTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotNo?: boolean
    branchId?: boolean
    tableNo?: boolean
    status?: boolean
    invoiceId?: boolean
    invoiceMongoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
    items?: boolean | KOT$itemsArgs<ExtArgs>
    _count?: boolean | KOTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kOT"]>

  export type KOTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotNo?: boolean
    branchId?: boolean
    tableNo?: boolean
    status?: boolean
    invoiceId?: boolean
    invoiceMongoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["kOT"]>

  export type KOTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotNo?: boolean
    branchId?: boolean
    tableNo?: boolean
    status?: boolean
    invoiceId?: boolean
    invoiceMongoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["kOT"]>

  export type KOTSelectScalar = {
    id?: boolean
    kotNo?: boolean
    branchId?: boolean
    tableNo?: boolean
    status?: boolean
    invoiceId?: boolean
    invoiceMongoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KOTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kotNo" | "branchId" | "tableNo" | "status" | "invoiceId" | "invoiceMongoId" | "createdAt" | "updatedAt", ExtArgs["result"]["kOT"]>
  export type KOTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
    items?: boolean | KOT$itemsArgs<ExtArgs>
    _count?: boolean | KOTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KOTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
  }
  export type KOTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    invoice?: boolean | KOT$invoiceArgs<ExtArgs>
  }

  export type $KOTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KOT"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
      items: Prisma.$KOTItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kotNo: string
      branchId: string
      tableNo: string
      status: string
      invoiceId: string | null
      invoiceMongoId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kOT"]>
    composites: {}
  }

  type KOTGetPayload<S extends boolean | null | undefined | KOTDefaultArgs> = $Result.GetResult<Prisma.$KOTPayload, S>

  type KOTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KOTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KOTCountAggregateInputType | true
    }

  export interface KOTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KOT'], meta: { name: 'KOT' } }
    /**
     * Find zero or one KOT that matches the filter.
     * @param {KOTFindUniqueArgs} args - Arguments to find a KOT
     * @example
     * // Get one KOT
     * const kOT = await prisma.kOT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KOTFindUniqueArgs>(args: SelectSubset<T, KOTFindUniqueArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KOT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KOTFindUniqueOrThrowArgs} args - Arguments to find a KOT
     * @example
     * // Get one KOT
     * const kOT = await prisma.kOT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KOTFindUniqueOrThrowArgs>(args: SelectSubset<T, KOTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KOT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTFindFirstArgs} args - Arguments to find a KOT
     * @example
     * // Get one KOT
     * const kOT = await prisma.kOT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KOTFindFirstArgs>(args?: SelectSubset<T, KOTFindFirstArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KOT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTFindFirstOrThrowArgs} args - Arguments to find a KOT
     * @example
     * // Get one KOT
     * const kOT = await prisma.kOT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KOTFindFirstOrThrowArgs>(args?: SelectSubset<T, KOTFindFirstOrThrowArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KOTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KOTS
     * const kOTS = await prisma.kOT.findMany()
     * 
     * // Get first 10 KOTS
     * const kOTS = await prisma.kOT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kOTWithIdOnly = await prisma.kOT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KOTFindManyArgs>(args?: SelectSubset<T, KOTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KOT.
     * @param {KOTCreateArgs} args - Arguments to create a KOT.
     * @example
     * // Create one KOT
     * const KOT = await prisma.kOT.create({
     *   data: {
     *     // ... data to create a KOT
     *   }
     * })
     * 
     */
    create<T extends KOTCreateArgs>(args: SelectSubset<T, KOTCreateArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KOTS.
     * @param {KOTCreateManyArgs} args - Arguments to create many KOTS.
     * @example
     * // Create many KOTS
     * const kOT = await prisma.kOT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KOTCreateManyArgs>(args?: SelectSubset<T, KOTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KOTS and returns the data saved in the database.
     * @param {KOTCreateManyAndReturnArgs} args - Arguments to create many KOTS.
     * @example
     * // Create many KOTS
     * const kOT = await prisma.kOT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KOTS and only return the `id`
     * const kOTWithIdOnly = await prisma.kOT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KOTCreateManyAndReturnArgs>(args?: SelectSubset<T, KOTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KOT.
     * @param {KOTDeleteArgs} args - Arguments to delete one KOT.
     * @example
     * // Delete one KOT
     * const KOT = await prisma.kOT.delete({
     *   where: {
     *     // ... filter to delete one KOT
     *   }
     * })
     * 
     */
    delete<T extends KOTDeleteArgs>(args: SelectSubset<T, KOTDeleteArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KOT.
     * @param {KOTUpdateArgs} args - Arguments to update one KOT.
     * @example
     * // Update one KOT
     * const kOT = await prisma.kOT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KOTUpdateArgs>(args: SelectSubset<T, KOTUpdateArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KOTS.
     * @param {KOTDeleteManyArgs} args - Arguments to filter KOTS to delete.
     * @example
     * // Delete a few KOTS
     * const { count } = await prisma.kOT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KOTDeleteManyArgs>(args?: SelectSubset<T, KOTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KOTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KOTS
     * const kOT = await prisma.kOT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KOTUpdateManyArgs>(args: SelectSubset<T, KOTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KOTS and returns the data updated in the database.
     * @param {KOTUpdateManyAndReturnArgs} args - Arguments to update many KOTS.
     * @example
     * // Update many KOTS
     * const kOT = await prisma.kOT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KOTS and only return the `id`
     * const kOTWithIdOnly = await prisma.kOT.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KOTUpdateManyAndReturnArgs>(args: SelectSubset<T, KOTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KOT.
     * @param {KOTUpsertArgs} args - Arguments to update or create a KOT.
     * @example
     * // Update or create a KOT
     * const kOT = await prisma.kOT.upsert({
     *   create: {
     *     // ... data to create a KOT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KOT we want to update
     *   }
     * })
     */
    upsert<T extends KOTUpsertArgs>(args: SelectSubset<T, KOTUpsertArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KOTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTCountArgs} args - Arguments to filter KOTS to count.
     * @example
     * // Count the number of KOTS
     * const count = await prisma.kOT.count({
     *   where: {
     *     // ... the filter for the KOTS we want to count
     *   }
     * })
    **/
    count<T extends KOTCountArgs>(
      args?: Subset<T, KOTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KOTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KOT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KOTAggregateArgs>(args: Subset<T, KOTAggregateArgs>): Prisma.PrismaPromise<GetKOTAggregateType<T>>

    /**
     * Group by KOT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KOTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KOTGroupByArgs['orderBy'] }
        : { orderBy?: KOTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KOTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKOTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KOT model
   */
  readonly fields: KOTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KOT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KOTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends KOT$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, KOT$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends KOT$itemsArgs<ExtArgs> = {}>(args?: Subset<T, KOT$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KOT model
   */
  interface KOTFieldRefs {
    readonly id: FieldRef<"KOT", 'String'>
    readonly kotNo: FieldRef<"KOT", 'String'>
    readonly branchId: FieldRef<"KOT", 'String'>
    readonly tableNo: FieldRef<"KOT", 'String'>
    readonly status: FieldRef<"KOT", 'String'>
    readonly invoiceId: FieldRef<"KOT", 'String'>
    readonly invoiceMongoId: FieldRef<"KOT", 'String'>
    readonly createdAt: FieldRef<"KOT", 'DateTime'>
    readonly updatedAt: FieldRef<"KOT", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KOT findUnique
   */
  export type KOTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter, which KOT to fetch.
     */
    where: KOTWhereUniqueInput
  }

  /**
   * KOT findUniqueOrThrow
   */
  export type KOTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter, which KOT to fetch.
     */
    where: KOTWhereUniqueInput
  }

  /**
   * KOT findFirst
   */
  export type KOTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter, which KOT to fetch.
     */
    where?: KOTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTS to fetch.
     */
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KOTS.
     */
    cursor?: KOTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KOTS.
     */
    distinct?: KOTScalarFieldEnum | KOTScalarFieldEnum[]
  }

  /**
   * KOT findFirstOrThrow
   */
  export type KOTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter, which KOT to fetch.
     */
    where?: KOTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTS to fetch.
     */
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KOTS.
     */
    cursor?: KOTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KOTS.
     */
    distinct?: KOTScalarFieldEnum | KOTScalarFieldEnum[]
  }

  /**
   * KOT findMany
   */
  export type KOTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter, which KOTS to fetch.
     */
    where?: KOTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTS to fetch.
     */
    orderBy?: KOTOrderByWithRelationInput | KOTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KOTS.
     */
    cursor?: KOTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTS.
     */
    skip?: number
    distinct?: KOTScalarFieldEnum | KOTScalarFieldEnum[]
  }

  /**
   * KOT create
   */
  export type KOTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * The data needed to create a KOT.
     */
    data: XOR<KOTCreateInput, KOTUncheckedCreateInput>
  }

  /**
   * KOT createMany
   */
  export type KOTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KOTS.
     */
    data: KOTCreateManyInput | KOTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KOT createManyAndReturn
   */
  export type KOTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * The data used to create many KOTS.
     */
    data: KOTCreateManyInput | KOTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KOT update
   */
  export type KOTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * The data needed to update a KOT.
     */
    data: XOR<KOTUpdateInput, KOTUncheckedUpdateInput>
    /**
     * Choose, which KOT to update.
     */
    where: KOTWhereUniqueInput
  }

  /**
   * KOT updateMany
   */
  export type KOTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KOTS.
     */
    data: XOR<KOTUpdateManyMutationInput, KOTUncheckedUpdateManyInput>
    /**
     * Filter which KOTS to update
     */
    where?: KOTWhereInput
    /**
     * Limit how many KOTS to update.
     */
    limit?: number
  }

  /**
   * KOT updateManyAndReturn
   */
  export type KOTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * The data used to update KOTS.
     */
    data: XOR<KOTUpdateManyMutationInput, KOTUncheckedUpdateManyInput>
    /**
     * Filter which KOTS to update
     */
    where?: KOTWhereInput
    /**
     * Limit how many KOTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KOT upsert
   */
  export type KOTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * The filter to search for the KOT to update in case it exists.
     */
    where: KOTWhereUniqueInput
    /**
     * In case the KOT found by the `where` argument doesn't exist, create a new KOT with this data.
     */
    create: XOR<KOTCreateInput, KOTUncheckedCreateInput>
    /**
     * In case the KOT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KOTUpdateInput, KOTUncheckedUpdateInput>
  }

  /**
   * KOT delete
   */
  export type KOTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
    /**
     * Filter which KOT to delete.
     */
    where: KOTWhereUniqueInput
  }

  /**
   * KOT deleteMany
   */
  export type KOTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KOTS to delete
     */
    where?: KOTWhereInput
    /**
     * Limit how many KOTS to delete.
     */
    limit?: number
  }

  /**
   * KOT.invoice
   */
  export type KOT$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * KOT.items
   */
  export type KOT$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    where?: KOTItemWhereInput
    orderBy?: KOTItemOrderByWithRelationInput | KOTItemOrderByWithRelationInput[]
    cursor?: KOTItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KOTItemScalarFieldEnum | KOTItemScalarFieldEnum[]
  }

  /**
   * KOT without action
   */
  export type KOTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOT
     */
    select?: KOTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOT
     */
    omit?: KOTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTInclude<ExtArgs> | null
  }


  /**
   * Model KOTItem
   */

  export type AggregateKOTItem = {
    _count: KOTItemCountAggregateOutputType | null
    _avg: KOTItemAvgAggregateOutputType | null
    _sum: KOTItemSumAggregateOutputType | null
    _min: KOTItemMinAggregateOutputType | null
    _max: KOTItemMaxAggregateOutputType | null
  }

  export type KOTItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type KOTItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type KOTItemMinAggregateOutputType = {
    id: string | null
    kotId: string | null
    productId: string | null
    name: string | null
    quantity: number | null
    notes: string | null
    kot_completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KOTItemMaxAggregateOutputType = {
    id: string | null
    kotId: string | null
    productId: string | null
    name: string | null
    quantity: number | null
    notes: string | null
    kot_completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KOTItemCountAggregateOutputType = {
    id: number
    kotId: number
    productId: number
    name: number
    quantity: number
    notes: number
    kot_completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KOTItemAvgAggregateInputType = {
    quantity?: true
  }

  export type KOTItemSumAggregateInputType = {
    quantity?: true
  }

  export type KOTItemMinAggregateInputType = {
    id?: true
    kotId?: true
    productId?: true
    name?: true
    quantity?: true
    notes?: true
    kot_completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KOTItemMaxAggregateInputType = {
    id?: true
    kotId?: true
    productId?: true
    name?: true
    quantity?: true
    notes?: true
    kot_completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KOTItemCountAggregateInputType = {
    id?: true
    kotId?: true
    productId?: true
    name?: true
    quantity?: true
    notes?: true
    kot_completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KOTItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KOTItem to aggregate.
     */
    where?: KOTItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTItems to fetch.
     */
    orderBy?: KOTItemOrderByWithRelationInput | KOTItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KOTItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KOTItems
    **/
    _count?: true | KOTItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KOTItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KOTItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KOTItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KOTItemMaxAggregateInputType
  }

  export type GetKOTItemAggregateType<T extends KOTItemAggregateArgs> = {
        [P in keyof T & keyof AggregateKOTItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKOTItem[P]>
      : GetScalarType<T[P], AggregateKOTItem[P]>
  }




  export type KOTItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KOTItemWhereInput
    orderBy?: KOTItemOrderByWithAggregationInput | KOTItemOrderByWithAggregationInput[]
    by: KOTItemScalarFieldEnum[] | KOTItemScalarFieldEnum
    having?: KOTItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KOTItemCountAggregateInputType | true
    _avg?: KOTItemAvgAggregateInputType
    _sum?: KOTItemSumAggregateInputType
    _min?: KOTItemMinAggregateInputType
    _max?: KOTItemMaxAggregateInputType
  }

  export type KOTItemGroupByOutputType = {
    id: string
    kotId: string
    productId: string | null
    name: string
    quantity: number
    notes: string | null
    kot_completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: KOTItemCountAggregateOutputType | null
    _avg: KOTItemAvgAggregateOutputType | null
    _sum: KOTItemSumAggregateOutputType | null
    _min: KOTItemMinAggregateOutputType | null
    _max: KOTItemMaxAggregateOutputType | null
  }

  type GetKOTItemGroupByPayload<T extends KOTItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KOTItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KOTItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KOTItemGroupByOutputType[P]>
            : GetScalarType<T[P], KOTItemGroupByOutputType[P]>
        }
      >
    >


  export type KOTItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotId?: boolean
    productId?: boolean
    name?: boolean
    quantity?: boolean
    notes?: boolean
    kot_completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kOTItem"]>

  export type KOTItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotId?: boolean
    productId?: boolean
    name?: boolean
    quantity?: boolean
    notes?: boolean
    kot_completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kOTItem"]>

  export type KOTItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kotId?: boolean
    productId?: boolean
    name?: boolean
    quantity?: boolean
    notes?: boolean
    kot_completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kOTItem"]>

  export type KOTItemSelectScalar = {
    id?: boolean
    kotId?: boolean
    productId?: boolean
    name?: boolean
    quantity?: boolean
    notes?: boolean
    kot_completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KOTItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kotId" | "productId" | "name" | "quantity" | "notes" | "kot_completed" | "createdAt" | "updatedAt", ExtArgs["result"]["kOTItem"]>
  export type KOTItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }
  export type KOTItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }
  export type KOTItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kot?: boolean | KOTDefaultArgs<ExtArgs>
  }

  export type $KOTItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KOTItem"
    objects: {
      kot: Prisma.$KOTPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kotId: string
      productId: string | null
      name: string
      quantity: number
      notes: string | null
      kot_completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kOTItem"]>
    composites: {}
  }

  type KOTItemGetPayload<S extends boolean | null | undefined | KOTItemDefaultArgs> = $Result.GetResult<Prisma.$KOTItemPayload, S>

  type KOTItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KOTItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KOTItemCountAggregateInputType | true
    }

  export interface KOTItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KOTItem'], meta: { name: 'KOTItem' } }
    /**
     * Find zero or one KOTItem that matches the filter.
     * @param {KOTItemFindUniqueArgs} args - Arguments to find a KOTItem
     * @example
     * // Get one KOTItem
     * const kOTItem = await prisma.kOTItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KOTItemFindUniqueArgs>(args: SelectSubset<T, KOTItemFindUniqueArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KOTItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KOTItemFindUniqueOrThrowArgs} args - Arguments to find a KOTItem
     * @example
     * // Get one KOTItem
     * const kOTItem = await prisma.kOTItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KOTItemFindUniqueOrThrowArgs>(args: SelectSubset<T, KOTItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KOTItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemFindFirstArgs} args - Arguments to find a KOTItem
     * @example
     * // Get one KOTItem
     * const kOTItem = await prisma.kOTItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KOTItemFindFirstArgs>(args?: SelectSubset<T, KOTItemFindFirstArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KOTItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemFindFirstOrThrowArgs} args - Arguments to find a KOTItem
     * @example
     * // Get one KOTItem
     * const kOTItem = await prisma.kOTItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KOTItemFindFirstOrThrowArgs>(args?: SelectSubset<T, KOTItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KOTItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KOTItems
     * const kOTItems = await prisma.kOTItem.findMany()
     * 
     * // Get first 10 KOTItems
     * const kOTItems = await prisma.kOTItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kOTItemWithIdOnly = await prisma.kOTItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KOTItemFindManyArgs>(args?: SelectSubset<T, KOTItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KOTItem.
     * @param {KOTItemCreateArgs} args - Arguments to create a KOTItem.
     * @example
     * // Create one KOTItem
     * const KOTItem = await prisma.kOTItem.create({
     *   data: {
     *     // ... data to create a KOTItem
     *   }
     * })
     * 
     */
    create<T extends KOTItemCreateArgs>(args: SelectSubset<T, KOTItemCreateArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KOTItems.
     * @param {KOTItemCreateManyArgs} args - Arguments to create many KOTItems.
     * @example
     * // Create many KOTItems
     * const kOTItem = await prisma.kOTItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KOTItemCreateManyArgs>(args?: SelectSubset<T, KOTItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KOTItems and returns the data saved in the database.
     * @param {KOTItemCreateManyAndReturnArgs} args - Arguments to create many KOTItems.
     * @example
     * // Create many KOTItems
     * const kOTItem = await prisma.kOTItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KOTItems and only return the `id`
     * const kOTItemWithIdOnly = await prisma.kOTItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KOTItemCreateManyAndReturnArgs>(args?: SelectSubset<T, KOTItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KOTItem.
     * @param {KOTItemDeleteArgs} args - Arguments to delete one KOTItem.
     * @example
     * // Delete one KOTItem
     * const KOTItem = await prisma.kOTItem.delete({
     *   where: {
     *     // ... filter to delete one KOTItem
     *   }
     * })
     * 
     */
    delete<T extends KOTItemDeleteArgs>(args: SelectSubset<T, KOTItemDeleteArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KOTItem.
     * @param {KOTItemUpdateArgs} args - Arguments to update one KOTItem.
     * @example
     * // Update one KOTItem
     * const kOTItem = await prisma.kOTItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KOTItemUpdateArgs>(args: SelectSubset<T, KOTItemUpdateArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KOTItems.
     * @param {KOTItemDeleteManyArgs} args - Arguments to filter KOTItems to delete.
     * @example
     * // Delete a few KOTItems
     * const { count } = await prisma.kOTItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KOTItemDeleteManyArgs>(args?: SelectSubset<T, KOTItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KOTItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KOTItems
     * const kOTItem = await prisma.kOTItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KOTItemUpdateManyArgs>(args: SelectSubset<T, KOTItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KOTItems and returns the data updated in the database.
     * @param {KOTItemUpdateManyAndReturnArgs} args - Arguments to update many KOTItems.
     * @example
     * // Update many KOTItems
     * const kOTItem = await prisma.kOTItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KOTItems and only return the `id`
     * const kOTItemWithIdOnly = await prisma.kOTItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KOTItemUpdateManyAndReturnArgs>(args: SelectSubset<T, KOTItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KOTItem.
     * @param {KOTItemUpsertArgs} args - Arguments to update or create a KOTItem.
     * @example
     * // Update or create a KOTItem
     * const kOTItem = await prisma.kOTItem.upsert({
     *   create: {
     *     // ... data to create a KOTItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KOTItem we want to update
     *   }
     * })
     */
    upsert<T extends KOTItemUpsertArgs>(args: SelectSubset<T, KOTItemUpsertArgs<ExtArgs>>): Prisma__KOTItemClient<$Result.GetResult<Prisma.$KOTItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KOTItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemCountArgs} args - Arguments to filter KOTItems to count.
     * @example
     * // Count the number of KOTItems
     * const count = await prisma.kOTItem.count({
     *   where: {
     *     // ... the filter for the KOTItems we want to count
     *   }
     * })
    **/
    count<T extends KOTItemCountArgs>(
      args?: Subset<T, KOTItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KOTItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KOTItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KOTItemAggregateArgs>(args: Subset<T, KOTItemAggregateArgs>): Prisma.PrismaPromise<GetKOTItemAggregateType<T>>

    /**
     * Group by KOTItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KOTItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KOTItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KOTItemGroupByArgs['orderBy'] }
        : { orderBy?: KOTItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KOTItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKOTItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KOTItem model
   */
  readonly fields: KOTItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KOTItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KOTItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kot<T extends KOTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KOTDefaultArgs<ExtArgs>>): Prisma__KOTClient<$Result.GetResult<Prisma.$KOTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KOTItem model
   */
  interface KOTItemFieldRefs {
    readonly id: FieldRef<"KOTItem", 'String'>
    readonly kotId: FieldRef<"KOTItem", 'String'>
    readonly productId: FieldRef<"KOTItem", 'String'>
    readonly name: FieldRef<"KOTItem", 'String'>
    readonly quantity: FieldRef<"KOTItem", 'Int'>
    readonly notes: FieldRef<"KOTItem", 'String'>
    readonly kot_completed: FieldRef<"KOTItem", 'Boolean'>
    readonly createdAt: FieldRef<"KOTItem", 'DateTime'>
    readonly updatedAt: FieldRef<"KOTItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KOTItem findUnique
   */
  export type KOTItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter, which KOTItem to fetch.
     */
    where: KOTItemWhereUniqueInput
  }

  /**
   * KOTItem findUniqueOrThrow
   */
  export type KOTItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter, which KOTItem to fetch.
     */
    where: KOTItemWhereUniqueInput
  }

  /**
   * KOTItem findFirst
   */
  export type KOTItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter, which KOTItem to fetch.
     */
    where?: KOTItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTItems to fetch.
     */
    orderBy?: KOTItemOrderByWithRelationInput | KOTItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KOTItems.
     */
    cursor?: KOTItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KOTItems.
     */
    distinct?: KOTItemScalarFieldEnum | KOTItemScalarFieldEnum[]
  }

  /**
   * KOTItem findFirstOrThrow
   */
  export type KOTItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter, which KOTItem to fetch.
     */
    where?: KOTItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTItems to fetch.
     */
    orderBy?: KOTItemOrderByWithRelationInput | KOTItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KOTItems.
     */
    cursor?: KOTItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KOTItems.
     */
    distinct?: KOTItemScalarFieldEnum | KOTItemScalarFieldEnum[]
  }

  /**
   * KOTItem findMany
   */
  export type KOTItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter, which KOTItems to fetch.
     */
    where?: KOTItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KOTItems to fetch.
     */
    orderBy?: KOTItemOrderByWithRelationInput | KOTItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KOTItems.
     */
    cursor?: KOTItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KOTItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KOTItems.
     */
    skip?: number
    distinct?: KOTItemScalarFieldEnum | KOTItemScalarFieldEnum[]
  }

  /**
   * KOTItem create
   */
  export type KOTItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * The data needed to create a KOTItem.
     */
    data: XOR<KOTItemCreateInput, KOTItemUncheckedCreateInput>
  }

  /**
   * KOTItem createMany
   */
  export type KOTItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KOTItems.
     */
    data: KOTItemCreateManyInput | KOTItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KOTItem createManyAndReturn
   */
  export type KOTItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * The data used to create many KOTItems.
     */
    data: KOTItemCreateManyInput | KOTItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KOTItem update
   */
  export type KOTItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * The data needed to update a KOTItem.
     */
    data: XOR<KOTItemUpdateInput, KOTItemUncheckedUpdateInput>
    /**
     * Choose, which KOTItem to update.
     */
    where: KOTItemWhereUniqueInput
  }

  /**
   * KOTItem updateMany
   */
  export type KOTItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KOTItems.
     */
    data: XOR<KOTItemUpdateManyMutationInput, KOTItemUncheckedUpdateManyInput>
    /**
     * Filter which KOTItems to update
     */
    where?: KOTItemWhereInput
    /**
     * Limit how many KOTItems to update.
     */
    limit?: number
  }

  /**
   * KOTItem updateManyAndReturn
   */
  export type KOTItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * The data used to update KOTItems.
     */
    data: XOR<KOTItemUpdateManyMutationInput, KOTItemUncheckedUpdateManyInput>
    /**
     * Filter which KOTItems to update
     */
    where?: KOTItemWhereInput
    /**
     * Limit how many KOTItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KOTItem upsert
   */
  export type KOTItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * The filter to search for the KOTItem to update in case it exists.
     */
    where: KOTItemWhereUniqueInput
    /**
     * In case the KOTItem found by the `where` argument doesn't exist, create a new KOTItem with this data.
     */
    create: XOR<KOTItemCreateInput, KOTItemUncheckedCreateInput>
    /**
     * In case the KOTItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KOTItemUpdateInput, KOTItemUncheckedUpdateInput>
  }

  /**
   * KOTItem delete
   */
  export type KOTItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
    /**
     * Filter which KOTItem to delete.
     */
    where: KOTItemWhereUniqueInput
  }

  /**
   * KOTItem deleteMany
   */
  export type KOTItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KOTItems to delete
     */
    where?: KOTItemWhereInput
    /**
     * Limit how many KOTItems to delete.
     */
    limit?: number
  }

  /**
   * KOTItem without action
   */
  export type KOTItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KOTItem
     */
    select?: KOTItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KOTItem
     */
    omit?: KOTItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KOTItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    email: 'email',
    phone: 'phone',
    website: 'website',
    VATNumber: 'VATNumber',
    logoUrl: 'logoUrl',
    description: 'description',
    currencyName: 'currencyName',
    currencyCode: 'currencyCode',
    currencySymbol: 'currencySymbol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    zipCode: 'zipCode',
    email: 'email',
    phone: 'phone',
    invoiceSequence: 'invoiceSequence',
    kotSequence: 'kotSequence',
    active: 'active',
    printerName: 'printerName',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    branchId: 'branchId',
    phone: 'phone',
    isActive: 'isActive',
    department: 'department',
    designation: 'designation',
    receiptPrinterId: 'receiptPrinterId',
    kotPrinterId: 'kotPrinterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PrinterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    printerName: 'printerName',
    type: 'type',
    isDefault: 'isDefault',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrinterScalarFieldEnum = (typeof PrinterScalarFieldEnum)[keyof typeof PrinterScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TaxScalarFieldEnum: {
    id: 'id',
    taxName: 'taxName',
    percentage: 'percentage',
    taxCode: 'taxCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxScalarFieldEnum = (typeof TaxScalarFieldEnum)[keyof typeof TaxScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    price: 'price',
    description: 'description',
    category: 'category',
    isAvailable: 'isAvailable',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    invoiceIdTrack: 'invoiceIdTrack',
    branchId: 'branchId',
    clientName: 'clientName',
    clientPhone: 'clientPhone',
    subtotal: 'subtotal',
    discount: 'discount',
    taxAmount: 'taxAmount',
    total: 'total',
    paymentMode: 'paymentMode',
    invoiceStatus: 'invoiceStatus',
    billedById: 'billedById',
    notes: 'notes',
    delete: 'delete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    productId: 'productId',
    name: 'name',
    price: 'price',
    quantity: 'quantity',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const KOTScalarFieldEnum: {
    id: 'id',
    kotNo: 'kotNo',
    branchId: 'branchId',
    tableNo: 'tableNo',
    status: 'status',
    invoiceId: 'invoiceId',
    invoiceMongoId: 'invoiceMongoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KOTScalarFieldEnum = (typeof KOTScalarFieldEnum)[keyof typeof KOTScalarFieldEnum]


  export const KOTItemScalarFieldEnum: {
    id: 'id',
    kotId: 'kotId',
    productId: 'productId',
    name: 'name',
    quantity: 'quantity',
    notes: 'notes',
    kot_completed: 'kot_completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KOTItemScalarFieldEnum = (typeof KOTItemScalarFieldEnum)[keyof typeof KOTItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    street?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    state?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    zipCode?: StringFilter<"Company"> | string
    email?: StringNullableFilter<"Company"> | string | null
    phone?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    VATNumber?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    currencyName?: StringFilter<"Company"> | string
    currencyCode?: StringFilter<"Company"> | string
    currencySymbol?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    branches?: BranchListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    VATNumber?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    currencyName?: SortOrder
    currencyCode?: SortOrder
    currencySymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branches?: BranchOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    street?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    state?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    zipCode?: StringFilter<"Company"> | string
    email?: StringNullableFilter<"Company"> | string | null
    phone?: StringFilter<"Company"> | string
    website?: StringNullableFilter<"Company"> | string | null
    VATNumber?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    currencyName?: StringFilter<"Company"> | string
    currencyCode?: StringFilter<"Company"> | string
    currencySymbol?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    branches?: BranchListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    website?: SortOrderInput | SortOrder
    VATNumber?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    currencyName?: SortOrder
    currencyCode?: SortOrder
    currencySymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    street?: StringWithAggregatesFilter<"Company"> | string
    city?: StringWithAggregatesFilter<"Company"> | string
    state?: StringWithAggregatesFilter<"Company"> | string
    country?: StringWithAggregatesFilter<"Company"> | string
    zipCode?: StringWithAggregatesFilter<"Company"> | string
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringWithAggregatesFilter<"Company"> | string
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    VATNumber?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    currencyName?: StringWithAggregatesFilter<"Company"> | string
    currencyCode?: StringWithAggregatesFilter<"Company"> | string
    currencySymbol?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    street?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringFilter<"Branch"> | string
    country?: StringFilter<"Branch"> | string
    zipCode?: StringFilter<"Branch"> | string
    email?: StringNullableFilter<"Branch"> | string | null
    phone?: StringFilter<"Branch"> | string
    invoiceSequence?: IntFilter<"Branch"> | number
    kotSequence?: IntFilter<"Branch"> | number
    active?: BoolFilter<"Branch"> | boolean
    printerName?: StringNullableFilter<"Branch"> | string | null
    companyId?: StringNullableFilter<"Branch"> | string | null
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    invoices?: InvoiceListRelationFilter
    kots?: KOTListRelationFilter
    printers?: PrinterListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
    active?: SortOrder
    printerName?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    kots?: KOTOrderByRelationAggregateInput
    printers?: PrinterOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    street?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringFilter<"Branch"> | string
    country?: StringFilter<"Branch"> | string
    zipCode?: StringFilter<"Branch"> | string
    email?: StringNullableFilter<"Branch"> | string | null
    phone?: StringFilter<"Branch"> | string
    invoiceSequence?: IntFilter<"Branch"> | number
    kotSequence?: IntFilter<"Branch"> | number
    active?: BoolFilter<"Branch"> | boolean
    printerName?: StringNullableFilter<"Branch"> | string | null
    companyId?: StringNullableFilter<"Branch"> | string | null
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    invoices?: InvoiceListRelationFilter
    kots?: KOTListRelationFilter
    printers?: PrinterListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
    active?: SortOrder
    printerName?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    street?: StringWithAggregatesFilter<"Branch"> | string
    city?: StringWithAggregatesFilter<"Branch"> | string
    state?: StringWithAggregatesFilter<"Branch"> | string
    country?: StringWithAggregatesFilter<"Branch"> | string
    zipCode?: StringWithAggregatesFilter<"Branch"> | string
    email?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    phone?: StringWithAggregatesFilter<"Branch"> | string
    invoiceSequence?: IntWithAggregatesFilter<"Branch"> | number
    kotSequence?: IntWithAggregatesFilter<"Branch"> | number
    active?: BoolWithAggregatesFilter<"Branch"> | boolean
    printerName?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    department?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    receiptPrinterId?: StringNullableFilter<"User"> | string | null
    kotPrinterId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    receiptPrinter?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
    kotPrinter?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    department?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    receiptPrinterId?: SortOrderInput | SortOrder
    kotPrinterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    receiptPrinter?: PrinterOrderByWithRelationInput
    kotPrinter?: PrinterOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    department?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    receiptPrinterId?: StringNullableFilter<"User"> | string | null
    kotPrinterId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    receiptPrinter?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
    kotPrinter?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    department?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    receiptPrinterId?: SortOrderInput | SortOrder
    kotPrinterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    branchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    designation?: StringNullableWithAggregatesFilter<"User"> | string | null
    receiptPrinterId?: StringNullableWithAggregatesFilter<"User"> | string | null
    kotPrinterId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PrinterWhereInput = {
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    id?: StringFilter<"Printer"> | string
    name?: StringFilter<"Printer"> | string
    printerName?: StringFilter<"Printer"> | string
    type?: StringFilter<"Printer"> | string
    isDefault?: BoolFilter<"Printer"> | boolean
    branchId?: StringFilter<"Printer"> | string
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    receiptUsers?: UserListRelationFilter
    kotUsers?: UserListRelationFilter
  }

  export type PrinterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    printerName?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    receiptUsers?: UserOrderByRelationAggregateInput
    kotUsers?: UserOrderByRelationAggregateInput
  }

  export type PrinterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    name?: StringFilter<"Printer"> | string
    printerName?: StringFilter<"Printer"> | string
    type?: StringFilter<"Printer"> | string
    isDefault?: BoolFilter<"Printer"> | boolean
    branchId?: StringFilter<"Printer"> | string
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    receiptUsers?: UserListRelationFilter
    kotUsers?: UserListRelationFilter
  }, "id">

  export type PrinterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    printerName?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrinterCountOrderByAggregateInput
    _max?: PrinterMaxOrderByAggregateInput
    _min?: PrinterMinOrderByAggregateInput
  }

  export type PrinterScalarWhereWithAggregatesInput = {
    AND?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    OR?: PrinterScalarWhereWithAggregatesInput[]
    NOT?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Printer"> | string
    name?: StringWithAggregatesFilter<"Printer"> | string
    printerName?: StringWithAggregatesFilter<"Printer"> | string
    type?: StringWithAggregatesFilter<"Printer"> | string
    isDefault?: BoolWithAggregatesFilter<"Printer"> | boolean
    branchId?: StringWithAggregatesFilter<"Printer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Printer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Printer"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type TaxWhereInput = {
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    id?: StringFilter<"Tax"> | string
    taxName?: StringFilter<"Tax"> | string
    percentage?: FloatFilter<"Tax"> | number
    taxCode?: StringNullableFilter<"Tax"> | string | null
    isActive?: BoolFilter<"Tax"> | boolean
    createdAt?: DateTimeFilter<"Tax"> | Date | string
    updatedAt?: DateTimeFilter<"Tax"> | Date | string
  }

  export type TaxOrderByWithRelationInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    taxCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    taxName?: StringFilter<"Tax"> | string
    percentage?: FloatFilter<"Tax"> | number
    taxCode?: StringNullableFilter<"Tax"> | string | null
    isActive?: BoolFilter<"Tax"> | boolean
    createdAt?: DateTimeFilter<"Tax"> | Date | string
    updatedAt?: DateTimeFilter<"Tax"> | Date | string
  }, "id">

  export type TaxOrderByWithAggregationInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    taxCode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxCountOrderByAggregateInput
    _avg?: TaxAvgOrderByAggregateInput
    _max?: TaxMaxOrderByAggregateInput
    _min?: TaxMinOrderByAggregateInput
    _sum?: TaxSumOrderByAggregateInput
  }

  export type TaxScalarWhereWithAggregatesInput = {
    AND?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    OR?: TaxScalarWhereWithAggregatesInput[]
    NOT?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tax"> | string
    taxName?: StringWithAggregatesFilter<"Tax"> | string
    percentage?: FloatWithAggregatesFilter<"Tax"> | number
    taxCode?: StringNullableWithAggregatesFilter<"Tax"> | string | null
    isActive?: BoolWithAggregatesFilter<"Tax"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tax"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tax"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    branchId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isAvailable?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    branchId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }, "id" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isAvailable?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    isAvailable?: BoolWithAggregatesFilter<"Product"> | boolean
    branchId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceId?: StringFilter<"Invoice"> | string
    invoiceIdTrack?: StringFilter<"Invoice"> | string
    branchId?: StringFilter<"Invoice"> | string
    clientName?: StringNullableFilter<"Invoice"> | string | null
    clientPhone?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatFilter<"Invoice"> | number
    discount?: FloatFilter<"Invoice"> | number
    taxAmount?: FloatFilter<"Invoice"> | number
    total?: FloatFilter<"Invoice"> | number
    paymentMode?: StringFilter<"Invoice"> | string
    invoiceStatus?: StringFilter<"Invoice"> | string
    billedById?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    delete?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    billedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
    kots?: KOTListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoiceIdTrack?: SortOrder
    branchId?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    paymentMode?: SortOrder
    invoiceStatus?: SortOrder
    billedById?: SortOrder
    notes?: SortOrderInput | SortOrder
    delete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    billedBy?: UserOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
    kots?: KOTOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoiceId?: StringFilter<"Invoice"> | string
    invoiceIdTrack?: StringFilter<"Invoice"> | string
    branchId?: StringFilter<"Invoice"> | string
    clientName?: StringNullableFilter<"Invoice"> | string | null
    clientPhone?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatFilter<"Invoice"> | number
    discount?: FloatFilter<"Invoice"> | number
    taxAmount?: FloatFilter<"Invoice"> | number
    total?: FloatFilter<"Invoice"> | number
    paymentMode?: StringFilter<"Invoice"> | string
    invoiceStatus?: StringFilter<"Invoice"> | string
    billedById?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    delete?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    billedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
    kots?: KOTListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoiceIdTrack?: SortOrder
    branchId?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientPhone?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    paymentMode?: SortOrder
    invoiceStatus?: SortOrder
    billedById?: SortOrder
    notes?: SortOrderInput | SortOrder
    delete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceId?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceIdTrack?: StringWithAggregatesFilter<"Invoice"> | string
    branchId?: StringWithAggregatesFilter<"Invoice"> | string
    clientName?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientPhone?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    subtotal?: FloatWithAggregatesFilter<"Invoice"> | number
    discount?: FloatWithAggregatesFilter<"Invoice"> | number
    taxAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    total?: FloatWithAggregatesFilter<"Invoice"> | number
    paymentMode?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceStatus?: StringWithAggregatesFilter<"Invoice"> | string
    billedById?: StringWithAggregatesFilter<"Invoice"> | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    delete?: BoolWithAggregatesFilter<"Invoice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    name?: StringFilter<"InvoiceItem"> | string
    price?: FloatFilter<"InvoiceItem"> | number
    quantity?: IntFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    name?: StringFilter<"InvoiceItem"> | string
    price?: FloatFilter<"InvoiceItem"> | number
    quantity?: IntFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
    productId?: StringNullableWithAggregatesFilter<"InvoiceItem"> | string | null
    name?: StringWithAggregatesFilter<"InvoiceItem"> | string
    price?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    quantity?: IntWithAggregatesFilter<"InvoiceItem"> | number
    total?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvoiceItem"> | Date | string
  }

  export type KOTWhereInput = {
    AND?: KOTWhereInput | KOTWhereInput[]
    OR?: KOTWhereInput[]
    NOT?: KOTWhereInput | KOTWhereInput[]
    id?: StringFilter<"KOT"> | string
    kotNo?: StringFilter<"KOT"> | string
    branchId?: StringFilter<"KOT"> | string
    tableNo?: StringFilter<"KOT"> | string
    status?: StringFilter<"KOT"> | string
    invoiceId?: StringNullableFilter<"KOT"> | string | null
    invoiceMongoId?: StringNullableFilter<"KOT"> | string | null
    createdAt?: DateTimeFilter<"KOT"> | Date | string
    updatedAt?: DateTimeFilter<"KOT"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    items?: KOTItemListRelationFilter
  }

  export type KOTOrderByWithRelationInput = {
    id?: SortOrder
    kotNo?: SortOrder
    branchId?: SortOrder
    tableNo?: SortOrder
    status?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    invoiceMongoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
    items?: KOTItemOrderByRelationAggregateInput
  }

  export type KOTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KOTWhereInput | KOTWhereInput[]
    OR?: KOTWhereInput[]
    NOT?: KOTWhereInput | KOTWhereInput[]
    kotNo?: StringFilter<"KOT"> | string
    branchId?: StringFilter<"KOT"> | string
    tableNo?: StringFilter<"KOT"> | string
    status?: StringFilter<"KOT"> | string
    invoiceId?: StringNullableFilter<"KOT"> | string | null
    invoiceMongoId?: StringNullableFilter<"KOT"> | string | null
    createdAt?: DateTimeFilter<"KOT"> | Date | string
    updatedAt?: DateTimeFilter<"KOT"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
    items?: KOTItemListRelationFilter
  }, "id">

  export type KOTOrderByWithAggregationInput = {
    id?: SortOrder
    kotNo?: SortOrder
    branchId?: SortOrder
    tableNo?: SortOrder
    status?: SortOrder
    invoiceId?: SortOrderInput | SortOrder
    invoiceMongoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KOTCountOrderByAggregateInput
    _max?: KOTMaxOrderByAggregateInput
    _min?: KOTMinOrderByAggregateInput
  }

  export type KOTScalarWhereWithAggregatesInput = {
    AND?: KOTScalarWhereWithAggregatesInput | KOTScalarWhereWithAggregatesInput[]
    OR?: KOTScalarWhereWithAggregatesInput[]
    NOT?: KOTScalarWhereWithAggregatesInput | KOTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KOT"> | string
    kotNo?: StringWithAggregatesFilter<"KOT"> | string
    branchId?: StringWithAggregatesFilter<"KOT"> | string
    tableNo?: StringWithAggregatesFilter<"KOT"> | string
    status?: StringWithAggregatesFilter<"KOT"> | string
    invoiceId?: StringNullableWithAggregatesFilter<"KOT"> | string | null
    invoiceMongoId?: StringNullableWithAggregatesFilter<"KOT"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KOT"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KOT"> | Date | string
  }

  export type KOTItemWhereInput = {
    AND?: KOTItemWhereInput | KOTItemWhereInput[]
    OR?: KOTItemWhereInput[]
    NOT?: KOTItemWhereInput | KOTItemWhereInput[]
    id?: StringFilter<"KOTItem"> | string
    kotId?: StringFilter<"KOTItem"> | string
    productId?: StringNullableFilter<"KOTItem"> | string | null
    name?: StringFilter<"KOTItem"> | string
    quantity?: IntFilter<"KOTItem"> | number
    notes?: StringNullableFilter<"KOTItem"> | string | null
    kot_completed?: BoolFilter<"KOTItem"> | boolean
    createdAt?: DateTimeFilter<"KOTItem"> | Date | string
    updatedAt?: DateTimeFilter<"KOTItem"> | Date | string
    kot?: XOR<KOTScalarRelationFilter, KOTWhereInput>
  }

  export type KOTItemOrderByWithRelationInput = {
    id?: SortOrder
    kotId?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    kot_completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kot?: KOTOrderByWithRelationInput
  }

  export type KOTItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KOTItemWhereInput | KOTItemWhereInput[]
    OR?: KOTItemWhereInput[]
    NOT?: KOTItemWhereInput | KOTItemWhereInput[]
    kotId?: StringFilter<"KOTItem"> | string
    productId?: StringNullableFilter<"KOTItem"> | string | null
    name?: StringFilter<"KOTItem"> | string
    quantity?: IntFilter<"KOTItem"> | number
    notes?: StringNullableFilter<"KOTItem"> | string | null
    kot_completed?: BoolFilter<"KOTItem"> | boolean
    createdAt?: DateTimeFilter<"KOTItem"> | Date | string
    updatedAt?: DateTimeFilter<"KOTItem"> | Date | string
    kot?: XOR<KOTScalarRelationFilter, KOTWhereInput>
  }, "id">

  export type KOTItemOrderByWithAggregationInput = {
    id?: SortOrder
    kotId?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    kot_completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KOTItemCountOrderByAggregateInput
    _avg?: KOTItemAvgOrderByAggregateInput
    _max?: KOTItemMaxOrderByAggregateInput
    _min?: KOTItemMinOrderByAggregateInput
    _sum?: KOTItemSumOrderByAggregateInput
  }

  export type KOTItemScalarWhereWithAggregatesInput = {
    AND?: KOTItemScalarWhereWithAggregatesInput | KOTItemScalarWhereWithAggregatesInput[]
    OR?: KOTItemScalarWhereWithAggregatesInput[]
    NOT?: KOTItemScalarWhereWithAggregatesInput | KOTItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KOTItem"> | string
    kotId?: StringWithAggregatesFilter<"KOTItem"> | string
    productId?: StringNullableWithAggregatesFilter<"KOTItem"> | string | null
    name?: StringWithAggregatesFilter<"KOTItem"> | string
    quantity?: IntWithAggregatesFilter<"KOTItem"> | number
    notes?: StringNullableWithAggregatesFilter<"KOTItem"> | string | null
    kot_completed?: BoolWithAggregatesFilter<"KOTItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"KOTItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KOTItem"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    website?: string | null
    VATNumber?: string | null
    logoUrl?: string | null
    description?: string | null
    currencyName?: string
    currencyCode?: string
    currencySymbol?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    website?: string | null
    VATNumber?: string | null
    logoUrl?: string | null
    description?: string | null
    currencyName?: string
    currencyCode?: string
    currencySymbol?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branches?: BranchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branches?: BranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    website?: string | null
    VATNumber?: string | null
    logoUrl?: string | null
    description?: string | null
    currencyName?: string
    currencyCode?: string
    currencySymbol?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    receiptPrinter?: PrinterCreateNestedOneWithoutReceiptUsersInput
    kotPrinter?: PrinterCreateNestedOneWithoutKotUsersInput
    invoices?: InvoiceCreateNestedManyWithoutBilledByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBilledByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    receiptPrinter?: PrinterUpdateOneWithoutReceiptUsersNestedInput
    kotPrinter?: PrinterUpdateOneWithoutKotUsersNestedInput
    invoices?: InvoiceUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutBilledByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterCreateInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutPrintersInput
    receiptUsers?: UserCreateNestedManyWithoutReceiptPrinterInput
    kotUsers?: UserCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterUncheckedCreateInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receiptUsers?: UserUncheckedCreateNestedManyWithoutReceiptPrinterInput
    kotUsers?: UserUncheckedCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutPrintersNestedInput
    receiptUsers?: UserUpdateManyWithoutReceiptPrinterNestedInput
    kotUsers?: UserUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUsers?: UserUncheckedUpdateManyWithoutReceiptPrinterNestedInput
    kotUsers?: UserUncheckedUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterCreateManyInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrinterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxCreateInput = {
    id?: string
    taxName: string
    percentage: number
    taxCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUncheckedCreateInput = {
    id?: string
    taxName: string
    percentage: number
    taxCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxCreateManyInput = {
    id?: string
    taxName: string
    percentage: number
    taxCode?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    taxCode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInvoicesInput
    billedBy: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    kots?: KOTCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    kots?: KOTUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInvoicesNestedInput
    billedBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateInput = {
    id?: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTCreateInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutKotsInput
    invoice?: InvoiceCreateNestedOneWithoutKotsInput
    items?: KOTItemCreateNestedManyWithoutKotInput
  }

  export type KOTUncheckedCreateInput = {
    id?: string
    kotNo: string
    branchId: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    invoiceMongoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: KOTItemUncheckedCreateNestedManyWithoutKotInput
  }

  export type KOTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutKotsNestedInput
    invoice?: InvoiceUpdateOneWithoutKotsNestedInput
    items?: KOTItemUpdateManyWithoutKotNestedInput
  }

  export type KOTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceMongoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: KOTItemUncheckedUpdateManyWithoutKotNestedInput
  }

  export type KOTCreateManyInput = {
    id?: string
    kotNo: string
    branchId: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    invoiceMongoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceMongoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemCreateInput = {
    id?: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    kot: KOTCreateNestedOneWithoutItemsInput
  }

  export type KOTItemUncheckedCreateInput = {
    id?: string
    kotId: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kot?: KOTUpdateOneRequiredWithoutItemsNestedInput
  }

  export type KOTItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemCreateManyInput = {
    id?: string
    kotId: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    VATNumber?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    currencyName?: SortOrder
    currencyCode?: SortOrder
    currencySymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    VATNumber?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    currencyName?: SortOrder
    currencyCode?: SortOrder
    currencySymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    VATNumber?: SortOrder
    logoUrl?: SortOrder
    description?: SortOrder
    currencyName?: SortOrder
    currencyCode?: SortOrder
    currencySymbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type KOTListRelationFilter = {
    every?: KOTWhereInput
    some?: KOTWhereInput
    none?: KOTWhereInput
  }

  export type PrinterListRelationFilter = {
    every?: PrinterWhereInput
    some?: PrinterWhereInput
    none?: PrinterWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KOTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrinterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
    active?: SortOrder
    printerName?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
    active?: SortOrder
    printerName?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
    active?: SortOrder
    printerName?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    invoiceSequence?: SortOrder
    kotSequence?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type PrinterNullableScalarRelationFilter = {
    is?: PrinterWhereInput | null
    isNot?: PrinterWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    receiptPrinterId?: SortOrder
    kotPrinterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    receiptPrinterId?: SortOrder
    kotPrinterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    receiptPrinterId?: SortOrder
    kotPrinterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type PrinterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printerName?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrinterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printerName?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrinterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    printerName?: SortOrder
    type?: SortOrder
    isDefault?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TaxCountOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    taxCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxAvgOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type TaxMaxOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    taxCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxMinOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    taxCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxSumOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAvailable?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAvailable?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isAvailable?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoiceIdTrack?: SortOrder
    branchId?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    paymentMode?: SortOrder
    invoiceStatus?: SortOrder
    billedById?: SortOrder
    notes?: SortOrder
    delete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoiceIdTrack?: SortOrder
    branchId?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    paymentMode?: SortOrder
    invoiceStatus?: SortOrder
    billedById?: SortOrder
    notes?: SortOrder
    delete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    invoiceIdTrack?: SortOrder
    branchId?: SortOrder
    clientName?: SortOrder
    clientPhone?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    paymentMode?: SortOrder
    invoiceStatus?: SortOrder
    billedById?: SortOrder
    notes?: SortOrder
    delete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    subtotal?: SortOrder
    discount?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type KOTItemListRelationFilter = {
    every?: KOTItemWhereInput
    some?: KOTItemWhereInput
    none?: KOTItemWhereInput
  }

  export type KOTItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KOTCountOrderByAggregateInput = {
    id?: SortOrder
    kotNo?: SortOrder
    branchId?: SortOrder
    tableNo?: SortOrder
    status?: SortOrder
    invoiceId?: SortOrder
    invoiceMongoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTMaxOrderByAggregateInput = {
    id?: SortOrder
    kotNo?: SortOrder
    branchId?: SortOrder
    tableNo?: SortOrder
    status?: SortOrder
    invoiceId?: SortOrder
    invoiceMongoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTMinOrderByAggregateInput = {
    id?: SortOrder
    kotNo?: SortOrder
    branchId?: SortOrder
    tableNo?: SortOrder
    status?: SortOrder
    invoiceId?: SortOrder
    invoiceMongoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTScalarRelationFilter = {
    is?: KOTWhereInput
    isNot?: KOTWhereInput
  }

  export type KOTItemCountOrderByAggregateInput = {
    id?: SortOrder
    kotId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    kot_completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type KOTItemMaxOrderByAggregateInput = {
    id?: SortOrder
    kotId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    kot_completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTItemMinOrderByAggregateInput = {
    id?: SortOrder
    kotId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    kot_completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KOTItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BranchCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BranchUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCompanyInput | BranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCompanyInput | BranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCompanyInput | BranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput> | BranchCreateWithoutCompanyInput[] | BranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCompanyInput | BranchCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCompanyInput | BranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchCreateManyCompanyInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCompanyInput | BranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCompanyInput | BranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutBranchesInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBranchInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutBranchInput = {
    create?: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput> | InvoiceCreateWithoutBranchInput[] | InvoiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBranchInput | InvoiceCreateOrConnectWithoutBranchInput[]
    createMany?: InvoiceCreateManyBranchInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KOTCreateNestedManyWithoutBranchInput = {
    create?: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput> | KOTCreateWithoutBranchInput[] | KOTUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutBranchInput | KOTCreateOrConnectWithoutBranchInput[]
    createMany?: KOTCreateManyBranchInputEnvelope
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
  }

  export type PrinterCreateNestedManyWithoutBranchInput = {
    create?: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput> | PrinterCreateWithoutBranchInput[] | PrinterUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutBranchInput | PrinterCreateOrConnectWithoutBranchInput[]
    createMany?: PrinterCreateManyBranchInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput> | InvoiceCreateWithoutBranchInput[] | InvoiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBranchInput | InvoiceCreateOrConnectWithoutBranchInput[]
    createMany?: InvoiceCreateManyBranchInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type KOTUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput> | KOTCreateWithoutBranchInput[] | KOTUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutBranchInput | KOTCreateOrConnectWithoutBranchInput[]
    createMany?: KOTCreateManyBranchInputEnvelope
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
  }

  export type PrinterUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput> | PrinterCreateWithoutBranchInput[] | PrinterUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutBranchInput | PrinterCreateOrConnectWithoutBranchInput[]
    createMany?: PrinterCreateManyBranchInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneWithoutBranchesNestedInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    upsert?: CompanyUpsertWithoutBranchesInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBranchesInput, CompanyUpdateWithoutBranchesInput>, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBranchInput | ProductUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBranchInput | ProductUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBranchInput | ProductUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutBranchNestedInput = {
    create?: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput> | InvoiceCreateWithoutBranchInput[] | InvoiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBranchInput | InvoiceCreateOrConnectWithoutBranchInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutBranchInput | InvoiceUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: InvoiceCreateManyBranchInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutBranchInput | InvoiceUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutBranchInput | InvoiceUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KOTUpdateManyWithoutBranchNestedInput = {
    create?: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput> | KOTCreateWithoutBranchInput[] | KOTUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutBranchInput | KOTCreateOrConnectWithoutBranchInput[]
    upsert?: KOTUpsertWithWhereUniqueWithoutBranchInput | KOTUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: KOTCreateManyBranchInputEnvelope
    set?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    disconnect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    delete?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    update?: KOTUpdateWithWhereUniqueWithoutBranchInput | KOTUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: KOTUpdateManyWithWhereWithoutBranchInput | KOTUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: KOTScalarWhereInput | KOTScalarWhereInput[]
  }

  export type PrinterUpdateManyWithoutBranchNestedInput = {
    create?: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput> | PrinterCreateWithoutBranchInput[] | PrinterUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutBranchInput | PrinterCreateOrConnectWithoutBranchInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutBranchInput | PrinterUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: PrinterCreateManyBranchInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutBranchInput | PrinterUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutBranchInput | PrinterUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput> | ProductCreateWithoutBranchInput[] | ProductUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBranchInput | ProductCreateOrConnectWithoutBranchInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBranchInput | ProductUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ProductCreateManyBranchInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBranchInput | ProductUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBranchInput | ProductUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput> | InvoiceCreateWithoutBranchInput[] | InvoiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBranchInput | InvoiceCreateOrConnectWithoutBranchInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutBranchInput | InvoiceUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: InvoiceCreateManyBranchInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutBranchInput | InvoiceUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutBranchInput | InvoiceUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type KOTUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput> | KOTCreateWithoutBranchInput[] | KOTUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutBranchInput | KOTCreateOrConnectWithoutBranchInput[]
    upsert?: KOTUpsertWithWhereUniqueWithoutBranchInput | KOTUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: KOTCreateManyBranchInputEnvelope
    set?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    disconnect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    delete?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    update?: KOTUpdateWithWhereUniqueWithoutBranchInput | KOTUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: KOTUpdateManyWithWhereWithoutBranchInput | KOTUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: KOTScalarWhereInput | KOTScalarWhereInput[]
  }

  export type PrinterUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput> | PrinterCreateWithoutBranchInput[] | PrinterUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutBranchInput | PrinterCreateOrConnectWithoutBranchInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutBranchInput | PrinterUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: PrinterCreateManyBranchInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutBranchInput | PrinterUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutBranchInput | PrinterUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    connect?: BranchWhereUniqueInput
  }

  export type PrinterCreateNestedOneWithoutReceiptUsersInput = {
    create?: XOR<PrinterCreateWithoutReceiptUsersInput, PrinterUncheckedCreateWithoutReceiptUsersInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutReceiptUsersInput
    connect?: PrinterWhereUniqueInput
  }

  export type PrinterCreateNestedOneWithoutKotUsersInput = {
    create?: XOR<PrinterCreateWithoutKotUsersInput, PrinterUncheckedCreateWithoutKotUsersInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutKotUsersInput
    connect?: PrinterWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutBilledByInput = {
    create?: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput> | InvoiceCreateWithoutBilledByInput[] | InvoiceUncheckedCreateWithoutBilledByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBilledByInput | InvoiceCreateOrConnectWithoutBilledByInput[]
    createMany?: InvoiceCreateManyBilledByInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutBilledByInput = {
    create?: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput> | InvoiceCreateWithoutBilledByInput[] | InvoiceUncheckedCreateWithoutBilledByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBilledByInput | InvoiceCreateOrConnectWithoutBilledByInput[]
    createMany?: InvoiceCreateManyBilledByInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    upsert?: BranchUpsertWithoutUsersInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutUsersInput, BranchUpdateWithoutUsersInput>, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type PrinterUpdateOneWithoutReceiptUsersNestedInput = {
    create?: XOR<PrinterCreateWithoutReceiptUsersInput, PrinterUncheckedCreateWithoutReceiptUsersInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutReceiptUsersInput
    upsert?: PrinterUpsertWithoutReceiptUsersInput
    disconnect?: PrinterWhereInput | boolean
    delete?: PrinterWhereInput | boolean
    connect?: PrinterWhereUniqueInput
    update?: XOR<XOR<PrinterUpdateToOneWithWhereWithoutReceiptUsersInput, PrinterUpdateWithoutReceiptUsersInput>, PrinterUncheckedUpdateWithoutReceiptUsersInput>
  }

  export type PrinterUpdateOneWithoutKotUsersNestedInput = {
    create?: XOR<PrinterCreateWithoutKotUsersInput, PrinterUncheckedCreateWithoutKotUsersInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutKotUsersInput
    upsert?: PrinterUpsertWithoutKotUsersInput
    disconnect?: PrinterWhereInput | boolean
    delete?: PrinterWhereInput | boolean
    connect?: PrinterWhereUniqueInput
    update?: XOR<XOR<PrinterUpdateToOneWithWhereWithoutKotUsersInput, PrinterUpdateWithoutKotUsersInput>, PrinterUncheckedUpdateWithoutKotUsersInput>
  }

  export type InvoiceUpdateManyWithoutBilledByNestedInput = {
    create?: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput> | InvoiceCreateWithoutBilledByInput[] | InvoiceUncheckedCreateWithoutBilledByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBilledByInput | InvoiceCreateOrConnectWithoutBilledByInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutBilledByInput | InvoiceUpsertWithWhereUniqueWithoutBilledByInput[]
    createMany?: InvoiceCreateManyBilledByInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutBilledByInput | InvoiceUpdateWithWhereUniqueWithoutBilledByInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutBilledByInput | InvoiceUpdateManyWithWhereWithoutBilledByInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutBilledByNestedInput = {
    create?: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput> | InvoiceCreateWithoutBilledByInput[] | InvoiceUncheckedCreateWithoutBilledByInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutBilledByInput | InvoiceCreateOrConnectWithoutBilledByInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutBilledByInput | InvoiceUpsertWithWhereUniqueWithoutBilledByInput[]
    createMany?: InvoiceCreateManyBilledByInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutBilledByInput | InvoiceUpdateWithWhereUniqueWithoutBilledByInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutBilledByInput | InvoiceUpdateManyWithWhereWithoutBilledByInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutPrintersInput = {
    create?: XOR<BranchCreateWithoutPrintersInput, BranchUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrintersInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReceiptPrinterInput = {
    create?: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput> | UserCreateWithoutReceiptPrinterInput[] | UserUncheckedCreateWithoutReceiptPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReceiptPrinterInput | UserCreateOrConnectWithoutReceiptPrinterInput[]
    createMany?: UserCreateManyReceiptPrinterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutKotPrinterInput = {
    create?: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput> | UserCreateWithoutKotPrinterInput[] | UserUncheckedCreateWithoutKotPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKotPrinterInput | UserCreateOrConnectWithoutKotPrinterInput[]
    createMany?: UserCreateManyKotPrinterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReceiptPrinterInput = {
    create?: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput> | UserCreateWithoutReceiptPrinterInput[] | UserUncheckedCreateWithoutReceiptPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReceiptPrinterInput | UserCreateOrConnectWithoutReceiptPrinterInput[]
    createMany?: UserCreateManyReceiptPrinterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutKotPrinterInput = {
    create?: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput> | UserCreateWithoutKotPrinterInput[] | UserUncheckedCreateWithoutKotPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKotPrinterInput | UserCreateOrConnectWithoutKotPrinterInput[]
    createMany?: UserCreateManyKotPrinterInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutPrintersNestedInput = {
    create?: XOR<BranchCreateWithoutPrintersInput, BranchUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrintersInput
    upsert?: BranchUpsertWithoutPrintersInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutPrintersInput, BranchUpdateWithoutPrintersInput>, BranchUncheckedUpdateWithoutPrintersInput>
  }

  export type UserUpdateManyWithoutReceiptPrinterNestedInput = {
    create?: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput> | UserCreateWithoutReceiptPrinterInput[] | UserUncheckedCreateWithoutReceiptPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReceiptPrinterInput | UserCreateOrConnectWithoutReceiptPrinterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReceiptPrinterInput | UserUpsertWithWhereUniqueWithoutReceiptPrinterInput[]
    createMany?: UserCreateManyReceiptPrinterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReceiptPrinterInput | UserUpdateWithWhereUniqueWithoutReceiptPrinterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReceiptPrinterInput | UserUpdateManyWithWhereWithoutReceiptPrinterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutKotPrinterNestedInput = {
    create?: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput> | UserCreateWithoutKotPrinterInput[] | UserUncheckedCreateWithoutKotPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKotPrinterInput | UserCreateOrConnectWithoutKotPrinterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKotPrinterInput | UserUpsertWithWhereUniqueWithoutKotPrinterInput[]
    createMany?: UserCreateManyKotPrinterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKotPrinterInput | UserUpdateWithWhereUniqueWithoutKotPrinterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKotPrinterInput | UserUpdateManyWithWhereWithoutKotPrinterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReceiptPrinterNestedInput = {
    create?: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput> | UserCreateWithoutReceiptPrinterInput[] | UserUncheckedCreateWithoutReceiptPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReceiptPrinterInput | UserCreateOrConnectWithoutReceiptPrinterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReceiptPrinterInput | UserUpsertWithWhereUniqueWithoutReceiptPrinterInput[]
    createMany?: UserCreateManyReceiptPrinterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReceiptPrinterInput | UserUpdateWithWhereUniqueWithoutReceiptPrinterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReceiptPrinterInput | UserUpdateManyWithWhereWithoutReceiptPrinterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutKotPrinterNestedInput = {
    create?: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput> | UserCreateWithoutKotPrinterInput[] | UserUncheckedCreateWithoutKotPrinterInput[]
    connectOrCreate?: UserCreateOrConnectWithoutKotPrinterInput | UserCreateOrConnectWithoutKotPrinterInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutKotPrinterInput | UserUpsertWithWhereUniqueWithoutKotPrinterInput[]
    createMany?: UserCreateManyKotPrinterInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutKotPrinterInput | UserUpdateWithWhereUniqueWithoutKotPrinterInput[]
    updateMany?: UserUpdateManyWithWhereWithoutKotPrinterInput | UserUpdateManyWithWhereWithoutKotPrinterInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchCreateNestedOneWithoutProductsInput = {
    create?: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutProductsInput
    connect?: BranchWhereUniqueInput
  }

  export type BranchUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutProductsInput
    upsert?: BranchUpsertWithoutProductsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutProductsInput, BranchUpdateWithoutProductsInput>, BranchUncheckedUpdateWithoutProductsInput>
  }

  export type BranchCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<BranchCreateWithoutInvoicesInput, BranchUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutInvoicesInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type KOTCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput> | KOTCreateWithoutInvoiceInput[] | KOTUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutInvoiceInput | KOTCreateOrConnectWithoutInvoiceInput[]
    createMany?: KOTCreateManyInvoiceInputEnvelope
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type KOTUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput> | KOTCreateWithoutInvoiceInput[] | KOTUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutInvoiceInput | KOTCreateOrConnectWithoutInvoiceInput[]
    createMany?: KOTCreateManyInvoiceInputEnvelope
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<BranchCreateWithoutInvoicesInput, BranchUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutInvoicesInput
    upsert?: BranchUpsertWithoutInvoicesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutInvoicesInput, BranchUpdateWithoutInvoicesInput>, BranchUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type KOTUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput> | KOTCreateWithoutInvoiceInput[] | KOTUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutInvoiceInput | KOTCreateOrConnectWithoutInvoiceInput[]
    upsert?: KOTUpsertWithWhereUniqueWithoutInvoiceInput | KOTUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: KOTCreateManyInvoiceInputEnvelope
    set?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    disconnect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    delete?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    update?: KOTUpdateWithWhereUniqueWithoutInvoiceInput | KOTUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: KOTUpdateManyWithWhereWithoutInvoiceInput | KOTUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: KOTScalarWhereInput | KOTScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type KOTUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput> | KOTCreateWithoutInvoiceInput[] | KOTUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: KOTCreateOrConnectWithoutInvoiceInput | KOTCreateOrConnectWithoutInvoiceInput[]
    upsert?: KOTUpsertWithWhereUniqueWithoutInvoiceInput | KOTUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: KOTCreateManyInvoiceInputEnvelope
    set?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    disconnect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    delete?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    connect?: KOTWhereUniqueInput | KOTWhereUniqueInput[]
    update?: KOTUpdateWithWhereUniqueWithoutInvoiceInput | KOTUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: KOTUpdateManyWithWhereWithoutInvoiceInput | KOTUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: KOTScalarWhereInput | KOTScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type BranchCreateNestedOneWithoutKotsInput = {
    create?: XOR<BranchCreateWithoutKotsInput, BranchUncheckedCreateWithoutKotsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutKotsInput
    connect?: BranchWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutKotsInput = {
    create?: XOR<InvoiceCreateWithoutKotsInput, InvoiceUncheckedCreateWithoutKotsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutKotsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type KOTItemCreateNestedManyWithoutKotInput = {
    create?: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput> | KOTItemCreateWithoutKotInput[] | KOTItemUncheckedCreateWithoutKotInput[]
    connectOrCreate?: KOTItemCreateOrConnectWithoutKotInput | KOTItemCreateOrConnectWithoutKotInput[]
    createMany?: KOTItemCreateManyKotInputEnvelope
    connect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
  }

  export type KOTItemUncheckedCreateNestedManyWithoutKotInput = {
    create?: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput> | KOTItemCreateWithoutKotInput[] | KOTItemUncheckedCreateWithoutKotInput[]
    connectOrCreate?: KOTItemCreateOrConnectWithoutKotInput | KOTItemCreateOrConnectWithoutKotInput[]
    createMany?: KOTItemCreateManyKotInputEnvelope
    connect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
  }

  export type BranchUpdateOneRequiredWithoutKotsNestedInput = {
    create?: XOR<BranchCreateWithoutKotsInput, BranchUncheckedCreateWithoutKotsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutKotsInput
    upsert?: BranchUpsertWithoutKotsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutKotsInput, BranchUpdateWithoutKotsInput>, BranchUncheckedUpdateWithoutKotsInput>
  }

  export type InvoiceUpdateOneWithoutKotsNestedInput = {
    create?: XOR<InvoiceCreateWithoutKotsInput, InvoiceUncheckedCreateWithoutKotsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutKotsInput
    upsert?: InvoiceUpsertWithoutKotsInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutKotsInput, InvoiceUpdateWithoutKotsInput>, InvoiceUncheckedUpdateWithoutKotsInput>
  }

  export type KOTItemUpdateManyWithoutKotNestedInput = {
    create?: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput> | KOTItemCreateWithoutKotInput[] | KOTItemUncheckedCreateWithoutKotInput[]
    connectOrCreate?: KOTItemCreateOrConnectWithoutKotInput | KOTItemCreateOrConnectWithoutKotInput[]
    upsert?: KOTItemUpsertWithWhereUniqueWithoutKotInput | KOTItemUpsertWithWhereUniqueWithoutKotInput[]
    createMany?: KOTItemCreateManyKotInputEnvelope
    set?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    disconnect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    delete?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    connect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    update?: KOTItemUpdateWithWhereUniqueWithoutKotInput | KOTItemUpdateWithWhereUniqueWithoutKotInput[]
    updateMany?: KOTItemUpdateManyWithWhereWithoutKotInput | KOTItemUpdateManyWithWhereWithoutKotInput[]
    deleteMany?: KOTItemScalarWhereInput | KOTItemScalarWhereInput[]
  }

  export type KOTItemUncheckedUpdateManyWithoutKotNestedInput = {
    create?: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput> | KOTItemCreateWithoutKotInput[] | KOTItemUncheckedCreateWithoutKotInput[]
    connectOrCreate?: KOTItemCreateOrConnectWithoutKotInput | KOTItemCreateOrConnectWithoutKotInput[]
    upsert?: KOTItemUpsertWithWhereUniqueWithoutKotInput | KOTItemUpsertWithWhereUniqueWithoutKotInput[]
    createMany?: KOTItemCreateManyKotInputEnvelope
    set?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    disconnect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    delete?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    connect?: KOTItemWhereUniqueInput | KOTItemWhereUniqueInput[]
    update?: KOTItemUpdateWithWhereUniqueWithoutKotInput | KOTItemUpdateWithWhereUniqueWithoutKotInput[]
    updateMany?: KOTItemUpdateManyWithWhereWithoutKotInput | KOTItemUpdateManyWithWhereWithoutKotInput[]
    deleteMany?: KOTItemScalarWhereInput | KOTItemScalarWhereInput[]
  }

  export type KOTCreateNestedOneWithoutItemsInput = {
    create?: XOR<KOTCreateWithoutItemsInput, KOTUncheckedCreateWithoutItemsInput>
    connectOrCreate?: KOTCreateOrConnectWithoutItemsInput
    connect?: KOTWhereUniqueInput
  }

  export type KOTUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<KOTCreateWithoutItemsInput, KOTUncheckedCreateWithoutItemsInput>
    connectOrCreate?: KOTCreateOrConnectWithoutItemsInput
    upsert?: KOTUpsertWithoutItemsInput
    connect?: KOTWhereUniqueInput
    update?: XOR<XOR<KOTUpdateToOneWithWhereWithoutItemsInput, KOTUpdateWithoutItemsInput>, KOTUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BranchCreateWithoutCompanyInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput>
  }

  export type BranchCreateManyCompanyInputEnvelope = {
    data: BranchCreateManyCompanyInput | BranchCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutCompanyInput, BranchUncheckedUpdateWithoutCompanyInput>
    create: XOR<BranchCreateWithoutCompanyInput, BranchUncheckedCreateWithoutCompanyInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutCompanyInput, BranchUncheckedUpdateWithoutCompanyInput>
  }

  export type BranchUpdateManyWithWhereWithoutCompanyInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    street?: StringFilter<"Branch"> | string
    city?: StringFilter<"Branch"> | string
    state?: StringFilter<"Branch"> | string
    country?: StringFilter<"Branch"> | string
    zipCode?: StringFilter<"Branch"> | string
    email?: StringNullableFilter<"Branch"> | string | null
    phone?: StringFilter<"Branch"> | string
    invoiceSequence?: IntFilter<"Branch"> | number
    kotSequence?: IntFilter<"Branch"> | number
    active?: BoolFilter<"Branch"> | boolean
    printerName?: StringNullableFilter<"Branch"> | string | null
    companyId?: StringNullableFilter<"Branch"> | string | null
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
  }

  export type CompanyCreateWithoutBranchesInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    website?: string | null
    VATNumber?: string | null
    logoUrl?: string | null
    description?: string | null
    currencyName?: string
    currencyCode?: string
    currencySymbol?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateWithoutBranchesInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    website?: string | null
    VATNumber?: string | null
    logoUrl?: string | null
    description?: string | null
    currencyName?: string
    currencyCode?: string
    currencySymbol?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutBranchesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
  }

  export type UserCreateWithoutBranchInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiptPrinter?: PrinterCreateNestedOneWithoutReceiptUsersInput
    kotPrinter?: PrinterCreateNestedOneWithoutKotUsersInput
    invoices?: InvoiceCreateNestedManyWithoutBilledByInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBilledByInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutBranchInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutBranchInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput>
  }

  export type ProductCreateManyBranchInputEnvelope = {
    data: ProductCreateManyBranchInput | ProductCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutBranchInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    billedBy: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    kots?: KOTCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutBranchInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    kots?: KOTUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutBranchInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput>
  }

  export type InvoiceCreateManyBranchInputEnvelope = {
    data: InvoiceCreateManyBranchInput | InvoiceCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type KOTCreateWithoutBranchInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceCreateNestedOneWithoutKotsInput
    items?: KOTItemCreateNestedManyWithoutKotInput
  }

  export type KOTUncheckedCreateWithoutBranchInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    invoiceMongoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: KOTItemUncheckedCreateNestedManyWithoutKotInput
  }

  export type KOTCreateOrConnectWithoutBranchInput = {
    where: KOTWhereUniqueInput
    create: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput>
  }

  export type KOTCreateManyBranchInputEnvelope = {
    data: KOTCreateManyBranchInput | KOTCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type PrinterCreateWithoutBranchInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiptUsers?: UserCreateNestedManyWithoutReceiptPrinterInput
    kotUsers?: UserCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiptUsers?: UserUncheckedCreateNestedManyWithoutReceiptPrinterInput
    kotUsers?: UserUncheckedCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterCreateOrConnectWithoutBranchInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput>
  }

  export type PrinterCreateManyBranchInputEnvelope = {
    data: PrinterCreateManyBranchInput | PrinterCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutBranchesInput = {
    update: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBranchesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type CompanyUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    VATNumber?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    currencySymbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    department?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    receiptPrinterId?: StringNullableFilter<"User"> | string | null
    kotPrinterId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutBranchInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBranchInput, ProductUncheckedUpdateWithoutBranchInput>
    create: XOR<ProductCreateWithoutBranchInput, ProductUncheckedCreateWithoutBranchInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBranchInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBranchInput, ProductUncheckedUpdateWithoutBranchInput>
  }

  export type ProductUpdateManyWithWhereWithoutBranchInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBranchInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    isAvailable?: BoolFilter<"Product"> | boolean
    branchId?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutBranchInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutBranchInput, InvoiceUncheckedUpdateWithoutBranchInput>
    create: XOR<InvoiceCreateWithoutBranchInput, InvoiceUncheckedCreateWithoutBranchInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutBranchInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutBranchInput, InvoiceUncheckedUpdateWithoutBranchInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutBranchInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutBranchInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceId?: StringFilter<"Invoice"> | string
    invoiceIdTrack?: StringFilter<"Invoice"> | string
    branchId?: StringFilter<"Invoice"> | string
    clientName?: StringNullableFilter<"Invoice"> | string | null
    clientPhone?: StringNullableFilter<"Invoice"> | string | null
    subtotal?: FloatFilter<"Invoice"> | number
    discount?: FloatFilter<"Invoice"> | number
    taxAmount?: FloatFilter<"Invoice"> | number
    total?: FloatFilter<"Invoice"> | number
    paymentMode?: StringFilter<"Invoice"> | string
    invoiceStatus?: StringFilter<"Invoice"> | string
    billedById?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    delete?: BoolFilter<"Invoice"> | boolean
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type KOTUpsertWithWhereUniqueWithoutBranchInput = {
    where: KOTWhereUniqueInput
    update: XOR<KOTUpdateWithoutBranchInput, KOTUncheckedUpdateWithoutBranchInput>
    create: XOR<KOTCreateWithoutBranchInput, KOTUncheckedCreateWithoutBranchInput>
  }

  export type KOTUpdateWithWhereUniqueWithoutBranchInput = {
    where: KOTWhereUniqueInput
    data: XOR<KOTUpdateWithoutBranchInput, KOTUncheckedUpdateWithoutBranchInput>
  }

  export type KOTUpdateManyWithWhereWithoutBranchInput = {
    where: KOTScalarWhereInput
    data: XOR<KOTUpdateManyMutationInput, KOTUncheckedUpdateManyWithoutBranchInput>
  }

  export type KOTScalarWhereInput = {
    AND?: KOTScalarWhereInput | KOTScalarWhereInput[]
    OR?: KOTScalarWhereInput[]
    NOT?: KOTScalarWhereInput | KOTScalarWhereInput[]
    id?: StringFilter<"KOT"> | string
    kotNo?: StringFilter<"KOT"> | string
    branchId?: StringFilter<"KOT"> | string
    tableNo?: StringFilter<"KOT"> | string
    status?: StringFilter<"KOT"> | string
    invoiceId?: StringNullableFilter<"KOT"> | string | null
    invoiceMongoId?: StringNullableFilter<"KOT"> | string | null
    createdAt?: DateTimeFilter<"KOT"> | Date | string
    updatedAt?: DateTimeFilter<"KOT"> | Date | string
  }

  export type PrinterUpsertWithWhereUniqueWithoutBranchInput = {
    where: PrinterWhereUniqueInput
    update: XOR<PrinterUpdateWithoutBranchInput, PrinterUncheckedUpdateWithoutBranchInput>
    create: XOR<PrinterCreateWithoutBranchInput, PrinterUncheckedCreateWithoutBranchInput>
  }

  export type PrinterUpdateWithWhereUniqueWithoutBranchInput = {
    where: PrinterWhereUniqueInput
    data: XOR<PrinterUpdateWithoutBranchInput, PrinterUncheckedUpdateWithoutBranchInput>
  }

  export type PrinterUpdateManyWithWhereWithoutBranchInput = {
    where: PrinterScalarWhereInput
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyWithoutBranchInput>
  }

  export type PrinterScalarWhereInput = {
    AND?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    OR?: PrinterScalarWhereInput[]
    NOT?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    id?: StringFilter<"Printer"> | string
    name?: StringFilter<"Printer"> | string
    printerName?: StringFilter<"Printer"> | string
    type?: StringFilter<"Printer"> | string
    isDefault?: BoolFilter<"Printer"> | boolean
    branchId?: StringFilter<"Printer"> | string
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
  }

  export type BranchCreateWithoutUsersInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    products?: ProductCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutUsersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
  }

  export type PrinterCreateWithoutReceiptUsersInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutPrintersInput
    kotUsers?: UserCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterUncheckedCreateWithoutReceiptUsersInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kotUsers?: UserUncheckedCreateNestedManyWithoutKotPrinterInput
  }

  export type PrinterCreateOrConnectWithoutReceiptUsersInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutReceiptUsersInput, PrinterUncheckedCreateWithoutReceiptUsersInput>
  }

  export type PrinterCreateWithoutKotUsersInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutPrintersInput
    receiptUsers?: UserCreateNestedManyWithoutReceiptPrinterInput
  }

  export type PrinterUncheckedCreateWithoutKotUsersInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receiptUsers?: UserUncheckedCreateNestedManyWithoutReceiptPrinterInput
  }

  export type PrinterCreateOrConnectWithoutKotUsersInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutKotUsersInput, PrinterUncheckedCreateWithoutKotUsersInput>
  }

  export type InvoiceCreateWithoutBilledByInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    kots?: KOTCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutBilledByInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    kots?: KOTUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutBilledByInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput>
  }

  export type InvoiceCreateManyBilledByInputEnvelope = {
    data: InvoiceCreateManyBilledByInput | InvoiceCreateManyBilledByInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutUsersInput = {
    update: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type PrinterUpsertWithoutReceiptUsersInput = {
    update: XOR<PrinterUpdateWithoutReceiptUsersInput, PrinterUncheckedUpdateWithoutReceiptUsersInput>
    create: XOR<PrinterCreateWithoutReceiptUsersInput, PrinterUncheckedCreateWithoutReceiptUsersInput>
    where?: PrinterWhereInput
  }

  export type PrinterUpdateToOneWithWhereWithoutReceiptUsersInput = {
    where?: PrinterWhereInput
    data: XOR<PrinterUpdateWithoutReceiptUsersInput, PrinterUncheckedUpdateWithoutReceiptUsersInput>
  }

  export type PrinterUpdateWithoutReceiptUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutPrintersNestedInput
    kotUsers?: UserUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterUncheckedUpdateWithoutReceiptUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kotUsers?: UserUncheckedUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterUpsertWithoutKotUsersInput = {
    update: XOR<PrinterUpdateWithoutKotUsersInput, PrinterUncheckedUpdateWithoutKotUsersInput>
    create: XOR<PrinterCreateWithoutKotUsersInput, PrinterUncheckedCreateWithoutKotUsersInput>
    where?: PrinterWhereInput
  }

  export type PrinterUpdateToOneWithWhereWithoutKotUsersInput = {
    where?: PrinterWhereInput
    data: XOR<PrinterUpdateWithoutKotUsersInput, PrinterUncheckedUpdateWithoutKotUsersInput>
  }

  export type PrinterUpdateWithoutKotUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutPrintersNestedInput
    receiptUsers?: UserUpdateManyWithoutReceiptPrinterNestedInput
  }

  export type PrinterUncheckedUpdateWithoutKotUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUsers?: UserUncheckedUpdateManyWithoutReceiptPrinterNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutBilledByInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutBilledByInput, InvoiceUncheckedUpdateWithoutBilledByInput>
    create: XOR<InvoiceCreateWithoutBilledByInput, InvoiceUncheckedCreateWithoutBilledByInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutBilledByInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutBilledByInput, InvoiceUncheckedUpdateWithoutBilledByInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutBilledByInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutBilledByInput>
  }

  export type BranchCreateWithoutPrintersInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutPrintersInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutPrintersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutPrintersInput, BranchUncheckedCreateWithoutPrintersInput>
  }

  export type UserCreateWithoutReceiptPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    kotPrinter?: PrinterCreateNestedOneWithoutKotUsersInput
    invoices?: InvoiceCreateNestedManyWithoutBilledByInput
  }

  export type UserUncheckedCreateWithoutReceiptPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBilledByInput
  }

  export type UserCreateOrConnectWithoutReceiptPrinterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput>
  }

  export type UserCreateManyReceiptPrinterInputEnvelope = {
    data: UserCreateManyReceiptPrinterInput | UserCreateManyReceiptPrinterInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutKotPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    receiptPrinter?: PrinterCreateNestedOneWithoutReceiptUsersInput
    invoices?: InvoiceCreateNestedManyWithoutBilledByInput
  }

  export type UserUncheckedCreateWithoutKotPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBilledByInput
  }

  export type UserCreateOrConnectWithoutKotPrinterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput>
  }

  export type UserCreateManyKotPrinterInputEnvelope = {
    data: UserCreateManyKotPrinterInput | UserCreateManyKotPrinterInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutPrintersInput = {
    update: XOR<BranchUpdateWithoutPrintersInput, BranchUncheckedUpdateWithoutPrintersInput>
    create: XOR<BranchCreateWithoutPrintersInput, BranchUncheckedCreateWithoutPrintersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutPrintersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutPrintersInput, BranchUncheckedUpdateWithoutPrintersInput>
  }

  export type BranchUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReceiptPrinterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReceiptPrinterInput, UserUncheckedUpdateWithoutReceiptPrinterInput>
    create: XOR<UserCreateWithoutReceiptPrinterInput, UserUncheckedCreateWithoutReceiptPrinterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReceiptPrinterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReceiptPrinterInput, UserUncheckedUpdateWithoutReceiptPrinterInput>
  }

  export type UserUpdateManyWithWhereWithoutReceiptPrinterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReceiptPrinterInput>
  }

  export type UserUpsertWithWhereUniqueWithoutKotPrinterInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutKotPrinterInput, UserUncheckedUpdateWithoutKotPrinterInput>
    create: XOR<UserCreateWithoutKotPrinterInput, UserUncheckedCreateWithoutKotPrinterInput>
  }

  export type UserUpdateWithWhereUniqueWithoutKotPrinterInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutKotPrinterInput, UserUncheckedUpdateWithoutKotPrinterInput>
  }

  export type UserUpdateManyWithWhereWithoutKotPrinterInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutKotPrinterInput>
  }

  export type BranchCreateWithoutProductsInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutProductsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
  }

  export type BranchUpsertWithoutProductsInput = {
    update: XOR<BranchUpdateWithoutProductsInput, BranchUncheckedUpdateWithoutProductsInput>
    create: XOR<BranchCreateWithoutProductsInput, BranchUncheckedCreateWithoutProductsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutProductsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutProductsInput, BranchUncheckedUpdateWithoutProductsInput>
  }

  export type BranchUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateWithoutInvoicesInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    kots?: KOTCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    kots?: KOTUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutInvoicesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutInvoicesInput, BranchUncheckedCreateWithoutInvoicesInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutUsersInput
    receiptPrinter?: PrinterCreateNestedOneWithoutReceiptUsersInput
    kotPrinter?: PrinterCreateNestedOneWithoutKotUsersInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type KOTCreateWithoutInvoiceInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutKotsInput
    items?: KOTItemCreateNestedManyWithoutKotInput
  }

  export type KOTUncheckedCreateWithoutInvoiceInput = {
    id?: string
    kotNo: string
    branchId: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: KOTItemUncheckedCreateNestedManyWithoutKotInput
  }

  export type KOTCreateOrConnectWithoutInvoiceInput = {
    where: KOTWhereUniqueInput
    create: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput>
  }

  export type KOTCreateManyInvoiceInputEnvelope = {
    data: KOTCreateManyInvoiceInput | KOTCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutInvoicesInput = {
    update: XOR<BranchUpdateWithoutInvoicesInput, BranchUncheckedUpdateWithoutInvoicesInput>
    create: XOR<BranchCreateWithoutInvoicesInput, BranchUncheckedCreateWithoutInvoicesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutInvoicesInput, BranchUncheckedUpdateWithoutInvoicesInput>
  }

  export type BranchUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    receiptPrinter?: PrinterUpdateOneWithoutReceiptUsersNestedInput
    kotPrinter?: PrinterUpdateOneWithoutKotUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    productId?: StringNullableFilter<"InvoiceItem"> | string | null
    name?: StringFilter<"InvoiceItem"> | string
    price?: FloatFilter<"InvoiceItem"> | number
    quantity?: IntFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceItem"> | Date | string
  }

  export type KOTUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: KOTWhereUniqueInput
    update: XOR<KOTUpdateWithoutInvoiceInput, KOTUncheckedUpdateWithoutInvoiceInput>
    create: XOR<KOTCreateWithoutInvoiceInput, KOTUncheckedCreateWithoutInvoiceInput>
  }

  export type KOTUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: KOTWhereUniqueInput
    data: XOR<KOTUpdateWithoutInvoiceInput, KOTUncheckedUpdateWithoutInvoiceInput>
  }

  export type KOTUpdateManyWithWhereWithoutInvoiceInput = {
    where: KOTScalarWhereInput
    data: XOR<KOTUpdateManyMutationInput, KOTUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInvoicesInput
    billedBy: UserCreateNestedOneWithoutInvoicesInput
    kots?: KOTCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    kots?: KOTUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInvoicesNestedInput
    billedBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    kots?: KOTUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kots?: KOTUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type BranchCreateWithoutKotsInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    products?: ProductCreateNestedManyWithoutBranchInput
    invoices?: InvoiceCreateNestedManyWithoutBranchInput
    printers?: PrinterCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutKotsInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    companyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    products?: ProductUncheckedCreateNestedManyWithoutBranchInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutBranchInput
    printers?: PrinterUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutKotsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutKotsInput, BranchUncheckedCreateWithoutKotsInput>
  }

  export type InvoiceCreateWithoutKotsInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutInvoicesInput
    billedBy: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutKotsInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutKotsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutKotsInput, InvoiceUncheckedCreateWithoutKotsInput>
  }

  export type KOTItemCreateWithoutKotInput = {
    id?: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTItemUncheckedCreateWithoutKotInput = {
    id?: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTItemCreateOrConnectWithoutKotInput = {
    where: KOTItemWhereUniqueInput
    create: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput>
  }

  export type KOTItemCreateManyKotInputEnvelope = {
    data: KOTItemCreateManyKotInput | KOTItemCreateManyKotInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutKotsInput = {
    update: XOR<BranchUpdateWithoutKotsInput, BranchUncheckedUpdateWithoutKotsInput>
    create: XOR<BranchCreateWithoutKotsInput, BranchUncheckedCreateWithoutKotsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutKotsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutKotsInput, BranchUncheckedUpdateWithoutKotsInput>
  }

  export type BranchUpdateWithoutKotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutKotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type InvoiceUpsertWithoutKotsInput = {
    update: XOR<InvoiceUpdateWithoutKotsInput, InvoiceUncheckedUpdateWithoutKotsInput>
    create: XOR<InvoiceCreateWithoutKotsInput, InvoiceUncheckedCreateWithoutKotsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutKotsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutKotsInput, InvoiceUncheckedUpdateWithoutKotsInput>
  }

  export type InvoiceUpdateWithoutKotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInvoicesNestedInput
    billedBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutKotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type KOTItemUpsertWithWhereUniqueWithoutKotInput = {
    where: KOTItemWhereUniqueInput
    update: XOR<KOTItemUpdateWithoutKotInput, KOTItemUncheckedUpdateWithoutKotInput>
    create: XOR<KOTItemCreateWithoutKotInput, KOTItemUncheckedCreateWithoutKotInput>
  }

  export type KOTItemUpdateWithWhereUniqueWithoutKotInput = {
    where: KOTItemWhereUniqueInput
    data: XOR<KOTItemUpdateWithoutKotInput, KOTItemUncheckedUpdateWithoutKotInput>
  }

  export type KOTItemUpdateManyWithWhereWithoutKotInput = {
    where: KOTItemScalarWhereInput
    data: XOR<KOTItemUpdateManyMutationInput, KOTItemUncheckedUpdateManyWithoutKotInput>
  }

  export type KOTItemScalarWhereInput = {
    AND?: KOTItemScalarWhereInput | KOTItemScalarWhereInput[]
    OR?: KOTItemScalarWhereInput[]
    NOT?: KOTItemScalarWhereInput | KOTItemScalarWhereInput[]
    id?: StringFilter<"KOTItem"> | string
    kotId?: StringFilter<"KOTItem"> | string
    productId?: StringNullableFilter<"KOTItem"> | string | null
    name?: StringFilter<"KOTItem"> | string
    quantity?: IntFilter<"KOTItem"> | number
    notes?: StringNullableFilter<"KOTItem"> | string | null
    kot_completed?: BoolFilter<"KOTItem"> | boolean
    createdAt?: DateTimeFilter<"KOTItem"> | Date | string
    updatedAt?: DateTimeFilter<"KOTItem"> | Date | string
  }

  export type KOTCreateWithoutItemsInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutKotsInput
    invoice?: InvoiceCreateNestedOneWithoutKotsInput
  }

  export type KOTUncheckedCreateWithoutItemsInput = {
    id?: string
    kotNo: string
    branchId: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    invoiceMongoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTCreateOrConnectWithoutItemsInput = {
    where: KOTWhereUniqueInput
    create: XOR<KOTCreateWithoutItemsInput, KOTUncheckedCreateWithoutItemsInput>
  }

  export type KOTUpsertWithoutItemsInput = {
    update: XOR<KOTUpdateWithoutItemsInput, KOTUncheckedUpdateWithoutItemsInput>
    create: XOR<KOTCreateWithoutItemsInput, KOTUncheckedCreateWithoutItemsInput>
    where?: KOTWhereInput
  }

  export type KOTUpdateToOneWithWhereWithoutItemsInput = {
    where?: KOTWhereInput
    data: XOR<KOTUpdateWithoutItemsInput, KOTUncheckedUpdateWithoutItemsInput>
  }

  export type KOTUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutKotsNestedInput
    invoice?: InvoiceUpdateOneWithoutKotsNestedInput
  }

  export type KOTUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceMongoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateManyCompanyInput = {
    id?: string
    name: string
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    email?: string | null
    phone: string
    invoiceSequence?: number
    kotSequence?: number
    active?: boolean
    printerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBranchNestedInput
    products?: ProductUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUpdateManyWithoutBranchNestedInput
    kots?: KOTUpdateManyWithoutBranchNestedInput
    printers?: PrinterUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    products?: ProductUncheckedUpdateManyWithoutBranchNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutBranchNestedInput
    kots?: KOTUncheckedUpdateManyWithoutBranchNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    invoiceSequence?: IntFieldUpdateOperationsInput | number
    kotSequence?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    printerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBranchInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyBranchInput = {
    id?: string
    name: string
    code: string
    price: number
    description?: string | null
    category: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyBranchInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    billedById: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTCreateManyBranchInput = {
    id?: string
    kotNo: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    invoiceMongoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrinterCreateManyBranchInput = {
    id?: string
    name: string
    printerName: string
    type?: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptPrinter?: PrinterUpdateOneWithoutReceiptUsersNestedInput
    kotPrinter?: PrinterUpdateOneWithoutKotUsersNestedInput
    invoices?: InvoiceUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billedBy?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    billedById?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneWithoutKotsNestedInput
    items?: KOTItemUpdateManyWithoutKotNestedInput
  }

  export type KOTUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceMongoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: KOTItemUncheckedUpdateManyWithoutKotNestedInput
  }

  export type KOTUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceMongoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUsers?: UserUpdateManyWithoutReceiptPrinterNestedInput
    kotUsers?: UserUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUsers?: UserUncheckedUpdateManyWithoutReceiptPrinterNestedInput
    kotUsers?: UserUncheckedUpdateManyWithoutKotPrinterNestedInput
  }

  export type PrinterUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    printerName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyBilledByInput = {
    id?: string
    invoiceId: string
    invoiceIdTrack: string
    branchId: string
    clientName?: string | null
    clientPhone?: string | null
    subtotal: number
    discount?: number
    taxAmount: number
    total: number
    paymentMode?: string
    invoiceStatus?: string
    notes?: string | null
    delete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutBilledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutBilledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    kots?: KOTUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutBilledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    invoiceIdTrack?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    taxAmount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMode?: StringFieldUpdateOperationsInput | string
    invoiceStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    delete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyReceiptPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    kotPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyKotPrinterInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    branchId?: string | null
    phone?: string | null
    isActive?: boolean
    department?: string | null
    designation?: string | null
    receiptPrinterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutReceiptPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    kotPrinter?: PrinterUpdateOneWithoutKotUsersNestedInput
    invoices?: InvoiceUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiptPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReceiptPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    kotPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutKotPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutUsersNestedInput
    receiptPrinter?: PrinterUpdateOneWithoutReceiptUsersNestedInput
    invoices?: InvoiceUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateWithoutKotPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutBilledByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutKotPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPrinterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    productId?: string | null
    name: string
    price: number
    quantity: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTCreateManyInvoiceInput = {
    id?: string
    kotNo: string
    branchId: string
    tableNo: string
    status?: string
    invoiceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutKotsNestedInput
    items?: KOTItemUpdateManyWithoutKotNestedInput
  }

  export type KOTUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: KOTItemUncheckedUpdateManyWithoutKotNestedInput
  }

  export type KOTUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    kotNo?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    tableNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemCreateManyKotInput = {
    id?: string
    productId?: string | null
    name: string
    quantity: number
    notes?: string | null
    kot_completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KOTItemUpdateWithoutKotInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemUncheckedUpdateWithoutKotInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KOTItemUncheckedUpdateManyWithoutKotInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    kot_completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}