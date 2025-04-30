
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
 * Model Product
 * Product and Categories
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Variation
 * 
 */
export type Variation = $Result.DefaultSelection<Prisma.$VariationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Cart
 * Cart Logic
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model User
 * User / User Logic
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model AppSession
 * 
 */
export type AppSession = $Result.DefaultSelection<Prisma.$AppSessionPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model PageVisit
 * 
 */
export type PageVisit = $Result.DefaultSelection<Prisma.$PageVisitPayload>
/**
 * Model Favorite
 * Favorites
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variation`: Exposes CRUD operations for the **Variation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variations
    * const variations = await prisma.variation.findMany()
    * ```
    */
  get variation(): Prisma.VariationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSession`: Exposes CRUD operations for the **AppSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSessions
    * const appSessions = await prisma.appSession.findMany()
    * ```
    */
  get appSession(): Prisma.AppSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageVisit`: Exposes CRUD operations for the **PageVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageVisits
    * const pageVisits = await prisma.pageVisit.findMany()
    * ```
    */
  get pageVisit(): Prisma.PageVisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Product: 'Product',
    Variation: 'Variation',
    Category: 'Category',
    Cart: 'Cart',
    CartItem: 'CartItem',
    User: 'User',
    Session: 'Session',
    AppSession: 'AppSession',
    Visitor: 'Visitor',
    PageVisit: 'PageVisit',
    Favorite: 'Favorite'
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
      modelProps: "product" | "variation" | "category" | "cart" | "cartItem" | "user" | "session" | "appSession" | "visitor" | "pageVisit" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Variation: {
        payload: Prisma.$VariationPayload<ExtArgs>
        fields: Prisma.VariationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          findFirst: {
            args: Prisma.VariationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          findMany: {
            args: Prisma.VariationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>[]
          }
          create: {
            args: Prisma.VariationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          createMany: {
            args: Prisma.VariationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>[]
          }
          delete: {
            args: Prisma.VariationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          update: {
            args: Prisma.VariationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          deleteMany: {
            args: Prisma.VariationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>[]
          }
          upsert: {
            args: Prisma.VariationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationPayload>
          }
          aggregate: {
            args: Prisma.VariationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariation>
          }
          groupBy: {
            args: Prisma.VariationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationCountArgs<ExtArgs>
            result: $Utils.Optional<VariationCountAggregateOutputType> | number
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
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      AppSession: {
        payload: Prisma.$AppSessionPayload<ExtArgs>
        fields: Prisma.AppSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          findFirst: {
            args: Prisma.AppSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          findMany: {
            args: Prisma.AppSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>[]
          }
          create: {
            args: Prisma.AppSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          createMany: {
            args: Prisma.AppSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>[]
          }
          delete: {
            args: Prisma.AppSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          update: {
            args: Prisma.AppSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          deleteMany: {
            args: Prisma.AppSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>[]
          }
          upsert: {
            args: Prisma.AppSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          aggregate: {
            args: Prisma.AppSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSession>
          }
          groupBy: {
            args: Prisma.AppSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AppSessionCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      PageVisit: {
        payload: Prisma.$PageVisitPayload<ExtArgs>
        fields: Prisma.PageVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findFirst: {
            args: Prisma.PageVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findMany: {
            args: Prisma.PageVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          create: {
            args: Prisma.PageVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          createMany: {
            args: Prisma.PageVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          delete: {
            args: Prisma.PageVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          update: {
            args: Prisma.PageVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          deleteMany: {
            args: Prisma.PageVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          upsert: {
            args: Prisma.PageVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          aggregate: {
            args: Prisma.PageVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageVisit>
          }
          groupBy: {
            args: Prisma.PageVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageVisitCountArgs<ExtArgs>
            result: $Utils.Optional<PageVisitCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    product?: ProductOmit
    variation?: VariationOmit
    category?: CategoryOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    user?: UserOmit
    session?: SessionOmit
    appSession?: AppSessionOmit
    visitor?: VisitorOmit
    pageVisit?: PageVisitOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    Variation: number
    favorites: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Variation?: boolean | ProductCountOutputTypeCountVariationArgs
    favorites?: boolean | ProductCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    pages: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | VisitorCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes
  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
    wpId: number | null
    price: number | null
    totalSales: number | null
    stockQuantity: number | null
    averageRating: number | null
    ratingCount: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    wpId: number | null
    price: number | null
    totalSales: number | null
    stockQuantity: number | null
    averageRating: number | null
    ratingCount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    wpId: number | null
    name: string | null
    slug: string | null
    hash: string | null
    permalink: string | null
    dateCreated: Date | null
    dateModified: Date | null
    type: string | null
    status: string | null
    featured: boolean | null
    catalogVisibility: string | null
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number | null
    regularPrice: string | null
    salePrice: string | null
    onSale: boolean | null
    purchasable: boolean | null
    totalSales: number | null
    manageStock: boolean | null
    stockQuantity: number | null
    weight: string | null
    shippingRequired: boolean | null
    shippingTaxable: boolean | null
    reviewsAllowed: boolean | null
    averageRating: number | null
    ratingCount: number | null
    stockStatus: string | null
    inCart: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    wpId: number | null
    name: string | null
    slug: string | null
    hash: string | null
    permalink: string | null
    dateCreated: Date | null
    dateModified: Date | null
    type: string | null
    status: string | null
    featured: boolean | null
    catalogVisibility: string | null
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number | null
    regularPrice: string | null
    salePrice: string | null
    onSale: boolean | null
    purchasable: boolean | null
    totalSales: number | null
    manageStock: boolean | null
    stockQuantity: number | null
    weight: string | null
    shippingRequired: boolean | null
    shippingTaxable: boolean | null
    reviewsAllowed: boolean | null
    averageRating: number | null
    ratingCount: number | null
    stockStatus: string | null
    inCart: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    wpId: number
    name: number
    slug: number
    hash: number
    permalink: number
    dateCreated: number
    dateModified: number
    type: number
    status: number
    featured: number
    catalogVisibility: number
    description: number
    shortDescription: number
    sku: number
    price: number
    regularPrice: number
    salePrice: number
    onSale: number
    purchasable: number
    totalSales: number
    manageStock: number
    stockQuantity: number
    weight: number
    dimensions: number
    shippingRequired: number
    shippingTaxable: number
    reviewsAllowed: number
    averageRating: number
    ratingCount: number
    relatedIds: number
    categories: number
    tags: number
    images: number
    attributes: number
    variations: number
    metaData: number
    stockStatus: number
    brands: number
    inCart: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    wpId?: true
    price?: true
    totalSales?: true
    stockQuantity?: true
    averageRating?: true
    ratingCount?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    wpId?: true
    price?: true
    totalSales?: true
    stockQuantity?: true
    averageRating?: true
    ratingCount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    type?: true
    status?: true
    featured?: true
    catalogVisibility?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
    onSale?: true
    purchasable?: true
    totalSales?: true
    manageStock?: true
    stockQuantity?: true
    weight?: true
    shippingRequired?: true
    shippingTaxable?: true
    reviewsAllowed?: true
    averageRating?: true
    ratingCount?: true
    stockStatus?: true
    inCart?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    type?: true
    status?: true
    featured?: true
    catalogVisibility?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
    onSale?: true
    purchasable?: true
    totalSales?: true
    manageStock?: true
    stockQuantity?: true
    weight?: true
    shippingRequired?: true
    shippingTaxable?: true
    reviewsAllowed?: true
    averageRating?: true
    ratingCount?: true
    stockStatus?: true
    inCart?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    type?: true
    status?: true
    featured?: true
    catalogVisibility?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
    onSale?: true
    purchasable?: true
    totalSales?: true
    manageStock?: true
    stockQuantity?: true
    weight?: true
    dimensions?: true
    shippingRequired?: true
    shippingTaxable?: true
    reviewsAllowed?: true
    averageRating?: true
    ratingCount?: true
    relatedIds?: true
    categories?: true
    tags?: true
    images?: true
    attributes?: true
    variations?: true
    metaData?: true
    stockStatus?: true
    brands?: true
    inCart?: true
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
    id: number
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date
    dateModified: Date
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number
    regularPrice: string | null
    salePrice: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity: number | null
    weight: string | null
    dimensions: JsonValue | null
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds: JsonValue | null
    categories: JsonValue | null
    tags: JsonValue | null
    images: JsonValue | null
    attributes: JsonValue | null
    variations: JsonValue | null
    metaData: JsonValue | null
    stockStatus: string
    brands: JsonValue | null
    inCart: boolean
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
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    type?: boolean
    status?: boolean
    featured?: boolean
    catalogVisibility?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    onSale?: boolean
    purchasable?: boolean
    totalSales?: boolean
    manageStock?: boolean
    stockQuantity?: boolean
    weight?: boolean
    dimensions?: boolean
    shippingRequired?: boolean
    shippingTaxable?: boolean
    reviewsAllowed?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    relatedIds?: boolean
    categories?: boolean
    tags?: boolean
    images?: boolean
    attributes?: boolean
    variations?: boolean
    metaData?: boolean
    stockStatus?: boolean
    brands?: boolean
    inCart?: boolean
    Variation?: boolean | Product$VariationArgs<ExtArgs>
    favorites?: boolean | Product$favoritesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    type?: boolean
    status?: boolean
    featured?: boolean
    catalogVisibility?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    onSale?: boolean
    purchasable?: boolean
    totalSales?: boolean
    manageStock?: boolean
    stockQuantity?: boolean
    weight?: boolean
    dimensions?: boolean
    shippingRequired?: boolean
    shippingTaxable?: boolean
    reviewsAllowed?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    relatedIds?: boolean
    categories?: boolean
    tags?: boolean
    images?: boolean
    attributes?: boolean
    variations?: boolean
    metaData?: boolean
    stockStatus?: boolean
    brands?: boolean
    inCart?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    type?: boolean
    status?: boolean
    featured?: boolean
    catalogVisibility?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    onSale?: boolean
    purchasable?: boolean
    totalSales?: boolean
    manageStock?: boolean
    stockQuantity?: boolean
    weight?: boolean
    dimensions?: boolean
    shippingRequired?: boolean
    shippingTaxable?: boolean
    reviewsAllowed?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    relatedIds?: boolean
    categories?: boolean
    tags?: boolean
    images?: boolean
    attributes?: boolean
    variations?: boolean
    metaData?: boolean
    stockStatus?: boolean
    brands?: boolean
    inCart?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    type?: boolean
    status?: boolean
    featured?: boolean
    catalogVisibility?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    onSale?: boolean
    purchasable?: boolean
    totalSales?: boolean
    manageStock?: boolean
    stockQuantity?: boolean
    weight?: boolean
    dimensions?: boolean
    shippingRequired?: boolean
    shippingTaxable?: boolean
    reviewsAllowed?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    relatedIds?: boolean
    categories?: boolean
    tags?: boolean
    images?: boolean
    attributes?: boolean
    variations?: boolean
    metaData?: boolean
    stockStatus?: boolean
    brands?: boolean
    inCart?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wpId" | "name" | "slug" | "hash" | "permalink" | "dateCreated" | "dateModified" | "type" | "status" | "featured" | "catalogVisibility" | "description" | "shortDescription" | "sku" | "price" | "regularPrice" | "salePrice" | "onSale" | "purchasable" | "totalSales" | "manageStock" | "stockQuantity" | "weight" | "dimensions" | "shippingRequired" | "shippingTaxable" | "reviewsAllowed" | "averageRating" | "ratingCount" | "relatedIds" | "categories" | "tags" | "images" | "attributes" | "variations" | "metaData" | "stockStatus" | "brands" | "inCart", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Variation?: boolean | Product$VariationArgs<ExtArgs>
    favorites?: boolean | Product$favoritesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Variation: Prisma.$VariationPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wpId: number
      name: string
      slug: string
      hash: string
      permalink: string
      dateCreated: Date
      dateModified: Date
      type: string
      status: string
      featured: boolean
      catalogVisibility: string
      description: string | null
      shortDescription: string | null
      sku: string | null
      price: number
      regularPrice: string | null
      salePrice: string | null
      onSale: boolean
      purchasable: boolean
      totalSales: number
      manageStock: boolean
      stockQuantity: number | null
      weight: string | null
      dimensions: Prisma.JsonValue | null
      shippingRequired: boolean
      shippingTaxable: boolean
      reviewsAllowed: boolean
      averageRating: number
      ratingCount: number
      relatedIds: Prisma.JsonValue | null
      categories: Prisma.JsonValue | null
      tags: Prisma.JsonValue | null
      images: Prisma.JsonValue | null
      attributes: Prisma.JsonValue | null
      variations: Prisma.JsonValue | null
      metaData: Prisma.JsonValue | null
      stockStatus: string
      brands: Prisma.JsonValue | null
      inCart: boolean
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
    Variation<T extends Product$VariationArgs<ExtArgs> = {}>(args?: Subset<T, Product$VariationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Product$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Product$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Product", 'Int'>
    readonly wpId: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly hash: FieldRef<"Product", 'String'>
    readonly permalink: FieldRef<"Product", 'String'>
    readonly dateCreated: FieldRef<"Product", 'DateTime'>
    readonly dateModified: FieldRef<"Product", 'DateTime'>
    readonly type: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly featured: FieldRef<"Product", 'Boolean'>
    readonly catalogVisibility: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly shortDescription: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly regularPrice: FieldRef<"Product", 'String'>
    readonly salePrice: FieldRef<"Product", 'String'>
    readonly onSale: FieldRef<"Product", 'Boolean'>
    readonly purchasable: FieldRef<"Product", 'Boolean'>
    readonly totalSales: FieldRef<"Product", 'Int'>
    readonly manageStock: FieldRef<"Product", 'Boolean'>
    readonly stockQuantity: FieldRef<"Product", 'Int'>
    readonly weight: FieldRef<"Product", 'String'>
    readonly dimensions: FieldRef<"Product", 'Json'>
    readonly shippingRequired: FieldRef<"Product", 'Boolean'>
    readonly shippingTaxable: FieldRef<"Product", 'Boolean'>
    readonly reviewsAllowed: FieldRef<"Product", 'Boolean'>
    readonly averageRating: FieldRef<"Product", 'Float'>
    readonly ratingCount: FieldRef<"Product", 'Int'>
    readonly relatedIds: FieldRef<"Product", 'Json'>
    readonly categories: FieldRef<"Product", 'Json'>
    readonly tags: FieldRef<"Product", 'Json'>
    readonly images: FieldRef<"Product", 'Json'>
    readonly attributes: FieldRef<"Product", 'Json'>
    readonly variations: FieldRef<"Product", 'Json'>
    readonly metaData: FieldRef<"Product", 'Json'>
    readonly stockStatus: FieldRef<"Product", 'String'>
    readonly brands: FieldRef<"Product", 'Json'>
    readonly inCart: FieldRef<"Product", 'Boolean'>
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
   * Product.Variation
   */
  export type Product$VariationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    where?: VariationWhereInput
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    cursor?: VariationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Product.favorites
   */
  export type Product$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
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
   * Model Variation
   */

  export type AggregateVariation = {
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  export type VariationAvgAggregateOutputType = {
    id: number | null
    wpId: number | null
    productId: number | null
    price: number | null
  }

  export type VariationSumAggregateOutputType = {
    id: number | null
    wpId: number | null
    productId: number | null
    price: number | null
  }

  export type VariationMinAggregateOutputType = {
    id: number | null
    wpId: number | null
    productId: number | null
    name: string | null
    hash: string | null
    permalink: string | null
    dateCreated: Date | null
    dateModified: Date | null
    status: string | null
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number | null
    regularPrice: string | null
    salePrice: string | null
  }

  export type VariationMaxAggregateOutputType = {
    id: number | null
    wpId: number | null
    productId: number | null
    name: string | null
    hash: string | null
    permalink: string | null
    dateCreated: Date | null
    dateModified: Date | null
    status: string | null
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number | null
    regularPrice: string | null
    salePrice: string | null
  }

  export type VariationCountAggregateOutputType = {
    id: number
    wpId: number
    productId: number
    name: number
    hash: number
    permalink: number
    dateCreated: number
    dateModified: number
    status: number
    description: number
    shortDescription: number
    sku: number
    price: number
    regularPrice: number
    salePrice: number
    image: number
    attributes: number
    _all: number
  }


  export type VariationAvgAggregateInputType = {
    id?: true
    wpId?: true
    productId?: true
    price?: true
  }

  export type VariationSumAggregateInputType = {
    id?: true
    wpId?: true
    productId?: true
    price?: true
  }

  export type VariationMinAggregateInputType = {
    id?: true
    wpId?: true
    productId?: true
    name?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    status?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
  }

  export type VariationMaxAggregateInputType = {
    id?: true
    wpId?: true
    productId?: true
    name?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    status?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
  }

  export type VariationCountAggregateInputType = {
    id?: true
    wpId?: true
    productId?: true
    name?: true
    hash?: true
    permalink?: true
    dateCreated?: true
    dateModified?: true
    status?: true
    description?: true
    shortDescription?: true
    sku?: true
    price?: true
    regularPrice?: true
    salePrice?: true
    image?: true
    attributes?: true
    _all?: true
  }

  export type VariationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variation to aggregate.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variations
    **/
    _count?: true | VariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationMaxAggregateInputType
  }

  export type GetVariationAggregateType<T extends VariationAggregateArgs> = {
        [P in keyof T & keyof AggregateVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariation[P]>
      : GetScalarType<T[P], AggregateVariation[P]>
  }




  export type VariationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationWhereInput
    orderBy?: VariationOrderByWithAggregationInput | VariationOrderByWithAggregationInput[]
    by: VariationScalarFieldEnum[] | VariationScalarFieldEnum
    having?: VariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationCountAggregateInputType | true
    _avg?: VariationAvgAggregateInputType
    _sum?: VariationSumAggregateInputType
    _min?: VariationMinAggregateInputType
    _max?: VariationMaxAggregateInputType
  }

  export type VariationGroupByOutputType = {
    id: number
    wpId: number
    productId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date
    dateModified: Date
    status: string
    description: string | null
    shortDescription: string | null
    sku: string | null
    price: number
    regularPrice: string | null
    salePrice: string | null
    image: JsonValue | null
    attributes: JsonValue | null
    _count: VariationCountAggregateOutputType | null
    _avg: VariationAvgAggregateOutputType | null
    _sum: VariationSumAggregateOutputType | null
    _min: VariationMinAggregateOutputType | null
    _max: VariationMaxAggregateOutputType | null
  }

  type GetVariationGroupByPayload<T extends VariationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationGroupByOutputType[P]>
            : GetScalarType<T[P], VariationGroupByOutputType[P]>
        }
      >
    >


  export type VariationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    productId?: boolean
    name?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    status?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    image?: boolean
    attributes?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variation"]>

  export type VariationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    productId?: boolean
    name?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    status?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    image?: boolean
    attributes?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variation"]>

  export type VariationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    productId?: boolean
    name?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    status?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    image?: boolean
    attributes?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variation"]>

  export type VariationSelectScalar = {
    id?: boolean
    wpId?: boolean
    productId?: boolean
    name?: boolean
    hash?: boolean
    permalink?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    status?: boolean
    description?: boolean
    shortDescription?: boolean
    sku?: boolean
    price?: boolean
    regularPrice?: boolean
    salePrice?: boolean
    image?: boolean
    attributes?: boolean
  }

  export type VariationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wpId" | "productId" | "name" | "hash" | "permalink" | "dateCreated" | "dateModified" | "status" | "description" | "shortDescription" | "sku" | "price" | "regularPrice" | "salePrice" | "image" | "attributes", ExtArgs["result"]["variation"]>
  export type VariationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variation"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wpId: number
      productId: number
      name: string
      hash: string
      permalink: string
      dateCreated: Date
      dateModified: Date
      status: string
      description: string | null
      shortDescription: string | null
      sku: string | null
      price: number
      regularPrice: string | null
      salePrice: string | null
      image: Prisma.JsonValue | null
      attributes: Prisma.JsonValue | null
    }, ExtArgs["result"]["variation"]>
    composites: {}
  }

  type VariationGetPayload<S extends boolean | null | undefined | VariationDefaultArgs> = $Result.GetResult<Prisma.$VariationPayload, S>

  type VariationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariationCountAggregateInputType | true
    }

  export interface VariationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variation'], meta: { name: 'Variation' } }
    /**
     * Find zero or one Variation that matches the filter.
     * @param {VariationFindUniqueArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationFindUniqueArgs>(args: SelectSubset<T, VariationFindUniqueArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationFindUniqueOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationFindUniqueOrThrowArgs>(args: SelectSubset<T, VariationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationFindFirstArgs>(args?: SelectSubset<T, VariationFindFirstArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindFirstOrThrowArgs} args - Arguments to find a Variation
     * @example
     * // Get one Variation
     * const variation = await prisma.variation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationFindFirstOrThrowArgs>(args?: SelectSubset<T, VariationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variations
     * const variations = await prisma.variation.findMany()
     * 
     * // Get first 10 Variations
     * const variations = await prisma.variation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationWithIdOnly = await prisma.variation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariationFindManyArgs>(args?: SelectSubset<T, VariationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variation.
     * @param {VariationCreateArgs} args - Arguments to create a Variation.
     * @example
     * // Create one Variation
     * const Variation = await prisma.variation.create({
     *   data: {
     *     // ... data to create a Variation
     *   }
     * })
     * 
     */
    create<T extends VariationCreateArgs>(args: SelectSubset<T, VariationCreateArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variations.
     * @param {VariationCreateManyArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variation = await prisma.variation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariationCreateManyArgs>(args?: SelectSubset<T, VariationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variations and returns the data saved in the database.
     * @param {VariationCreateManyAndReturnArgs} args - Arguments to create many Variations.
     * @example
     * // Create many Variations
     * const variation = await prisma.variation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variations and only return the `id`
     * const variationWithIdOnly = await prisma.variation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariationCreateManyAndReturnArgs>(args?: SelectSubset<T, VariationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variation.
     * @param {VariationDeleteArgs} args - Arguments to delete one Variation.
     * @example
     * // Delete one Variation
     * const Variation = await prisma.variation.delete({
     *   where: {
     *     // ... filter to delete one Variation
     *   }
     * })
     * 
     */
    delete<T extends VariationDeleteArgs>(args: SelectSubset<T, VariationDeleteArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variation.
     * @param {VariationUpdateArgs} args - Arguments to update one Variation.
     * @example
     * // Update one Variation
     * const variation = await prisma.variation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariationUpdateArgs>(args: SelectSubset<T, VariationUpdateArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variations.
     * @param {VariationDeleteManyArgs} args - Arguments to filter Variations to delete.
     * @example
     * // Delete a few Variations
     * const { count } = await prisma.variation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariationDeleteManyArgs>(args?: SelectSubset<T, VariationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variations
     * const variation = await prisma.variation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariationUpdateManyArgs>(args: SelectSubset<T, VariationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations and returns the data updated in the database.
     * @param {VariationUpdateManyAndReturnArgs} args - Arguments to update many Variations.
     * @example
     * // Update many Variations
     * const variation = await prisma.variation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variations and only return the `id`
     * const variationWithIdOnly = await prisma.variation.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationUpdateManyAndReturnArgs>(args: SelectSubset<T, VariationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variation.
     * @param {VariationUpsertArgs} args - Arguments to update or create a Variation.
     * @example
     * // Update or create a Variation
     * const variation = await prisma.variation.upsert({
     *   create: {
     *     // ... data to create a Variation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variation we want to update
     *   }
     * })
     */
    upsert<T extends VariationUpsertArgs>(args: SelectSubset<T, VariationUpsertArgs<ExtArgs>>): Prisma__VariationClient<$Result.GetResult<Prisma.$VariationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationCountArgs} args - Arguments to filter Variations to count.
     * @example
     * // Count the number of Variations
     * const count = await prisma.variation.count({
     *   where: {
     *     // ... the filter for the Variations we want to count
     *   }
     * })
    **/
    count<T extends VariationCountArgs>(
      args?: Subset<T, VariationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationAggregateArgs>(args: Subset<T, VariationAggregateArgs>): Prisma.PrismaPromise<GetVariationAggregateType<T>>

    /**
     * Group by Variation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupByArgs} args - Group by arguments.
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
      T extends VariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationGroupByArgs['orderBy'] }
        : { orderBy?: VariationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variation model
   */
  readonly fields: VariationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Variation model
   */
  interface VariationFieldRefs {
    readonly id: FieldRef<"Variation", 'Int'>
    readonly wpId: FieldRef<"Variation", 'Int'>
    readonly productId: FieldRef<"Variation", 'Int'>
    readonly name: FieldRef<"Variation", 'String'>
    readonly hash: FieldRef<"Variation", 'String'>
    readonly permalink: FieldRef<"Variation", 'String'>
    readonly dateCreated: FieldRef<"Variation", 'DateTime'>
    readonly dateModified: FieldRef<"Variation", 'DateTime'>
    readonly status: FieldRef<"Variation", 'String'>
    readonly description: FieldRef<"Variation", 'String'>
    readonly shortDescription: FieldRef<"Variation", 'String'>
    readonly sku: FieldRef<"Variation", 'String'>
    readonly price: FieldRef<"Variation", 'Float'>
    readonly regularPrice: FieldRef<"Variation", 'String'>
    readonly salePrice: FieldRef<"Variation", 'String'>
    readonly image: FieldRef<"Variation", 'Json'>
    readonly attributes: FieldRef<"Variation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Variation findUnique
   */
  export type VariationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation findUniqueOrThrow
   */
  export type VariationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation findFirst
   */
  export type VariationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation findFirstOrThrow
   */
  export type VariationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variation to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation findMany
   */
  export type VariationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationOrderByWithRelationInput | VariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variations.
     */
    cursor?: VariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    distinct?: VariationScalarFieldEnum | VariationScalarFieldEnum[]
  }

  /**
   * Variation create
   */
  export type VariationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The data needed to create a Variation.
     */
    data: XOR<VariationCreateInput, VariationUncheckedCreateInput>
  }

  /**
   * Variation createMany
   */
  export type VariationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variations.
     */
    data: VariationCreateManyInput | VariationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variation createManyAndReturn
   */
  export type VariationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * The data used to create many Variations.
     */
    data: VariationCreateManyInput | VariationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variation update
   */
  export type VariationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The data needed to update a Variation.
     */
    data: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
    /**
     * Choose, which Variation to update.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation updateMany
   */
  export type VariationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationWhereInput
    /**
     * Limit how many Variations to update.
     */
    limit?: number
  }

  /**
   * Variation updateManyAndReturn
   */
  export type VariationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationWhereInput
    /**
     * Limit how many Variations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variation upsert
   */
  export type VariationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * The filter to search for the Variation to update in case it exists.
     */
    where: VariationWhereUniqueInput
    /**
     * In case the Variation found by the `where` argument doesn't exist, create a new Variation with this data.
     */
    create: XOR<VariationCreateInput, VariationUncheckedCreateInput>
    /**
     * In case the Variation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationUpdateInput, VariationUncheckedUpdateInput>
  }

  /**
   * Variation delete
   */
  export type VariationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
    /**
     * Filter which Variation to delete.
     */
    where: VariationWhereUniqueInput
  }

  /**
   * Variation deleteMany
   */
  export type VariationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to delete
     */
    where?: VariationWhereInput
    /**
     * Limit how many Variations to delete.
     */
    limit?: number
  }

  /**
   * Variation without action
   */
  export type VariationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variation
     */
    select?: VariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variation
     */
    omit?: VariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    wpId: number | null
    parent: number | null
    menuOrder: number | null
    count: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    wpId: number | null
    parent: number | null
    menuOrder: number | null
    count: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    wpId: number | null
    name: string | null
    slug: string | null
    hash: string | null
    parent: number | null
    description: string | null
    display: string | null
    menuOrder: number | null
    count: number | null
    featured: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    wpId: number | null
    name: string | null
    slug: string | null
    hash: string | null
    parent: number | null
    description: string | null
    display: string | null
    menuOrder: number | null
    count: number | null
    featured: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    wpId: number
    name: number
    slug: number
    hash: number
    parent: number
    description: number
    display: number
    image: number
    menuOrder: number
    count: number
    featured: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    wpId?: true
    parent?: true
    menuOrder?: true
    count?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    wpId?: true
    parent?: true
    menuOrder?: true
    count?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    parent?: true
    description?: true
    display?: true
    menuOrder?: true
    count?: true
    featured?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    parent?: true
    description?: true
    display?: true
    menuOrder?: true
    count?: true
    featured?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    wpId?: true
    name?: true
    slug?: true
    hash?: true
    parent?: true
    description?: true
    display?: true
    image?: true
    menuOrder?: true
    count?: true
    featured?: true
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
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
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
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    wpId: number
    name: string
    slug: string
    hash: string
    parent: number | null
    description: string | null
    display: string
    image: JsonValue | null
    menuOrder: number
    count: number
    featured: boolean
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
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
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    parent?: boolean
    description?: boolean
    display?: boolean
    image?: boolean
    menuOrder?: boolean
    count?: boolean
    featured?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    parent?: boolean
    description?: boolean
    display?: boolean
    image?: boolean
    menuOrder?: boolean
    count?: boolean
    featured?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    parent?: boolean
    description?: boolean
    display?: boolean
    image?: boolean
    menuOrder?: boolean
    count?: boolean
    featured?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    wpId?: boolean
    name?: boolean
    slug?: boolean
    hash?: boolean
    parent?: boolean
    description?: boolean
    display?: boolean
    image?: boolean
    menuOrder?: boolean
    count?: boolean
    featured?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wpId" | "name" | "slug" | "hash" | "parent" | "description" | "display" | "image" | "menuOrder" | "count" | "featured", ExtArgs["result"]["category"]>

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wpId: number
      name: string
      slug: string
      hash: string
      parent: number | null
      description: string | null
      display: string
      image: Prisma.JsonValue | null
      menuOrder: number
      count: number
      featured: boolean
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
    readonly id: FieldRef<"Category", 'Int'>
    readonly wpId: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly hash: FieldRef<"Category", 'String'>
    readonly parent: FieldRef<"Category", 'Int'>
    readonly description: FieldRef<"Category", 'String'>
    readonly display: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'Json'>
    readonly menuOrder: FieldRef<"Category", 'Int'>
    readonly count: FieldRef<"Category", 'Int'>
    readonly featured: FieldRef<"Category", 'Boolean'>
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
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    userId: string | null
    sessionToken: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    sessionToken: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    sessionToken: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    userId: string | null
    sessionToken: string | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    user?: boolean | Cart$userArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionToken", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Cart$userArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      sessionToken: string | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Cart$userArgs<ExtArgs> = {}>(args?: Subset<T, Cart$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly sessionToken: FieldRef<"Cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data?: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.user
   */
  export type Cart$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variationId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variationId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variationId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variationId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    variationId: number
    quantity: number
    price: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variationId?: true
    quantity?: true
    price?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variationId?: true
    quantity?: true
    price?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variationId?: true
    quantity?: true
    price?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variationId?: true
    quantity?: true
    price?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variationId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cartId: number
    productId: number
    variationId: number
    quantity: number
    price: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variationId?: boolean
    quantity?: boolean
    price?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variationId?: boolean
    quantity?: boolean
    price?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variationId?: boolean
    quantity?: boolean
    price?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variationId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productId" | "variationId" | "quantity" | "price", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      productId: number
      variationId: number
      quantity: number
      price: number
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly cartId: FieldRef<"CartItem", 'Int'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly variationId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly price: FieldRef<"CartItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
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
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    isPayingUser: boolean | null
    avatarUrl: string | null
    hash: string | null
    dateCreated: Date | null
    dateModified: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: string | null
    isPayingUser: boolean | null
    avatarUrl: string | null
    hash: string | null
    dateCreated: Date | null
    dateModified: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    firstName: number
    lastName: number
    role: number
    billing: number
    shipping: number
    isPayingUser: number
    avatarUrl: number
    hash: number
    dateCreated: number
    dateModified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isPayingUser?: true
    avatarUrl?: true
    hash?: true
    dateCreated?: true
    dateModified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isPayingUser?: true
    avatarUrl?: true
    hash?: true
    dateCreated?: true
    dateModified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    billing?: true
    shipping?: true
    isPayingUser?: true
    avatarUrl?: true
    hash?: true
    dateCreated?: true
    dateModified?: true
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
    email: string
    username: string
    passwordHash: string
    firstName: string | null
    lastName: string | null
    role: string
    billing: JsonValue | null
    shipping: JsonValue | null
    isPayingUser: boolean | null
    avatarUrl: string | null
    hash: string | null
    dateCreated: Date
    dateModified: Date | null
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
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    billing?: boolean
    shipping?: boolean
    isPayingUser?: boolean
    avatarUrl?: boolean
    hash?: boolean
    dateCreated?: boolean
    dateModified?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    billing?: boolean
    shipping?: boolean
    isPayingUser?: boolean
    avatarUrl?: boolean
    hash?: boolean
    dateCreated?: boolean
    dateModified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    billing?: boolean
    shipping?: boolean
    isPayingUser?: boolean
    avatarUrl?: boolean
    hash?: boolean
    dateCreated?: boolean
    dateModified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    billing?: boolean
    shipping?: boolean
    isPayingUser?: boolean
    avatarUrl?: boolean
    hash?: boolean
    dateCreated?: boolean
    dateModified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "firstName" | "lastName" | "role" | "billing" | "shipping" | "isPayingUser" | "avatarUrl" | "hash" | "dateCreated" | "dateModified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string
      firstName: string | null
      lastName: string | null
      role: string
      billing: Prisma.JsonValue | null
      shipping: Prisma.JsonValue | null
      isPayingUser: boolean | null
      avatarUrl: string | null
      hash: string | null
      dateCreated: Date
      dateModified: Date | null
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly billing: FieldRef<"User", 'Json'>
    readonly shipping: FieldRef<"User", 'Json'>
    readonly isPayingUser: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly hash: FieldRef<"User", 'String'>
    readonly dateCreated: FieldRef<"User", 'DateTime'>
    readonly dateModified: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model AppSession
   */

  export type AggregateAppSession = {
    _count: AppSessionCountAggregateOutputType | null
    _min: AppSessionMinAggregateOutputType | null
    _max: AppSessionMaxAggregateOutputType | null
  }

  export type AppSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AppSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AppSessionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type AppSessionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AppSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AppSessionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AppSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSession to aggregate.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSessions
    **/
    _count?: true | AppSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSessionMaxAggregateInputType
  }

  export type GetAppSessionAggregateType<T extends AppSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSession[P]>
      : GetScalarType<T[P], AggregateAppSession[P]>
  }




  export type AppSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSessionWhereInput
    orderBy?: AppSessionOrderByWithAggregationInput | AppSessionOrderByWithAggregationInput[]
    by: AppSessionScalarFieldEnum[] | AppSessionScalarFieldEnum
    having?: AppSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSessionCountAggregateInputType | true
    _min?: AppSessionMinAggregateInputType
    _max?: AppSessionMaxAggregateInputType
  }

  export type AppSessionGroupByOutputType = {
    id: string
    userId: string | null
    createdAt: Date
    expiresAt: Date
    _count: AppSessionCountAggregateOutputType | null
    _min: AppSessionMinAggregateOutputType | null
    _max: AppSessionMaxAggregateOutputType | null
  }

  type GetAppSessionGroupByPayload<T extends AppSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AppSessionGroupByOutputType[P]>
        }
      >
    >


  export type AppSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["appSession"]>

  export type AppSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["appSession"]>

  export type AppSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["appSession"]>

  export type AppSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type AppSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["appSession"]>

  export type $AppSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["appSession"]>
    composites: {}
  }

  type AppSessionGetPayload<S extends boolean | null | undefined | AppSessionDefaultArgs> = $Result.GetResult<Prisma.$AppSessionPayload, S>

  type AppSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSessionCountAggregateInputType | true
    }

  export interface AppSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSession'], meta: { name: 'AppSession' } }
    /**
     * Find zero or one AppSession that matches the filter.
     * @param {AppSessionFindUniqueArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSessionFindUniqueArgs>(args: SelectSubset<T, AppSessionFindUniqueArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSessionFindUniqueOrThrowArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindFirstArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSessionFindFirstArgs>(args?: SelectSubset<T, AppSessionFindFirstArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindFirstOrThrowArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSessions
     * const appSessions = await prisma.appSession.findMany()
     * 
     * // Get first 10 AppSessions
     * const appSessions = await prisma.appSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSessionWithIdOnly = await prisma.appSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSessionFindManyArgs>(args?: SelectSubset<T, AppSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSession.
     * @param {AppSessionCreateArgs} args - Arguments to create a AppSession.
     * @example
     * // Create one AppSession
     * const AppSession = await prisma.appSession.create({
     *   data: {
     *     // ... data to create a AppSession
     *   }
     * })
     * 
     */
    create<T extends AppSessionCreateArgs>(args: SelectSubset<T, AppSessionCreateArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSessions.
     * @param {AppSessionCreateManyArgs} args - Arguments to create many AppSessions.
     * @example
     * // Create many AppSessions
     * const appSession = await prisma.appSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSessionCreateManyArgs>(args?: SelectSubset<T, AppSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSessions and returns the data saved in the database.
     * @param {AppSessionCreateManyAndReturnArgs} args - Arguments to create many AppSessions.
     * @example
     * // Create many AppSessions
     * const appSession = await prisma.appSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSessions and only return the `id`
     * const appSessionWithIdOnly = await prisma.appSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSession.
     * @param {AppSessionDeleteArgs} args - Arguments to delete one AppSession.
     * @example
     * // Delete one AppSession
     * const AppSession = await prisma.appSession.delete({
     *   where: {
     *     // ... filter to delete one AppSession
     *   }
     * })
     * 
     */
    delete<T extends AppSessionDeleteArgs>(args: SelectSubset<T, AppSessionDeleteArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSession.
     * @param {AppSessionUpdateArgs} args - Arguments to update one AppSession.
     * @example
     * // Update one AppSession
     * const appSession = await prisma.appSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSessionUpdateArgs>(args: SelectSubset<T, AppSessionUpdateArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSessions.
     * @param {AppSessionDeleteManyArgs} args - Arguments to filter AppSessions to delete.
     * @example
     * // Delete a few AppSessions
     * const { count } = await prisma.appSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSessionDeleteManyArgs>(args?: SelectSubset<T, AppSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSessions
     * const appSession = await prisma.appSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSessionUpdateManyArgs>(args: SelectSubset<T, AppSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSessions and returns the data updated in the database.
     * @param {AppSessionUpdateManyAndReturnArgs} args - Arguments to update many AppSessions.
     * @example
     * // Update many AppSessions
     * const appSession = await prisma.appSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSessions and only return the `id`
     * const appSessionWithIdOnly = await prisma.appSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSession.
     * @param {AppSessionUpsertArgs} args - Arguments to update or create a AppSession.
     * @example
     * // Update or create a AppSession
     * const appSession = await prisma.appSession.upsert({
     *   create: {
     *     // ... data to create a AppSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSession we want to update
     *   }
     * })
     */
    upsert<T extends AppSessionUpsertArgs>(args: SelectSubset<T, AppSessionUpsertArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionCountArgs} args - Arguments to filter AppSessions to count.
     * @example
     * // Count the number of AppSessions
     * const count = await prisma.appSession.count({
     *   where: {
     *     // ... the filter for the AppSessions we want to count
     *   }
     * })
    **/
    count<T extends AppSessionCountArgs>(
      args?: Subset<T, AppSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSessionAggregateArgs>(args: Subset<T, AppSessionAggregateArgs>): Prisma.PrismaPromise<GetAppSessionAggregateType<T>>

    /**
     * Group by AppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionGroupByArgs} args - Group by arguments.
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
      T extends AppSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSessionGroupByArgs['orderBy'] }
        : { orderBy?: AppSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSession model
   */
  readonly fields: AppSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AppSession model
   */
  interface AppSessionFieldRefs {
    readonly id: FieldRef<"AppSession", 'String'>
    readonly userId: FieldRef<"AppSession", 'String'>
    readonly createdAt: FieldRef<"AppSession", 'DateTime'>
    readonly expiresAt: FieldRef<"AppSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSession findUnique
   */
  export type AppSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession findUniqueOrThrow
   */
  export type AppSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession findFirst
   */
  export type AppSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSessions.
     */
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession findFirstOrThrow
   */
  export type AppSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSessions.
     */
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession findMany
   */
  export type AppSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter, which AppSessions to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession create
   */
  export type AppSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSession.
     */
    data: XOR<AppSessionCreateInput, AppSessionUncheckedCreateInput>
  }

  /**
   * AppSession createMany
   */
  export type AppSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSessions.
     */
    data: AppSessionCreateManyInput | AppSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSession createManyAndReturn
   */
  export type AppSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AppSessions.
     */
    data: AppSessionCreateManyInput | AppSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSession update
   */
  export type AppSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSession.
     */
    data: XOR<AppSessionUpdateInput, AppSessionUncheckedUpdateInput>
    /**
     * Choose, which AppSession to update.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession updateMany
   */
  export type AppSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSessions.
     */
    data: XOR<AppSessionUpdateManyMutationInput, AppSessionUncheckedUpdateManyInput>
    /**
     * Filter which AppSessions to update
     */
    where?: AppSessionWhereInput
    /**
     * Limit how many AppSessions to update.
     */
    limit?: number
  }

  /**
   * AppSession updateManyAndReturn
   */
  export type AppSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * The data used to update AppSessions.
     */
    data: XOR<AppSessionUpdateManyMutationInput, AppSessionUncheckedUpdateManyInput>
    /**
     * Filter which AppSessions to update
     */
    where?: AppSessionWhereInput
    /**
     * Limit how many AppSessions to update.
     */
    limit?: number
  }

  /**
   * AppSession upsert
   */
  export type AppSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSession to update in case it exists.
     */
    where: AppSessionWhereUniqueInput
    /**
     * In case the AppSession found by the `where` argument doesn't exist, create a new AppSession with this data.
     */
    create: XOR<AppSessionCreateInput, AppSessionUncheckedCreateInput>
    /**
     * In case the AppSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSessionUpdateInput, AppSessionUncheckedUpdateInput>
  }

  /**
   * AppSession delete
   */
  export type AppSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
    /**
     * Filter which AppSession to delete.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession deleteMany
   */
  export type AppSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSessions to delete
     */
    where?: AppSessionWhereInput
    /**
     * Limit how many AppSessions to delete.
     */
    limit?: number
  }

  /**
   * AppSession without action
   */
  export type AppSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSession
     */
    omit?: AppSessionOmit<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    id: number | null
    visitCount: number | null
  }

  export type VisitorSumAggregateOutputType = {
    id: number | null
    visitCount: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: number | null
    ip: string | null
    userAgent: string | null
    referrer: string | null
    timestamp: Date | null
    visitCount: number | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    userAgent: string | null
    referrer: string | null
    timestamp: Date | null
    visitCount: number | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    ip: number
    userAgent: number
    referrer: number
    timestamp: number
    visitCount: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    id?: true
    visitCount?: true
  }

  export type VisitorSumAggregateInputType = {
    id?: true
    visitCount?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    ip?: true
    userAgent?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    ip?: true
    userAgent?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    ip?: true
    userAgent?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: number
    ip: string
    userAgent: string
    referrer: string | null
    timestamp: Date
    visitCount: number
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
    pages?: boolean | Visitor$pagesArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "userAgent" | "referrer" | "timestamp" | "visitCount", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | Visitor$pagesArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      pages: Prisma.$PageVisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      userAgent: string
      referrer: string | null
      timestamp: Date
      visitCount: number
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
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
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends Visitor$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'Int'>
    readonly ip: FieldRef<"Visitor", 'String'>
    readonly userAgent: FieldRef<"Visitor", 'String'>
    readonly referrer: FieldRef<"Visitor", 'String'>
    readonly timestamp: FieldRef<"Visitor", 'DateTime'>
    readonly visitCount: FieldRef<"Visitor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor.pages
   */
  export type Visitor$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    cursor?: PageVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model PageVisit
   */

  export type AggregatePageVisit = {
    _count: PageVisitCountAggregateOutputType | null
    _avg: PageVisitAvgAggregateOutputType | null
    _sum: PageVisitSumAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  export type PageVisitAvgAggregateOutputType = {
    id: number | null
    visitorId: number | null
    visitCount: number | null
  }

  export type PageVisitSumAggregateOutputType = {
    id: number | null
    visitorId: number | null
    visitCount: number | null
  }

  export type PageVisitMinAggregateOutputType = {
    id: number | null
    url: string | null
    visitorId: number | null
    ip: string | null
    referrer: string | null
    timestamp: Date | null
    visitCount: number | null
  }

  export type PageVisitMaxAggregateOutputType = {
    id: number | null
    url: string | null
    visitorId: number | null
    ip: string | null
    referrer: string | null
    timestamp: Date | null
    visitCount: number | null
  }

  export type PageVisitCountAggregateOutputType = {
    id: number
    url: number
    visitorId: number
    ip: number
    referrer: number
    timestamp: number
    visitCount: number
    _all: number
  }


  export type PageVisitAvgAggregateInputType = {
    id?: true
    visitorId?: true
    visitCount?: true
  }

  export type PageVisitSumAggregateInputType = {
    id?: true
    visitorId?: true
    visitCount?: true
  }

  export type PageVisitMinAggregateInputType = {
    id?: true
    url?: true
    visitorId?: true
    ip?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
  }

  export type PageVisitMaxAggregateInputType = {
    id?: true
    url?: true
    visitorId?: true
    ip?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
  }

  export type PageVisitCountAggregateInputType = {
    id?: true
    url?: true
    visitorId?: true
    ip?: true
    referrer?: true
    timestamp?: true
    visitCount?: true
    _all?: true
  }

  export type PageVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisit to aggregate.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageVisits
    **/
    _count?: true | PageVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageVisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageVisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageVisitMaxAggregateInputType
  }

  export type GetPageVisitAggregateType<T extends PageVisitAggregateArgs> = {
        [P in keyof T & keyof AggregatePageVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageVisit[P]>
      : GetScalarType<T[P], AggregatePageVisit[P]>
  }




  export type PageVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithAggregationInput | PageVisitOrderByWithAggregationInput[]
    by: PageVisitScalarFieldEnum[] | PageVisitScalarFieldEnum
    having?: PageVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageVisitCountAggregateInputType | true
    _avg?: PageVisitAvgAggregateInputType
    _sum?: PageVisitSumAggregateInputType
    _min?: PageVisitMinAggregateInputType
    _max?: PageVisitMaxAggregateInputType
  }

  export type PageVisitGroupByOutputType = {
    id: number
    url: string
    visitorId: number
    ip: string
    referrer: string
    timestamp: Date
    visitCount: number
    _count: PageVisitCountAggregateOutputType | null
    _avg: PageVisitAvgAggregateOutputType | null
    _sum: PageVisitSumAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  type GetPageVisitGroupByPayload<T extends PageVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
            : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
        }
      >
    >


  export type PageVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    visitorId?: boolean
    ip?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    visitorId?: boolean
    ip?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    visitorId?: boolean
    ip?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectScalar = {
    id?: boolean
    url?: boolean
    visitorId?: boolean
    ip?: boolean
    referrer?: boolean
    timestamp?: boolean
    visitCount?: boolean
  }

  export type PageVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "visitorId" | "ip" | "referrer" | "timestamp" | "visitCount", ExtArgs["result"]["pageVisit"]>
  export type PageVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PageVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PageVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $PageVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageVisit"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      visitorId: number
      ip: string
      referrer: string
      timestamp: Date
      visitCount: number
    }, ExtArgs["result"]["pageVisit"]>
    composites: {}
  }

  type PageVisitGetPayload<S extends boolean | null | undefined | PageVisitDefaultArgs> = $Result.GetResult<Prisma.$PageVisitPayload, S>

  type PageVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageVisitCountAggregateInputType | true
    }

  export interface PageVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageVisit'], meta: { name: 'PageVisit' } }
    /**
     * Find zero or one PageVisit that matches the filter.
     * @param {PageVisitFindUniqueArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageVisitFindUniqueArgs>(args: SelectSubset<T, PageVisitFindUniqueArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageVisitFindUniqueOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, PageVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageVisitFindFirstArgs>(args?: SelectSubset<T, PageVisitFindFirstArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, PageVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageVisits
     * const pageVisits = await prisma.pageVisit.findMany()
     * 
     * // Get first 10 PageVisits
     * const pageVisits = await prisma.pageVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageVisitFindManyArgs>(args?: SelectSubset<T, PageVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageVisit.
     * @param {PageVisitCreateArgs} args - Arguments to create a PageVisit.
     * @example
     * // Create one PageVisit
     * const PageVisit = await prisma.pageVisit.create({
     *   data: {
     *     // ... data to create a PageVisit
     *   }
     * })
     * 
     */
    create<T extends PageVisitCreateArgs>(args: SelectSubset<T, PageVisitCreateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageVisits.
     * @param {PageVisitCreateManyArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageVisitCreateManyArgs>(args?: SelectSubset<T, PageVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageVisits and returns the data saved in the database.
     * @param {PageVisitCreateManyAndReturnArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, PageVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageVisit.
     * @param {PageVisitDeleteArgs} args - Arguments to delete one PageVisit.
     * @example
     * // Delete one PageVisit
     * const PageVisit = await prisma.pageVisit.delete({
     *   where: {
     *     // ... filter to delete one PageVisit
     *   }
     * })
     * 
     */
    delete<T extends PageVisitDeleteArgs>(args: SelectSubset<T, PageVisitDeleteArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageVisit.
     * @param {PageVisitUpdateArgs} args - Arguments to update one PageVisit.
     * @example
     * // Update one PageVisit
     * const pageVisit = await prisma.pageVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageVisitUpdateArgs>(args: SelectSubset<T, PageVisitUpdateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageVisits.
     * @param {PageVisitDeleteManyArgs} args - Arguments to filter PageVisits to delete.
     * @example
     * // Delete a few PageVisits
     * const { count } = await prisma.pageVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageVisitDeleteManyArgs>(args?: SelectSubset<T, PageVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageVisitUpdateManyArgs>(args: SelectSubset<T, PageVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits and returns the data updated in the database.
     * @param {PageVisitUpdateManyAndReturnArgs} args - Arguments to update many PageVisits.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, PageVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageVisit.
     * @param {PageVisitUpsertArgs} args - Arguments to update or create a PageVisit.
     * @example
     * // Update or create a PageVisit
     * const pageVisit = await prisma.pageVisit.upsert({
     *   create: {
     *     // ... data to create a PageVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageVisit we want to update
     *   }
     * })
     */
    upsert<T extends PageVisitUpsertArgs>(args: SelectSubset<T, PageVisitUpsertArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitCountArgs} args - Arguments to filter PageVisits to count.
     * @example
     * // Count the number of PageVisits
     * const count = await prisma.pageVisit.count({
     *   where: {
     *     // ... the filter for the PageVisits we want to count
     *   }
     * })
    **/
    count<T extends PageVisitCountArgs>(
      args?: Subset<T, PageVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageVisitAggregateArgs>(args: Subset<T, PageVisitAggregateArgs>): Prisma.PrismaPromise<GetPageVisitAggregateType<T>>

    /**
     * Group by PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitGroupByArgs} args - Group by arguments.
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
      T extends PageVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageVisitGroupByArgs['orderBy'] }
        : { orderBy?: PageVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageVisit model
   */
  readonly fields: PageVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PageVisit model
   */
  interface PageVisitFieldRefs {
    readonly id: FieldRef<"PageVisit", 'Int'>
    readonly url: FieldRef<"PageVisit", 'String'>
    readonly visitorId: FieldRef<"PageVisit", 'Int'>
    readonly ip: FieldRef<"PageVisit", 'String'>
    readonly referrer: FieldRef<"PageVisit", 'String'>
    readonly timestamp: FieldRef<"PageVisit", 'DateTime'>
    readonly visitCount: FieldRef<"PageVisit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PageVisit findUnique
   */
  export type PageVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findUniqueOrThrow
   */
  export type PageVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findFirst
   */
  export type PageVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findFirstOrThrow
   */
  export type PageVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findMany
   */
  export type PageVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisits to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit create
   */
  export type PageVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a PageVisit.
     */
    data: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
  }

  /**
   * PageVisit createMany
   */
  export type PageVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageVisit createManyAndReturn
   */
  export type PageVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit update
   */
  export type PageVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a PageVisit.
     */
    data: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
    /**
     * Choose, which PageVisit to update.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit updateMany
   */
  export type PageVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
  }

  /**
   * PageVisit updateManyAndReturn
   */
  export type PageVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit upsert
   */
  export type PageVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the PageVisit to update in case it exists.
     */
    where: PageVisitWhereUniqueInput
    /**
     * In case the PageVisit found by the `where` argument doesn't exist, create a new PageVisit with this data.
     */
    create: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
    /**
     * In case the PageVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
  }

  /**
   * PageVisit delete
   */
  export type PageVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter which PageVisit to delete.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit deleteMany
   */
  export type PageVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisits to delete
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to delete.
     */
    limit?: number
  }

  /**
   * PageVisit without action
   */
  export type PageVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userId: string | null
    sessionToken: string | null
    productId: number | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    sessionToken: string | null
    productId: number | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    sessionToken: number
    productId: number
    createdAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    productId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    productId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    sessionToken?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    userId: string | null
    sessionToken: string | null
    productId: number
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionToken?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionToken" | "productId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Favorite$userArgs<ExtArgs>
    product?: boolean | Favorite$productArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      sessionToken: string | null
      productId: number
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Favorite$userArgs<ExtArgs> = {}>(args?: Subset<T, Favorite$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends Favorite$productArgs<ExtArgs> = {}>(args?: Subset<T, Favorite$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly sessionToken: FieldRef<"Favorite", 'String'>
    readonly productId: FieldRef<"Favorite", 'Int'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite.user
   */
  export type Favorite$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Favorite.product
   */
  export type Favorite$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    wpId: 'wpId',
    name: 'name',
    slug: 'slug',
    hash: 'hash',
    permalink: 'permalink',
    dateCreated: 'dateCreated',
    dateModified: 'dateModified',
    type: 'type',
    status: 'status',
    featured: 'featured',
    catalogVisibility: 'catalogVisibility',
    description: 'description',
    shortDescription: 'shortDescription',
    sku: 'sku',
    price: 'price',
    regularPrice: 'regularPrice',
    salePrice: 'salePrice',
    onSale: 'onSale',
    purchasable: 'purchasable',
    totalSales: 'totalSales',
    manageStock: 'manageStock',
    stockQuantity: 'stockQuantity',
    weight: 'weight',
    dimensions: 'dimensions',
    shippingRequired: 'shippingRequired',
    shippingTaxable: 'shippingTaxable',
    reviewsAllowed: 'reviewsAllowed',
    averageRating: 'averageRating',
    ratingCount: 'ratingCount',
    relatedIds: 'relatedIds',
    categories: 'categories',
    tags: 'tags',
    images: 'images',
    attributes: 'attributes',
    variations: 'variations',
    metaData: 'metaData',
    stockStatus: 'stockStatus',
    brands: 'brands',
    inCart: 'inCart'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariationScalarFieldEnum: {
    id: 'id',
    wpId: 'wpId',
    productId: 'productId',
    name: 'name',
    hash: 'hash',
    permalink: 'permalink',
    dateCreated: 'dateCreated',
    dateModified: 'dateModified',
    status: 'status',
    description: 'description',
    shortDescription: 'shortDescription',
    sku: 'sku',
    price: 'price',
    regularPrice: 'regularPrice',
    salePrice: 'salePrice',
    image: 'image',
    attributes: 'attributes'
  };

  export type VariationScalarFieldEnum = (typeof VariationScalarFieldEnum)[keyof typeof VariationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    wpId: 'wpId',
    name: 'name',
    slug: 'slug',
    hash: 'hash',
    parent: 'parent',
    description: 'description',
    display: 'display',
    image: 'image',
    menuOrder: 'menuOrder',
    count: 'count',
    featured: 'featured'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionToken: 'sessionToken'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    variationId: 'variationId',
    quantity: 'quantity',
    price: 'price'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    billing: 'billing',
    shipping: 'shipping',
    isPayingUser: 'isPayingUser',
    avatarUrl: 'avatarUrl',
    hash: 'hash',
    dateCreated: 'dateCreated',
    dateModified: 'dateModified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AppSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type AppSessionScalarFieldEnum = (typeof AppSessionScalarFieldEnum)[keyof typeof AppSessionScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    userAgent: 'userAgent',
    referrer: 'referrer',
    timestamp: 'timestamp',
    visitCount: 'visitCount'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const PageVisitScalarFieldEnum: {
    id: 'id',
    url: 'url',
    visitorId: 'visitorId',
    ip: 'ip',
    referrer: 'referrer',
    timestamp: 'timestamp',
    visitCount: 'visitCount'
  };

  export type PageVisitScalarFieldEnum = (typeof PageVisitScalarFieldEnum)[keyof typeof PageVisitScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionToken: 'sessionToken',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    wpId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    hash?: StringFilter<"Product"> | string
    permalink?: StringFilter<"Product"> | string
    dateCreated?: DateTimeFilter<"Product"> | Date | string
    dateModified?: DateTimeFilter<"Product"> | Date | string
    type?: StringFilter<"Product"> | string
    status?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    catalogVisibility?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    shortDescription?: StringNullableFilter<"Product"> | string | null
    sku?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    regularPrice?: StringNullableFilter<"Product"> | string | null
    salePrice?: StringNullableFilter<"Product"> | string | null
    onSale?: BoolFilter<"Product"> | boolean
    purchasable?: BoolFilter<"Product"> | boolean
    totalSales?: IntFilter<"Product"> | number
    manageStock?: BoolFilter<"Product"> | boolean
    stockQuantity?: IntNullableFilter<"Product"> | number | null
    weight?: StringNullableFilter<"Product"> | string | null
    dimensions?: JsonNullableFilter<"Product">
    shippingRequired?: BoolFilter<"Product"> | boolean
    shippingTaxable?: BoolFilter<"Product"> | boolean
    reviewsAllowed?: BoolFilter<"Product"> | boolean
    averageRating?: FloatFilter<"Product"> | number
    ratingCount?: IntFilter<"Product"> | number
    relatedIds?: JsonNullableFilter<"Product">
    categories?: JsonNullableFilter<"Product">
    tags?: JsonNullableFilter<"Product">
    images?: JsonNullableFilter<"Product">
    attributes?: JsonNullableFilter<"Product">
    variations?: JsonNullableFilter<"Product">
    metaData?: JsonNullableFilter<"Product">
    stockStatus?: StringFilter<"Product"> | string
    brands?: JsonNullableFilter<"Product">
    inCart?: BoolFilter<"Product"> | boolean
    Variation?: VariationListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    type?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    catalogVisibility?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    regularPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    onSale?: SortOrder
    purchasable?: SortOrder
    totalSales?: SortOrder
    manageStock?: SortOrder
    stockQuantity?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    shippingRequired?: SortOrder
    shippingTaxable?: SortOrder
    reviewsAllowed?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    relatedIds?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    variations?: SortOrderInput | SortOrder
    metaData?: SortOrderInput | SortOrder
    stockStatus?: SortOrder
    brands?: SortOrderInput | SortOrder
    inCart?: SortOrder
    Variation?: VariationOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wpId?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    hash?: StringFilter<"Product"> | string
    permalink?: StringFilter<"Product"> | string
    dateCreated?: DateTimeFilter<"Product"> | Date | string
    dateModified?: DateTimeFilter<"Product"> | Date | string
    type?: StringFilter<"Product"> | string
    status?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    catalogVisibility?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    shortDescription?: StringNullableFilter<"Product"> | string | null
    sku?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    regularPrice?: StringNullableFilter<"Product"> | string | null
    salePrice?: StringNullableFilter<"Product"> | string | null
    onSale?: BoolFilter<"Product"> | boolean
    purchasable?: BoolFilter<"Product"> | boolean
    totalSales?: IntFilter<"Product"> | number
    manageStock?: BoolFilter<"Product"> | boolean
    stockQuantity?: IntNullableFilter<"Product"> | number | null
    weight?: StringNullableFilter<"Product"> | string | null
    dimensions?: JsonNullableFilter<"Product">
    shippingRequired?: BoolFilter<"Product"> | boolean
    shippingTaxable?: BoolFilter<"Product"> | boolean
    reviewsAllowed?: BoolFilter<"Product"> | boolean
    averageRating?: FloatFilter<"Product"> | number
    ratingCount?: IntFilter<"Product"> | number
    relatedIds?: JsonNullableFilter<"Product">
    categories?: JsonNullableFilter<"Product">
    tags?: JsonNullableFilter<"Product">
    images?: JsonNullableFilter<"Product">
    attributes?: JsonNullableFilter<"Product">
    variations?: JsonNullableFilter<"Product">
    metaData?: JsonNullableFilter<"Product">
    stockStatus?: StringFilter<"Product"> | string
    brands?: JsonNullableFilter<"Product">
    inCart?: BoolFilter<"Product"> | boolean
    Variation?: VariationListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "wpId" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    type?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    catalogVisibility?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    regularPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    onSale?: SortOrder
    purchasable?: SortOrder
    totalSales?: SortOrder
    manageStock?: SortOrder
    stockQuantity?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    shippingRequired?: SortOrder
    shippingTaxable?: SortOrder
    reviewsAllowed?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    relatedIds?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    variations?: SortOrderInput | SortOrder
    metaData?: SortOrderInput | SortOrder
    stockStatus?: SortOrder
    brands?: SortOrderInput | SortOrder
    inCart?: SortOrder
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
    id?: IntWithAggregatesFilter<"Product"> | number
    wpId?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    hash?: StringWithAggregatesFilter<"Product"> | string
    permalink?: StringWithAggregatesFilter<"Product"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    dateModified?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    type?: StringWithAggregatesFilter<"Product"> | string
    status?: StringWithAggregatesFilter<"Product"> | string
    featured?: BoolWithAggregatesFilter<"Product"> | boolean
    catalogVisibility?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Product"> | string | null
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    regularPrice?: StringNullableWithAggregatesFilter<"Product"> | string | null
    salePrice?: StringNullableWithAggregatesFilter<"Product"> | string | null
    onSale?: BoolWithAggregatesFilter<"Product"> | boolean
    purchasable?: BoolWithAggregatesFilter<"Product"> | boolean
    totalSales?: IntWithAggregatesFilter<"Product"> | number
    manageStock?: BoolWithAggregatesFilter<"Product"> | boolean
    stockQuantity?: IntNullableWithAggregatesFilter<"Product"> | number | null
    weight?: StringNullableWithAggregatesFilter<"Product"> | string | null
    dimensions?: JsonNullableWithAggregatesFilter<"Product">
    shippingRequired?: BoolWithAggregatesFilter<"Product"> | boolean
    shippingTaxable?: BoolWithAggregatesFilter<"Product"> | boolean
    reviewsAllowed?: BoolWithAggregatesFilter<"Product"> | boolean
    averageRating?: FloatWithAggregatesFilter<"Product"> | number
    ratingCount?: IntWithAggregatesFilter<"Product"> | number
    relatedIds?: JsonNullableWithAggregatesFilter<"Product">
    categories?: JsonNullableWithAggregatesFilter<"Product">
    tags?: JsonNullableWithAggregatesFilter<"Product">
    images?: JsonNullableWithAggregatesFilter<"Product">
    attributes?: JsonNullableWithAggregatesFilter<"Product">
    variations?: JsonNullableWithAggregatesFilter<"Product">
    metaData?: JsonNullableWithAggregatesFilter<"Product">
    stockStatus?: StringWithAggregatesFilter<"Product"> | string
    brands?: JsonNullableWithAggregatesFilter<"Product">
    inCart?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type VariationWhereInput = {
    AND?: VariationWhereInput | VariationWhereInput[]
    OR?: VariationWhereInput[]
    NOT?: VariationWhereInput | VariationWhereInput[]
    id?: IntFilter<"Variation"> | number
    wpId?: IntFilter<"Variation"> | number
    productId?: IntFilter<"Variation"> | number
    name?: StringFilter<"Variation"> | string
    hash?: StringFilter<"Variation"> | string
    permalink?: StringFilter<"Variation"> | string
    dateCreated?: DateTimeFilter<"Variation"> | Date | string
    dateModified?: DateTimeFilter<"Variation"> | Date | string
    status?: StringFilter<"Variation"> | string
    description?: StringNullableFilter<"Variation"> | string | null
    shortDescription?: StringNullableFilter<"Variation"> | string | null
    sku?: StringNullableFilter<"Variation"> | string | null
    price?: FloatFilter<"Variation"> | number
    regularPrice?: StringNullableFilter<"Variation"> | string | null
    salePrice?: StringNullableFilter<"Variation"> | string | null
    image?: JsonNullableFilter<"Variation">
    attributes?: JsonNullableFilter<"Variation">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VariationOrderByWithRelationInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    regularPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type VariationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wpId?: number
    AND?: VariationWhereInput | VariationWhereInput[]
    OR?: VariationWhereInput[]
    NOT?: VariationWhereInput | VariationWhereInput[]
    productId?: IntFilter<"Variation"> | number
    name?: StringFilter<"Variation"> | string
    hash?: StringFilter<"Variation"> | string
    permalink?: StringFilter<"Variation"> | string
    dateCreated?: DateTimeFilter<"Variation"> | Date | string
    dateModified?: DateTimeFilter<"Variation"> | Date | string
    status?: StringFilter<"Variation"> | string
    description?: StringNullableFilter<"Variation"> | string | null
    shortDescription?: StringNullableFilter<"Variation"> | string | null
    sku?: StringNullableFilter<"Variation"> | string | null
    price?: FloatFilter<"Variation"> | number
    regularPrice?: StringNullableFilter<"Variation"> | string | null
    salePrice?: StringNullableFilter<"Variation"> | string | null
    image?: JsonNullableFilter<"Variation">
    attributes?: JsonNullableFilter<"Variation">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "wpId">

  export type VariationOrderByWithAggregationInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    price?: SortOrder
    regularPrice?: SortOrderInput | SortOrder
    salePrice?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    attributes?: SortOrderInput | SortOrder
    _count?: VariationCountOrderByAggregateInput
    _avg?: VariationAvgOrderByAggregateInput
    _max?: VariationMaxOrderByAggregateInput
    _min?: VariationMinOrderByAggregateInput
    _sum?: VariationSumOrderByAggregateInput
  }

  export type VariationScalarWhereWithAggregatesInput = {
    AND?: VariationScalarWhereWithAggregatesInput | VariationScalarWhereWithAggregatesInput[]
    OR?: VariationScalarWhereWithAggregatesInput[]
    NOT?: VariationScalarWhereWithAggregatesInput | VariationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Variation"> | number
    wpId?: IntWithAggregatesFilter<"Variation"> | number
    productId?: IntWithAggregatesFilter<"Variation"> | number
    name?: StringWithAggregatesFilter<"Variation"> | string
    hash?: StringWithAggregatesFilter<"Variation"> | string
    permalink?: StringWithAggregatesFilter<"Variation"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"Variation"> | Date | string
    dateModified?: DateTimeWithAggregatesFilter<"Variation"> | Date | string
    status?: StringWithAggregatesFilter<"Variation"> | string
    description?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    sku?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    price?: FloatWithAggregatesFilter<"Variation"> | number
    regularPrice?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    salePrice?: StringNullableWithAggregatesFilter<"Variation"> | string | null
    image?: JsonNullableWithAggregatesFilter<"Variation">
    attributes?: JsonNullableWithAggregatesFilter<"Variation">
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    wpId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    hash?: StringFilter<"Category"> | string
    parent?: IntNullableFilter<"Category"> | number | null
    description?: StringNullableFilter<"Category"> | string | null
    display?: StringFilter<"Category"> | string
    image?: JsonNullableFilter<"Category">
    menuOrder?: IntFilter<"Category"> | number
    count?: IntFilter<"Category"> | number
    featured?: BoolFilter<"Category"> | boolean
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    parent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    display?: SortOrder
    image?: SortOrderInput | SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
    featured?: SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wpId?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    hash?: StringFilter<"Category"> | string
    parent?: IntNullableFilter<"Category"> | number | null
    description?: StringNullableFilter<"Category"> | string | null
    display?: StringFilter<"Category"> | string
    image?: JsonNullableFilter<"Category">
    menuOrder?: IntFilter<"Category"> | number
    count?: IntFilter<"Category"> | number
    featured?: BoolFilter<"Category"> | boolean
  }, "id" | "wpId" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    parent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    display?: SortOrder
    image?: SortOrderInput | SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
    featured?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    wpId?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    hash?: StringWithAggregatesFilter<"Category"> | string
    parent?: IntNullableWithAggregatesFilter<"Category"> | number | null
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    display?: StringWithAggregatesFilter<"Category"> | string
    image?: JsonNullableWithAggregatesFilter<"Category">
    menuOrder?: IntWithAggregatesFilter<"Category"> | number
    count?: IntWithAggregatesFilter<"Category"> | number
    featured?: BoolWithAggregatesFilter<"Category"> | boolean
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    userId?: StringNullableFilter<"Cart"> | string | null
    sessionToken?: StringNullableFilter<"Cart"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    sessionToken?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: CartItemListRelationFilter
  }, "id" | "userId" | "sessionToken">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    userId?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"Cart"> | string | null
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variationId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    cart?: CartOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variationId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItem"> | number
    cartId?: IntWithAggregatesFilter<"CartItem"> | number
    productId?: IntWithAggregatesFilter<"CartItem"> | number
    variationId?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    price?: FloatWithAggregatesFilter<"CartItem"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    billing?: JsonNullableFilter<"User">
    shipping?: JsonNullableFilter<"User">
    isPayingUser?: BoolNullableFilter<"User"> | boolean | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    hash?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    dateModified?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    favorites?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    billing?: SortOrderInput | SortOrder
    shipping?: SortOrderInput | SortOrder
    isPayingUser?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    hash?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    cart?: CartOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    billing?: JsonNullableFilter<"User">
    shipping?: JsonNullableFilter<"User">
    isPayingUser?: BoolNullableFilter<"User"> | boolean | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    hash?: StringNullableFilter<"User"> | string | null
    dateCreated?: DateTimeFilter<"User"> | Date | string
    dateModified?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    favorites?: FavoriteListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    billing?: SortOrderInput | SortOrder
    shipping?: SortOrderInput | SortOrder
    isPayingUser?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    hash?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    billing?: JsonNullableWithAggregatesFilter<"User">
    shipping?: JsonNullableWithAggregatesFilter<"User">
    isPayingUser?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    dateModified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AppSessionWhereInput = {
    AND?: AppSessionWhereInput | AppSessionWhereInput[]
    OR?: AppSessionWhereInput[]
    NOT?: AppSessionWhereInput | AppSessionWhereInput[]
    id?: StringFilter<"AppSession"> | string
    userId?: StringNullableFilter<"AppSession"> | string | null
    createdAt?: DateTimeFilter<"AppSession"> | Date | string
    expiresAt?: DateTimeFilter<"AppSession"> | Date | string
  }

  export type AppSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppSessionWhereInput | AppSessionWhereInput[]
    OR?: AppSessionWhereInput[]
    NOT?: AppSessionWhereInput | AppSessionWhereInput[]
    userId?: StringNullableFilter<"AppSession"> | string | null
    createdAt?: DateTimeFilter<"AppSession"> | Date | string
    expiresAt?: DateTimeFilter<"AppSession"> | Date | string
  }, "id">

  export type AppSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: AppSessionCountOrderByAggregateInput
    _max?: AppSessionMaxOrderByAggregateInput
    _min?: AppSessionMinOrderByAggregateInput
  }

  export type AppSessionScalarWhereWithAggregatesInput = {
    AND?: AppSessionScalarWhereWithAggregatesInput | AppSessionScalarWhereWithAggregatesInput[]
    OR?: AppSessionScalarWhereWithAggregatesInput[]
    NOT?: AppSessionScalarWhereWithAggregatesInput | AppSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSession"> | string
    userId?: StringNullableWithAggregatesFilter<"AppSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AppSession"> | Date | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: IntFilter<"Visitor"> | number
    ip?: StringFilter<"Visitor"> | string
    userAgent?: StringFilter<"Visitor"> | string
    referrer?: StringNullableFilter<"Visitor"> | string | null
    timestamp?: DateTimeFilter<"Visitor"> | Date | string
    visitCount?: IntFilter<"Visitor"> | number
    pages?: PageVisitListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
    pages?: PageVisitOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ip?: string
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    userAgent?: StringFilter<"Visitor"> | string
    referrer?: StringNullableFilter<"Visitor"> | string | null
    timestamp?: DateTimeFilter<"Visitor"> | Date | string
    visitCount?: IntFilter<"Visitor"> | number
    pages?: PageVisitListRelationFilter
  }, "id" | "ip">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _avg?: VisitorAvgOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
    _sum?: VisitorSumOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visitor"> | number
    ip?: StringWithAggregatesFilter<"Visitor"> | string
    userAgent?: StringWithAggregatesFilter<"Visitor"> | string
    referrer?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    visitCount?: IntWithAggregatesFilter<"Visitor"> | number
  }

  export type PageVisitWhereInput = {
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    id?: IntFilter<"PageVisit"> | number
    url?: StringFilter<"PageVisit"> | string
    visitorId?: IntFilter<"PageVisit"> | number
    ip?: StringFilter<"PageVisit"> | string
    referrer?: StringFilter<"PageVisit"> | string
    timestamp?: DateTimeFilter<"PageVisit"> | Date | string
    visitCount?: IntFilter<"PageVisit"> | number
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type PageVisitOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    visitorId?: SortOrder
    ip?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type PageVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url_visitorId?: PageVisitUrlVisitorIdCompoundUniqueInput
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    url?: StringFilter<"PageVisit"> | string
    visitorId?: IntFilter<"PageVisit"> | number
    ip?: StringFilter<"PageVisit"> | string
    referrer?: StringFilter<"PageVisit"> | string
    timestamp?: DateTimeFilter<"PageVisit"> | Date | string
    visitCount?: IntFilter<"PageVisit"> | number
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id" | "url_visitorId">

  export type PageVisitOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    visitorId?: SortOrder
    ip?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
    _count?: PageVisitCountOrderByAggregateInput
    _avg?: PageVisitAvgOrderByAggregateInput
    _max?: PageVisitMaxOrderByAggregateInput
    _min?: PageVisitMinOrderByAggregateInput
    _sum?: PageVisitSumOrderByAggregateInput
  }

  export type PageVisitScalarWhereWithAggregatesInput = {
    AND?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    OR?: PageVisitScalarWhereWithAggregatesInput[]
    NOT?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageVisit"> | number
    url?: StringWithAggregatesFilter<"PageVisit"> | string
    visitorId?: IntWithAggregatesFilter<"PageVisit"> | number
    ip?: StringWithAggregatesFilter<"PageVisit"> | string
    referrer?: StringWithAggregatesFilter<"PageVisit"> | string
    timestamp?: DateTimeWithAggregatesFilter<"PageVisit"> | Date | string
    visitCount?: IntWithAggregatesFilter<"PageVisit"> | number
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringNullableFilter<"Favorite"> | string | null
    sessionToken?: StringNullableFilter<"Favorite"> | string | null
    productId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_productId?: FavoriteUserIdProductIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringNullableFilter<"Favorite"> | string | null
    sessionToken?: StringNullableFilter<"Favorite"> | string | null
    productId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id" | "userId_productId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favorite"> | number
    userId?: StringNullableWithAggregatesFilter<"Favorite"> | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"Favorite"> | string | null
    productId?: IntWithAggregatesFilter<"Favorite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type ProductCreateInput = {
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    Variation?: VariationCreateNestedManyWithoutProductInput
    favorites?: FavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    Variation?: VariationUncheckedCreateNestedManyWithoutProductInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    Variation?: VariationUpdateManyWithoutProductNestedInput
    favorites?: FavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    Variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
  }

  export type ProductUpdateManyMutationInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationCreateInput = {
    wpId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutVariationInput
  }

  export type VariationUncheckedCreateInput = {
    id?: number
    wpId: number
    productId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUpdateInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutVariationNestedInput
  }

  export type VariationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationCreateManyInput = {
    id?: number
    wpId: number
    productId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUpdateManyMutationInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CategoryCreateInput = {
    wpId: number
    name: string
    slug: string
    hash?: string
    parent?: number | null
    description?: string | null
    display: string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder: number
    count: number
    featured: boolean
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash?: string
    parent?: number | null
    description?: string | null
    display: string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder: number
    count: number
    featured: boolean
  }

  export type CategoryUpdateInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    display?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    display?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateManyInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash?: string
    parent?: number | null
    description?: string | null
    display: string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder: number
    count: number
    featured: boolean
  }

  export type CategoryUpdateManyMutationInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    display?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    display?: StringFieldUpdateOperationsInput | string
    image?: NullableJsonNullValueInput | InputJsonValue
    menuOrder?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CartCreateInput = {
    sessionToken?: string | null
    user?: UserCreateNestedOneWithoutCartInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCartNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
  }

  export type CartUpdateManyMutationInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemCreateInput = {
    productId: number
    variationId: number
    quantity: number
    price: number
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    cartId: number
    productId: number
    variationId: number
    quantity: number
    price: number
  }

  export type CartItemUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyInput = {
    id?: number
    cartId: number
    productId: number
    variationId: number
    quantity: number
    price: number
  }

  export type CartItemUpdateManyMutationInput = {
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionCreateInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AppSessionUncheckedCreateInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AppSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionCreateManyInput = {
    id: string
    userId?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AppSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateInput = {
    ip: string
    userAgent: string
    referrer?: string | null
    timestamp: Date | string
    visitCount?: number
    pages?: PageVisitCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: number
    ip: string
    userAgent: string
    referrer?: string | null
    timestamp: Date | string
    visitCount?: number
    pages?: PageVisitUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    pages?: PageVisitUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    pages?: PageVisitUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: number
    ip: string
    userAgent: string
    referrer?: string | null
    timestamp: Date | string
    visitCount?: number
  }

  export type VisitorUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type PageVisitCreateInput = {
    url: string
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
    visitor: VisitorCreateNestedOneWithoutPagesInput
  }

  export type PageVisitUncheckedCreateInput = {
    id?: number
    url: string
    visitorId: number
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
  }

  export type PageVisitUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
    visitor?: VisitorUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageVisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    visitorId?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type PageVisitCreateManyInput = {
    id?: number
    url: string
    visitorId: number
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
  }

  export type PageVisitUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type PageVisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    visitorId?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateInput = {
    sessionToken?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutFavoritesInput
    product?: ProductCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFavoritesNestedInput
    product?: ProductUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VariationListRelationFilter = {
    every?: VariationWhereInput
    some?: VariationWhereInput
    none?: VariationWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    type?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    catalogVisibility?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
    onSale?: SortOrder
    purchasable?: SortOrder
    totalSales?: SortOrder
    manageStock?: SortOrder
    stockQuantity?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    shippingRequired?: SortOrder
    shippingTaxable?: SortOrder
    reviewsAllowed?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    relatedIds?: SortOrder
    categories?: SortOrder
    tags?: SortOrder
    images?: SortOrder
    attributes?: SortOrder
    variations?: SortOrder
    metaData?: SortOrder
    stockStatus?: SortOrder
    brands?: SortOrder
    inCart?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    price?: SortOrder
    totalSales?: SortOrder
    stockQuantity?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    type?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    catalogVisibility?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
    onSale?: SortOrder
    purchasable?: SortOrder
    totalSales?: SortOrder
    manageStock?: SortOrder
    stockQuantity?: SortOrder
    weight?: SortOrder
    shippingRequired?: SortOrder
    shippingTaxable?: SortOrder
    reviewsAllowed?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    stockStatus?: SortOrder
    inCart?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    type?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    catalogVisibility?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
    onSale?: SortOrder
    purchasable?: SortOrder
    totalSales?: SortOrder
    manageStock?: SortOrder
    stockQuantity?: SortOrder
    weight?: SortOrder
    shippingRequired?: SortOrder
    shippingTaxable?: SortOrder
    reviewsAllowed?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    stockStatus?: SortOrder
    inCart?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    price?: SortOrder
    totalSales?: SortOrder
    stockQuantity?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariationCountOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    status?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
    image?: SortOrder
    attributes?: SortOrder
  }

  export type VariationAvgOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type VariationMaxOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    status?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
  }

  export type VariationMinOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    hash?: SortOrder
    permalink?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
    status?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    regularPrice?: SortOrder
    salePrice?: SortOrder
  }

  export type VariationSumOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    productId?: SortOrder
    price?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    parent?: SortOrder
    description?: SortOrder
    display?: SortOrder
    image?: SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
    featured?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    parent?: SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    parent?: SortOrder
    description?: SortOrder
    display?: SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
    featured?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    hash?: SortOrder
    parent?: SortOrder
    description?: SortOrder
    display?: SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
    featured?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    wpId?: SortOrder
    parent?: SortOrder
    menuOrder?: SortOrder
    count?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variationId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    billing?: SortOrder
    shipping?: SortOrder
    isPayingUser?: SortOrder
    avatarUrl?: SortOrder
    hash?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isPayingUser?: SortOrder
    avatarUrl?: SortOrder
    hash?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isPayingUser?: SortOrder
    avatarUrl?: SortOrder
    hash?: SortOrder
    dateCreated?: SortOrder
    dateModified?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type PageVisitListRelationFilter = {
    every?: PageVisitWhereInput
    some?: PageVisitWhereInput
    none?: PageVisitWhereInput
  }

  export type PageVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type VisitorAvgOrderByAggregateInput = {
    id?: SortOrder
    visitCount?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type VisitorSumOrderByAggregateInput = {
    id?: SortOrder
    visitCount?: SortOrder
  }

  export type VisitorScalarRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type PageVisitUrlVisitorIdCompoundUniqueInput = {
    url: string
    visitorId: number
  }

  export type PageVisitCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    visitorId?: SortOrder
    ip?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type PageVisitAvgOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    visitCount?: SortOrder
  }

  export type PageVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    visitorId?: SortOrder
    ip?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type PageVisitMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    visitorId?: SortOrder
    ip?: SortOrder
    referrer?: SortOrder
    timestamp?: SortOrder
    visitCount?: SortOrder
  }

  export type PageVisitSumOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    visitCount?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type FavoriteUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: number
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionToken?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type VariationCreateNestedManyWithoutProductInput = {
    create?: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput> | VariationCreateWithoutProductInput[] | VariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutProductInput | VariationCreateOrConnectWithoutProductInput[]
    createMany?: VariationCreateManyProductInputEnvelope
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type VariationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput> | VariationCreateWithoutProductInput[] | VariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutProductInput | VariationCreateOrConnectWithoutProductInput[]
    createMany?: VariationCreateManyProductInputEnvelope
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VariationUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput> | VariationCreateWithoutProductInput[] | VariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutProductInput | VariationCreateOrConnectWithoutProductInput[]
    upsert?: VariationUpsertWithWhereUniqueWithoutProductInput | VariationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariationCreateManyProductInputEnvelope
    set?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    disconnect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    delete?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    update?: VariationUpdateWithWhereUniqueWithoutProductInput | VariationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariationUpdateManyWithWhereWithoutProductInput | VariationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariationScalarWhereInput | VariationScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutProductInput | FavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutProductInput | FavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutProductInput | FavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type VariationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput> | VariationCreateWithoutProductInput[] | VariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationCreateOrConnectWithoutProductInput | VariationCreateOrConnectWithoutProductInput[]
    upsert?: VariationUpsertWithWhereUniqueWithoutProductInput | VariationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariationCreateManyProductInputEnvelope
    set?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    disconnect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    delete?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    connect?: VariationWhereUniqueInput | VariationWhereUniqueInput[]
    update?: VariationUpdateWithWhereUniqueWithoutProductInput | VariationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariationUpdateManyWithWhereWithoutProductInput | VariationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariationScalarWhereInput | VariationScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutProductInput | FavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutProductInput | FavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutProductInput | FavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariationInput = {
    create?: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVariationNestedInput = {
    create?: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationInput
    upsert?: ProductUpsertWithoutVariationInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariationInput, ProductUpdateWithoutVariationInput>, ProductUncheckedUpdateWithoutVariationInput>
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type PageVisitCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput> | PageVisitCreateWithoutVisitorInput[] | PageVisitUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutVisitorInput | PageVisitCreateOrConnectWithoutVisitorInput[]
    createMany?: PageVisitCreateManyVisitorInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type PageVisitUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput> | PageVisitCreateWithoutVisitorInput[] | PageVisitUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutVisitorInput | PageVisitCreateOrConnectWithoutVisitorInput[]
    createMany?: PageVisitCreateManyVisitorInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type PageVisitUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput> | PageVisitCreateWithoutVisitorInput[] | PageVisitUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutVisitorInput | PageVisitCreateOrConnectWithoutVisitorInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutVisitorInput | PageVisitUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PageVisitCreateManyVisitorInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutVisitorInput | PageVisitUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutVisitorInput | PageVisitUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type PageVisitUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput> | PageVisitCreateWithoutVisitorInput[] | PageVisitUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutVisitorInput | PageVisitCreateOrConnectWithoutVisitorInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutVisitorInput | PageVisitUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PageVisitCreateManyVisitorInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutVisitorInput | PageVisitUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutVisitorInput | PageVisitUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutPagesInput = {
    create?: XOR<VisitorCreateWithoutPagesInput, VisitorUncheckedCreateWithoutPagesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPagesInput
    connect?: VisitorWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<VisitorCreateWithoutPagesInput, VisitorUncheckedCreateWithoutPagesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPagesInput
    upsert?: VisitorUpsertWithoutPagesInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutPagesInput, VisitorUpdateWithoutPagesInput>, VisitorUncheckedUpdateWithoutPagesInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ProductCreateWithoutFavoritesInput, ProductUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritesInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ProductUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<ProductCreateWithoutFavoritesInput, ProductUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFavoritesInput
    upsert?: ProductUpsertWithoutFavoritesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFavoritesInput, ProductUpdateWithoutFavoritesInput>, ProductUncheckedUpdateWithoutFavoritesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VariationCreateWithoutProductInput = {
    wpId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUncheckedCreateWithoutProductInput = {
    id?: number
    wpId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationCreateOrConnectWithoutProductInput = {
    where: VariationWhereUniqueInput
    create: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput>
  }

  export type VariationCreateManyProductInputEnvelope = {
    data: VariationCreateManyProductInput | VariationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutProductInput = {
    sessionToken?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutProductInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput>
  }

  export type FavoriteCreateManyProductInputEnvelope = {
    data: FavoriteCreateManyProductInput | FavoriteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VariationUpsertWithWhereUniqueWithoutProductInput = {
    where: VariationWhereUniqueInput
    update: XOR<VariationUpdateWithoutProductInput, VariationUncheckedUpdateWithoutProductInput>
    create: XOR<VariationCreateWithoutProductInput, VariationUncheckedCreateWithoutProductInput>
  }

  export type VariationUpdateWithWhereUniqueWithoutProductInput = {
    where: VariationWhereUniqueInput
    data: XOR<VariationUpdateWithoutProductInput, VariationUncheckedUpdateWithoutProductInput>
  }

  export type VariationUpdateManyWithWhereWithoutProductInput = {
    where: VariationScalarWhereInput
    data: XOR<VariationUpdateManyMutationInput, VariationUncheckedUpdateManyWithoutProductInput>
  }

  export type VariationScalarWhereInput = {
    AND?: VariationScalarWhereInput | VariationScalarWhereInput[]
    OR?: VariationScalarWhereInput[]
    NOT?: VariationScalarWhereInput | VariationScalarWhereInput[]
    id?: IntFilter<"Variation"> | number
    wpId?: IntFilter<"Variation"> | number
    productId?: IntFilter<"Variation"> | number
    name?: StringFilter<"Variation"> | string
    hash?: StringFilter<"Variation"> | string
    permalink?: StringFilter<"Variation"> | string
    dateCreated?: DateTimeFilter<"Variation"> | Date | string
    dateModified?: DateTimeFilter<"Variation"> | Date | string
    status?: StringFilter<"Variation"> | string
    description?: StringNullableFilter<"Variation"> | string | null
    shortDescription?: StringNullableFilter<"Variation"> | string | null
    sku?: StringNullableFilter<"Variation"> | string | null
    price?: FloatFilter<"Variation"> | number
    regularPrice?: StringNullableFilter<"Variation"> | string | null
    salePrice?: StringNullableFilter<"Variation"> | string | null
    image?: JsonNullableFilter<"Variation">
    attributes?: JsonNullableFilter<"Variation">
  }

  export type FavoriteUpsertWithWhereUniqueWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutProductInput, FavoriteUncheckedUpdateWithoutProductInput>
    create: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutProductInput, FavoriteUncheckedUpdateWithoutProductInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutProductInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutProductInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: IntFilter<"Favorite"> | number
    userId?: StringNullableFilter<"Favorite"> | string | null
    sessionToken?: StringNullableFilter<"Favorite"> | string | null
    productId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type ProductCreateWithoutVariationInput = {
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    favorites?: FavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariationInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    favorites?: FavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
  }

  export type ProductUpsertWithoutVariationInput = {
    update: XOR<ProductUpdateWithoutVariationInput, ProductUncheckedUpdateWithoutVariationInput>
    create: XOR<ProductCreateWithoutVariationInput, ProductUncheckedCreateWithoutVariationInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariationInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariationInput, ProductUncheckedUpdateWithoutVariationInput>
  }

  export type ProductUpdateWithoutVariationInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    favorites?: FavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    favorites?: FavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    productId: number
    variationId: number
    quantity: number
    price: number
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number
    productId: number
    variationId: number
    quantity: number
    price: number
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variationId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
  }

  export type CartCreateWithoutItemsInput = {
    sessionToken?: string | null
    user?: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    sessionToken?: string | null
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    sessionToken?: string | null
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateWithoutUserInput = {
    sessionToken?: string | null
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: number
    sessionToken?: string | null
    productId: number
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    cart?: CartCreateNestedOneWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PageVisitCreateWithoutVisitorInput = {
    url: string
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
  }

  export type PageVisitUncheckedCreateWithoutVisitorInput = {
    id?: number
    url: string
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
  }

  export type PageVisitCreateOrConnectWithoutVisitorInput = {
    where: PageVisitWhereUniqueInput
    create: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput>
  }

  export type PageVisitCreateManyVisitorInputEnvelope = {
    data: PageVisitCreateManyVisitorInput | PageVisitCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type PageVisitUpsertWithWhereUniqueWithoutVisitorInput = {
    where: PageVisitWhereUniqueInput
    update: XOR<PageVisitUpdateWithoutVisitorInput, PageVisitUncheckedUpdateWithoutVisitorInput>
    create: XOR<PageVisitCreateWithoutVisitorInput, PageVisitUncheckedCreateWithoutVisitorInput>
  }

  export type PageVisitUpdateWithWhereUniqueWithoutVisitorInput = {
    where: PageVisitWhereUniqueInput
    data: XOR<PageVisitUpdateWithoutVisitorInput, PageVisitUncheckedUpdateWithoutVisitorInput>
  }

  export type PageVisitUpdateManyWithWhereWithoutVisitorInput = {
    where: PageVisitScalarWhereInput
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyWithoutVisitorInput>
  }

  export type PageVisitScalarWhereInput = {
    AND?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    OR?: PageVisitScalarWhereInput[]
    NOT?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    id?: IntFilter<"PageVisit"> | number
    url?: StringFilter<"PageVisit"> | string
    visitorId?: IntFilter<"PageVisit"> | number
    ip?: StringFilter<"PageVisit"> | string
    referrer?: StringFilter<"PageVisit"> | string
    timestamp?: DateTimeFilter<"PageVisit"> | Date | string
    visitCount?: IntFilter<"PageVisit"> | number
  }

  export type VisitorCreateWithoutPagesInput = {
    ip: string
    userAgent: string
    referrer?: string | null
    timestamp: Date | string
    visitCount?: number
  }

  export type VisitorUncheckedCreateWithoutPagesInput = {
    id?: number
    ip: string
    userAgent: string
    referrer?: string | null
    timestamp: Date | string
    visitCount?: number
  }

  export type VisitorCreateOrConnectWithoutPagesInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutPagesInput, VisitorUncheckedCreateWithoutPagesInput>
  }

  export type VisitorUpsertWithoutPagesInput = {
    update: XOR<VisitorUpdateWithoutPagesInput, VisitorUncheckedUpdateWithoutPagesInput>
    create: XOR<VisitorCreateWithoutPagesInput, VisitorUncheckedCreateWithoutPagesInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutPagesInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutPagesInput, VisitorUncheckedUpdateWithoutPagesInput>
  }

  export type VisitorUpdateWithoutPagesInput = {
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    role: string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: boolean | null
    avatarUrl?: string | null
    hash?: string | null
    dateCreated: Date | string
    dateModified?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ProductCreateWithoutFavoritesInput = {
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    Variation?: VariationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFavoritesInput = {
    id?: number
    wpId: number
    name: string
    slug: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    type: string
    status: string
    featured: boolean
    catalogVisibility: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    onSale: boolean
    purchasable: boolean
    totalSales: number
    manageStock: boolean
    stockQuantity?: number | null
    weight?: string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired: boolean
    shippingTaxable: boolean
    reviewsAllowed: boolean
    averageRating: number
    ratingCount: number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus: string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: boolean
    Variation?: VariationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFavoritesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFavoritesInput, ProductUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    billing?: NullableJsonNullValueInput | InputJsonValue
    shipping?: NullableJsonNullValueInput | InputJsonValue
    isPayingUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductUpsertWithoutFavoritesInput = {
    update: XOR<ProductUpdateWithoutFavoritesInput, ProductUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ProductCreateWithoutFavoritesInput, ProductUncheckedCreateWithoutFavoritesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFavoritesInput, ProductUncheckedUpdateWithoutFavoritesInput>
  }

  export type ProductUpdateWithoutFavoritesInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    Variation?: VariationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    catalogVisibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    onSale?: BoolFieldUpdateOperationsInput | boolean
    purchasable?: BoolFieldUpdateOperationsInput | boolean
    totalSales?: IntFieldUpdateOperationsInput | number
    manageStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableJsonNullValueInput | InputJsonValue
    shippingRequired?: BoolFieldUpdateOperationsInput | boolean
    shippingTaxable?: BoolFieldUpdateOperationsInput | boolean
    reviewsAllowed?: BoolFieldUpdateOperationsInput | boolean
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    relatedIds?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    tags?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
    variations?: NullableJsonNullValueInput | InputJsonValue
    metaData?: NullableJsonNullValueInput | InputJsonValue
    stockStatus?: StringFieldUpdateOperationsInput | string
    brands?: NullableJsonNullValueInput | InputJsonValue
    inCart?: BoolFieldUpdateOperationsInput | boolean
    Variation?: VariationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariationCreateManyProductInput = {
    id?: number
    wpId: number
    name: string
    hash: string
    permalink: string
    dateCreated: Date | string
    dateModified: Date | string
    status: string
    description?: string | null
    shortDescription?: string | null
    sku?: string | null
    price: number
    regularPrice?: string | null
    salePrice?: string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FavoriteCreateManyProductInput = {
    id?: number
    userId?: string | null
    sessionToken?: string | null
    createdAt?: Date | string
  }

  export type VariationUpdateWithoutProductInput = {
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VariationUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    wpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    permalink?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateModified?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    regularPrice?: NullableStringFieldUpdateOperationsInput | string | null
    salePrice?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableJsonNullValueInput | InputJsonValue
    attributes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FavoriteUpdateWithoutProductInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyCartInput = {
    id?: number
    productId: number
    variationId: number
    quantity: number
    price: number
  }

  export type CartItemUpdateWithoutCartInput = {
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variationId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: number
    sessionToken?: string | null
    productId: number
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitCreateManyVisitorInput = {
    id?: number
    url: string
    ip: string
    referrer: string
    timestamp: Date | string
    visitCount?: number
  }

  export type PageVisitUpdateWithoutVisitorInput = {
    url?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type PageVisitUncheckedUpdateWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
  }

  export type PageVisitUncheckedUpdateManyWithoutVisitorInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    referrer?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visitCount?: IntFieldUpdateOperationsInput | number
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