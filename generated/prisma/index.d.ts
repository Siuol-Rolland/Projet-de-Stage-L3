
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ADMINISTRATEUR
 * 
 */
export type ADMINISTRATEUR = $Result.DefaultSelection<Prisma.$ADMINISTRATEURPayload>
/**
 * Model ETUDIANT
 * 
 */
export type ETUDIANT = $Result.DefaultSelection<Prisma.$ETUDIANTPayload>
/**
 * Model DEPARTEMENT
 * 
 */
export type DEPARTEMENT = $Result.DefaultSelection<Prisma.$DEPARTEMENTPayload>
/**
 * Model ACTES
 * 
 */
export type ACTES = $Result.DefaultSelection<Prisma.$ACTESPayload>
/**
 * Model SOUS_ACTES
 * 
 */
export type SOUS_ACTES = $Result.DefaultSelection<Prisma.$SOUS_ACTESPayload>
/**
 * Model PROFESSEURS
 * 
 */
export type PROFESSEURS = $Result.DefaultSelection<Prisma.$PROFESSEURSPayload>
/**
 * Model QUOTAS
 * 
 */
export type QUOTAS = $Result.DefaultSelection<Prisma.$QUOTASPayload>
/**
 * Model PAIEMENT
 * 
 */
export type PAIEMENT = $Result.DefaultSelection<Prisma.$PAIEMENTPayload>
/**
 * Model NOTIFICATION
 * 
 */
export type NOTIFICATION = $Result.DefaultSelection<Prisma.$NOTIFICATIONPayload>
/**
 * Model REALISATION
 * 
 */
export type REALISATION = $Result.DefaultSelection<Prisma.$REALISATIONPayload>
/**
 * Model HISTORIQUE_PAIEMENT
 * 
 */
export type HISTORIQUE_PAIEMENT = $Result.DefaultSelection<Prisma.$HISTORIQUE_PAIEMENTPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeNotification: {
  REALISATION: 'REALISATION',
  EVALUATION: 'EVALUATION',
  PAIEMENT: 'PAIEMENT',
  VALIDATION: 'VALIDATION'
};

export type TypeNotification = (typeof TypeNotification)[keyof typeof TypeNotification]


export const StatutPaiement: {
  EN_ATTENTE: 'EN_ATTENTE',
  PARTIEL: 'PARTIEL',
  TOTAL: 'TOTAL',
  ANNULE: 'ANNULE'
};

export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement]

}

export type TypeNotification = $Enums.TypeNotification

export const TypeNotification: typeof $Enums.TypeNotification

export type StatutPaiement = $Enums.StatutPaiement

export const StatutPaiement: typeof $Enums.StatutPaiement

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ADMINISTRATEURS
 * const aDMINISTRATEURS = await prisma.aDMINISTRATEUR.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more ADMINISTRATEURS
   * const aDMINISTRATEURS = await prisma.aDMINISTRATEUR.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.aDMINISTRATEUR`: Exposes CRUD operations for the **ADMINISTRATEUR** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ADMINISTRATEURS
    * const aDMINISTRATEURS = await prisma.aDMINISTRATEUR.findMany()
    * ```
    */
  get aDMINISTRATEUR(): Prisma.ADMINISTRATEURDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eTUDIANT`: Exposes CRUD operations for the **ETUDIANT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ETUDIANTS
    * const eTUDIANTS = await prisma.eTUDIANT.findMany()
    * ```
    */
  get eTUDIANT(): Prisma.ETUDIANTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dEPARTEMENT`: Exposes CRUD operations for the **DEPARTEMENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DEPARTEMENTS
    * const dEPARTEMENTS = await prisma.dEPARTEMENT.findMany()
    * ```
    */
  get dEPARTEMENT(): Prisma.DEPARTEMENTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aCTES`: Exposes CRUD operations for the **ACTES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ACTES
    * const aCTES = await prisma.aCTES.findMany()
    * ```
    */
  get aCTES(): Prisma.ACTESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sOUS_ACTES`: Exposes CRUD operations for the **SOUS_ACTES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SOUS_ACTES
    * const sOUS_ACTES = await prisma.sOUS_ACTES.findMany()
    * ```
    */
  get sOUS_ACTES(): Prisma.SOUS_ACTESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pROFESSEURS`: Exposes CRUD operations for the **PROFESSEURS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PROFESSEURS
    * const pROFESSEURS = await prisma.pROFESSEURS.findMany()
    * ```
    */
  get pROFESSEURS(): Prisma.PROFESSEURSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qUOTAS`: Exposes CRUD operations for the **QUOTAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QUOTAS
    * const qUOTAS = await prisma.qUOTAS.findMany()
    * ```
    */
  get qUOTAS(): Prisma.QUOTASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAIEMENT`: Exposes CRUD operations for the **PAIEMENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAIEMENTS
    * const pAIEMENTS = await prisma.pAIEMENT.findMany()
    * ```
    */
  get pAIEMENT(): Prisma.PAIEMENTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nOTIFICATION`: Exposes CRUD operations for the **NOTIFICATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NOTIFICATIONS
    * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany()
    * ```
    */
  get nOTIFICATION(): Prisma.NOTIFICATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rEALISATION`: Exposes CRUD operations for the **REALISATION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more REALISATIONS
    * const rEALISATIONS = await prisma.rEALISATION.findMany()
    * ```
    */
  get rEALISATION(): Prisma.REALISATIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hISTORIQUE_PAIEMENT`: Exposes CRUD operations for the **HISTORIQUE_PAIEMENT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HISTORIQUE_PAIEMENTS
    * const hISTORIQUE_PAIEMENTS = await prisma.hISTORIQUE_PAIEMENT.findMany()
    * ```
    */
  get hISTORIQUE_PAIEMENT(): Prisma.HISTORIQUE_PAIEMENTDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    ADMINISTRATEUR: 'ADMINISTRATEUR',
    ETUDIANT: 'ETUDIANT',
    DEPARTEMENT: 'DEPARTEMENT',
    ACTES: 'ACTES',
    SOUS_ACTES: 'SOUS_ACTES',
    PROFESSEURS: 'PROFESSEURS',
    QUOTAS: 'QUOTAS',
    PAIEMENT: 'PAIEMENT',
    NOTIFICATION: 'NOTIFICATION',
    REALISATION: 'REALISATION',
    HISTORIQUE_PAIEMENT: 'HISTORIQUE_PAIEMENT'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aDMINISTRATEUR" | "eTUDIANT" | "dEPARTEMENT" | "aCTES" | "sOUS_ACTES" | "pROFESSEURS" | "qUOTAS" | "pAIEMENT" | "nOTIFICATION" | "rEALISATION" | "hISTORIQUE_PAIEMENT"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ADMINISTRATEUR: {
        payload: Prisma.$ADMINISTRATEURPayload<ExtArgs>
        fields: Prisma.ADMINISTRATEURFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ADMINISTRATEURFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ADMINISTRATEURFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          findFirst: {
            args: Prisma.ADMINISTRATEURFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ADMINISTRATEURFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          findMany: {
            args: Prisma.ADMINISTRATEURFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>[]
          }
          create: {
            args: Prisma.ADMINISTRATEURCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          createMany: {
            args: Prisma.ADMINISTRATEURCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ADMINISTRATEURCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>[]
          }
          delete: {
            args: Prisma.ADMINISTRATEURDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          update: {
            args: Prisma.ADMINISTRATEURUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          deleteMany: {
            args: Prisma.ADMINISTRATEURDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ADMINISTRATEURUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ADMINISTRATEURUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>[]
          }
          upsert: {
            args: Prisma.ADMINISTRATEURUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRATEURPayload>
          }
          aggregate: {
            args: Prisma.ADMINISTRATEURAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateADMINISTRATEUR>
          }
          groupBy: {
            args: Prisma.ADMINISTRATEURGroupByArgs<ExtArgs>
            result: $Utils.Optional<ADMINISTRATEURGroupByOutputType>[]
          }
          count: {
            args: Prisma.ADMINISTRATEURCountArgs<ExtArgs>
            result: $Utils.Optional<ADMINISTRATEURCountAggregateOutputType> | number
          }
        }
      }
      ETUDIANT: {
        payload: Prisma.$ETUDIANTPayload<ExtArgs>
        fields: Prisma.ETUDIANTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ETUDIANTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ETUDIANTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          findFirst: {
            args: Prisma.ETUDIANTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ETUDIANTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          findMany: {
            args: Prisma.ETUDIANTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>[]
          }
          create: {
            args: Prisma.ETUDIANTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          createMany: {
            args: Prisma.ETUDIANTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ETUDIANTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>[]
          }
          delete: {
            args: Prisma.ETUDIANTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          update: {
            args: Prisma.ETUDIANTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          deleteMany: {
            args: Prisma.ETUDIANTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ETUDIANTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ETUDIANTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>[]
          }
          upsert: {
            args: Prisma.ETUDIANTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ETUDIANTPayload>
          }
          aggregate: {
            args: Prisma.ETUDIANTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateETUDIANT>
          }
          groupBy: {
            args: Prisma.ETUDIANTGroupByArgs<ExtArgs>
            result: $Utils.Optional<ETUDIANTGroupByOutputType>[]
          }
          count: {
            args: Prisma.ETUDIANTCountArgs<ExtArgs>
            result: $Utils.Optional<ETUDIANTCountAggregateOutputType> | number
          }
        }
      }
      DEPARTEMENT: {
        payload: Prisma.$DEPARTEMENTPayload<ExtArgs>
        fields: Prisma.DEPARTEMENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DEPARTEMENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DEPARTEMENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          findFirst: {
            args: Prisma.DEPARTEMENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DEPARTEMENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          findMany: {
            args: Prisma.DEPARTEMENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>[]
          }
          create: {
            args: Prisma.DEPARTEMENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          createMany: {
            args: Prisma.DEPARTEMENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DEPARTEMENTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>[]
          }
          delete: {
            args: Prisma.DEPARTEMENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          update: {
            args: Prisma.DEPARTEMENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          deleteMany: {
            args: Prisma.DEPARTEMENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DEPARTEMENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DEPARTEMENTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>[]
          }
          upsert: {
            args: Prisma.DEPARTEMENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEPARTEMENTPayload>
          }
          aggregate: {
            args: Prisma.DEPARTEMENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDEPARTEMENT>
          }
          groupBy: {
            args: Prisma.DEPARTEMENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<DEPARTEMENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.DEPARTEMENTCountArgs<ExtArgs>
            result: $Utils.Optional<DEPARTEMENTCountAggregateOutputType> | number
          }
        }
      }
      ACTES: {
        payload: Prisma.$ACTESPayload<ExtArgs>
        fields: Prisma.ACTESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ACTESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ACTESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          findFirst: {
            args: Prisma.ACTESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ACTESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          findMany: {
            args: Prisma.ACTESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>[]
          }
          create: {
            args: Prisma.ACTESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          createMany: {
            args: Prisma.ACTESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ACTESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>[]
          }
          delete: {
            args: Prisma.ACTESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          update: {
            args: Prisma.ACTESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          deleteMany: {
            args: Prisma.ACTESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ACTESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ACTESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>[]
          }
          upsert: {
            args: Prisma.ACTESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ACTESPayload>
          }
          aggregate: {
            args: Prisma.ACTESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateACTES>
          }
          groupBy: {
            args: Prisma.ACTESGroupByArgs<ExtArgs>
            result: $Utils.Optional<ACTESGroupByOutputType>[]
          }
          count: {
            args: Prisma.ACTESCountArgs<ExtArgs>
            result: $Utils.Optional<ACTESCountAggregateOutputType> | number
          }
        }
      }
      SOUS_ACTES: {
        payload: Prisma.$SOUS_ACTESPayload<ExtArgs>
        fields: Prisma.SOUS_ACTESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SOUS_ACTESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SOUS_ACTESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          findFirst: {
            args: Prisma.SOUS_ACTESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SOUS_ACTESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          findMany: {
            args: Prisma.SOUS_ACTESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>[]
          }
          create: {
            args: Prisma.SOUS_ACTESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          createMany: {
            args: Prisma.SOUS_ACTESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SOUS_ACTESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>[]
          }
          delete: {
            args: Prisma.SOUS_ACTESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          update: {
            args: Prisma.SOUS_ACTESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          deleteMany: {
            args: Prisma.SOUS_ACTESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SOUS_ACTESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SOUS_ACTESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>[]
          }
          upsert: {
            args: Prisma.SOUS_ACTESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOUS_ACTESPayload>
          }
          aggregate: {
            args: Prisma.SOUS_ACTESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSOUS_ACTES>
          }
          groupBy: {
            args: Prisma.SOUS_ACTESGroupByArgs<ExtArgs>
            result: $Utils.Optional<SOUS_ACTESGroupByOutputType>[]
          }
          count: {
            args: Prisma.SOUS_ACTESCountArgs<ExtArgs>
            result: $Utils.Optional<SOUS_ACTESCountAggregateOutputType> | number
          }
        }
      }
      PROFESSEURS: {
        payload: Prisma.$PROFESSEURSPayload<ExtArgs>
        fields: Prisma.PROFESSEURSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PROFESSEURSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PROFESSEURSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          findFirst: {
            args: Prisma.PROFESSEURSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PROFESSEURSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          findMany: {
            args: Prisma.PROFESSEURSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>[]
          }
          create: {
            args: Prisma.PROFESSEURSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          createMany: {
            args: Prisma.PROFESSEURSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PROFESSEURSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>[]
          }
          delete: {
            args: Prisma.PROFESSEURSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          update: {
            args: Prisma.PROFESSEURSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          deleteMany: {
            args: Prisma.PROFESSEURSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PROFESSEURSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PROFESSEURSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>[]
          }
          upsert: {
            args: Prisma.PROFESSEURSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PROFESSEURSPayload>
          }
          aggregate: {
            args: Prisma.PROFESSEURSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePROFESSEURS>
          }
          groupBy: {
            args: Prisma.PROFESSEURSGroupByArgs<ExtArgs>
            result: $Utils.Optional<PROFESSEURSGroupByOutputType>[]
          }
          count: {
            args: Prisma.PROFESSEURSCountArgs<ExtArgs>
            result: $Utils.Optional<PROFESSEURSCountAggregateOutputType> | number
          }
        }
      }
      QUOTAS: {
        payload: Prisma.$QUOTASPayload<ExtArgs>
        fields: Prisma.QUOTASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QUOTASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QUOTASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          findFirst: {
            args: Prisma.QUOTASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QUOTASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          findMany: {
            args: Prisma.QUOTASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>[]
          }
          create: {
            args: Prisma.QUOTASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          createMany: {
            args: Prisma.QUOTASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QUOTASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>[]
          }
          delete: {
            args: Prisma.QUOTASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          update: {
            args: Prisma.QUOTASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          deleteMany: {
            args: Prisma.QUOTASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QUOTASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QUOTASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>[]
          }
          upsert: {
            args: Prisma.QUOTASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QUOTASPayload>
          }
          aggregate: {
            args: Prisma.QUOTASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQUOTAS>
          }
          groupBy: {
            args: Prisma.QUOTASGroupByArgs<ExtArgs>
            result: $Utils.Optional<QUOTASGroupByOutputType>[]
          }
          count: {
            args: Prisma.QUOTASCountArgs<ExtArgs>
            result: $Utils.Optional<QUOTASCountAggregateOutputType> | number
          }
        }
      }
      PAIEMENT: {
        payload: Prisma.$PAIEMENTPayload<ExtArgs>
        fields: Prisma.PAIEMENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAIEMENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAIEMENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          findFirst: {
            args: Prisma.PAIEMENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAIEMENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          findMany: {
            args: Prisma.PAIEMENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>[]
          }
          create: {
            args: Prisma.PAIEMENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          createMany: {
            args: Prisma.PAIEMENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAIEMENTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>[]
          }
          delete: {
            args: Prisma.PAIEMENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          update: {
            args: Prisma.PAIEMENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          deleteMany: {
            args: Prisma.PAIEMENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAIEMENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAIEMENTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>[]
          }
          upsert: {
            args: Prisma.PAIEMENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAIEMENTPayload>
          }
          aggregate: {
            args: Prisma.PAIEMENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAIEMENT>
          }
          groupBy: {
            args: Prisma.PAIEMENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAIEMENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAIEMENTCountArgs<ExtArgs>
            result: $Utils.Optional<PAIEMENTCountAggregateOutputType> | number
          }
        }
      }
      NOTIFICATION: {
        payload: Prisma.$NOTIFICATIONPayload<ExtArgs>
        fields: Prisma.NOTIFICATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NOTIFICATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          findFirst: {
            args: Prisma.NOTIFICATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NOTIFICATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          findMany: {
            args: Prisma.NOTIFICATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>[]
          }
          create: {
            args: Prisma.NOTIFICATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          createMany: {
            args: Prisma.NOTIFICATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NOTIFICATIONCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>[]
          }
          delete: {
            args: Prisma.NOTIFICATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          update: {
            args: Prisma.NOTIFICATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          deleteMany: {
            args: Prisma.NOTIFICATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NOTIFICATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NOTIFICATIONUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>[]
          }
          upsert: {
            args: Prisma.NOTIFICATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NOTIFICATIONPayload>
          }
          aggregate: {
            args: Prisma.NOTIFICATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNOTIFICATION>
          }
          groupBy: {
            args: Prisma.NOTIFICATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<NOTIFICATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.NOTIFICATIONCountArgs<ExtArgs>
            result: $Utils.Optional<NOTIFICATIONCountAggregateOutputType> | number
          }
        }
      }
      REALISATION: {
        payload: Prisma.$REALISATIONPayload<ExtArgs>
        fields: Prisma.REALISATIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.REALISATIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.REALISATIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          findFirst: {
            args: Prisma.REALISATIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.REALISATIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          findMany: {
            args: Prisma.REALISATIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>[]
          }
          create: {
            args: Prisma.REALISATIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          createMany: {
            args: Prisma.REALISATIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.REALISATIONCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>[]
          }
          delete: {
            args: Prisma.REALISATIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          update: {
            args: Prisma.REALISATIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          deleteMany: {
            args: Prisma.REALISATIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.REALISATIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.REALISATIONUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>[]
          }
          upsert: {
            args: Prisma.REALISATIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$REALISATIONPayload>
          }
          aggregate: {
            args: Prisma.REALISATIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateREALISATION>
          }
          groupBy: {
            args: Prisma.REALISATIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<REALISATIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.REALISATIONCountArgs<ExtArgs>
            result: $Utils.Optional<REALISATIONCountAggregateOutputType> | number
          }
        }
      }
      HISTORIQUE_PAIEMENT: {
        payload: Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>
        fields: Prisma.HISTORIQUE_PAIEMENTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HISTORIQUE_PAIEMENTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HISTORIQUE_PAIEMENTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          findFirst: {
            args: Prisma.HISTORIQUE_PAIEMENTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HISTORIQUE_PAIEMENTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          findMany: {
            args: Prisma.HISTORIQUE_PAIEMENTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>[]
          }
          create: {
            args: Prisma.HISTORIQUE_PAIEMENTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          createMany: {
            args: Prisma.HISTORIQUE_PAIEMENTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HISTORIQUE_PAIEMENTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>[]
          }
          delete: {
            args: Prisma.HISTORIQUE_PAIEMENTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          update: {
            args: Prisma.HISTORIQUE_PAIEMENTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          deleteMany: {
            args: Prisma.HISTORIQUE_PAIEMENTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HISTORIQUE_PAIEMENTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HISTORIQUE_PAIEMENTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>[]
          }
          upsert: {
            args: Prisma.HISTORIQUE_PAIEMENTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HISTORIQUE_PAIEMENTPayload>
          }
          aggregate: {
            args: Prisma.HISTORIQUE_PAIEMENTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHISTORIQUE_PAIEMENT>
          }
          groupBy: {
            args: Prisma.HISTORIQUE_PAIEMENTGroupByArgs<ExtArgs>
            result: $Utils.Optional<HISTORIQUE_PAIEMENTGroupByOutputType>[]
          }
          count: {
            args: Prisma.HISTORIQUE_PAIEMENTCountArgs<ExtArgs>
            result: $Utils.Optional<HISTORIQUE_PAIEMENTCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    aDMINISTRATEUR?: ADMINISTRATEUROmit
    eTUDIANT?: ETUDIANTOmit
    dEPARTEMENT?: DEPARTEMENTOmit
    aCTES?: ACTESOmit
    sOUS_ACTES?: SOUS_ACTESOmit
    pROFESSEURS?: PROFESSEURSOmit
    qUOTAS?: QUOTASOmit
    pAIEMENT?: PAIEMENTOmit
    nOTIFICATION?: NOTIFICATIONOmit
    rEALISATION?: REALISATIONOmit
    hISTORIQUE_PAIEMENT?: HISTORIQUE_PAIEMENTOmit
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
   * Count Type ADMINISTRATEURCountOutputType
   */

  export type ADMINISTRATEURCountOutputType = {
    notifications: number
    paiements: number
    quotas: number
    historique: number
  }

  export type ADMINISTRATEURCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | ADMINISTRATEURCountOutputTypeCountNotificationsArgs
    paiements?: boolean | ADMINISTRATEURCountOutputTypeCountPaiementsArgs
    quotas?: boolean | ADMINISTRATEURCountOutputTypeCountQuotasArgs
    historique?: boolean | ADMINISTRATEURCountOutputTypeCountHistoriqueArgs
  }

  // Custom InputTypes
  /**
   * ADMINISTRATEURCountOutputType without action
   */
  export type ADMINISTRATEURCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEURCountOutputType
     */
    select?: ADMINISTRATEURCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ADMINISTRATEURCountOutputType without action
   */
  export type ADMINISTRATEURCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * ADMINISTRATEURCountOutputType without action
   */
  export type ADMINISTRATEURCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAIEMENTWhereInput
  }

  /**
   * ADMINISTRATEURCountOutputType without action
   */
  export type ADMINISTRATEURCountOutputTypeCountQuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QUOTASWhereInput
  }

  /**
   * ADMINISTRATEURCountOutputType without action
   */
  export type ADMINISTRATEURCountOutputTypeCountHistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HISTORIQUE_PAIEMENTWhereInput
  }


  /**
   * Count Type ETUDIANTCountOutputType
   */

  export type ETUDIANTCountOutputType = {
    notifications: number
    paiements: number
    realisations: number
  }

  export type ETUDIANTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | ETUDIANTCountOutputTypeCountNotificationsArgs
    paiements?: boolean | ETUDIANTCountOutputTypeCountPaiementsArgs
    realisations?: boolean | ETUDIANTCountOutputTypeCountRealisationsArgs
  }

  // Custom InputTypes
  /**
   * ETUDIANTCountOutputType without action
   */
  export type ETUDIANTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANTCountOutputType
     */
    select?: ETUDIANTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ETUDIANTCountOutputType without action
   */
  export type ETUDIANTCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * ETUDIANTCountOutputType without action
   */
  export type ETUDIANTCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAIEMENTWhereInput
  }

  /**
   * ETUDIANTCountOutputType without action
   */
  export type ETUDIANTCountOutputTypeCountRealisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REALISATIONWhereInput
  }


  /**
   * Count Type DEPARTEMENTCountOutputType
   */

  export type DEPARTEMENTCountOutputType = {
    actes: number
    etudiants: number
    quotas: number
    professeurs: number
  }

  export type DEPARTEMENTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actes?: boolean | DEPARTEMENTCountOutputTypeCountActesArgs
    etudiants?: boolean | DEPARTEMENTCountOutputTypeCountEtudiantsArgs
    quotas?: boolean | DEPARTEMENTCountOutputTypeCountQuotasArgs
    professeurs?: boolean | DEPARTEMENTCountOutputTypeCountProfesseursArgs
  }

  // Custom InputTypes
  /**
   * DEPARTEMENTCountOutputType without action
   */
  export type DEPARTEMENTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENTCountOutputType
     */
    select?: DEPARTEMENTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DEPARTEMENTCountOutputType without action
   */
  export type DEPARTEMENTCountOutputTypeCountActesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ACTESWhereInput
  }

  /**
   * DEPARTEMENTCountOutputType without action
   */
  export type DEPARTEMENTCountOutputTypeCountEtudiantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ETUDIANTWhereInput
  }

  /**
   * DEPARTEMENTCountOutputType without action
   */
  export type DEPARTEMENTCountOutputTypeCountQuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QUOTASWhereInput
  }

  /**
   * DEPARTEMENTCountOutputType without action
   */
  export type DEPARTEMENTCountOutputTypeCountProfesseursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROFESSEURSWhereInput
  }


  /**
   * Count Type ACTESCountOutputType
   */

  export type ACTESCountOutputType = {
    sous_actes: number
  }

  export type ACTESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sous_actes?: boolean | ACTESCountOutputTypeCountSous_actesArgs
  }

  // Custom InputTypes
  /**
   * ACTESCountOutputType without action
   */
  export type ACTESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTESCountOutputType
     */
    select?: ACTESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ACTESCountOutputType without action
   */
  export type ACTESCountOutputTypeCountSous_actesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOUS_ACTESWhereInput
  }


  /**
   * Count Type SOUS_ACTESCountOutputType
   */

  export type SOUS_ACTESCountOutputType = {
    notifications: number
    realisations: number
    quotas: number
  }

  export type SOUS_ACTESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | SOUS_ACTESCountOutputTypeCountNotificationsArgs
    realisations?: boolean | SOUS_ACTESCountOutputTypeCountRealisationsArgs
    quotas?: boolean | SOUS_ACTESCountOutputTypeCountQuotasArgs
  }

  // Custom InputTypes
  /**
   * SOUS_ACTESCountOutputType without action
   */
  export type SOUS_ACTESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTESCountOutputType
     */
    select?: SOUS_ACTESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SOUS_ACTESCountOutputType without action
   */
  export type SOUS_ACTESCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * SOUS_ACTESCountOutputType without action
   */
  export type SOUS_ACTESCountOutputTypeCountRealisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REALISATIONWhereInput
  }

  /**
   * SOUS_ACTESCountOutputType without action
   */
  export type SOUS_ACTESCountOutputTypeCountQuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QUOTASWhereInput
  }


  /**
   * Count Type PROFESSEURSCountOutputType
   */

  export type PROFESSEURSCountOutputType = {
    notifications: number
    realisations: number
    departements: number
  }

  export type PROFESSEURSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | PROFESSEURSCountOutputTypeCountNotificationsArgs
    realisations?: boolean | PROFESSEURSCountOutputTypeCountRealisationsArgs
    departements?: boolean | PROFESSEURSCountOutputTypeCountDepartementsArgs
  }

  // Custom InputTypes
  /**
   * PROFESSEURSCountOutputType without action
   */
  export type PROFESSEURSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURSCountOutputType
     */
    select?: PROFESSEURSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PROFESSEURSCountOutputType without action
   */
  export type PROFESSEURSCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * PROFESSEURSCountOutputType without action
   */
  export type PROFESSEURSCountOutputTypeCountRealisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REALISATIONWhereInput
  }

  /**
   * PROFESSEURSCountOutputType without action
   */
  export type PROFESSEURSCountOutputTypeCountDepartementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DEPARTEMENTWhereInput
  }


  /**
   * Count Type QUOTASCountOutputType
   */

  export type QUOTASCountOutputType = {
    sous_actes: number
  }

  export type QUOTASCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sous_actes?: boolean | QUOTASCountOutputTypeCountSous_actesArgs
  }

  // Custom InputTypes
  /**
   * QUOTASCountOutputType without action
   */
  export type QUOTASCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTASCountOutputType
     */
    select?: QUOTASCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QUOTASCountOutputType without action
   */
  export type QUOTASCountOutputTypeCountSous_actesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOUS_ACTESWhereInput
  }


  /**
   * Count Type PAIEMENTCountOutputType
   */

  export type PAIEMENTCountOutputType = {
    notifications: number
    realisations: number
    historique: number
  }

  export type PAIEMENTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | PAIEMENTCountOutputTypeCountNotificationsArgs
    realisations?: boolean | PAIEMENTCountOutputTypeCountRealisationsArgs
    historique?: boolean | PAIEMENTCountOutputTypeCountHistoriqueArgs
  }

  // Custom InputTypes
  /**
   * PAIEMENTCountOutputType without action
   */
  export type PAIEMENTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENTCountOutputType
     */
    select?: PAIEMENTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PAIEMENTCountOutputType without action
   */
  export type PAIEMENTCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }

  /**
   * PAIEMENTCountOutputType without action
   */
  export type PAIEMENTCountOutputTypeCountRealisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REALISATIONWhereInput
  }

  /**
   * PAIEMENTCountOutputType without action
   */
  export type PAIEMENTCountOutputTypeCountHistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HISTORIQUE_PAIEMENTWhereInput
  }


  /**
   * Count Type REALISATIONCountOutputType
   */

  export type REALISATIONCountOutputType = {
    notifications: number
  }

  export type REALISATIONCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | REALISATIONCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * REALISATIONCountOutputType without action
   */
  export type REALISATIONCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATIONCountOutputType
     */
    select?: REALISATIONCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * REALISATIONCountOutputType without action
   */
  export type REALISATIONCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ADMINISTRATEUR
   */

  export type AggregateADMINISTRATEUR = {
    _count: ADMINISTRATEURCountAggregateOutputType | null
    _avg: ADMINISTRATEURAvgAggregateOutputType | null
    _sum: ADMINISTRATEURSumAggregateOutputType | null
    _min: ADMINISTRATEURMinAggregateOutputType | null
    _max: ADMINISTRATEURMaxAggregateOutputType | null
  }

  export type ADMINISTRATEURAvgAggregateOutputType = {
    ID_Admin: number | null
    id_Quotas: number | null
    id_Paie: number | null
  }

  export type ADMINISTRATEURSumAggregateOutputType = {
    ID_Admin: number | null
    id_Quotas: number | null
    id_Paie: number | null
  }

  export type ADMINISTRATEURMinAggregateOutputType = {
    ID_Admin: number | null
    Nom_Admin: string | null
    Email_Admin: string | null
    MotPass_Admin: string | null
    id_Quotas: number | null
    id_Paie: number | null
    user_id: string | null
  }

  export type ADMINISTRATEURMaxAggregateOutputType = {
    ID_Admin: number | null
    Nom_Admin: string | null
    Email_Admin: string | null
    MotPass_Admin: string | null
    id_Quotas: number | null
    id_Paie: number | null
    user_id: string | null
  }

  export type ADMINISTRATEURCountAggregateOutputType = {
    ID_Admin: number
    Nom_Admin: number
    Email_Admin: number
    MotPass_Admin: number
    id_Quotas: number
    id_Paie: number
    user_id: number
    _all: number
  }


  export type ADMINISTRATEURAvgAggregateInputType = {
    ID_Admin?: true
    id_Quotas?: true
    id_Paie?: true
  }

  export type ADMINISTRATEURSumAggregateInputType = {
    ID_Admin?: true
    id_Quotas?: true
    id_Paie?: true
  }

  export type ADMINISTRATEURMinAggregateInputType = {
    ID_Admin?: true
    Nom_Admin?: true
    Email_Admin?: true
    MotPass_Admin?: true
    id_Quotas?: true
    id_Paie?: true
    user_id?: true
  }

  export type ADMINISTRATEURMaxAggregateInputType = {
    ID_Admin?: true
    Nom_Admin?: true
    Email_Admin?: true
    MotPass_Admin?: true
    id_Quotas?: true
    id_Paie?: true
    user_id?: true
  }

  export type ADMINISTRATEURCountAggregateInputType = {
    ID_Admin?: true
    Nom_Admin?: true
    Email_Admin?: true
    MotPass_Admin?: true
    id_Quotas?: true
    id_Paie?: true
    user_id?: true
    _all?: true
  }

  export type ADMINISTRATEURAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADMINISTRATEUR to aggregate.
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRATEURS to fetch.
     */
    orderBy?: ADMINISTRATEUROrderByWithRelationInput | ADMINISTRATEUROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ADMINISTRATEURWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRATEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRATEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ADMINISTRATEURS
    **/
    _count?: true | ADMINISTRATEURCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ADMINISTRATEURAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ADMINISTRATEURSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ADMINISTRATEURMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ADMINISTRATEURMaxAggregateInputType
  }

  export type GetADMINISTRATEURAggregateType<T extends ADMINISTRATEURAggregateArgs> = {
        [P in keyof T & keyof AggregateADMINISTRATEUR]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateADMINISTRATEUR[P]>
      : GetScalarType<T[P], AggregateADMINISTRATEUR[P]>
  }




  export type ADMINISTRATEURGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ADMINISTRATEURWhereInput
    orderBy?: ADMINISTRATEUROrderByWithAggregationInput | ADMINISTRATEUROrderByWithAggregationInput[]
    by: ADMINISTRATEURScalarFieldEnum[] | ADMINISTRATEURScalarFieldEnum
    having?: ADMINISTRATEURScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ADMINISTRATEURCountAggregateInputType | true
    _avg?: ADMINISTRATEURAvgAggregateInputType
    _sum?: ADMINISTRATEURSumAggregateInputType
    _min?: ADMINISTRATEURMinAggregateInputType
    _max?: ADMINISTRATEURMaxAggregateInputType
  }

  export type ADMINISTRATEURGroupByOutputType = {
    ID_Admin: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas: number | null
    id_Paie: number | null
    user_id: string
    _count: ADMINISTRATEURCountAggregateOutputType | null
    _avg: ADMINISTRATEURAvgAggregateOutputType | null
    _sum: ADMINISTRATEURSumAggregateOutputType | null
    _min: ADMINISTRATEURMinAggregateOutputType | null
    _max: ADMINISTRATEURMaxAggregateOutputType | null
  }

  type GetADMINISTRATEURGroupByPayload<T extends ADMINISTRATEURGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ADMINISTRATEURGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ADMINISTRATEURGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ADMINISTRATEURGroupByOutputType[P]>
            : GetScalarType<T[P], ADMINISTRATEURGroupByOutputType[P]>
        }
      >
    >


  export type ADMINISTRATEURSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Admin?: boolean
    Nom_Admin?: boolean
    Email_Admin?: boolean
    MotPass_Admin?: boolean
    id_Quotas?: boolean
    id_Paie?: boolean
    user_id?: boolean
    notifications?: boolean | ADMINISTRATEUR$notificationsArgs<ExtArgs>
    paiements?: boolean | ADMINISTRATEUR$paiementsArgs<ExtArgs>
    quotas?: boolean | ADMINISTRATEUR$quotasArgs<ExtArgs>
    historique?: boolean | ADMINISTRATEUR$historiqueArgs<ExtArgs>
    _count?: boolean | ADMINISTRATEURCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aDMINISTRATEUR"]>

  export type ADMINISTRATEURSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Admin?: boolean
    Nom_Admin?: boolean
    Email_Admin?: boolean
    MotPass_Admin?: boolean
    id_Quotas?: boolean
    id_Paie?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["aDMINISTRATEUR"]>

  export type ADMINISTRATEURSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Admin?: boolean
    Nom_Admin?: boolean
    Email_Admin?: boolean
    MotPass_Admin?: boolean
    id_Quotas?: boolean
    id_Paie?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["aDMINISTRATEUR"]>

  export type ADMINISTRATEURSelectScalar = {
    ID_Admin?: boolean
    Nom_Admin?: boolean
    Email_Admin?: boolean
    MotPass_Admin?: boolean
    id_Quotas?: boolean
    id_Paie?: boolean
    user_id?: boolean
  }

  export type ADMINISTRATEUROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Admin" | "Nom_Admin" | "Email_Admin" | "MotPass_Admin" | "id_Quotas" | "id_Paie" | "user_id", ExtArgs["result"]["aDMINISTRATEUR"]>
  export type ADMINISTRATEURInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | ADMINISTRATEUR$notificationsArgs<ExtArgs>
    paiements?: boolean | ADMINISTRATEUR$paiementsArgs<ExtArgs>
    quotas?: boolean | ADMINISTRATEUR$quotasArgs<ExtArgs>
    historique?: boolean | ADMINISTRATEUR$historiqueArgs<ExtArgs>
    _count?: boolean | ADMINISTRATEURCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ADMINISTRATEURIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ADMINISTRATEURIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ADMINISTRATEURPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ADMINISTRATEUR"
    objects: {
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      paiements: Prisma.$PAIEMENTPayload<ExtArgs>[]
      quotas: Prisma.$QUOTASPayload<ExtArgs>[]
      historique: Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Admin: number
      Nom_Admin: string
      Email_Admin: string
      MotPass_Admin: string
      id_Quotas: number | null
      id_Paie: number | null
      user_id: string
    }, ExtArgs["result"]["aDMINISTRATEUR"]>
    composites: {}
  }

  type ADMINISTRATEURGetPayload<S extends boolean | null | undefined | ADMINISTRATEURDefaultArgs> = $Result.GetResult<Prisma.$ADMINISTRATEURPayload, S>

  type ADMINISTRATEURCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ADMINISTRATEURFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ADMINISTRATEURCountAggregateInputType | true
    }

  export interface ADMINISTRATEURDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ADMINISTRATEUR'], meta: { name: 'ADMINISTRATEUR' } }
    /**
     * Find zero or one ADMINISTRATEUR that matches the filter.
     * @param {ADMINISTRATEURFindUniqueArgs} args - Arguments to find a ADMINISTRATEUR
     * @example
     * // Get one ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ADMINISTRATEURFindUniqueArgs>(args: SelectSubset<T, ADMINISTRATEURFindUniqueArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ADMINISTRATEUR that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ADMINISTRATEURFindUniqueOrThrowArgs} args - Arguments to find a ADMINISTRATEUR
     * @example
     * // Get one ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ADMINISTRATEURFindUniqueOrThrowArgs>(args: SelectSubset<T, ADMINISTRATEURFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADMINISTRATEUR that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURFindFirstArgs} args - Arguments to find a ADMINISTRATEUR
     * @example
     * // Get one ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ADMINISTRATEURFindFirstArgs>(args?: SelectSubset<T, ADMINISTRATEURFindFirstArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADMINISTRATEUR that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURFindFirstOrThrowArgs} args - Arguments to find a ADMINISTRATEUR
     * @example
     * // Get one ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ADMINISTRATEURFindFirstOrThrowArgs>(args?: SelectSubset<T, ADMINISTRATEURFindFirstOrThrowArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ADMINISTRATEURS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ADMINISTRATEURS
     * const aDMINISTRATEURS = await prisma.aDMINISTRATEUR.findMany()
     * 
     * // Get first 10 ADMINISTRATEURS
     * const aDMINISTRATEURS = await prisma.aDMINISTRATEUR.findMany({ take: 10 })
     * 
     * // Only select the `ID_Admin`
     * const aDMINISTRATEURWithID_AdminOnly = await prisma.aDMINISTRATEUR.findMany({ select: { ID_Admin: true } })
     * 
     */
    findMany<T extends ADMINISTRATEURFindManyArgs>(args?: SelectSubset<T, ADMINISTRATEURFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ADMINISTRATEUR.
     * @param {ADMINISTRATEURCreateArgs} args - Arguments to create a ADMINISTRATEUR.
     * @example
     * // Create one ADMINISTRATEUR
     * const ADMINISTRATEUR = await prisma.aDMINISTRATEUR.create({
     *   data: {
     *     // ... data to create a ADMINISTRATEUR
     *   }
     * })
     * 
     */
    create<T extends ADMINISTRATEURCreateArgs>(args: SelectSubset<T, ADMINISTRATEURCreateArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ADMINISTRATEURS.
     * @param {ADMINISTRATEURCreateManyArgs} args - Arguments to create many ADMINISTRATEURS.
     * @example
     * // Create many ADMINISTRATEURS
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ADMINISTRATEURCreateManyArgs>(args?: SelectSubset<T, ADMINISTRATEURCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ADMINISTRATEURS and returns the data saved in the database.
     * @param {ADMINISTRATEURCreateManyAndReturnArgs} args - Arguments to create many ADMINISTRATEURS.
     * @example
     * // Create many ADMINISTRATEURS
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ADMINISTRATEURS and only return the `ID_Admin`
     * const aDMINISTRATEURWithID_AdminOnly = await prisma.aDMINISTRATEUR.createManyAndReturn({
     *   select: { ID_Admin: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ADMINISTRATEURCreateManyAndReturnArgs>(args?: SelectSubset<T, ADMINISTRATEURCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ADMINISTRATEUR.
     * @param {ADMINISTRATEURDeleteArgs} args - Arguments to delete one ADMINISTRATEUR.
     * @example
     * // Delete one ADMINISTRATEUR
     * const ADMINISTRATEUR = await prisma.aDMINISTRATEUR.delete({
     *   where: {
     *     // ... filter to delete one ADMINISTRATEUR
     *   }
     * })
     * 
     */
    delete<T extends ADMINISTRATEURDeleteArgs>(args: SelectSubset<T, ADMINISTRATEURDeleteArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ADMINISTRATEUR.
     * @param {ADMINISTRATEURUpdateArgs} args - Arguments to update one ADMINISTRATEUR.
     * @example
     * // Update one ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ADMINISTRATEURUpdateArgs>(args: SelectSubset<T, ADMINISTRATEURUpdateArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ADMINISTRATEURS.
     * @param {ADMINISTRATEURDeleteManyArgs} args - Arguments to filter ADMINISTRATEURS to delete.
     * @example
     * // Delete a few ADMINISTRATEURS
     * const { count } = await prisma.aDMINISTRATEUR.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ADMINISTRATEURDeleteManyArgs>(args?: SelectSubset<T, ADMINISTRATEURDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ADMINISTRATEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ADMINISTRATEURS
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ADMINISTRATEURUpdateManyArgs>(args: SelectSubset<T, ADMINISTRATEURUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ADMINISTRATEURS and returns the data updated in the database.
     * @param {ADMINISTRATEURUpdateManyAndReturnArgs} args - Arguments to update many ADMINISTRATEURS.
     * @example
     * // Update many ADMINISTRATEURS
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ADMINISTRATEURS and only return the `ID_Admin`
     * const aDMINISTRATEURWithID_AdminOnly = await prisma.aDMINISTRATEUR.updateManyAndReturn({
     *   select: { ID_Admin: true },
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
    updateManyAndReturn<T extends ADMINISTRATEURUpdateManyAndReturnArgs>(args: SelectSubset<T, ADMINISTRATEURUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ADMINISTRATEUR.
     * @param {ADMINISTRATEURUpsertArgs} args - Arguments to update or create a ADMINISTRATEUR.
     * @example
     * // Update or create a ADMINISTRATEUR
     * const aDMINISTRATEUR = await prisma.aDMINISTRATEUR.upsert({
     *   create: {
     *     // ... data to create a ADMINISTRATEUR
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ADMINISTRATEUR we want to update
     *   }
     * })
     */
    upsert<T extends ADMINISTRATEURUpsertArgs>(args: SelectSubset<T, ADMINISTRATEURUpsertArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ADMINISTRATEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURCountArgs} args - Arguments to filter ADMINISTRATEURS to count.
     * @example
     * // Count the number of ADMINISTRATEURS
     * const count = await prisma.aDMINISTRATEUR.count({
     *   where: {
     *     // ... the filter for the ADMINISTRATEURS we want to count
     *   }
     * })
    **/
    count<T extends ADMINISTRATEURCountArgs>(
      args?: Subset<T, ADMINISTRATEURCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ADMINISTRATEURCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ADMINISTRATEUR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ADMINISTRATEURAggregateArgs>(args: Subset<T, ADMINISTRATEURAggregateArgs>): Prisma.PrismaPromise<GetADMINISTRATEURAggregateType<T>>

    /**
     * Group by ADMINISTRATEUR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRATEURGroupByArgs} args - Group by arguments.
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
      T extends ADMINISTRATEURGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ADMINISTRATEURGroupByArgs['orderBy'] }
        : { orderBy?: ADMINISTRATEURGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ADMINISTRATEURGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetADMINISTRATEURGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ADMINISTRATEUR model
   */
  readonly fields: ADMINISTRATEURFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ADMINISTRATEUR.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ADMINISTRATEURClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends ADMINISTRATEUR$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRATEUR$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends ADMINISTRATEUR$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRATEUR$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quotas<T extends ADMINISTRATEUR$quotasArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRATEUR$quotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historique<T extends ADMINISTRATEUR$historiqueArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRATEUR$historiqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ADMINISTRATEUR model
   */
  interface ADMINISTRATEURFieldRefs {
    readonly ID_Admin: FieldRef<"ADMINISTRATEUR", 'Int'>
    readonly Nom_Admin: FieldRef<"ADMINISTRATEUR", 'String'>
    readonly Email_Admin: FieldRef<"ADMINISTRATEUR", 'String'>
    readonly MotPass_Admin: FieldRef<"ADMINISTRATEUR", 'String'>
    readonly id_Quotas: FieldRef<"ADMINISTRATEUR", 'Int'>
    readonly id_Paie: FieldRef<"ADMINISTRATEUR", 'Int'>
    readonly user_id: FieldRef<"ADMINISTRATEUR", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ADMINISTRATEUR findUnique
   */
  export type ADMINISTRATEURFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRATEUR to fetch.
     */
    where: ADMINISTRATEURWhereUniqueInput
  }

  /**
   * ADMINISTRATEUR findUniqueOrThrow
   */
  export type ADMINISTRATEURFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRATEUR to fetch.
     */
    where: ADMINISTRATEURWhereUniqueInput
  }

  /**
   * ADMINISTRATEUR findFirst
   */
  export type ADMINISTRATEURFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRATEUR to fetch.
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRATEURS to fetch.
     */
    orderBy?: ADMINISTRATEUROrderByWithRelationInput | ADMINISTRATEUROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADMINISTRATEURS.
     */
    cursor?: ADMINISTRATEURWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRATEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRATEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADMINISTRATEURS.
     */
    distinct?: ADMINISTRATEURScalarFieldEnum | ADMINISTRATEURScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR findFirstOrThrow
   */
  export type ADMINISTRATEURFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRATEUR to fetch.
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRATEURS to fetch.
     */
    orderBy?: ADMINISTRATEUROrderByWithRelationInput | ADMINISTRATEUROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADMINISTRATEURS.
     */
    cursor?: ADMINISTRATEURWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRATEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRATEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADMINISTRATEURS.
     */
    distinct?: ADMINISTRATEURScalarFieldEnum | ADMINISTRATEURScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR findMany
   */
  export type ADMINISTRATEURFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRATEURS to fetch.
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRATEURS to fetch.
     */
    orderBy?: ADMINISTRATEUROrderByWithRelationInput | ADMINISTRATEUROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ADMINISTRATEURS.
     */
    cursor?: ADMINISTRATEURWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRATEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRATEURS.
     */
    skip?: number
    distinct?: ADMINISTRATEURScalarFieldEnum | ADMINISTRATEURScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR create
   */
  export type ADMINISTRATEURCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * The data needed to create a ADMINISTRATEUR.
     */
    data: XOR<ADMINISTRATEURCreateInput, ADMINISTRATEURUncheckedCreateInput>
  }

  /**
   * ADMINISTRATEUR createMany
   */
  export type ADMINISTRATEURCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ADMINISTRATEURS.
     */
    data: ADMINISTRATEURCreateManyInput | ADMINISTRATEURCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ADMINISTRATEUR createManyAndReturn
   */
  export type ADMINISTRATEURCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * The data used to create many ADMINISTRATEURS.
     */
    data: ADMINISTRATEURCreateManyInput | ADMINISTRATEURCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ADMINISTRATEUR update
   */
  export type ADMINISTRATEURUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * The data needed to update a ADMINISTRATEUR.
     */
    data: XOR<ADMINISTRATEURUpdateInput, ADMINISTRATEURUncheckedUpdateInput>
    /**
     * Choose, which ADMINISTRATEUR to update.
     */
    where: ADMINISTRATEURWhereUniqueInput
  }

  /**
   * ADMINISTRATEUR updateMany
   */
  export type ADMINISTRATEURUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ADMINISTRATEURS.
     */
    data: XOR<ADMINISTRATEURUpdateManyMutationInput, ADMINISTRATEURUncheckedUpdateManyInput>
    /**
     * Filter which ADMINISTRATEURS to update
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * Limit how many ADMINISTRATEURS to update.
     */
    limit?: number
  }

  /**
   * ADMINISTRATEUR updateManyAndReturn
   */
  export type ADMINISTRATEURUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * The data used to update ADMINISTRATEURS.
     */
    data: XOR<ADMINISTRATEURUpdateManyMutationInput, ADMINISTRATEURUncheckedUpdateManyInput>
    /**
     * Filter which ADMINISTRATEURS to update
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * Limit how many ADMINISTRATEURS to update.
     */
    limit?: number
  }

  /**
   * ADMINISTRATEUR upsert
   */
  export type ADMINISTRATEURUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * The filter to search for the ADMINISTRATEUR to update in case it exists.
     */
    where: ADMINISTRATEURWhereUniqueInput
    /**
     * In case the ADMINISTRATEUR found by the `where` argument doesn't exist, create a new ADMINISTRATEUR with this data.
     */
    create: XOR<ADMINISTRATEURCreateInput, ADMINISTRATEURUncheckedCreateInput>
    /**
     * In case the ADMINISTRATEUR was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ADMINISTRATEURUpdateInput, ADMINISTRATEURUncheckedUpdateInput>
  }

  /**
   * ADMINISTRATEUR delete
   */
  export type ADMINISTRATEURDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    /**
     * Filter which ADMINISTRATEUR to delete.
     */
    where: ADMINISTRATEURWhereUniqueInput
  }

  /**
   * ADMINISTRATEUR deleteMany
   */
  export type ADMINISTRATEURDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADMINISTRATEURS to delete
     */
    where?: ADMINISTRATEURWhereInput
    /**
     * Limit how many ADMINISTRATEURS to delete.
     */
    limit?: number
  }

  /**
   * ADMINISTRATEUR.notifications
   */
  export type ADMINISTRATEUR$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR.paiements
   */
  export type ADMINISTRATEUR$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    where?: PAIEMENTWhereInput
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    cursor?: PAIEMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAIEMENTScalarFieldEnum | PAIEMENTScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR.quotas
   */
  export type ADMINISTRATEUR$quotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    where?: QUOTASWhereInput
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    cursor?: QUOTASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR.historique
   */
  export type ADMINISTRATEUR$historiqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    where?: HISTORIQUE_PAIEMENTWhereInput
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HISTORIQUE_PAIEMENTScalarFieldEnum | HISTORIQUE_PAIEMENTScalarFieldEnum[]
  }

  /**
   * ADMINISTRATEUR without action
   */
  export type ADMINISTRATEURDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
  }


  /**
   * Model ETUDIANT
   */

  export type AggregateETUDIANT = {
    _count: ETUDIANTCountAggregateOutputType | null
    _avg: ETUDIANTAvgAggregateOutputType | null
    _sum: ETUDIANTSumAggregateOutputType | null
    _min: ETUDIANTMinAggregateOutputType | null
    _max: ETUDIANTMaxAggregateOutputType | null
  }

  export type ETUDIANTAvgAggregateOutputType = {
    ID_Etudiant: number | null
    Dette: number | null
    id_Dep: number | null
  }

  export type ETUDIANTSumAggregateOutputType = {
    ID_Etudiant: number | null
    Dette: number | null
    id_Dep: number | null
  }

  export type ETUDIANTMinAggregateOutputType = {
    ID_Etudiant: number | null
    user_id: string | null
    FullName_Et: string | null
    Email_Et: string | null
    Annee_Et: string | null
    Dette: number | null
    MotPass_Et: string | null
    Photo_Et: string | null
    id_Dep: number | null
  }

  export type ETUDIANTMaxAggregateOutputType = {
    ID_Etudiant: number | null
    user_id: string | null
    FullName_Et: string | null
    Email_Et: string | null
    Annee_Et: string | null
    Dette: number | null
    MotPass_Et: string | null
    Photo_Et: string | null
    id_Dep: number | null
  }

  export type ETUDIANTCountAggregateOutputType = {
    ID_Etudiant: number
    user_id: number
    FullName_Et: number
    Email_Et: number
    Annee_Et: number
    Dette: number
    MotPass_Et: number
    Photo_Et: number
    id_Dep: number
    _all: number
  }


  export type ETUDIANTAvgAggregateInputType = {
    ID_Etudiant?: true
    Dette?: true
    id_Dep?: true
  }

  export type ETUDIANTSumAggregateInputType = {
    ID_Etudiant?: true
    Dette?: true
    id_Dep?: true
  }

  export type ETUDIANTMinAggregateInputType = {
    ID_Etudiant?: true
    user_id?: true
    FullName_Et?: true
    Email_Et?: true
    Annee_Et?: true
    Dette?: true
    MotPass_Et?: true
    Photo_Et?: true
    id_Dep?: true
  }

  export type ETUDIANTMaxAggregateInputType = {
    ID_Etudiant?: true
    user_id?: true
    FullName_Et?: true
    Email_Et?: true
    Annee_Et?: true
    Dette?: true
    MotPass_Et?: true
    Photo_Et?: true
    id_Dep?: true
  }

  export type ETUDIANTCountAggregateInputType = {
    ID_Etudiant?: true
    user_id?: true
    FullName_Et?: true
    Email_Et?: true
    Annee_Et?: true
    Dette?: true
    MotPass_Et?: true
    Photo_Et?: true
    id_Dep?: true
    _all?: true
  }

  export type ETUDIANTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ETUDIANT to aggregate.
     */
    where?: ETUDIANTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ETUDIANTS to fetch.
     */
    orderBy?: ETUDIANTOrderByWithRelationInput | ETUDIANTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ETUDIANTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ETUDIANTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ETUDIANTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ETUDIANTS
    **/
    _count?: true | ETUDIANTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ETUDIANTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ETUDIANTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ETUDIANTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ETUDIANTMaxAggregateInputType
  }

  export type GetETUDIANTAggregateType<T extends ETUDIANTAggregateArgs> = {
        [P in keyof T & keyof AggregateETUDIANT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateETUDIANT[P]>
      : GetScalarType<T[P], AggregateETUDIANT[P]>
  }




  export type ETUDIANTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ETUDIANTWhereInput
    orderBy?: ETUDIANTOrderByWithAggregationInput | ETUDIANTOrderByWithAggregationInput[]
    by: ETUDIANTScalarFieldEnum[] | ETUDIANTScalarFieldEnum
    having?: ETUDIANTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ETUDIANTCountAggregateInputType | true
    _avg?: ETUDIANTAvgAggregateInputType
    _sum?: ETUDIANTSumAggregateInputType
    _min?: ETUDIANTMinAggregateInputType
    _max?: ETUDIANTMaxAggregateInputType
  }

  export type ETUDIANTGroupByOutputType = {
    ID_Etudiant: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette: number | null
    MotPass_Et: string
    Photo_Et: string | null
    id_Dep: number
    _count: ETUDIANTCountAggregateOutputType | null
    _avg: ETUDIANTAvgAggregateOutputType | null
    _sum: ETUDIANTSumAggregateOutputType | null
    _min: ETUDIANTMinAggregateOutputType | null
    _max: ETUDIANTMaxAggregateOutputType | null
  }

  type GetETUDIANTGroupByPayload<T extends ETUDIANTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ETUDIANTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ETUDIANTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ETUDIANTGroupByOutputType[P]>
            : GetScalarType<T[P], ETUDIANTGroupByOutputType[P]>
        }
      >
    >


  export type ETUDIANTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Etudiant?: boolean
    user_id?: boolean
    FullName_Et?: boolean
    Email_Et?: boolean
    Annee_Et?: boolean
    Dette?: boolean
    MotPass_Et?: boolean
    Photo_Et?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    notifications?: boolean | ETUDIANT$notificationsArgs<ExtArgs>
    paiements?: boolean | ETUDIANT$paiementsArgs<ExtArgs>
    realisations?: boolean | ETUDIANT$realisationsArgs<ExtArgs>
    _count?: boolean | ETUDIANTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eTUDIANT"]>

  export type ETUDIANTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Etudiant?: boolean
    user_id?: boolean
    FullName_Et?: boolean
    Email_Et?: boolean
    Annee_Et?: boolean
    Dette?: boolean
    MotPass_Et?: boolean
    Photo_Et?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eTUDIANT"]>

  export type ETUDIANTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Etudiant?: boolean
    user_id?: boolean
    FullName_Et?: boolean
    Email_Et?: boolean
    Annee_Et?: boolean
    Dette?: boolean
    MotPass_Et?: boolean
    Photo_Et?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eTUDIANT"]>

  export type ETUDIANTSelectScalar = {
    ID_Etudiant?: boolean
    user_id?: boolean
    FullName_Et?: boolean
    Email_Et?: boolean
    Annee_Et?: boolean
    Dette?: boolean
    MotPass_Et?: boolean
    Photo_Et?: boolean
    id_Dep?: boolean
  }

  export type ETUDIANTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Etudiant" | "user_id" | "FullName_Et" | "Email_Et" | "Annee_Et" | "Dette" | "MotPass_Et" | "Photo_Et" | "id_Dep", ExtArgs["result"]["eTUDIANT"]>
  export type ETUDIANTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    notifications?: boolean | ETUDIANT$notificationsArgs<ExtArgs>
    paiements?: boolean | ETUDIANT$paiementsArgs<ExtArgs>
    realisations?: boolean | ETUDIANT$realisationsArgs<ExtArgs>
    _count?: boolean | ETUDIANTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ETUDIANTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }
  export type ETUDIANTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }

  export type $ETUDIANTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ETUDIANT"
    objects: {
      departement: Prisma.$DEPARTEMENTPayload<ExtArgs>
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      paiements: Prisma.$PAIEMENTPayload<ExtArgs>[]
      realisations: Prisma.$REALISATIONPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Etudiant: number
      user_id: string
      FullName_Et: string
      Email_Et: string
      Annee_Et: string
      Dette: number | null
      MotPass_Et: string
      Photo_Et: string | null
      id_Dep: number
    }, ExtArgs["result"]["eTUDIANT"]>
    composites: {}
  }

  type ETUDIANTGetPayload<S extends boolean | null | undefined | ETUDIANTDefaultArgs> = $Result.GetResult<Prisma.$ETUDIANTPayload, S>

  type ETUDIANTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ETUDIANTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ETUDIANTCountAggregateInputType | true
    }

  export interface ETUDIANTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ETUDIANT'], meta: { name: 'ETUDIANT' } }
    /**
     * Find zero or one ETUDIANT that matches the filter.
     * @param {ETUDIANTFindUniqueArgs} args - Arguments to find a ETUDIANT
     * @example
     * // Get one ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ETUDIANTFindUniqueArgs>(args: SelectSubset<T, ETUDIANTFindUniqueArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ETUDIANT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ETUDIANTFindUniqueOrThrowArgs} args - Arguments to find a ETUDIANT
     * @example
     * // Get one ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ETUDIANTFindUniqueOrThrowArgs>(args: SelectSubset<T, ETUDIANTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ETUDIANT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTFindFirstArgs} args - Arguments to find a ETUDIANT
     * @example
     * // Get one ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ETUDIANTFindFirstArgs>(args?: SelectSubset<T, ETUDIANTFindFirstArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ETUDIANT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTFindFirstOrThrowArgs} args - Arguments to find a ETUDIANT
     * @example
     * // Get one ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ETUDIANTFindFirstOrThrowArgs>(args?: SelectSubset<T, ETUDIANTFindFirstOrThrowArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ETUDIANTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ETUDIANTS
     * const eTUDIANTS = await prisma.eTUDIANT.findMany()
     * 
     * // Get first 10 ETUDIANTS
     * const eTUDIANTS = await prisma.eTUDIANT.findMany({ take: 10 })
     * 
     * // Only select the `ID_Etudiant`
     * const eTUDIANTWithID_EtudiantOnly = await prisma.eTUDIANT.findMany({ select: { ID_Etudiant: true } })
     * 
     */
    findMany<T extends ETUDIANTFindManyArgs>(args?: SelectSubset<T, ETUDIANTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ETUDIANT.
     * @param {ETUDIANTCreateArgs} args - Arguments to create a ETUDIANT.
     * @example
     * // Create one ETUDIANT
     * const ETUDIANT = await prisma.eTUDIANT.create({
     *   data: {
     *     // ... data to create a ETUDIANT
     *   }
     * })
     * 
     */
    create<T extends ETUDIANTCreateArgs>(args: SelectSubset<T, ETUDIANTCreateArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ETUDIANTS.
     * @param {ETUDIANTCreateManyArgs} args - Arguments to create many ETUDIANTS.
     * @example
     * // Create many ETUDIANTS
     * const eTUDIANT = await prisma.eTUDIANT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ETUDIANTCreateManyArgs>(args?: SelectSubset<T, ETUDIANTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ETUDIANTS and returns the data saved in the database.
     * @param {ETUDIANTCreateManyAndReturnArgs} args - Arguments to create many ETUDIANTS.
     * @example
     * // Create many ETUDIANTS
     * const eTUDIANT = await prisma.eTUDIANT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ETUDIANTS and only return the `ID_Etudiant`
     * const eTUDIANTWithID_EtudiantOnly = await prisma.eTUDIANT.createManyAndReturn({
     *   select: { ID_Etudiant: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ETUDIANTCreateManyAndReturnArgs>(args?: SelectSubset<T, ETUDIANTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ETUDIANT.
     * @param {ETUDIANTDeleteArgs} args - Arguments to delete one ETUDIANT.
     * @example
     * // Delete one ETUDIANT
     * const ETUDIANT = await prisma.eTUDIANT.delete({
     *   where: {
     *     // ... filter to delete one ETUDIANT
     *   }
     * })
     * 
     */
    delete<T extends ETUDIANTDeleteArgs>(args: SelectSubset<T, ETUDIANTDeleteArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ETUDIANT.
     * @param {ETUDIANTUpdateArgs} args - Arguments to update one ETUDIANT.
     * @example
     * // Update one ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ETUDIANTUpdateArgs>(args: SelectSubset<T, ETUDIANTUpdateArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ETUDIANTS.
     * @param {ETUDIANTDeleteManyArgs} args - Arguments to filter ETUDIANTS to delete.
     * @example
     * // Delete a few ETUDIANTS
     * const { count } = await prisma.eTUDIANT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ETUDIANTDeleteManyArgs>(args?: SelectSubset<T, ETUDIANTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ETUDIANTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ETUDIANTS
     * const eTUDIANT = await prisma.eTUDIANT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ETUDIANTUpdateManyArgs>(args: SelectSubset<T, ETUDIANTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ETUDIANTS and returns the data updated in the database.
     * @param {ETUDIANTUpdateManyAndReturnArgs} args - Arguments to update many ETUDIANTS.
     * @example
     * // Update many ETUDIANTS
     * const eTUDIANT = await prisma.eTUDIANT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ETUDIANTS and only return the `ID_Etudiant`
     * const eTUDIANTWithID_EtudiantOnly = await prisma.eTUDIANT.updateManyAndReturn({
     *   select: { ID_Etudiant: true },
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
    updateManyAndReturn<T extends ETUDIANTUpdateManyAndReturnArgs>(args: SelectSubset<T, ETUDIANTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ETUDIANT.
     * @param {ETUDIANTUpsertArgs} args - Arguments to update or create a ETUDIANT.
     * @example
     * // Update or create a ETUDIANT
     * const eTUDIANT = await prisma.eTUDIANT.upsert({
     *   create: {
     *     // ... data to create a ETUDIANT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ETUDIANT we want to update
     *   }
     * })
     */
    upsert<T extends ETUDIANTUpsertArgs>(args: SelectSubset<T, ETUDIANTUpsertArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ETUDIANTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTCountArgs} args - Arguments to filter ETUDIANTS to count.
     * @example
     * // Count the number of ETUDIANTS
     * const count = await prisma.eTUDIANT.count({
     *   where: {
     *     // ... the filter for the ETUDIANTS we want to count
     *   }
     * })
    **/
    count<T extends ETUDIANTCountArgs>(
      args?: Subset<T, ETUDIANTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ETUDIANTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ETUDIANT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ETUDIANTAggregateArgs>(args: Subset<T, ETUDIANTAggregateArgs>): Prisma.PrismaPromise<GetETUDIANTAggregateType<T>>

    /**
     * Group by ETUDIANT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ETUDIANTGroupByArgs} args - Group by arguments.
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
      T extends ETUDIANTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ETUDIANTGroupByArgs['orderBy'] }
        : { orderBy?: ETUDIANTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ETUDIANTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetETUDIANTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ETUDIANT model
   */
  readonly fields: ETUDIANTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ETUDIANT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ETUDIANTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends DEPARTEMENTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENTDefaultArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends ETUDIANT$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, ETUDIANT$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends ETUDIANT$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, ETUDIANT$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    realisations<T extends ETUDIANT$realisationsArgs<ExtArgs> = {}>(args?: Subset<T, ETUDIANT$realisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ETUDIANT model
   */
  interface ETUDIANTFieldRefs {
    readonly ID_Etudiant: FieldRef<"ETUDIANT", 'Int'>
    readonly user_id: FieldRef<"ETUDIANT", 'String'>
    readonly FullName_Et: FieldRef<"ETUDIANT", 'String'>
    readonly Email_Et: FieldRef<"ETUDIANT", 'String'>
    readonly Annee_Et: FieldRef<"ETUDIANT", 'String'>
    readonly Dette: FieldRef<"ETUDIANT", 'Float'>
    readonly MotPass_Et: FieldRef<"ETUDIANT", 'String'>
    readonly Photo_Et: FieldRef<"ETUDIANT", 'String'>
    readonly id_Dep: FieldRef<"ETUDIANT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ETUDIANT findUnique
   */
  export type ETUDIANTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter, which ETUDIANT to fetch.
     */
    where: ETUDIANTWhereUniqueInput
  }

  /**
   * ETUDIANT findUniqueOrThrow
   */
  export type ETUDIANTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter, which ETUDIANT to fetch.
     */
    where: ETUDIANTWhereUniqueInput
  }

  /**
   * ETUDIANT findFirst
   */
  export type ETUDIANTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter, which ETUDIANT to fetch.
     */
    where?: ETUDIANTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ETUDIANTS to fetch.
     */
    orderBy?: ETUDIANTOrderByWithRelationInput | ETUDIANTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ETUDIANTS.
     */
    cursor?: ETUDIANTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ETUDIANTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ETUDIANTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ETUDIANTS.
     */
    distinct?: ETUDIANTScalarFieldEnum | ETUDIANTScalarFieldEnum[]
  }

  /**
   * ETUDIANT findFirstOrThrow
   */
  export type ETUDIANTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter, which ETUDIANT to fetch.
     */
    where?: ETUDIANTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ETUDIANTS to fetch.
     */
    orderBy?: ETUDIANTOrderByWithRelationInput | ETUDIANTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ETUDIANTS.
     */
    cursor?: ETUDIANTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ETUDIANTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ETUDIANTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ETUDIANTS.
     */
    distinct?: ETUDIANTScalarFieldEnum | ETUDIANTScalarFieldEnum[]
  }

  /**
   * ETUDIANT findMany
   */
  export type ETUDIANTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter, which ETUDIANTS to fetch.
     */
    where?: ETUDIANTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ETUDIANTS to fetch.
     */
    orderBy?: ETUDIANTOrderByWithRelationInput | ETUDIANTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ETUDIANTS.
     */
    cursor?: ETUDIANTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ETUDIANTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ETUDIANTS.
     */
    skip?: number
    distinct?: ETUDIANTScalarFieldEnum | ETUDIANTScalarFieldEnum[]
  }

  /**
   * ETUDIANT create
   */
  export type ETUDIANTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * The data needed to create a ETUDIANT.
     */
    data: XOR<ETUDIANTCreateInput, ETUDIANTUncheckedCreateInput>
  }

  /**
   * ETUDIANT createMany
   */
  export type ETUDIANTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ETUDIANTS.
     */
    data: ETUDIANTCreateManyInput | ETUDIANTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ETUDIANT createManyAndReturn
   */
  export type ETUDIANTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * The data used to create many ETUDIANTS.
     */
    data: ETUDIANTCreateManyInput | ETUDIANTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ETUDIANT update
   */
  export type ETUDIANTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * The data needed to update a ETUDIANT.
     */
    data: XOR<ETUDIANTUpdateInput, ETUDIANTUncheckedUpdateInput>
    /**
     * Choose, which ETUDIANT to update.
     */
    where: ETUDIANTWhereUniqueInput
  }

  /**
   * ETUDIANT updateMany
   */
  export type ETUDIANTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ETUDIANTS.
     */
    data: XOR<ETUDIANTUpdateManyMutationInput, ETUDIANTUncheckedUpdateManyInput>
    /**
     * Filter which ETUDIANTS to update
     */
    where?: ETUDIANTWhereInput
    /**
     * Limit how many ETUDIANTS to update.
     */
    limit?: number
  }

  /**
   * ETUDIANT updateManyAndReturn
   */
  export type ETUDIANTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * The data used to update ETUDIANTS.
     */
    data: XOR<ETUDIANTUpdateManyMutationInput, ETUDIANTUncheckedUpdateManyInput>
    /**
     * Filter which ETUDIANTS to update
     */
    where?: ETUDIANTWhereInput
    /**
     * Limit how many ETUDIANTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ETUDIANT upsert
   */
  export type ETUDIANTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * The filter to search for the ETUDIANT to update in case it exists.
     */
    where: ETUDIANTWhereUniqueInput
    /**
     * In case the ETUDIANT found by the `where` argument doesn't exist, create a new ETUDIANT with this data.
     */
    create: XOR<ETUDIANTCreateInput, ETUDIANTUncheckedCreateInput>
    /**
     * In case the ETUDIANT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ETUDIANTUpdateInput, ETUDIANTUncheckedUpdateInput>
  }

  /**
   * ETUDIANT delete
   */
  export type ETUDIANTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    /**
     * Filter which ETUDIANT to delete.
     */
    where: ETUDIANTWhereUniqueInput
  }

  /**
   * ETUDIANT deleteMany
   */
  export type ETUDIANTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ETUDIANTS to delete
     */
    where?: ETUDIANTWhereInput
    /**
     * Limit how many ETUDIANTS to delete.
     */
    limit?: number
  }

  /**
   * ETUDIANT.notifications
   */
  export type ETUDIANT$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * ETUDIANT.paiements
   */
  export type ETUDIANT$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    where?: PAIEMENTWhereInput
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    cursor?: PAIEMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAIEMENTScalarFieldEnum | PAIEMENTScalarFieldEnum[]
  }

  /**
   * ETUDIANT.realisations
   */
  export type ETUDIANT$realisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    where?: REALISATIONWhereInput
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    cursor?: REALISATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * ETUDIANT without action
   */
  export type ETUDIANTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
  }


  /**
   * Model DEPARTEMENT
   */

  export type AggregateDEPARTEMENT = {
    _count: DEPARTEMENTCountAggregateOutputType | null
    _avg: DEPARTEMENTAvgAggregateOutputType | null
    _sum: DEPARTEMENTSumAggregateOutputType | null
    _min: DEPARTEMENTMinAggregateOutputType | null
    _max: DEPARTEMENTMaxAggregateOutputType | null
  }

  export type DEPARTEMENTAvgAggregateOutputType = {
    ID_Dep: number | null
  }

  export type DEPARTEMENTSumAggregateOutputType = {
    ID_Dep: number | null
  }

  export type DEPARTEMENTMinAggregateOutputType = {
    ID_Dep: number | null
    Nom_Dep: string | null
  }

  export type DEPARTEMENTMaxAggregateOutputType = {
    ID_Dep: number | null
    Nom_Dep: string | null
  }

  export type DEPARTEMENTCountAggregateOutputType = {
    ID_Dep: number
    Nom_Dep: number
    _all: number
  }


  export type DEPARTEMENTAvgAggregateInputType = {
    ID_Dep?: true
  }

  export type DEPARTEMENTSumAggregateInputType = {
    ID_Dep?: true
  }

  export type DEPARTEMENTMinAggregateInputType = {
    ID_Dep?: true
    Nom_Dep?: true
  }

  export type DEPARTEMENTMaxAggregateInputType = {
    ID_Dep?: true
    Nom_Dep?: true
  }

  export type DEPARTEMENTCountAggregateInputType = {
    ID_Dep?: true
    Nom_Dep?: true
    _all?: true
  }

  export type DEPARTEMENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DEPARTEMENT to aggregate.
     */
    where?: DEPARTEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEPARTEMENTS to fetch.
     */
    orderBy?: DEPARTEMENTOrderByWithRelationInput | DEPARTEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DEPARTEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEPARTEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEPARTEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DEPARTEMENTS
    **/
    _count?: true | DEPARTEMENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DEPARTEMENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DEPARTEMENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DEPARTEMENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DEPARTEMENTMaxAggregateInputType
  }

  export type GetDEPARTEMENTAggregateType<T extends DEPARTEMENTAggregateArgs> = {
        [P in keyof T & keyof AggregateDEPARTEMENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDEPARTEMENT[P]>
      : GetScalarType<T[P], AggregateDEPARTEMENT[P]>
  }




  export type DEPARTEMENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DEPARTEMENTWhereInput
    orderBy?: DEPARTEMENTOrderByWithAggregationInput | DEPARTEMENTOrderByWithAggregationInput[]
    by: DEPARTEMENTScalarFieldEnum[] | DEPARTEMENTScalarFieldEnum
    having?: DEPARTEMENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DEPARTEMENTCountAggregateInputType | true
    _avg?: DEPARTEMENTAvgAggregateInputType
    _sum?: DEPARTEMENTSumAggregateInputType
    _min?: DEPARTEMENTMinAggregateInputType
    _max?: DEPARTEMENTMaxAggregateInputType
  }

  export type DEPARTEMENTGroupByOutputType = {
    ID_Dep: number
    Nom_Dep: string
    _count: DEPARTEMENTCountAggregateOutputType | null
    _avg: DEPARTEMENTAvgAggregateOutputType | null
    _sum: DEPARTEMENTSumAggregateOutputType | null
    _min: DEPARTEMENTMinAggregateOutputType | null
    _max: DEPARTEMENTMaxAggregateOutputType | null
  }

  type GetDEPARTEMENTGroupByPayload<T extends DEPARTEMENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DEPARTEMENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DEPARTEMENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DEPARTEMENTGroupByOutputType[P]>
            : GetScalarType<T[P], DEPARTEMENTGroupByOutputType[P]>
        }
      >
    >


  export type DEPARTEMENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Dep?: boolean
    Nom_Dep?: boolean
    actes?: boolean | DEPARTEMENT$actesArgs<ExtArgs>
    etudiants?: boolean | DEPARTEMENT$etudiantsArgs<ExtArgs>
    quotas?: boolean | DEPARTEMENT$quotasArgs<ExtArgs>
    professeurs?: boolean | DEPARTEMENT$professeursArgs<ExtArgs>
    _count?: boolean | DEPARTEMENTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dEPARTEMENT"]>

  export type DEPARTEMENTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Dep?: boolean
    Nom_Dep?: boolean
  }, ExtArgs["result"]["dEPARTEMENT"]>

  export type DEPARTEMENTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Dep?: boolean
    Nom_Dep?: boolean
  }, ExtArgs["result"]["dEPARTEMENT"]>

  export type DEPARTEMENTSelectScalar = {
    ID_Dep?: boolean
    Nom_Dep?: boolean
  }

  export type DEPARTEMENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Dep" | "Nom_Dep", ExtArgs["result"]["dEPARTEMENT"]>
  export type DEPARTEMENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actes?: boolean | DEPARTEMENT$actesArgs<ExtArgs>
    etudiants?: boolean | DEPARTEMENT$etudiantsArgs<ExtArgs>
    quotas?: boolean | DEPARTEMENT$quotasArgs<ExtArgs>
    professeurs?: boolean | DEPARTEMENT$professeursArgs<ExtArgs>
    _count?: boolean | DEPARTEMENTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DEPARTEMENTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DEPARTEMENTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DEPARTEMENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DEPARTEMENT"
    objects: {
      actes: Prisma.$ACTESPayload<ExtArgs>[]
      etudiants: Prisma.$ETUDIANTPayload<ExtArgs>[]
      quotas: Prisma.$QUOTASPayload<ExtArgs>[]
      professeurs: Prisma.$PROFESSEURSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Dep: number
      Nom_Dep: string
    }, ExtArgs["result"]["dEPARTEMENT"]>
    composites: {}
  }

  type DEPARTEMENTGetPayload<S extends boolean | null | undefined | DEPARTEMENTDefaultArgs> = $Result.GetResult<Prisma.$DEPARTEMENTPayload, S>

  type DEPARTEMENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DEPARTEMENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DEPARTEMENTCountAggregateInputType | true
    }

  export interface DEPARTEMENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DEPARTEMENT'], meta: { name: 'DEPARTEMENT' } }
    /**
     * Find zero or one DEPARTEMENT that matches the filter.
     * @param {DEPARTEMENTFindUniqueArgs} args - Arguments to find a DEPARTEMENT
     * @example
     * // Get one DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DEPARTEMENTFindUniqueArgs>(args: SelectSubset<T, DEPARTEMENTFindUniqueArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DEPARTEMENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DEPARTEMENTFindUniqueOrThrowArgs} args - Arguments to find a DEPARTEMENT
     * @example
     * // Get one DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DEPARTEMENTFindUniqueOrThrowArgs>(args: SelectSubset<T, DEPARTEMENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DEPARTEMENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTFindFirstArgs} args - Arguments to find a DEPARTEMENT
     * @example
     * // Get one DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DEPARTEMENTFindFirstArgs>(args?: SelectSubset<T, DEPARTEMENTFindFirstArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DEPARTEMENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTFindFirstOrThrowArgs} args - Arguments to find a DEPARTEMENT
     * @example
     * // Get one DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DEPARTEMENTFindFirstOrThrowArgs>(args?: SelectSubset<T, DEPARTEMENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DEPARTEMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DEPARTEMENTS
     * const dEPARTEMENTS = await prisma.dEPARTEMENT.findMany()
     * 
     * // Get first 10 DEPARTEMENTS
     * const dEPARTEMENTS = await prisma.dEPARTEMENT.findMany({ take: 10 })
     * 
     * // Only select the `ID_Dep`
     * const dEPARTEMENTWithID_DepOnly = await prisma.dEPARTEMENT.findMany({ select: { ID_Dep: true } })
     * 
     */
    findMany<T extends DEPARTEMENTFindManyArgs>(args?: SelectSubset<T, DEPARTEMENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DEPARTEMENT.
     * @param {DEPARTEMENTCreateArgs} args - Arguments to create a DEPARTEMENT.
     * @example
     * // Create one DEPARTEMENT
     * const DEPARTEMENT = await prisma.dEPARTEMENT.create({
     *   data: {
     *     // ... data to create a DEPARTEMENT
     *   }
     * })
     * 
     */
    create<T extends DEPARTEMENTCreateArgs>(args: SelectSubset<T, DEPARTEMENTCreateArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DEPARTEMENTS.
     * @param {DEPARTEMENTCreateManyArgs} args - Arguments to create many DEPARTEMENTS.
     * @example
     * // Create many DEPARTEMENTS
     * const dEPARTEMENT = await prisma.dEPARTEMENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DEPARTEMENTCreateManyArgs>(args?: SelectSubset<T, DEPARTEMENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DEPARTEMENTS and returns the data saved in the database.
     * @param {DEPARTEMENTCreateManyAndReturnArgs} args - Arguments to create many DEPARTEMENTS.
     * @example
     * // Create many DEPARTEMENTS
     * const dEPARTEMENT = await prisma.dEPARTEMENT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DEPARTEMENTS and only return the `ID_Dep`
     * const dEPARTEMENTWithID_DepOnly = await prisma.dEPARTEMENT.createManyAndReturn({
     *   select: { ID_Dep: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DEPARTEMENTCreateManyAndReturnArgs>(args?: SelectSubset<T, DEPARTEMENTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DEPARTEMENT.
     * @param {DEPARTEMENTDeleteArgs} args - Arguments to delete one DEPARTEMENT.
     * @example
     * // Delete one DEPARTEMENT
     * const DEPARTEMENT = await prisma.dEPARTEMENT.delete({
     *   where: {
     *     // ... filter to delete one DEPARTEMENT
     *   }
     * })
     * 
     */
    delete<T extends DEPARTEMENTDeleteArgs>(args: SelectSubset<T, DEPARTEMENTDeleteArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DEPARTEMENT.
     * @param {DEPARTEMENTUpdateArgs} args - Arguments to update one DEPARTEMENT.
     * @example
     * // Update one DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DEPARTEMENTUpdateArgs>(args: SelectSubset<T, DEPARTEMENTUpdateArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DEPARTEMENTS.
     * @param {DEPARTEMENTDeleteManyArgs} args - Arguments to filter DEPARTEMENTS to delete.
     * @example
     * // Delete a few DEPARTEMENTS
     * const { count } = await prisma.dEPARTEMENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DEPARTEMENTDeleteManyArgs>(args?: SelectSubset<T, DEPARTEMENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DEPARTEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DEPARTEMENTS
     * const dEPARTEMENT = await prisma.dEPARTEMENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DEPARTEMENTUpdateManyArgs>(args: SelectSubset<T, DEPARTEMENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DEPARTEMENTS and returns the data updated in the database.
     * @param {DEPARTEMENTUpdateManyAndReturnArgs} args - Arguments to update many DEPARTEMENTS.
     * @example
     * // Update many DEPARTEMENTS
     * const dEPARTEMENT = await prisma.dEPARTEMENT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DEPARTEMENTS and only return the `ID_Dep`
     * const dEPARTEMENTWithID_DepOnly = await prisma.dEPARTEMENT.updateManyAndReturn({
     *   select: { ID_Dep: true },
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
    updateManyAndReturn<T extends DEPARTEMENTUpdateManyAndReturnArgs>(args: SelectSubset<T, DEPARTEMENTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DEPARTEMENT.
     * @param {DEPARTEMENTUpsertArgs} args - Arguments to update or create a DEPARTEMENT.
     * @example
     * // Update or create a DEPARTEMENT
     * const dEPARTEMENT = await prisma.dEPARTEMENT.upsert({
     *   create: {
     *     // ... data to create a DEPARTEMENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DEPARTEMENT we want to update
     *   }
     * })
     */
    upsert<T extends DEPARTEMENTUpsertArgs>(args: SelectSubset<T, DEPARTEMENTUpsertArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DEPARTEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTCountArgs} args - Arguments to filter DEPARTEMENTS to count.
     * @example
     * // Count the number of DEPARTEMENTS
     * const count = await prisma.dEPARTEMENT.count({
     *   where: {
     *     // ... the filter for the DEPARTEMENTS we want to count
     *   }
     * })
    **/
    count<T extends DEPARTEMENTCountArgs>(
      args?: Subset<T, DEPARTEMENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DEPARTEMENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DEPARTEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DEPARTEMENTAggregateArgs>(args: Subset<T, DEPARTEMENTAggregateArgs>): Prisma.PrismaPromise<GetDEPARTEMENTAggregateType<T>>

    /**
     * Group by DEPARTEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEPARTEMENTGroupByArgs} args - Group by arguments.
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
      T extends DEPARTEMENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DEPARTEMENTGroupByArgs['orderBy'] }
        : { orderBy?: DEPARTEMENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DEPARTEMENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDEPARTEMENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DEPARTEMENT model
   */
  readonly fields: DEPARTEMENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DEPARTEMENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DEPARTEMENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actes<T extends DEPARTEMENT$actesArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENT$actesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etudiants<T extends DEPARTEMENT$etudiantsArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENT$etudiantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quotas<T extends DEPARTEMENT$quotasArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENT$quotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professeurs<T extends DEPARTEMENT$professeursArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENT$professeursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DEPARTEMENT model
   */
  interface DEPARTEMENTFieldRefs {
    readonly ID_Dep: FieldRef<"DEPARTEMENT", 'Int'>
    readonly Nom_Dep: FieldRef<"DEPARTEMENT", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DEPARTEMENT findUnique
   */
  export type DEPARTEMENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter, which DEPARTEMENT to fetch.
     */
    where: DEPARTEMENTWhereUniqueInput
  }

  /**
   * DEPARTEMENT findUniqueOrThrow
   */
  export type DEPARTEMENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter, which DEPARTEMENT to fetch.
     */
    where: DEPARTEMENTWhereUniqueInput
  }

  /**
   * DEPARTEMENT findFirst
   */
  export type DEPARTEMENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter, which DEPARTEMENT to fetch.
     */
    where?: DEPARTEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEPARTEMENTS to fetch.
     */
    orderBy?: DEPARTEMENTOrderByWithRelationInput | DEPARTEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DEPARTEMENTS.
     */
    cursor?: DEPARTEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEPARTEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEPARTEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DEPARTEMENTS.
     */
    distinct?: DEPARTEMENTScalarFieldEnum | DEPARTEMENTScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT findFirstOrThrow
   */
  export type DEPARTEMENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter, which DEPARTEMENT to fetch.
     */
    where?: DEPARTEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEPARTEMENTS to fetch.
     */
    orderBy?: DEPARTEMENTOrderByWithRelationInput | DEPARTEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DEPARTEMENTS.
     */
    cursor?: DEPARTEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEPARTEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEPARTEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DEPARTEMENTS.
     */
    distinct?: DEPARTEMENTScalarFieldEnum | DEPARTEMENTScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT findMany
   */
  export type DEPARTEMENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter, which DEPARTEMENTS to fetch.
     */
    where?: DEPARTEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEPARTEMENTS to fetch.
     */
    orderBy?: DEPARTEMENTOrderByWithRelationInput | DEPARTEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DEPARTEMENTS.
     */
    cursor?: DEPARTEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEPARTEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEPARTEMENTS.
     */
    skip?: number
    distinct?: DEPARTEMENTScalarFieldEnum | DEPARTEMENTScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT create
   */
  export type DEPARTEMENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * The data needed to create a DEPARTEMENT.
     */
    data: XOR<DEPARTEMENTCreateInput, DEPARTEMENTUncheckedCreateInput>
  }

  /**
   * DEPARTEMENT createMany
   */
  export type DEPARTEMENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DEPARTEMENTS.
     */
    data: DEPARTEMENTCreateManyInput | DEPARTEMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DEPARTEMENT createManyAndReturn
   */
  export type DEPARTEMENTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * The data used to create many DEPARTEMENTS.
     */
    data: DEPARTEMENTCreateManyInput | DEPARTEMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DEPARTEMENT update
   */
  export type DEPARTEMENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * The data needed to update a DEPARTEMENT.
     */
    data: XOR<DEPARTEMENTUpdateInput, DEPARTEMENTUncheckedUpdateInput>
    /**
     * Choose, which DEPARTEMENT to update.
     */
    where: DEPARTEMENTWhereUniqueInput
  }

  /**
   * DEPARTEMENT updateMany
   */
  export type DEPARTEMENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DEPARTEMENTS.
     */
    data: XOR<DEPARTEMENTUpdateManyMutationInput, DEPARTEMENTUncheckedUpdateManyInput>
    /**
     * Filter which DEPARTEMENTS to update
     */
    where?: DEPARTEMENTWhereInput
    /**
     * Limit how many DEPARTEMENTS to update.
     */
    limit?: number
  }

  /**
   * DEPARTEMENT updateManyAndReturn
   */
  export type DEPARTEMENTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * The data used to update DEPARTEMENTS.
     */
    data: XOR<DEPARTEMENTUpdateManyMutationInput, DEPARTEMENTUncheckedUpdateManyInput>
    /**
     * Filter which DEPARTEMENTS to update
     */
    where?: DEPARTEMENTWhereInput
    /**
     * Limit how many DEPARTEMENTS to update.
     */
    limit?: number
  }

  /**
   * DEPARTEMENT upsert
   */
  export type DEPARTEMENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * The filter to search for the DEPARTEMENT to update in case it exists.
     */
    where: DEPARTEMENTWhereUniqueInput
    /**
     * In case the DEPARTEMENT found by the `where` argument doesn't exist, create a new DEPARTEMENT with this data.
     */
    create: XOR<DEPARTEMENTCreateInput, DEPARTEMENTUncheckedCreateInput>
    /**
     * In case the DEPARTEMENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DEPARTEMENTUpdateInput, DEPARTEMENTUncheckedUpdateInput>
  }

  /**
   * DEPARTEMENT delete
   */
  export type DEPARTEMENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    /**
     * Filter which DEPARTEMENT to delete.
     */
    where: DEPARTEMENTWhereUniqueInput
  }

  /**
   * DEPARTEMENT deleteMany
   */
  export type DEPARTEMENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DEPARTEMENTS to delete
     */
    where?: DEPARTEMENTWhereInput
    /**
     * Limit how many DEPARTEMENTS to delete.
     */
    limit?: number
  }

  /**
   * DEPARTEMENT.actes
   */
  export type DEPARTEMENT$actesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    where?: ACTESWhereInput
    orderBy?: ACTESOrderByWithRelationInput | ACTESOrderByWithRelationInput[]
    cursor?: ACTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ACTESScalarFieldEnum | ACTESScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT.etudiants
   */
  export type DEPARTEMENT$etudiantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    where?: ETUDIANTWhereInput
    orderBy?: ETUDIANTOrderByWithRelationInput | ETUDIANTOrderByWithRelationInput[]
    cursor?: ETUDIANTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ETUDIANTScalarFieldEnum | ETUDIANTScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT.quotas
   */
  export type DEPARTEMENT$quotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    where?: QUOTASWhereInput
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    cursor?: QUOTASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT.professeurs
   */
  export type DEPARTEMENT$professeursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    where?: PROFESSEURSWhereInput
    orderBy?: PROFESSEURSOrderByWithRelationInput | PROFESSEURSOrderByWithRelationInput[]
    cursor?: PROFESSEURSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PROFESSEURSScalarFieldEnum | PROFESSEURSScalarFieldEnum[]
  }

  /**
   * DEPARTEMENT without action
   */
  export type DEPARTEMENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
  }


  /**
   * Model ACTES
   */

  export type AggregateACTES = {
    _count: ACTESCountAggregateOutputType | null
    _avg: ACTESAvgAggregateOutputType | null
    _sum: ACTESSumAggregateOutputType | null
    _min: ACTESMinAggregateOutputType | null
    _max: ACTESMaxAggregateOutputType | null
  }

  export type ACTESAvgAggregateOutputType = {
    ID_Actes: number | null
    id_Dep: number | null
  }

  export type ACTESSumAggregateOutputType = {
    ID_Actes: number | null
    id_Dep: number | null
  }

  export type ACTESMinAggregateOutputType = {
    ID_Actes: number | null
    Desc_Actes: string | null
    id_Dep: number | null
  }

  export type ACTESMaxAggregateOutputType = {
    ID_Actes: number | null
    Desc_Actes: string | null
    id_Dep: number | null
  }

  export type ACTESCountAggregateOutputType = {
    ID_Actes: number
    Desc_Actes: number
    id_Dep: number
    _all: number
  }


  export type ACTESAvgAggregateInputType = {
    ID_Actes?: true
    id_Dep?: true
  }

  export type ACTESSumAggregateInputType = {
    ID_Actes?: true
    id_Dep?: true
  }

  export type ACTESMinAggregateInputType = {
    ID_Actes?: true
    Desc_Actes?: true
    id_Dep?: true
  }

  export type ACTESMaxAggregateInputType = {
    ID_Actes?: true
    Desc_Actes?: true
    id_Dep?: true
  }

  export type ACTESCountAggregateInputType = {
    ID_Actes?: true
    Desc_Actes?: true
    id_Dep?: true
    _all?: true
  }

  export type ACTESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ACTES to aggregate.
     */
    where?: ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACTES to fetch.
     */
    orderBy?: ACTESOrderByWithRelationInput | ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ACTES
    **/
    _count?: true | ACTESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ACTESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ACTESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ACTESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ACTESMaxAggregateInputType
  }

  export type GetACTESAggregateType<T extends ACTESAggregateArgs> = {
        [P in keyof T & keyof AggregateACTES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateACTES[P]>
      : GetScalarType<T[P], AggregateACTES[P]>
  }




  export type ACTESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ACTESWhereInput
    orderBy?: ACTESOrderByWithAggregationInput | ACTESOrderByWithAggregationInput[]
    by: ACTESScalarFieldEnum[] | ACTESScalarFieldEnum
    having?: ACTESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ACTESCountAggregateInputType | true
    _avg?: ACTESAvgAggregateInputType
    _sum?: ACTESSumAggregateInputType
    _min?: ACTESMinAggregateInputType
    _max?: ACTESMaxAggregateInputType
  }

  export type ACTESGroupByOutputType = {
    ID_Actes: number
    Desc_Actes: string
    id_Dep: number
    _count: ACTESCountAggregateOutputType | null
    _avg: ACTESAvgAggregateOutputType | null
    _sum: ACTESSumAggregateOutputType | null
    _min: ACTESMinAggregateOutputType | null
    _max: ACTESMaxAggregateOutputType | null
  }

  type GetACTESGroupByPayload<T extends ACTESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ACTESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ACTESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ACTESGroupByOutputType[P]>
            : GetScalarType<T[P], ACTESGroupByOutputType[P]>
        }
      >
    >


  export type ACTESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Actes?: boolean
    Desc_Actes?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    sous_actes?: boolean | ACTES$sous_actesArgs<ExtArgs>
    _count?: boolean | ACTESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aCTES"]>

  export type ACTESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Actes?: boolean
    Desc_Actes?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aCTES"]>

  export type ACTESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Actes?: boolean
    Desc_Actes?: boolean
    id_Dep?: boolean
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aCTES"]>

  export type ACTESSelectScalar = {
    ID_Actes?: boolean
    Desc_Actes?: boolean
    id_Dep?: boolean
  }

  export type ACTESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Actes" | "Desc_Actes" | "id_Dep", ExtArgs["result"]["aCTES"]>
  export type ACTESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    sous_actes?: boolean | ACTES$sous_actesArgs<ExtArgs>
    _count?: boolean | ACTESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ACTESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }
  export type ACTESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }

  export type $ACTESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ACTES"
    objects: {
      departement: Prisma.$DEPARTEMENTPayload<ExtArgs>
      sous_actes: Prisma.$SOUS_ACTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Actes: number
      Desc_Actes: string
      id_Dep: number
    }, ExtArgs["result"]["aCTES"]>
    composites: {}
  }

  type ACTESGetPayload<S extends boolean | null | undefined | ACTESDefaultArgs> = $Result.GetResult<Prisma.$ACTESPayload, S>

  type ACTESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ACTESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ACTESCountAggregateInputType | true
    }

  export interface ACTESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ACTES'], meta: { name: 'ACTES' } }
    /**
     * Find zero or one ACTES that matches the filter.
     * @param {ACTESFindUniqueArgs} args - Arguments to find a ACTES
     * @example
     * // Get one ACTES
     * const aCTES = await prisma.aCTES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ACTESFindUniqueArgs>(args: SelectSubset<T, ACTESFindUniqueArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ACTES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ACTESFindUniqueOrThrowArgs} args - Arguments to find a ACTES
     * @example
     * // Get one ACTES
     * const aCTES = await prisma.aCTES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ACTESFindUniqueOrThrowArgs>(args: SelectSubset<T, ACTESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ACTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESFindFirstArgs} args - Arguments to find a ACTES
     * @example
     * // Get one ACTES
     * const aCTES = await prisma.aCTES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ACTESFindFirstArgs>(args?: SelectSubset<T, ACTESFindFirstArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ACTES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESFindFirstOrThrowArgs} args - Arguments to find a ACTES
     * @example
     * // Get one ACTES
     * const aCTES = await prisma.aCTES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ACTESFindFirstOrThrowArgs>(args?: SelectSubset<T, ACTESFindFirstOrThrowArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ACTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ACTES
     * const aCTES = await prisma.aCTES.findMany()
     * 
     * // Get first 10 ACTES
     * const aCTES = await prisma.aCTES.findMany({ take: 10 })
     * 
     * // Only select the `ID_Actes`
     * const aCTESWithID_ActesOnly = await prisma.aCTES.findMany({ select: { ID_Actes: true } })
     * 
     */
    findMany<T extends ACTESFindManyArgs>(args?: SelectSubset<T, ACTESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ACTES.
     * @param {ACTESCreateArgs} args - Arguments to create a ACTES.
     * @example
     * // Create one ACTES
     * const ACTES = await prisma.aCTES.create({
     *   data: {
     *     // ... data to create a ACTES
     *   }
     * })
     * 
     */
    create<T extends ACTESCreateArgs>(args: SelectSubset<T, ACTESCreateArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ACTES.
     * @param {ACTESCreateManyArgs} args - Arguments to create many ACTES.
     * @example
     * // Create many ACTES
     * const aCTES = await prisma.aCTES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ACTESCreateManyArgs>(args?: SelectSubset<T, ACTESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ACTES and returns the data saved in the database.
     * @param {ACTESCreateManyAndReturnArgs} args - Arguments to create many ACTES.
     * @example
     * // Create many ACTES
     * const aCTES = await prisma.aCTES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ACTES and only return the `ID_Actes`
     * const aCTESWithID_ActesOnly = await prisma.aCTES.createManyAndReturn({
     *   select: { ID_Actes: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ACTESCreateManyAndReturnArgs>(args?: SelectSubset<T, ACTESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ACTES.
     * @param {ACTESDeleteArgs} args - Arguments to delete one ACTES.
     * @example
     * // Delete one ACTES
     * const ACTES = await prisma.aCTES.delete({
     *   where: {
     *     // ... filter to delete one ACTES
     *   }
     * })
     * 
     */
    delete<T extends ACTESDeleteArgs>(args: SelectSubset<T, ACTESDeleteArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ACTES.
     * @param {ACTESUpdateArgs} args - Arguments to update one ACTES.
     * @example
     * // Update one ACTES
     * const aCTES = await prisma.aCTES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ACTESUpdateArgs>(args: SelectSubset<T, ACTESUpdateArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ACTES.
     * @param {ACTESDeleteManyArgs} args - Arguments to filter ACTES to delete.
     * @example
     * // Delete a few ACTES
     * const { count } = await prisma.aCTES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ACTESDeleteManyArgs>(args?: SelectSubset<T, ACTESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ACTES
     * const aCTES = await prisma.aCTES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ACTESUpdateManyArgs>(args: SelectSubset<T, ACTESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ACTES and returns the data updated in the database.
     * @param {ACTESUpdateManyAndReturnArgs} args - Arguments to update many ACTES.
     * @example
     * // Update many ACTES
     * const aCTES = await prisma.aCTES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ACTES and only return the `ID_Actes`
     * const aCTESWithID_ActesOnly = await prisma.aCTES.updateManyAndReturn({
     *   select: { ID_Actes: true },
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
    updateManyAndReturn<T extends ACTESUpdateManyAndReturnArgs>(args: SelectSubset<T, ACTESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ACTES.
     * @param {ACTESUpsertArgs} args - Arguments to update or create a ACTES.
     * @example
     * // Update or create a ACTES
     * const aCTES = await prisma.aCTES.upsert({
     *   create: {
     *     // ... data to create a ACTES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ACTES we want to update
     *   }
     * })
     */
    upsert<T extends ACTESUpsertArgs>(args: SelectSubset<T, ACTESUpsertArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESCountArgs} args - Arguments to filter ACTES to count.
     * @example
     * // Count the number of ACTES
     * const count = await prisma.aCTES.count({
     *   where: {
     *     // ... the filter for the ACTES we want to count
     *   }
     * })
    **/
    count<T extends ACTESCountArgs>(
      args?: Subset<T, ACTESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ACTESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ACTESAggregateArgs>(args: Subset<T, ACTESAggregateArgs>): Prisma.PrismaPromise<GetACTESAggregateType<T>>

    /**
     * Group by ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ACTESGroupByArgs} args - Group by arguments.
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
      T extends ACTESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ACTESGroupByArgs['orderBy'] }
        : { orderBy?: ACTESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ACTESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetACTESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ACTES model
   */
  readonly fields: ACTESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ACTES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ACTESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departement<T extends DEPARTEMENTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENTDefaultArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sous_actes<T extends ACTES$sous_actesArgs<ExtArgs> = {}>(args?: Subset<T, ACTES$sous_actesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ACTES model
   */
  interface ACTESFieldRefs {
    readonly ID_Actes: FieldRef<"ACTES", 'Int'>
    readonly Desc_Actes: FieldRef<"ACTES", 'String'>
    readonly id_Dep: FieldRef<"ACTES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ACTES findUnique
   */
  export type ACTESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter, which ACTES to fetch.
     */
    where: ACTESWhereUniqueInput
  }

  /**
   * ACTES findUniqueOrThrow
   */
  export type ACTESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter, which ACTES to fetch.
     */
    where: ACTESWhereUniqueInput
  }

  /**
   * ACTES findFirst
   */
  export type ACTESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter, which ACTES to fetch.
     */
    where?: ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACTES to fetch.
     */
    orderBy?: ACTESOrderByWithRelationInput | ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ACTES.
     */
    cursor?: ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ACTES.
     */
    distinct?: ACTESScalarFieldEnum | ACTESScalarFieldEnum[]
  }

  /**
   * ACTES findFirstOrThrow
   */
  export type ACTESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter, which ACTES to fetch.
     */
    where?: ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACTES to fetch.
     */
    orderBy?: ACTESOrderByWithRelationInput | ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ACTES.
     */
    cursor?: ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ACTES.
     */
    distinct?: ACTESScalarFieldEnum | ACTESScalarFieldEnum[]
  }

  /**
   * ACTES findMany
   */
  export type ACTESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter, which ACTES to fetch.
     */
    where?: ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ACTES to fetch.
     */
    orderBy?: ACTESOrderByWithRelationInput | ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ACTES.
     */
    cursor?: ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ACTES.
     */
    skip?: number
    distinct?: ACTESScalarFieldEnum | ACTESScalarFieldEnum[]
  }

  /**
   * ACTES create
   */
  export type ACTESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * The data needed to create a ACTES.
     */
    data: XOR<ACTESCreateInput, ACTESUncheckedCreateInput>
  }

  /**
   * ACTES createMany
   */
  export type ACTESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ACTES.
     */
    data: ACTESCreateManyInput | ACTESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ACTES createManyAndReturn
   */
  export type ACTESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * The data used to create many ACTES.
     */
    data: ACTESCreateManyInput | ACTESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ACTES update
   */
  export type ACTESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * The data needed to update a ACTES.
     */
    data: XOR<ACTESUpdateInput, ACTESUncheckedUpdateInput>
    /**
     * Choose, which ACTES to update.
     */
    where: ACTESWhereUniqueInput
  }

  /**
   * ACTES updateMany
   */
  export type ACTESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ACTES.
     */
    data: XOR<ACTESUpdateManyMutationInput, ACTESUncheckedUpdateManyInput>
    /**
     * Filter which ACTES to update
     */
    where?: ACTESWhereInput
    /**
     * Limit how many ACTES to update.
     */
    limit?: number
  }

  /**
   * ACTES updateManyAndReturn
   */
  export type ACTESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * The data used to update ACTES.
     */
    data: XOR<ACTESUpdateManyMutationInput, ACTESUncheckedUpdateManyInput>
    /**
     * Filter which ACTES to update
     */
    where?: ACTESWhereInput
    /**
     * Limit how many ACTES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ACTES upsert
   */
  export type ACTESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * The filter to search for the ACTES to update in case it exists.
     */
    where: ACTESWhereUniqueInput
    /**
     * In case the ACTES found by the `where` argument doesn't exist, create a new ACTES with this data.
     */
    create: XOR<ACTESCreateInput, ACTESUncheckedCreateInput>
    /**
     * In case the ACTES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ACTESUpdateInput, ACTESUncheckedUpdateInput>
  }

  /**
   * ACTES delete
   */
  export type ACTESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
    /**
     * Filter which ACTES to delete.
     */
    where: ACTESWhereUniqueInput
  }

  /**
   * ACTES deleteMany
   */
  export type ACTESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ACTES to delete
     */
    where?: ACTESWhereInput
    /**
     * Limit how many ACTES to delete.
     */
    limit?: number
  }

  /**
   * ACTES.sous_actes
   */
  export type ACTES$sous_actesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    where?: SOUS_ACTESWhereInput
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    cursor?: SOUS_ACTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOUS_ACTESScalarFieldEnum | SOUS_ACTESScalarFieldEnum[]
  }

  /**
   * ACTES without action
   */
  export type ACTESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ACTES
     */
    select?: ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ACTES
     */
    omit?: ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ACTESInclude<ExtArgs> | null
  }


  /**
   * Model SOUS_ACTES
   */

  export type AggregateSOUS_ACTES = {
    _count: SOUS_ACTESCountAggregateOutputType | null
    _avg: SOUS_ACTESAvgAggregateOutputType | null
    _sum: SOUS_ACTESSumAggregateOutputType | null
    _min: SOUS_ACTESMinAggregateOutputType | null
    _max: SOUS_ACTESMaxAggregateOutputType | null
  }

  export type SOUS_ACTESAvgAggregateOutputType = {
    ID_SActes: number | null
    Prix: number | null
    id_Actes: number | null
  }

  export type SOUS_ACTESSumAggregateOutputType = {
    ID_SActes: number | null
    Prix: number | null
    id_Actes: number | null
  }

  export type SOUS_ACTESMinAggregateOutputType = {
    ID_SActes: number | null
    Desc_SActes: string | null
    Prix: number | null
    id_Actes: number | null
  }

  export type SOUS_ACTESMaxAggregateOutputType = {
    ID_SActes: number | null
    Desc_SActes: string | null
    Prix: number | null
    id_Actes: number | null
  }

  export type SOUS_ACTESCountAggregateOutputType = {
    ID_SActes: number
    Desc_SActes: number
    Prix: number
    id_Actes: number
    _all: number
  }


  export type SOUS_ACTESAvgAggregateInputType = {
    ID_SActes?: true
    Prix?: true
    id_Actes?: true
  }

  export type SOUS_ACTESSumAggregateInputType = {
    ID_SActes?: true
    Prix?: true
    id_Actes?: true
  }

  export type SOUS_ACTESMinAggregateInputType = {
    ID_SActes?: true
    Desc_SActes?: true
    Prix?: true
    id_Actes?: true
  }

  export type SOUS_ACTESMaxAggregateInputType = {
    ID_SActes?: true
    Desc_SActes?: true
    Prix?: true
    id_Actes?: true
  }

  export type SOUS_ACTESCountAggregateInputType = {
    ID_SActes?: true
    Desc_SActes?: true
    Prix?: true
    id_Actes?: true
    _all?: true
  }

  export type SOUS_ACTESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOUS_ACTES to aggregate.
     */
    where?: SOUS_ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOUS_ACTES to fetch.
     */
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SOUS_ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOUS_ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOUS_ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SOUS_ACTES
    **/
    _count?: true | SOUS_ACTESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SOUS_ACTESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SOUS_ACTESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SOUS_ACTESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SOUS_ACTESMaxAggregateInputType
  }

  export type GetSOUS_ACTESAggregateType<T extends SOUS_ACTESAggregateArgs> = {
        [P in keyof T & keyof AggregateSOUS_ACTES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSOUS_ACTES[P]>
      : GetScalarType<T[P], AggregateSOUS_ACTES[P]>
  }




  export type SOUS_ACTESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOUS_ACTESWhereInput
    orderBy?: SOUS_ACTESOrderByWithAggregationInput | SOUS_ACTESOrderByWithAggregationInput[]
    by: SOUS_ACTESScalarFieldEnum[] | SOUS_ACTESScalarFieldEnum
    having?: SOUS_ACTESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SOUS_ACTESCountAggregateInputType | true
    _avg?: SOUS_ACTESAvgAggregateInputType
    _sum?: SOUS_ACTESSumAggregateInputType
    _min?: SOUS_ACTESMinAggregateInputType
    _max?: SOUS_ACTESMaxAggregateInputType
  }

  export type SOUS_ACTESGroupByOutputType = {
    ID_SActes: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
    _count: SOUS_ACTESCountAggregateOutputType | null
    _avg: SOUS_ACTESAvgAggregateOutputType | null
    _sum: SOUS_ACTESSumAggregateOutputType | null
    _min: SOUS_ACTESMinAggregateOutputType | null
    _max: SOUS_ACTESMaxAggregateOutputType | null
  }

  type GetSOUS_ACTESGroupByPayload<T extends SOUS_ACTESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SOUS_ACTESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SOUS_ACTESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SOUS_ACTESGroupByOutputType[P]>
            : GetScalarType<T[P], SOUS_ACTESGroupByOutputType[P]>
        }
      >
    >


  export type SOUS_ACTESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_SActes?: boolean
    Desc_SActes?: boolean
    Prix?: boolean
    id_Actes?: boolean
    notifications?: boolean | SOUS_ACTES$notificationsArgs<ExtArgs>
    realisations?: boolean | SOUS_ACTES$realisationsArgs<ExtArgs>
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
    quotas?: boolean | SOUS_ACTES$quotasArgs<ExtArgs>
    _count?: boolean | SOUS_ACTESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOUS_ACTES"]>

  export type SOUS_ACTESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_SActes?: boolean
    Desc_SActes?: boolean
    Prix?: boolean
    id_Actes?: boolean
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOUS_ACTES"]>

  export type SOUS_ACTESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_SActes?: boolean
    Desc_SActes?: boolean
    Prix?: boolean
    id_Actes?: boolean
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOUS_ACTES"]>

  export type SOUS_ACTESSelectScalar = {
    ID_SActes?: boolean
    Desc_SActes?: boolean
    Prix?: boolean
    id_Actes?: boolean
  }

  export type SOUS_ACTESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_SActes" | "Desc_SActes" | "Prix" | "id_Actes", ExtArgs["result"]["sOUS_ACTES"]>
  export type SOUS_ACTESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | SOUS_ACTES$notificationsArgs<ExtArgs>
    realisations?: boolean | SOUS_ACTES$realisationsArgs<ExtArgs>
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
    quotas?: boolean | SOUS_ACTES$quotasArgs<ExtArgs>
    _count?: boolean | SOUS_ACTESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SOUS_ACTESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
  }
  export type SOUS_ACTESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acte?: boolean | ACTESDefaultArgs<ExtArgs>
  }

  export type $SOUS_ACTESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SOUS_ACTES"
    objects: {
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      realisations: Prisma.$REALISATIONPayload<ExtArgs>[]
      acte: Prisma.$ACTESPayload<ExtArgs>
      quotas: Prisma.$QUOTASPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_SActes: number
      Desc_SActes: string
      Prix: number
      id_Actes: number
    }, ExtArgs["result"]["sOUS_ACTES"]>
    composites: {}
  }

  type SOUS_ACTESGetPayload<S extends boolean | null | undefined | SOUS_ACTESDefaultArgs> = $Result.GetResult<Prisma.$SOUS_ACTESPayload, S>

  type SOUS_ACTESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SOUS_ACTESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SOUS_ACTESCountAggregateInputType | true
    }

  export interface SOUS_ACTESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SOUS_ACTES'], meta: { name: 'SOUS_ACTES' } }
    /**
     * Find zero or one SOUS_ACTES that matches the filter.
     * @param {SOUS_ACTESFindUniqueArgs} args - Arguments to find a SOUS_ACTES
     * @example
     * // Get one SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SOUS_ACTESFindUniqueArgs>(args: SelectSubset<T, SOUS_ACTESFindUniqueArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SOUS_ACTES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SOUS_ACTESFindUniqueOrThrowArgs} args - Arguments to find a SOUS_ACTES
     * @example
     * // Get one SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SOUS_ACTESFindUniqueOrThrowArgs>(args: SelectSubset<T, SOUS_ACTESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOUS_ACTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESFindFirstArgs} args - Arguments to find a SOUS_ACTES
     * @example
     * // Get one SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SOUS_ACTESFindFirstArgs>(args?: SelectSubset<T, SOUS_ACTESFindFirstArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOUS_ACTES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESFindFirstOrThrowArgs} args - Arguments to find a SOUS_ACTES
     * @example
     * // Get one SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SOUS_ACTESFindFirstOrThrowArgs>(args?: SelectSubset<T, SOUS_ACTESFindFirstOrThrowArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SOUS_ACTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findMany()
     * 
     * // Get first 10 SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.findMany({ take: 10 })
     * 
     * // Only select the `ID_SActes`
     * const sOUS_ACTESWithID_SActesOnly = await prisma.sOUS_ACTES.findMany({ select: { ID_SActes: true } })
     * 
     */
    findMany<T extends SOUS_ACTESFindManyArgs>(args?: SelectSubset<T, SOUS_ACTESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SOUS_ACTES.
     * @param {SOUS_ACTESCreateArgs} args - Arguments to create a SOUS_ACTES.
     * @example
     * // Create one SOUS_ACTES
     * const SOUS_ACTES = await prisma.sOUS_ACTES.create({
     *   data: {
     *     // ... data to create a SOUS_ACTES
     *   }
     * })
     * 
     */
    create<T extends SOUS_ACTESCreateArgs>(args: SelectSubset<T, SOUS_ACTESCreateArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SOUS_ACTES.
     * @param {SOUS_ACTESCreateManyArgs} args - Arguments to create many SOUS_ACTES.
     * @example
     * // Create many SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SOUS_ACTESCreateManyArgs>(args?: SelectSubset<T, SOUS_ACTESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SOUS_ACTES and returns the data saved in the database.
     * @param {SOUS_ACTESCreateManyAndReturnArgs} args - Arguments to create many SOUS_ACTES.
     * @example
     * // Create many SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SOUS_ACTES and only return the `ID_SActes`
     * const sOUS_ACTESWithID_SActesOnly = await prisma.sOUS_ACTES.createManyAndReturn({
     *   select: { ID_SActes: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SOUS_ACTESCreateManyAndReturnArgs>(args?: SelectSubset<T, SOUS_ACTESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SOUS_ACTES.
     * @param {SOUS_ACTESDeleteArgs} args - Arguments to delete one SOUS_ACTES.
     * @example
     * // Delete one SOUS_ACTES
     * const SOUS_ACTES = await prisma.sOUS_ACTES.delete({
     *   where: {
     *     // ... filter to delete one SOUS_ACTES
     *   }
     * })
     * 
     */
    delete<T extends SOUS_ACTESDeleteArgs>(args: SelectSubset<T, SOUS_ACTESDeleteArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SOUS_ACTES.
     * @param {SOUS_ACTESUpdateArgs} args - Arguments to update one SOUS_ACTES.
     * @example
     * // Update one SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SOUS_ACTESUpdateArgs>(args: SelectSubset<T, SOUS_ACTESUpdateArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SOUS_ACTES.
     * @param {SOUS_ACTESDeleteManyArgs} args - Arguments to filter SOUS_ACTES to delete.
     * @example
     * // Delete a few SOUS_ACTES
     * const { count } = await prisma.sOUS_ACTES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SOUS_ACTESDeleteManyArgs>(args?: SelectSubset<T, SOUS_ACTESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOUS_ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SOUS_ACTESUpdateManyArgs>(args: SelectSubset<T, SOUS_ACTESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOUS_ACTES and returns the data updated in the database.
     * @param {SOUS_ACTESUpdateManyAndReturnArgs} args - Arguments to update many SOUS_ACTES.
     * @example
     * // Update many SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SOUS_ACTES and only return the `ID_SActes`
     * const sOUS_ACTESWithID_SActesOnly = await prisma.sOUS_ACTES.updateManyAndReturn({
     *   select: { ID_SActes: true },
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
    updateManyAndReturn<T extends SOUS_ACTESUpdateManyAndReturnArgs>(args: SelectSubset<T, SOUS_ACTESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SOUS_ACTES.
     * @param {SOUS_ACTESUpsertArgs} args - Arguments to update or create a SOUS_ACTES.
     * @example
     * // Update or create a SOUS_ACTES
     * const sOUS_ACTES = await prisma.sOUS_ACTES.upsert({
     *   create: {
     *     // ... data to create a SOUS_ACTES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SOUS_ACTES we want to update
     *   }
     * })
     */
    upsert<T extends SOUS_ACTESUpsertArgs>(args: SelectSubset<T, SOUS_ACTESUpsertArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SOUS_ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESCountArgs} args - Arguments to filter SOUS_ACTES to count.
     * @example
     * // Count the number of SOUS_ACTES
     * const count = await prisma.sOUS_ACTES.count({
     *   where: {
     *     // ... the filter for the SOUS_ACTES we want to count
     *   }
     * })
    **/
    count<T extends SOUS_ACTESCountArgs>(
      args?: Subset<T, SOUS_ACTESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SOUS_ACTESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SOUS_ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SOUS_ACTESAggregateArgs>(args: Subset<T, SOUS_ACTESAggregateArgs>): Prisma.PrismaPromise<GetSOUS_ACTESAggregateType<T>>

    /**
     * Group by SOUS_ACTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOUS_ACTESGroupByArgs} args - Group by arguments.
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
      T extends SOUS_ACTESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SOUS_ACTESGroupByArgs['orderBy'] }
        : { orderBy?: SOUS_ACTESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SOUS_ACTESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSOUS_ACTESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SOUS_ACTES model
   */
  readonly fields: SOUS_ACTESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SOUS_ACTES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SOUS_ACTESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends SOUS_ACTES$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, SOUS_ACTES$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    realisations<T extends SOUS_ACTES$realisationsArgs<ExtArgs> = {}>(args?: Subset<T, SOUS_ACTES$realisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acte<T extends ACTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ACTESDefaultArgs<ExtArgs>>): Prisma__ACTESClient<$Result.GetResult<Prisma.$ACTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quotas<T extends SOUS_ACTES$quotasArgs<ExtArgs> = {}>(args?: Subset<T, SOUS_ACTES$quotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SOUS_ACTES model
   */
  interface SOUS_ACTESFieldRefs {
    readonly ID_SActes: FieldRef<"SOUS_ACTES", 'Int'>
    readonly Desc_SActes: FieldRef<"SOUS_ACTES", 'String'>
    readonly Prix: FieldRef<"SOUS_ACTES", 'Float'>
    readonly id_Actes: FieldRef<"SOUS_ACTES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SOUS_ACTES findUnique
   */
  export type SOUS_ACTESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter, which SOUS_ACTES to fetch.
     */
    where: SOUS_ACTESWhereUniqueInput
  }

  /**
   * SOUS_ACTES findUniqueOrThrow
   */
  export type SOUS_ACTESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter, which SOUS_ACTES to fetch.
     */
    where: SOUS_ACTESWhereUniqueInput
  }

  /**
   * SOUS_ACTES findFirst
   */
  export type SOUS_ACTESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter, which SOUS_ACTES to fetch.
     */
    where?: SOUS_ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOUS_ACTES to fetch.
     */
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOUS_ACTES.
     */
    cursor?: SOUS_ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOUS_ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOUS_ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOUS_ACTES.
     */
    distinct?: SOUS_ACTESScalarFieldEnum | SOUS_ACTESScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES findFirstOrThrow
   */
  export type SOUS_ACTESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter, which SOUS_ACTES to fetch.
     */
    where?: SOUS_ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOUS_ACTES to fetch.
     */
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOUS_ACTES.
     */
    cursor?: SOUS_ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOUS_ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOUS_ACTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOUS_ACTES.
     */
    distinct?: SOUS_ACTESScalarFieldEnum | SOUS_ACTESScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES findMany
   */
  export type SOUS_ACTESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter, which SOUS_ACTES to fetch.
     */
    where?: SOUS_ACTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOUS_ACTES to fetch.
     */
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SOUS_ACTES.
     */
    cursor?: SOUS_ACTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOUS_ACTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOUS_ACTES.
     */
    skip?: number
    distinct?: SOUS_ACTESScalarFieldEnum | SOUS_ACTESScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES create
   */
  export type SOUS_ACTESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * The data needed to create a SOUS_ACTES.
     */
    data: XOR<SOUS_ACTESCreateInput, SOUS_ACTESUncheckedCreateInput>
  }

  /**
   * SOUS_ACTES createMany
   */
  export type SOUS_ACTESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SOUS_ACTES.
     */
    data: SOUS_ACTESCreateManyInput | SOUS_ACTESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SOUS_ACTES createManyAndReturn
   */
  export type SOUS_ACTESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * The data used to create many SOUS_ACTES.
     */
    data: SOUS_ACTESCreateManyInput | SOUS_ACTESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOUS_ACTES update
   */
  export type SOUS_ACTESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * The data needed to update a SOUS_ACTES.
     */
    data: XOR<SOUS_ACTESUpdateInput, SOUS_ACTESUncheckedUpdateInput>
    /**
     * Choose, which SOUS_ACTES to update.
     */
    where: SOUS_ACTESWhereUniqueInput
  }

  /**
   * SOUS_ACTES updateMany
   */
  export type SOUS_ACTESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SOUS_ACTES.
     */
    data: XOR<SOUS_ACTESUpdateManyMutationInput, SOUS_ACTESUncheckedUpdateManyInput>
    /**
     * Filter which SOUS_ACTES to update
     */
    where?: SOUS_ACTESWhereInput
    /**
     * Limit how many SOUS_ACTES to update.
     */
    limit?: number
  }

  /**
   * SOUS_ACTES updateManyAndReturn
   */
  export type SOUS_ACTESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * The data used to update SOUS_ACTES.
     */
    data: XOR<SOUS_ACTESUpdateManyMutationInput, SOUS_ACTESUncheckedUpdateManyInput>
    /**
     * Filter which SOUS_ACTES to update
     */
    where?: SOUS_ACTESWhereInput
    /**
     * Limit how many SOUS_ACTES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOUS_ACTES upsert
   */
  export type SOUS_ACTESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * The filter to search for the SOUS_ACTES to update in case it exists.
     */
    where: SOUS_ACTESWhereUniqueInput
    /**
     * In case the SOUS_ACTES found by the `where` argument doesn't exist, create a new SOUS_ACTES with this data.
     */
    create: XOR<SOUS_ACTESCreateInput, SOUS_ACTESUncheckedCreateInput>
    /**
     * In case the SOUS_ACTES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SOUS_ACTESUpdateInput, SOUS_ACTESUncheckedUpdateInput>
  }

  /**
   * SOUS_ACTES delete
   */
  export type SOUS_ACTESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    /**
     * Filter which SOUS_ACTES to delete.
     */
    where: SOUS_ACTESWhereUniqueInput
  }

  /**
   * SOUS_ACTES deleteMany
   */
  export type SOUS_ACTESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOUS_ACTES to delete
     */
    where?: SOUS_ACTESWhereInput
    /**
     * Limit how many SOUS_ACTES to delete.
     */
    limit?: number
  }

  /**
   * SOUS_ACTES.notifications
   */
  export type SOUS_ACTES$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES.realisations
   */
  export type SOUS_ACTES$realisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    where?: REALISATIONWhereInput
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    cursor?: REALISATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES.quotas
   */
  export type SOUS_ACTES$quotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    where?: QUOTASWhereInput
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    cursor?: QUOTASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * SOUS_ACTES without action
   */
  export type SOUS_ACTESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
  }


  /**
   * Model PROFESSEURS
   */

  export type AggregatePROFESSEURS = {
    _count: PROFESSEURSCountAggregateOutputType | null
    _avg: PROFESSEURSAvgAggregateOutputType | null
    _sum: PROFESSEURSSumAggregateOutputType | null
    _min: PROFESSEURSMinAggregateOutputType | null
    _max: PROFESSEURSMaxAggregateOutputType | null
  }

  export type PROFESSEURSAvgAggregateOutputType = {
    ID_Prof: number | null
  }

  export type PROFESSEURSSumAggregateOutputType = {
    ID_Prof: number | null
  }

  export type PROFESSEURSMinAggregateOutputType = {
    ID_Prof: number | null
    user_id: string | null
    Nom_Prof: string | null
    Email_Prof: string | null
    MotPass_Prof: string | null
  }

  export type PROFESSEURSMaxAggregateOutputType = {
    ID_Prof: number | null
    user_id: string | null
    Nom_Prof: string | null
    Email_Prof: string | null
    MotPass_Prof: string | null
  }

  export type PROFESSEURSCountAggregateOutputType = {
    ID_Prof: number
    user_id: number
    Nom_Prof: number
    Email_Prof: number
    MotPass_Prof: number
    _all: number
  }


  export type PROFESSEURSAvgAggregateInputType = {
    ID_Prof?: true
  }

  export type PROFESSEURSSumAggregateInputType = {
    ID_Prof?: true
  }

  export type PROFESSEURSMinAggregateInputType = {
    ID_Prof?: true
    user_id?: true
    Nom_Prof?: true
    Email_Prof?: true
    MotPass_Prof?: true
  }

  export type PROFESSEURSMaxAggregateInputType = {
    ID_Prof?: true
    user_id?: true
    Nom_Prof?: true
    Email_Prof?: true
    MotPass_Prof?: true
  }

  export type PROFESSEURSCountAggregateInputType = {
    ID_Prof?: true
    user_id?: true
    Nom_Prof?: true
    Email_Prof?: true
    MotPass_Prof?: true
    _all?: true
  }

  export type PROFESSEURSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROFESSEURS to aggregate.
     */
    where?: PROFESSEURSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROFESSEURS to fetch.
     */
    orderBy?: PROFESSEURSOrderByWithRelationInput | PROFESSEURSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PROFESSEURSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROFESSEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROFESSEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PROFESSEURS
    **/
    _count?: true | PROFESSEURSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PROFESSEURSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PROFESSEURSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PROFESSEURSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PROFESSEURSMaxAggregateInputType
  }

  export type GetPROFESSEURSAggregateType<T extends PROFESSEURSAggregateArgs> = {
        [P in keyof T & keyof AggregatePROFESSEURS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePROFESSEURS[P]>
      : GetScalarType<T[P], AggregatePROFESSEURS[P]>
  }




  export type PROFESSEURSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PROFESSEURSWhereInput
    orderBy?: PROFESSEURSOrderByWithAggregationInput | PROFESSEURSOrderByWithAggregationInput[]
    by: PROFESSEURSScalarFieldEnum[] | PROFESSEURSScalarFieldEnum
    having?: PROFESSEURSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PROFESSEURSCountAggregateInputType | true
    _avg?: PROFESSEURSAvgAggregateInputType
    _sum?: PROFESSEURSSumAggregateInputType
    _min?: PROFESSEURSMinAggregateInputType
    _max?: PROFESSEURSMaxAggregateInputType
  }

  export type PROFESSEURSGroupByOutputType = {
    ID_Prof: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    _count: PROFESSEURSCountAggregateOutputType | null
    _avg: PROFESSEURSAvgAggregateOutputType | null
    _sum: PROFESSEURSSumAggregateOutputType | null
    _min: PROFESSEURSMinAggregateOutputType | null
    _max: PROFESSEURSMaxAggregateOutputType | null
  }

  type GetPROFESSEURSGroupByPayload<T extends PROFESSEURSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PROFESSEURSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PROFESSEURSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PROFESSEURSGroupByOutputType[P]>
            : GetScalarType<T[P], PROFESSEURSGroupByOutputType[P]>
        }
      >
    >


  export type PROFESSEURSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Prof?: boolean
    user_id?: boolean
    Nom_Prof?: boolean
    Email_Prof?: boolean
    MotPass_Prof?: boolean
    notifications?: boolean | PROFESSEURS$notificationsArgs<ExtArgs>
    realisations?: boolean | PROFESSEURS$realisationsArgs<ExtArgs>
    departements?: boolean | PROFESSEURS$departementsArgs<ExtArgs>
    _count?: boolean | PROFESSEURSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pROFESSEURS"]>

  export type PROFESSEURSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Prof?: boolean
    user_id?: boolean
    Nom_Prof?: boolean
    Email_Prof?: boolean
    MotPass_Prof?: boolean
  }, ExtArgs["result"]["pROFESSEURS"]>

  export type PROFESSEURSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Prof?: boolean
    user_id?: boolean
    Nom_Prof?: boolean
    Email_Prof?: boolean
    MotPass_Prof?: boolean
  }, ExtArgs["result"]["pROFESSEURS"]>

  export type PROFESSEURSSelectScalar = {
    ID_Prof?: boolean
    user_id?: boolean
    Nom_Prof?: boolean
    Email_Prof?: boolean
    MotPass_Prof?: boolean
  }

  export type PROFESSEURSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Prof" | "user_id" | "Nom_Prof" | "Email_Prof" | "MotPass_Prof", ExtArgs["result"]["pROFESSEURS"]>
  export type PROFESSEURSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | PROFESSEURS$notificationsArgs<ExtArgs>
    realisations?: boolean | PROFESSEURS$realisationsArgs<ExtArgs>
    departements?: boolean | PROFESSEURS$departementsArgs<ExtArgs>
    _count?: boolean | PROFESSEURSCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PROFESSEURSIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PROFESSEURSIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PROFESSEURSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PROFESSEURS"
    objects: {
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      realisations: Prisma.$REALISATIONPayload<ExtArgs>[]
      departements: Prisma.$DEPARTEMENTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Prof: number
      user_id: string
      Nom_Prof: string
      Email_Prof: string
      MotPass_Prof: string
    }, ExtArgs["result"]["pROFESSEURS"]>
    composites: {}
  }

  type PROFESSEURSGetPayload<S extends boolean | null | undefined | PROFESSEURSDefaultArgs> = $Result.GetResult<Prisma.$PROFESSEURSPayload, S>

  type PROFESSEURSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PROFESSEURSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PROFESSEURSCountAggregateInputType | true
    }

  export interface PROFESSEURSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PROFESSEURS'], meta: { name: 'PROFESSEURS' } }
    /**
     * Find zero or one PROFESSEURS that matches the filter.
     * @param {PROFESSEURSFindUniqueArgs} args - Arguments to find a PROFESSEURS
     * @example
     * // Get one PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PROFESSEURSFindUniqueArgs>(args: SelectSubset<T, PROFESSEURSFindUniqueArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PROFESSEURS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PROFESSEURSFindUniqueOrThrowArgs} args - Arguments to find a PROFESSEURS
     * @example
     * // Get one PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PROFESSEURSFindUniqueOrThrowArgs>(args: SelectSubset<T, PROFESSEURSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROFESSEURS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSFindFirstArgs} args - Arguments to find a PROFESSEURS
     * @example
     * // Get one PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PROFESSEURSFindFirstArgs>(args?: SelectSubset<T, PROFESSEURSFindFirstArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PROFESSEURS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSFindFirstOrThrowArgs} args - Arguments to find a PROFESSEURS
     * @example
     * // Get one PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PROFESSEURSFindFirstOrThrowArgs>(args?: SelectSubset<T, PROFESSEURSFindFirstOrThrowArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PROFESSEURS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findMany()
     * 
     * // Get first 10 PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.findMany({ take: 10 })
     * 
     * // Only select the `ID_Prof`
     * const pROFESSEURSWithID_ProfOnly = await prisma.pROFESSEURS.findMany({ select: { ID_Prof: true } })
     * 
     */
    findMany<T extends PROFESSEURSFindManyArgs>(args?: SelectSubset<T, PROFESSEURSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PROFESSEURS.
     * @param {PROFESSEURSCreateArgs} args - Arguments to create a PROFESSEURS.
     * @example
     * // Create one PROFESSEURS
     * const PROFESSEURS = await prisma.pROFESSEURS.create({
     *   data: {
     *     // ... data to create a PROFESSEURS
     *   }
     * })
     * 
     */
    create<T extends PROFESSEURSCreateArgs>(args: SelectSubset<T, PROFESSEURSCreateArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PROFESSEURS.
     * @param {PROFESSEURSCreateManyArgs} args - Arguments to create many PROFESSEURS.
     * @example
     * // Create many PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PROFESSEURSCreateManyArgs>(args?: SelectSubset<T, PROFESSEURSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PROFESSEURS and returns the data saved in the database.
     * @param {PROFESSEURSCreateManyAndReturnArgs} args - Arguments to create many PROFESSEURS.
     * @example
     * // Create many PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PROFESSEURS and only return the `ID_Prof`
     * const pROFESSEURSWithID_ProfOnly = await prisma.pROFESSEURS.createManyAndReturn({
     *   select: { ID_Prof: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PROFESSEURSCreateManyAndReturnArgs>(args?: SelectSubset<T, PROFESSEURSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PROFESSEURS.
     * @param {PROFESSEURSDeleteArgs} args - Arguments to delete one PROFESSEURS.
     * @example
     * // Delete one PROFESSEURS
     * const PROFESSEURS = await prisma.pROFESSEURS.delete({
     *   where: {
     *     // ... filter to delete one PROFESSEURS
     *   }
     * })
     * 
     */
    delete<T extends PROFESSEURSDeleteArgs>(args: SelectSubset<T, PROFESSEURSDeleteArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PROFESSEURS.
     * @param {PROFESSEURSUpdateArgs} args - Arguments to update one PROFESSEURS.
     * @example
     * // Update one PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PROFESSEURSUpdateArgs>(args: SelectSubset<T, PROFESSEURSUpdateArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PROFESSEURS.
     * @param {PROFESSEURSDeleteManyArgs} args - Arguments to filter PROFESSEURS to delete.
     * @example
     * // Delete a few PROFESSEURS
     * const { count } = await prisma.pROFESSEURS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PROFESSEURSDeleteManyArgs>(args?: SelectSubset<T, PROFESSEURSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROFESSEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PROFESSEURSUpdateManyArgs>(args: SelectSubset<T, PROFESSEURSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PROFESSEURS and returns the data updated in the database.
     * @param {PROFESSEURSUpdateManyAndReturnArgs} args - Arguments to update many PROFESSEURS.
     * @example
     * // Update many PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PROFESSEURS and only return the `ID_Prof`
     * const pROFESSEURSWithID_ProfOnly = await prisma.pROFESSEURS.updateManyAndReturn({
     *   select: { ID_Prof: true },
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
    updateManyAndReturn<T extends PROFESSEURSUpdateManyAndReturnArgs>(args: SelectSubset<T, PROFESSEURSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PROFESSEURS.
     * @param {PROFESSEURSUpsertArgs} args - Arguments to update or create a PROFESSEURS.
     * @example
     * // Update or create a PROFESSEURS
     * const pROFESSEURS = await prisma.pROFESSEURS.upsert({
     *   create: {
     *     // ... data to create a PROFESSEURS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PROFESSEURS we want to update
     *   }
     * })
     */
    upsert<T extends PROFESSEURSUpsertArgs>(args: SelectSubset<T, PROFESSEURSUpsertArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PROFESSEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSCountArgs} args - Arguments to filter PROFESSEURS to count.
     * @example
     * // Count the number of PROFESSEURS
     * const count = await prisma.pROFESSEURS.count({
     *   where: {
     *     // ... the filter for the PROFESSEURS we want to count
     *   }
     * })
    **/
    count<T extends PROFESSEURSCountArgs>(
      args?: Subset<T, PROFESSEURSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PROFESSEURSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PROFESSEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PROFESSEURSAggregateArgs>(args: Subset<T, PROFESSEURSAggregateArgs>): Prisma.PrismaPromise<GetPROFESSEURSAggregateType<T>>

    /**
     * Group by PROFESSEURS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PROFESSEURSGroupByArgs} args - Group by arguments.
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
      T extends PROFESSEURSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PROFESSEURSGroupByArgs['orderBy'] }
        : { orderBy?: PROFESSEURSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PROFESSEURSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPROFESSEURSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PROFESSEURS model
   */
  readonly fields: PROFESSEURSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PROFESSEURS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PROFESSEURSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends PROFESSEURS$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, PROFESSEURS$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    realisations<T extends PROFESSEURS$realisationsArgs<ExtArgs> = {}>(args?: Subset<T, PROFESSEURS$realisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departements<T extends PROFESSEURS$departementsArgs<ExtArgs> = {}>(args?: Subset<T, PROFESSEURS$departementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PROFESSEURS model
   */
  interface PROFESSEURSFieldRefs {
    readonly ID_Prof: FieldRef<"PROFESSEURS", 'Int'>
    readonly user_id: FieldRef<"PROFESSEURS", 'String'>
    readonly Nom_Prof: FieldRef<"PROFESSEURS", 'String'>
    readonly Email_Prof: FieldRef<"PROFESSEURS", 'String'>
    readonly MotPass_Prof: FieldRef<"PROFESSEURS", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PROFESSEURS findUnique
   */
  export type PROFESSEURSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter, which PROFESSEURS to fetch.
     */
    where: PROFESSEURSWhereUniqueInput
  }

  /**
   * PROFESSEURS findUniqueOrThrow
   */
  export type PROFESSEURSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter, which PROFESSEURS to fetch.
     */
    where: PROFESSEURSWhereUniqueInput
  }

  /**
   * PROFESSEURS findFirst
   */
  export type PROFESSEURSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter, which PROFESSEURS to fetch.
     */
    where?: PROFESSEURSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROFESSEURS to fetch.
     */
    orderBy?: PROFESSEURSOrderByWithRelationInput | PROFESSEURSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROFESSEURS.
     */
    cursor?: PROFESSEURSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROFESSEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROFESSEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROFESSEURS.
     */
    distinct?: PROFESSEURSScalarFieldEnum | PROFESSEURSScalarFieldEnum[]
  }

  /**
   * PROFESSEURS findFirstOrThrow
   */
  export type PROFESSEURSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter, which PROFESSEURS to fetch.
     */
    where?: PROFESSEURSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROFESSEURS to fetch.
     */
    orderBy?: PROFESSEURSOrderByWithRelationInput | PROFESSEURSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PROFESSEURS.
     */
    cursor?: PROFESSEURSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROFESSEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROFESSEURS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PROFESSEURS.
     */
    distinct?: PROFESSEURSScalarFieldEnum | PROFESSEURSScalarFieldEnum[]
  }

  /**
   * PROFESSEURS findMany
   */
  export type PROFESSEURSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter, which PROFESSEURS to fetch.
     */
    where?: PROFESSEURSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PROFESSEURS to fetch.
     */
    orderBy?: PROFESSEURSOrderByWithRelationInput | PROFESSEURSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PROFESSEURS.
     */
    cursor?: PROFESSEURSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PROFESSEURS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PROFESSEURS.
     */
    skip?: number
    distinct?: PROFESSEURSScalarFieldEnum | PROFESSEURSScalarFieldEnum[]
  }

  /**
   * PROFESSEURS create
   */
  export type PROFESSEURSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * The data needed to create a PROFESSEURS.
     */
    data: XOR<PROFESSEURSCreateInput, PROFESSEURSUncheckedCreateInput>
  }

  /**
   * PROFESSEURS createMany
   */
  export type PROFESSEURSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PROFESSEURS.
     */
    data: PROFESSEURSCreateManyInput | PROFESSEURSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PROFESSEURS createManyAndReturn
   */
  export type PROFESSEURSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * The data used to create many PROFESSEURS.
     */
    data: PROFESSEURSCreateManyInput | PROFESSEURSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PROFESSEURS update
   */
  export type PROFESSEURSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * The data needed to update a PROFESSEURS.
     */
    data: XOR<PROFESSEURSUpdateInput, PROFESSEURSUncheckedUpdateInput>
    /**
     * Choose, which PROFESSEURS to update.
     */
    where: PROFESSEURSWhereUniqueInput
  }

  /**
   * PROFESSEURS updateMany
   */
  export type PROFESSEURSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PROFESSEURS.
     */
    data: XOR<PROFESSEURSUpdateManyMutationInput, PROFESSEURSUncheckedUpdateManyInput>
    /**
     * Filter which PROFESSEURS to update
     */
    where?: PROFESSEURSWhereInput
    /**
     * Limit how many PROFESSEURS to update.
     */
    limit?: number
  }

  /**
   * PROFESSEURS updateManyAndReturn
   */
  export type PROFESSEURSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * The data used to update PROFESSEURS.
     */
    data: XOR<PROFESSEURSUpdateManyMutationInput, PROFESSEURSUncheckedUpdateManyInput>
    /**
     * Filter which PROFESSEURS to update
     */
    where?: PROFESSEURSWhereInput
    /**
     * Limit how many PROFESSEURS to update.
     */
    limit?: number
  }

  /**
   * PROFESSEURS upsert
   */
  export type PROFESSEURSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * The filter to search for the PROFESSEURS to update in case it exists.
     */
    where: PROFESSEURSWhereUniqueInput
    /**
     * In case the PROFESSEURS found by the `where` argument doesn't exist, create a new PROFESSEURS with this data.
     */
    create: XOR<PROFESSEURSCreateInput, PROFESSEURSUncheckedCreateInput>
    /**
     * In case the PROFESSEURS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PROFESSEURSUpdateInput, PROFESSEURSUncheckedUpdateInput>
  }

  /**
   * PROFESSEURS delete
   */
  export type PROFESSEURSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    /**
     * Filter which PROFESSEURS to delete.
     */
    where: PROFESSEURSWhereUniqueInput
  }

  /**
   * PROFESSEURS deleteMany
   */
  export type PROFESSEURSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PROFESSEURS to delete
     */
    where?: PROFESSEURSWhereInput
    /**
     * Limit how many PROFESSEURS to delete.
     */
    limit?: number
  }

  /**
   * PROFESSEURS.notifications
   */
  export type PROFESSEURS$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * PROFESSEURS.realisations
   */
  export type PROFESSEURS$realisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    where?: REALISATIONWhereInput
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    cursor?: REALISATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * PROFESSEURS.departements
   */
  export type PROFESSEURS$departementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEPARTEMENT
     */
    select?: DEPARTEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEPARTEMENT
     */
    omit?: DEPARTEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DEPARTEMENTInclude<ExtArgs> | null
    where?: DEPARTEMENTWhereInput
    orderBy?: DEPARTEMENTOrderByWithRelationInput | DEPARTEMENTOrderByWithRelationInput[]
    cursor?: DEPARTEMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DEPARTEMENTScalarFieldEnum | DEPARTEMENTScalarFieldEnum[]
  }

  /**
   * PROFESSEURS without action
   */
  export type PROFESSEURSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
  }


  /**
   * Model QUOTAS
   */

  export type AggregateQUOTAS = {
    _count: QUOTASCountAggregateOutputType | null
    _avg: QUOTASAvgAggregateOutputType | null
    _sum: QUOTASSumAggregateOutputType | null
    _min: QUOTASMinAggregateOutputType | null
    _max: QUOTASMaxAggregateOutputType | null
  }

  export type QUOTASAvgAggregateOutputType = {
    ID_Quotas: number | null
    Nombre: number | null
    id_Dep: number | null
    id_Admin: number | null
  }

  export type QUOTASSumAggregateOutputType = {
    ID_Quotas: number | null
    Nombre: number | null
    id_Dep: number | null
    id_Admin: number | null
  }

  export type QUOTASMinAggregateOutputType = {
    ID_Quotas: number | null
    Annee: string | null
    Nombre: number | null
    Date_Debut: Date | null
    Date_Fin: Date | null
    id_Dep: number | null
    id_Admin: number | null
  }

  export type QUOTASMaxAggregateOutputType = {
    ID_Quotas: number | null
    Annee: string | null
    Nombre: number | null
    Date_Debut: Date | null
    Date_Fin: Date | null
    id_Dep: number | null
    id_Admin: number | null
  }

  export type QUOTASCountAggregateOutputType = {
    ID_Quotas: number
    Annee: number
    Nombre: number
    Date_Debut: number
    Date_Fin: number
    id_Dep: number
    id_Admin: number
    _all: number
  }


  export type QUOTASAvgAggregateInputType = {
    ID_Quotas?: true
    Nombre?: true
    id_Dep?: true
    id_Admin?: true
  }

  export type QUOTASSumAggregateInputType = {
    ID_Quotas?: true
    Nombre?: true
    id_Dep?: true
    id_Admin?: true
  }

  export type QUOTASMinAggregateInputType = {
    ID_Quotas?: true
    Annee?: true
    Nombre?: true
    Date_Debut?: true
    Date_Fin?: true
    id_Dep?: true
    id_Admin?: true
  }

  export type QUOTASMaxAggregateInputType = {
    ID_Quotas?: true
    Annee?: true
    Nombre?: true
    Date_Debut?: true
    Date_Fin?: true
    id_Dep?: true
    id_Admin?: true
  }

  export type QUOTASCountAggregateInputType = {
    ID_Quotas?: true
    Annee?: true
    Nombre?: true
    Date_Debut?: true
    Date_Fin?: true
    id_Dep?: true
    id_Admin?: true
    _all?: true
  }

  export type QUOTASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QUOTAS to aggregate.
     */
    where?: QUOTASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QUOTAS to fetch.
     */
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QUOTASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QUOTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QUOTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QUOTAS
    **/
    _count?: true | QUOTASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QUOTASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QUOTASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QUOTASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QUOTASMaxAggregateInputType
  }

  export type GetQUOTASAggregateType<T extends QUOTASAggregateArgs> = {
        [P in keyof T & keyof AggregateQUOTAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQUOTAS[P]>
      : GetScalarType<T[P], AggregateQUOTAS[P]>
  }




  export type QUOTASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QUOTASWhereInput
    orderBy?: QUOTASOrderByWithAggregationInput | QUOTASOrderByWithAggregationInput[]
    by: QUOTASScalarFieldEnum[] | QUOTASScalarFieldEnum
    having?: QUOTASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QUOTASCountAggregateInputType | true
    _avg?: QUOTASAvgAggregateInputType
    _sum?: QUOTASSumAggregateInputType
    _min?: QUOTASMinAggregateInputType
    _max?: QUOTASMaxAggregateInputType
  }

  export type QUOTASGroupByOutputType = {
    ID_Quotas: number
    Annee: string
    Nombre: number
    Date_Debut: Date
    Date_Fin: Date
    id_Dep: number
    id_Admin: number
    _count: QUOTASCountAggregateOutputType | null
    _avg: QUOTASAvgAggregateOutputType | null
    _sum: QUOTASSumAggregateOutputType | null
    _min: QUOTASMinAggregateOutputType | null
    _max: QUOTASMaxAggregateOutputType | null
  }

  type GetQUOTASGroupByPayload<T extends QUOTASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QUOTASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QUOTASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QUOTASGroupByOutputType[P]>
            : GetScalarType<T[P], QUOTASGroupByOutputType[P]>
        }
      >
    >


  export type QUOTASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Quotas?: boolean
    Annee?: boolean
    Nombre?: boolean
    Date_Debut?: boolean
    Date_Fin?: boolean
    id_Dep?: boolean
    id_Admin?: boolean
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    sous_actes?: boolean | QUOTAS$sous_actesArgs<ExtArgs>
    _count?: boolean | QUOTASCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qUOTAS"]>

  export type QUOTASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Quotas?: boolean
    Annee?: boolean
    Nombre?: boolean
    Date_Debut?: boolean
    Date_Fin?: boolean
    id_Dep?: boolean
    id_Admin?: boolean
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qUOTAS"]>

  export type QUOTASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Quotas?: boolean
    Annee?: boolean
    Nombre?: boolean
    Date_Debut?: boolean
    Date_Fin?: boolean
    id_Dep?: boolean
    id_Admin?: boolean
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qUOTAS"]>

  export type QUOTASSelectScalar = {
    ID_Quotas?: boolean
    Annee?: boolean
    Nombre?: boolean
    Date_Debut?: boolean
    Date_Fin?: boolean
    id_Dep?: boolean
    id_Admin?: boolean
  }

  export type QUOTASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Quotas" | "Annee" | "Nombre" | "Date_Debut" | "Date_Fin" | "id_Dep" | "id_Admin", ExtArgs["result"]["qUOTAS"]>
  export type QUOTASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
    sous_actes?: boolean | QUOTAS$sous_actesArgs<ExtArgs>
    _count?: boolean | QUOTASCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QUOTASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }
  export type QUOTASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ADMINISTRATEURDefaultArgs<ExtArgs>
    departement?: boolean | DEPARTEMENTDefaultArgs<ExtArgs>
  }

  export type $QUOTASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QUOTAS"
    objects: {
      admin: Prisma.$ADMINISTRATEURPayload<ExtArgs>
      departement: Prisma.$DEPARTEMENTPayload<ExtArgs>
      sous_actes: Prisma.$SOUS_ACTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Quotas: number
      Annee: string
      Nombre: number
      Date_Debut: Date
      Date_Fin: Date
      id_Dep: number
      id_Admin: number
    }, ExtArgs["result"]["qUOTAS"]>
    composites: {}
  }

  type QUOTASGetPayload<S extends boolean | null | undefined | QUOTASDefaultArgs> = $Result.GetResult<Prisma.$QUOTASPayload, S>

  type QUOTASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QUOTASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QUOTASCountAggregateInputType | true
    }

  export interface QUOTASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QUOTAS'], meta: { name: 'QUOTAS' } }
    /**
     * Find zero or one QUOTAS that matches the filter.
     * @param {QUOTASFindUniqueArgs} args - Arguments to find a QUOTAS
     * @example
     * // Get one QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QUOTASFindUniqueArgs>(args: SelectSubset<T, QUOTASFindUniqueArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QUOTAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QUOTASFindUniqueOrThrowArgs} args - Arguments to find a QUOTAS
     * @example
     * // Get one QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QUOTASFindUniqueOrThrowArgs>(args: SelectSubset<T, QUOTASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QUOTAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASFindFirstArgs} args - Arguments to find a QUOTAS
     * @example
     * // Get one QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QUOTASFindFirstArgs>(args?: SelectSubset<T, QUOTASFindFirstArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QUOTAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASFindFirstOrThrowArgs} args - Arguments to find a QUOTAS
     * @example
     * // Get one QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QUOTASFindFirstOrThrowArgs>(args?: SelectSubset<T, QUOTASFindFirstOrThrowArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QUOTAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findMany()
     * 
     * // Get first 10 QUOTAS
     * const qUOTAS = await prisma.qUOTAS.findMany({ take: 10 })
     * 
     * // Only select the `ID_Quotas`
     * const qUOTASWithID_QuotasOnly = await prisma.qUOTAS.findMany({ select: { ID_Quotas: true } })
     * 
     */
    findMany<T extends QUOTASFindManyArgs>(args?: SelectSubset<T, QUOTASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QUOTAS.
     * @param {QUOTASCreateArgs} args - Arguments to create a QUOTAS.
     * @example
     * // Create one QUOTAS
     * const QUOTAS = await prisma.qUOTAS.create({
     *   data: {
     *     // ... data to create a QUOTAS
     *   }
     * })
     * 
     */
    create<T extends QUOTASCreateArgs>(args: SelectSubset<T, QUOTASCreateArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QUOTAS.
     * @param {QUOTASCreateManyArgs} args - Arguments to create many QUOTAS.
     * @example
     * // Create many QUOTAS
     * const qUOTAS = await prisma.qUOTAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QUOTASCreateManyArgs>(args?: SelectSubset<T, QUOTASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QUOTAS and returns the data saved in the database.
     * @param {QUOTASCreateManyAndReturnArgs} args - Arguments to create many QUOTAS.
     * @example
     * // Create many QUOTAS
     * const qUOTAS = await prisma.qUOTAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QUOTAS and only return the `ID_Quotas`
     * const qUOTASWithID_QuotasOnly = await prisma.qUOTAS.createManyAndReturn({
     *   select: { ID_Quotas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QUOTASCreateManyAndReturnArgs>(args?: SelectSubset<T, QUOTASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QUOTAS.
     * @param {QUOTASDeleteArgs} args - Arguments to delete one QUOTAS.
     * @example
     * // Delete one QUOTAS
     * const QUOTAS = await prisma.qUOTAS.delete({
     *   where: {
     *     // ... filter to delete one QUOTAS
     *   }
     * })
     * 
     */
    delete<T extends QUOTASDeleteArgs>(args: SelectSubset<T, QUOTASDeleteArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QUOTAS.
     * @param {QUOTASUpdateArgs} args - Arguments to update one QUOTAS.
     * @example
     * // Update one QUOTAS
     * const qUOTAS = await prisma.qUOTAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QUOTASUpdateArgs>(args: SelectSubset<T, QUOTASUpdateArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QUOTAS.
     * @param {QUOTASDeleteManyArgs} args - Arguments to filter QUOTAS to delete.
     * @example
     * // Delete a few QUOTAS
     * const { count } = await prisma.qUOTAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QUOTASDeleteManyArgs>(args?: SelectSubset<T, QUOTASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QUOTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QUOTAS
     * const qUOTAS = await prisma.qUOTAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QUOTASUpdateManyArgs>(args: SelectSubset<T, QUOTASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QUOTAS and returns the data updated in the database.
     * @param {QUOTASUpdateManyAndReturnArgs} args - Arguments to update many QUOTAS.
     * @example
     * // Update many QUOTAS
     * const qUOTAS = await prisma.qUOTAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QUOTAS and only return the `ID_Quotas`
     * const qUOTASWithID_QuotasOnly = await prisma.qUOTAS.updateManyAndReturn({
     *   select: { ID_Quotas: true },
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
    updateManyAndReturn<T extends QUOTASUpdateManyAndReturnArgs>(args: SelectSubset<T, QUOTASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QUOTAS.
     * @param {QUOTASUpsertArgs} args - Arguments to update or create a QUOTAS.
     * @example
     * // Update or create a QUOTAS
     * const qUOTAS = await prisma.qUOTAS.upsert({
     *   create: {
     *     // ... data to create a QUOTAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QUOTAS we want to update
     *   }
     * })
     */
    upsert<T extends QUOTASUpsertArgs>(args: SelectSubset<T, QUOTASUpsertArgs<ExtArgs>>): Prisma__QUOTASClient<$Result.GetResult<Prisma.$QUOTASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QUOTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASCountArgs} args - Arguments to filter QUOTAS to count.
     * @example
     * // Count the number of QUOTAS
     * const count = await prisma.qUOTAS.count({
     *   where: {
     *     // ... the filter for the QUOTAS we want to count
     *   }
     * })
    **/
    count<T extends QUOTASCountArgs>(
      args?: Subset<T, QUOTASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QUOTASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QUOTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QUOTASAggregateArgs>(args: Subset<T, QUOTASAggregateArgs>): Prisma.PrismaPromise<GetQUOTASAggregateType<T>>

    /**
     * Group by QUOTAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QUOTASGroupByArgs} args - Group by arguments.
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
      T extends QUOTASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QUOTASGroupByArgs['orderBy'] }
        : { orderBy?: QUOTASGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QUOTASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQUOTASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QUOTAS model
   */
  readonly fields: QUOTASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QUOTAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QUOTASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends ADMINISTRATEURDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRATEURDefaultArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departement<T extends DEPARTEMENTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DEPARTEMENTDefaultArgs<ExtArgs>>): Prisma__DEPARTEMENTClient<$Result.GetResult<Prisma.$DEPARTEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sous_actes<T extends QUOTAS$sous_actesArgs<ExtArgs> = {}>(args?: Subset<T, QUOTAS$sous_actesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QUOTAS model
   */
  interface QUOTASFieldRefs {
    readonly ID_Quotas: FieldRef<"QUOTAS", 'Int'>
    readonly Annee: FieldRef<"QUOTAS", 'String'>
    readonly Nombre: FieldRef<"QUOTAS", 'Int'>
    readonly Date_Debut: FieldRef<"QUOTAS", 'DateTime'>
    readonly Date_Fin: FieldRef<"QUOTAS", 'DateTime'>
    readonly id_Dep: FieldRef<"QUOTAS", 'Int'>
    readonly id_Admin: FieldRef<"QUOTAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QUOTAS findUnique
   */
  export type QUOTASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter, which QUOTAS to fetch.
     */
    where: QUOTASWhereUniqueInput
  }

  /**
   * QUOTAS findUniqueOrThrow
   */
  export type QUOTASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter, which QUOTAS to fetch.
     */
    where: QUOTASWhereUniqueInput
  }

  /**
   * QUOTAS findFirst
   */
  export type QUOTASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter, which QUOTAS to fetch.
     */
    where?: QUOTASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QUOTAS to fetch.
     */
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QUOTAS.
     */
    cursor?: QUOTASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QUOTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QUOTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QUOTAS.
     */
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * QUOTAS findFirstOrThrow
   */
  export type QUOTASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter, which QUOTAS to fetch.
     */
    where?: QUOTASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QUOTAS to fetch.
     */
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QUOTAS.
     */
    cursor?: QUOTASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QUOTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QUOTAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QUOTAS.
     */
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * QUOTAS findMany
   */
  export type QUOTASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter, which QUOTAS to fetch.
     */
    where?: QUOTASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QUOTAS to fetch.
     */
    orderBy?: QUOTASOrderByWithRelationInput | QUOTASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QUOTAS.
     */
    cursor?: QUOTASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QUOTAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QUOTAS.
     */
    skip?: number
    distinct?: QUOTASScalarFieldEnum | QUOTASScalarFieldEnum[]
  }

  /**
   * QUOTAS create
   */
  export type QUOTASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * The data needed to create a QUOTAS.
     */
    data: XOR<QUOTASCreateInput, QUOTASUncheckedCreateInput>
  }

  /**
   * QUOTAS createMany
   */
  export type QUOTASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QUOTAS.
     */
    data: QUOTASCreateManyInput | QUOTASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QUOTAS createManyAndReturn
   */
  export type QUOTASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * The data used to create many QUOTAS.
     */
    data: QUOTASCreateManyInput | QUOTASCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QUOTAS update
   */
  export type QUOTASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * The data needed to update a QUOTAS.
     */
    data: XOR<QUOTASUpdateInput, QUOTASUncheckedUpdateInput>
    /**
     * Choose, which QUOTAS to update.
     */
    where: QUOTASWhereUniqueInput
  }

  /**
   * QUOTAS updateMany
   */
  export type QUOTASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QUOTAS.
     */
    data: XOR<QUOTASUpdateManyMutationInput, QUOTASUncheckedUpdateManyInput>
    /**
     * Filter which QUOTAS to update
     */
    where?: QUOTASWhereInput
    /**
     * Limit how many QUOTAS to update.
     */
    limit?: number
  }

  /**
   * QUOTAS updateManyAndReturn
   */
  export type QUOTASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * The data used to update QUOTAS.
     */
    data: XOR<QUOTASUpdateManyMutationInput, QUOTASUncheckedUpdateManyInput>
    /**
     * Filter which QUOTAS to update
     */
    where?: QUOTASWhereInput
    /**
     * Limit how many QUOTAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QUOTAS upsert
   */
  export type QUOTASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * The filter to search for the QUOTAS to update in case it exists.
     */
    where: QUOTASWhereUniqueInput
    /**
     * In case the QUOTAS found by the `where` argument doesn't exist, create a new QUOTAS with this data.
     */
    create: XOR<QUOTASCreateInput, QUOTASUncheckedCreateInput>
    /**
     * In case the QUOTAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QUOTASUpdateInput, QUOTASUncheckedUpdateInput>
  }

  /**
   * QUOTAS delete
   */
  export type QUOTASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
    /**
     * Filter which QUOTAS to delete.
     */
    where: QUOTASWhereUniqueInput
  }

  /**
   * QUOTAS deleteMany
   */
  export type QUOTASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QUOTAS to delete
     */
    where?: QUOTASWhereInput
    /**
     * Limit how many QUOTAS to delete.
     */
    limit?: number
  }

  /**
   * QUOTAS.sous_actes
   */
  export type QUOTAS$sous_actesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    where?: SOUS_ACTESWhereInput
    orderBy?: SOUS_ACTESOrderByWithRelationInput | SOUS_ACTESOrderByWithRelationInput[]
    cursor?: SOUS_ACTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOUS_ACTESScalarFieldEnum | SOUS_ACTESScalarFieldEnum[]
  }

  /**
   * QUOTAS without action
   */
  export type QUOTASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QUOTAS
     */
    select?: QUOTASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QUOTAS
     */
    omit?: QUOTASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QUOTASInclude<ExtArgs> | null
  }


  /**
   * Model PAIEMENT
   */

  export type AggregatePAIEMENT = {
    _count: PAIEMENTCountAggregateOutputType | null
    _avg: PAIEMENTAvgAggregateOutputType | null
    _sum: PAIEMENTSumAggregateOutputType | null
    _min: PAIEMENTMinAggregateOutputType | null
    _max: PAIEMENTMaxAggregateOutputType | null
  }

  export type PAIEMENTAvgAggregateOutputType = {
    ID_Paie: number | null
    Montant: number | null
    Montant_Restant: number | null
    id_Admin: number | null
    id_Etudiant: number | null
  }

  export type PAIEMENTSumAggregateOutputType = {
    ID_Paie: number | null
    Montant: number | null
    Montant_Restant: number | null
    id_Admin: number | null
    id_Etudiant: number | null
  }

  export type PAIEMENTMinAggregateOutputType = {
    ID_Paie: number | null
    Montant: number | null
    Montant_Restant: number | null
    Date_Paie: Date | null
    Statut_Paie: $Enums.StatutPaiement | null
    id_Admin: number | null
    id_Etudiant: number | null
  }

  export type PAIEMENTMaxAggregateOutputType = {
    ID_Paie: number | null
    Montant: number | null
    Montant_Restant: number | null
    Date_Paie: Date | null
    Statut_Paie: $Enums.StatutPaiement | null
    id_Admin: number | null
    id_Etudiant: number | null
  }

  export type PAIEMENTCountAggregateOutputType = {
    ID_Paie: number
    Montant: number
    Montant_Restant: number
    Date_Paie: number
    Statut_Paie: number
    id_Admin: number
    id_Etudiant: number
    _all: number
  }


  export type PAIEMENTAvgAggregateInputType = {
    ID_Paie?: true
    Montant?: true
    Montant_Restant?: true
    id_Admin?: true
    id_Etudiant?: true
  }

  export type PAIEMENTSumAggregateInputType = {
    ID_Paie?: true
    Montant?: true
    Montant_Restant?: true
    id_Admin?: true
    id_Etudiant?: true
  }

  export type PAIEMENTMinAggregateInputType = {
    ID_Paie?: true
    Montant?: true
    Montant_Restant?: true
    Date_Paie?: true
    Statut_Paie?: true
    id_Admin?: true
    id_Etudiant?: true
  }

  export type PAIEMENTMaxAggregateInputType = {
    ID_Paie?: true
    Montant?: true
    Montant_Restant?: true
    Date_Paie?: true
    Statut_Paie?: true
    id_Admin?: true
    id_Etudiant?: true
  }

  export type PAIEMENTCountAggregateInputType = {
    ID_Paie?: true
    Montant?: true
    Montant_Restant?: true
    Date_Paie?: true
    Statut_Paie?: true
    id_Admin?: true
    id_Etudiant?: true
    _all?: true
  }

  export type PAIEMENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAIEMENT to aggregate.
     */
    where?: PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAIEMENTS to fetch.
     */
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAIEMENTS
    **/
    _count?: true | PAIEMENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAIEMENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAIEMENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAIEMENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAIEMENTMaxAggregateInputType
  }

  export type GetPAIEMENTAggregateType<T extends PAIEMENTAggregateArgs> = {
        [P in keyof T & keyof AggregatePAIEMENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAIEMENT[P]>
      : GetScalarType<T[P], AggregatePAIEMENT[P]>
  }




  export type PAIEMENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAIEMENTWhereInput
    orderBy?: PAIEMENTOrderByWithAggregationInput | PAIEMENTOrderByWithAggregationInput[]
    by: PAIEMENTScalarFieldEnum[] | PAIEMENTScalarFieldEnum
    having?: PAIEMENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAIEMENTCountAggregateInputType | true
    _avg?: PAIEMENTAvgAggregateInputType
    _sum?: PAIEMENTSumAggregateInputType
    _min?: PAIEMENTMinAggregateInputType
    _max?: PAIEMENTMaxAggregateInputType
  }

  export type PAIEMENTGroupByOutputType = {
    ID_Paie: number
    Montant: number
    Montant_Restant: number | null
    Date_Paie: Date
    Statut_Paie: $Enums.StatutPaiement
    id_Admin: number | null
    id_Etudiant: number
    _count: PAIEMENTCountAggregateOutputType | null
    _avg: PAIEMENTAvgAggregateOutputType | null
    _sum: PAIEMENTSumAggregateOutputType | null
    _min: PAIEMENTMinAggregateOutputType | null
    _max: PAIEMENTMaxAggregateOutputType | null
  }

  type GetPAIEMENTGroupByPayload<T extends PAIEMENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAIEMENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAIEMENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAIEMENTGroupByOutputType[P]>
            : GetScalarType<T[P], PAIEMENTGroupByOutputType[P]>
        }
      >
    >


  export type PAIEMENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paie?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Paie?: boolean
    Statut_Paie?: boolean
    id_Admin?: boolean
    id_Etudiant?: boolean
    notifications?: boolean | PAIEMENT$notificationsArgs<ExtArgs>
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    realisations?: boolean | PAIEMENT$realisationsArgs<ExtArgs>
    historique?: boolean | PAIEMENT$historiqueArgs<ExtArgs>
    _count?: boolean | PAIEMENTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAIEMENT"]>

  export type PAIEMENTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paie?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Paie?: boolean
    Statut_Paie?: boolean
    id_Admin?: boolean
    id_Etudiant?: boolean
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAIEMENT"]>

  export type PAIEMENTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paie?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Paie?: boolean
    Statut_Paie?: boolean
    id_Admin?: boolean
    id_Etudiant?: boolean
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAIEMENT"]>

  export type PAIEMENTSelectScalar = {
    ID_Paie?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Paie?: boolean
    Statut_Paie?: boolean
    id_Admin?: boolean
    id_Etudiant?: boolean
  }

  export type PAIEMENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Paie" | "Montant" | "Montant_Restant" | "Date_Paie" | "Statut_Paie" | "id_Admin" | "id_Etudiant", ExtArgs["result"]["pAIEMENT"]>
  export type PAIEMENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | PAIEMENT$notificationsArgs<ExtArgs>
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    realisations?: boolean | PAIEMENT$realisationsArgs<ExtArgs>
    historique?: boolean | PAIEMENT$historiqueArgs<ExtArgs>
    _count?: boolean | PAIEMENTCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PAIEMENTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
  }
  export type PAIEMENTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | PAIEMENT$adminArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
  }

  export type $PAIEMENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAIEMENT"
    objects: {
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      admin: Prisma.$ADMINISTRATEURPayload<ExtArgs> | null
      etudiant: Prisma.$ETUDIANTPayload<ExtArgs>
      realisations: Prisma.$REALISATIONPayload<ExtArgs>[]
      historique: Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Paie: number
      Montant: number
      Montant_Restant: number | null
      Date_Paie: Date
      Statut_Paie: $Enums.StatutPaiement
      id_Admin: number | null
      id_Etudiant: number
    }, ExtArgs["result"]["pAIEMENT"]>
    composites: {}
  }

  type PAIEMENTGetPayload<S extends boolean | null | undefined | PAIEMENTDefaultArgs> = $Result.GetResult<Prisma.$PAIEMENTPayload, S>

  type PAIEMENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAIEMENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAIEMENTCountAggregateInputType | true
    }

  export interface PAIEMENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAIEMENT'], meta: { name: 'PAIEMENT' } }
    /**
     * Find zero or one PAIEMENT that matches the filter.
     * @param {PAIEMENTFindUniqueArgs} args - Arguments to find a PAIEMENT
     * @example
     * // Get one PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAIEMENTFindUniqueArgs>(args: SelectSubset<T, PAIEMENTFindUniqueArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAIEMENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAIEMENTFindUniqueOrThrowArgs} args - Arguments to find a PAIEMENT
     * @example
     * // Get one PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAIEMENTFindUniqueOrThrowArgs>(args: SelectSubset<T, PAIEMENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAIEMENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTFindFirstArgs} args - Arguments to find a PAIEMENT
     * @example
     * // Get one PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAIEMENTFindFirstArgs>(args?: SelectSubset<T, PAIEMENTFindFirstArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAIEMENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTFindFirstOrThrowArgs} args - Arguments to find a PAIEMENT
     * @example
     * // Get one PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAIEMENTFindFirstOrThrowArgs>(args?: SelectSubset<T, PAIEMENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAIEMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAIEMENTS
     * const pAIEMENTS = await prisma.pAIEMENT.findMany()
     * 
     * // Get first 10 PAIEMENTS
     * const pAIEMENTS = await prisma.pAIEMENT.findMany({ take: 10 })
     * 
     * // Only select the `ID_Paie`
     * const pAIEMENTWithID_PaieOnly = await prisma.pAIEMENT.findMany({ select: { ID_Paie: true } })
     * 
     */
    findMany<T extends PAIEMENTFindManyArgs>(args?: SelectSubset<T, PAIEMENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAIEMENT.
     * @param {PAIEMENTCreateArgs} args - Arguments to create a PAIEMENT.
     * @example
     * // Create one PAIEMENT
     * const PAIEMENT = await prisma.pAIEMENT.create({
     *   data: {
     *     // ... data to create a PAIEMENT
     *   }
     * })
     * 
     */
    create<T extends PAIEMENTCreateArgs>(args: SelectSubset<T, PAIEMENTCreateArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAIEMENTS.
     * @param {PAIEMENTCreateManyArgs} args - Arguments to create many PAIEMENTS.
     * @example
     * // Create many PAIEMENTS
     * const pAIEMENT = await prisma.pAIEMENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAIEMENTCreateManyArgs>(args?: SelectSubset<T, PAIEMENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAIEMENTS and returns the data saved in the database.
     * @param {PAIEMENTCreateManyAndReturnArgs} args - Arguments to create many PAIEMENTS.
     * @example
     * // Create many PAIEMENTS
     * const pAIEMENT = await prisma.pAIEMENT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAIEMENTS and only return the `ID_Paie`
     * const pAIEMENTWithID_PaieOnly = await prisma.pAIEMENT.createManyAndReturn({
     *   select: { ID_Paie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAIEMENTCreateManyAndReturnArgs>(args?: SelectSubset<T, PAIEMENTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAIEMENT.
     * @param {PAIEMENTDeleteArgs} args - Arguments to delete one PAIEMENT.
     * @example
     * // Delete one PAIEMENT
     * const PAIEMENT = await prisma.pAIEMENT.delete({
     *   where: {
     *     // ... filter to delete one PAIEMENT
     *   }
     * })
     * 
     */
    delete<T extends PAIEMENTDeleteArgs>(args: SelectSubset<T, PAIEMENTDeleteArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAIEMENT.
     * @param {PAIEMENTUpdateArgs} args - Arguments to update one PAIEMENT.
     * @example
     * // Update one PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAIEMENTUpdateArgs>(args: SelectSubset<T, PAIEMENTUpdateArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAIEMENTS.
     * @param {PAIEMENTDeleteManyArgs} args - Arguments to filter PAIEMENTS to delete.
     * @example
     * // Delete a few PAIEMENTS
     * const { count } = await prisma.pAIEMENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAIEMENTDeleteManyArgs>(args?: SelectSubset<T, PAIEMENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAIEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAIEMENTS
     * const pAIEMENT = await prisma.pAIEMENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAIEMENTUpdateManyArgs>(args: SelectSubset<T, PAIEMENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAIEMENTS and returns the data updated in the database.
     * @param {PAIEMENTUpdateManyAndReturnArgs} args - Arguments to update many PAIEMENTS.
     * @example
     * // Update many PAIEMENTS
     * const pAIEMENT = await prisma.pAIEMENT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAIEMENTS and only return the `ID_Paie`
     * const pAIEMENTWithID_PaieOnly = await prisma.pAIEMENT.updateManyAndReturn({
     *   select: { ID_Paie: true },
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
    updateManyAndReturn<T extends PAIEMENTUpdateManyAndReturnArgs>(args: SelectSubset<T, PAIEMENTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAIEMENT.
     * @param {PAIEMENTUpsertArgs} args - Arguments to update or create a PAIEMENT.
     * @example
     * // Update or create a PAIEMENT
     * const pAIEMENT = await prisma.pAIEMENT.upsert({
     *   create: {
     *     // ... data to create a PAIEMENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAIEMENT we want to update
     *   }
     * })
     */
    upsert<T extends PAIEMENTUpsertArgs>(args: SelectSubset<T, PAIEMENTUpsertArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAIEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTCountArgs} args - Arguments to filter PAIEMENTS to count.
     * @example
     * // Count the number of PAIEMENTS
     * const count = await prisma.pAIEMENT.count({
     *   where: {
     *     // ... the filter for the PAIEMENTS we want to count
     *   }
     * })
    **/
    count<T extends PAIEMENTCountArgs>(
      args?: Subset<T, PAIEMENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAIEMENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAIEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PAIEMENTAggregateArgs>(args: Subset<T, PAIEMENTAggregateArgs>): Prisma.PrismaPromise<GetPAIEMENTAggregateType<T>>

    /**
     * Group by PAIEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAIEMENTGroupByArgs} args - Group by arguments.
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
      T extends PAIEMENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAIEMENTGroupByArgs['orderBy'] }
        : { orderBy?: PAIEMENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PAIEMENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAIEMENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAIEMENT model
   */
  readonly fields: PAIEMENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAIEMENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAIEMENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends PAIEMENT$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, PAIEMENT$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends PAIEMENT$adminArgs<ExtArgs> = {}>(args?: Subset<T, PAIEMENT$adminArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    etudiant<T extends ETUDIANTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ETUDIANTDefaultArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    realisations<T extends PAIEMENT$realisationsArgs<ExtArgs> = {}>(args?: Subset<T, PAIEMENT$realisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historique<T extends PAIEMENT$historiqueArgs<ExtArgs> = {}>(args?: Subset<T, PAIEMENT$historiqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PAIEMENT model
   */
  interface PAIEMENTFieldRefs {
    readonly ID_Paie: FieldRef<"PAIEMENT", 'Int'>
    readonly Montant: FieldRef<"PAIEMENT", 'Float'>
    readonly Montant_Restant: FieldRef<"PAIEMENT", 'Float'>
    readonly Date_Paie: FieldRef<"PAIEMENT", 'DateTime'>
    readonly Statut_Paie: FieldRef<"PAIEMENT", 'StatutPaiement'>
    readonly id_Admin: FieldRef<"PAIEMENT", 'Int'>
    readonly id_Etudiant: FieldRef<"PAIEMENT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PAIEMENT findUnique
   */
  export type PAIEMENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAIEMENT to fetch.
     */
    where: PAIEMENTWhereUniqueInput
  }

  /**
   * PAIEMENT findUniqueOrThrow
   */
  export type PAIEMENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAIEMENT to fetch.
     */
    where: PAIEMENTWhereUniqueInput
  }

  /**
   * PAIEMENT findFirst
   */
  export type PAIEMENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAIEMENT to fetch.
     */
    where?: PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAIEMENTS to fetch.
     */
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAIEMENTS.
     */
    cursor?: PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAIEMENTS.
     */
    distinct?: PAIEMENTScalarFieldEnum | PAIEMENTScalarFieldEnum[]
  }

  /**
   * PAIEMENT findFirstOrThrow
   */
  export type PAIEMENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAIEMENT to fetch.
     */
    where?: PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAIEMENTS to fetch.
     */
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAIEMENTS.
     */
    cursor?: PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAIEMENTS.
     */
    distinct?: PAIEMENTScalarFieldEnum | PAIEMENTScalarFieldEnum[]
  }

  /**
   * PAIEMENT findMany
   */
  export type PAIEMENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which PAIEMENTS to fetch.
     */
    where?: PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAIEMENTS to fetch.
     */
    orderBy?: PAIEMENTOrderByWithRelationInput | PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAIEMENTS.
     */
    cursor?: PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAIEMENTS.
     */
    skip?: number
    distinct?: PAIEMENTScalarFieldEnum | PAIEMENTScalarFieldEnum[]
  }

  /**
   * PAIEMENT create
   */
  export type PAIEMENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * The data needed to create a PAIEMENT.
     */
    data: XOR<PAIEMENTCreateInput, PAIEMENTUncheckedCreateInput>
  }

  /**
   * PAIEMENT createMany
   */
  export type PAIEMENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAIEMENTS.
     */
    data: PAIEMENTCreateManyInput | PAIEMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAIEMENT createManyAndReturn
   */
  export type PAIEMENTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * The data used to create many PAIEMENTS.
     */
    data: PAIEMENTCreateManyInput | PAIEMENTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAIEMENT update
   */
  export type PAIEMENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * The data needed to update a PAIEMENT.
     */
    data: XOR<PAIEMENTUpdateInput, PAIEMENTUncheckedUpdateInput>
    /**
     * Choose, which PAIEMENT to update.
     */
    where: PAIEMENTWhereUniqueInput
  }

  /**
   * PAIEMENT updateMany
   */
  export type PAIEMENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAIEMENTS.
     */
    data: XOR<PAIEMENTUpdateManyMutationInput, PAIEMENTUncheckedUpdateManyInput>
    /**
     * Filter which PAIEMENTS to update
     */
    where?: PAIEMENTWhereInput
    /**
     * Limit how many PAIEMENTS to update.
     */
    limit?: number
  }

  /**
   * PAIEMENT updateManyAndReturn
   */
  export type PAIEMENTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * The data used to update PAIEMENTS.
     */
    data: XOR<PAIEMENTUpdateManyMutationInput, PAIEMENTUncheckedUpdateManyInput>
    /**
     * Filter which PAIEMENTS to update
     */
    where?: PAIEMENTWhereInput
    /**
     * Limit how many PAIEMENTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAIEMENT upsert
   */
  export type PAIEMENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * The filter to search for the PAIEMENT to update in case it exists.
     */
    where: PAIEMENTWhereUniqueInput
    /**
     * In case the PAIEMENT found by the `where` argument doesn't exist, create a new PAIEMENT with this data.
     */
    create: XOR<PAIEMENTCreateInput, PAIEMENTUncheckedCreateInput>
    /**
     * In case the PAIEMENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAIEMENTUpdateInput, PAIEMENTUncheckedUpdateInput>
  }

  /**
   * PAIEMENT delete
   */
  export type PAIEMENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter which PAIEMENT to delete.
     */
    where: PAIEMENTWhereUniqueInput
  }

  /**
   * PAIEMENT deleteMany
   */
  export type PAIEMENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAIEMENTS to delete
     */
    where?: PAIEMENTWhereInput
    /**
     * Limit how many PAIEMENTS to delete.
     */
    limit?: number
  }

  /**
   * PAIEMENT.notifications
   */
  export type PAIEMENT$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * PAIEMENT.admin
   */
  export type PAIEMENT$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    where?: ADMINISTRATEURWhereInput
  }

  /**
   * PAIEMENT.realisations
   */
  export type PAIEMENT$realisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    where?: REALISATIONWhereInput
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    cursor?: REALISATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * PAIEMENT.historique
   */
  export type PAIEMENT$historiqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    where?: HISTORIQUE_PAIEMENTWhereInput
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HISTORIQUE_PAIEMENTScalarFieldEnum | HISTORIQUE_PAIEMENTScalarFieldEnum[]
  }

  /**
   * PAIEMENT without action
   */
  export type PAIEMENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
  }


  /**
   * Model NOTIFICATION
   */

  export type AggregateNOTIFICATION = {
    _count: NOTIFICATIONCountAggregateOutputType | null
    _avg: NOTIFICATIONAvgAggregateOutputType | null
    _sum: NOTIFICATIONSumAggregateOutputType | null
    _min: NOTIFICATIONMinAggregateOutputType | null
    _max: NOTIFICATIONMaxAggregateOutputType | null
  }

  export type NOTIFICATIONAvgAggregateOutputType = {
    ID_Notification: number | null
    id_SActes: number | null
    id_Paie: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Admin: number | null
    id_Realisation: number | null
  }

  export type NOTIFICATIONSumAggregateOutputType = {
    ID_Notification: number | null
    id_SActes: number | null
    id_Paie: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Admin: number | null
    id_Realisation: number | null
  }

  export type NOTIFICATIONMinAggregateOutputType = {
    ID_Notification: number | null
    Message: string | null
    Type: $Enums.TypeNotification | null
    Date_Envoi: Date | null
    Lu: boolean | null
    id_SActes: number | null
    id_Paie: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Admin: number | null
    id_Realisation: number | null
  }

  export type NOTIFICATIONMaxAggregateOutputType = {
    ID_Notification: number | null
    Message: string | null
    Type: $Enums.TypeNotification | null
    Date_Envoi: Date | null
    Lu: boolean | null
    id_SActes: number | null
    id_Paie: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Admin: number | null
    id_Realisation: number | null
  }

  export type NOTIFICATIONCountAggregateOutputType = {
    ID_Notification: number
    Message: number
    Type: number
    Date_Envoi: number
    Lu: number
    id_SActes: number
    id_Paie: number
    id_Etudiant: number
    id_Prof: number
    id_Admin: number
    id_Realisation: number
    _all: number
  }


  export type NOTIFICATIONAvgAggregateInputType = {
    ID_Notification?: true
    id_SActes?: true
    id_Paie?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Admin?: true
    id_Realisation?: true
  }

  export type NOTIFICATIONSumAggregateInputType = {
    ID_Notification?: true
    id_SActes?: true
    id_Paie?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Admin?: true
    id_Realisation?: true
  }

  export type NOTIFICATIONMinAggregateInputType = {
    ID_Notification?: true
    Message?: true
    Type?: true
    Date_Envoi?: true
    Lu?: true
    id_SActes?: true
    id_Paie?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Admin?: true
    id_Realisation?: true
  }

  export type NOTIFICATIONMaxAggregateInputType = {
    ID_Notification?: true
    Message?: true
    Type?: true
    Date_Envoi?: true
    Lu?: true
    id_SActes?: true
    id_Paie?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Admin?: true
    id_Realisation?: true
  }

  export type NOTIFICATIONCountAggregateInputType = {
    ID_Notification?: true
    Message?: true
    Type?: true
    Date_Envoi?: true
    Lu?: true
    id_SActes?: true
    id_Paie?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Admin?: true
    id_Realisation?: true
    _all?: true
  }

  export type NOTIFICATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NOTIFICATION to aggregate.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NOTIFICATIONS
    **/
    _count?: true | NOTIFICATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NOTIFICATIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NOTIFICATIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NOTIFICATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NOTIFICATIONMaxAggregateInputType
  }

  export type GetNOTIFICATIONAggregateType<T extends NOTIFICATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateNOTIFICATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNOTIFICATION[P]>
      : GetScalarType<T[P], AggregateNOTIFICATION[P]>
  }




  export type NOTIFICATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithAggregationInput | NOTIFICATIONOrderByWithAggregationInput[]
    by: NOTIFICATIONScalarFieldEnum[] | NOTIFICATIONScalarFieldEnum
    having?: NOTIFICATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NOTIFICATIONCountAggregateInputType | true
    _avg?: NOTIFICATIONAvgAggregateInputType
    _sum?: NOTIFICATIONSumAggregateInputType
    _min?: NOTIFICATIONMinAggregateInputType
    _max?: NOTIFICATIONMaxAggregateInputType
  }

  export type NOTIFICATIONGroupByOutputType = {
    ID_Notification: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi: Date
    Lu: boolean
    id_SActes: number | null
    id_Paie: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Admin: number | null
    id_Realisation: number | null
    _count: NOTIFICATIONCountAggregateOutputType | null
    _avg: NOTIFICATIONAvgAggregateOutputType | null
    _sum: NOTIFICATIONSumAggregateOutputType | null
    _min: NOTIFICATIONMinAggregateOutputType | null
    _max: NOTIFICATIONMaxAggregateOutputType | null
  }

  type GetNOTIFICATIONGroupByPayload<T extends NOTIFICATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NOTIFICATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NOTIFICATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NOTIFICATIONGroupByOutputType[P]>
            : GetScalarType<T[P], NOTIFICATIONGroupByOutputType[P]>
        }
      >
    >


  export type NOTIFICATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Notification?: boolean
    Message?: boolean
    Type?: boolean
    Date_Envoi?: boolean
    Lu?: boolean
    id_SActes?: boolean
    id_Paie?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Admin?: boolean
    id_Realisation?: boolean
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }, ExtArgs["result"]["nOTIFICATION"]>

  export type NOTIFICATIONSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Notification?: boolean
    Message?: boolean
    Type?: boolean
    Date_Envoi?: boolean
    Lu?: boolean
    id_SActes?: boolean
    id_Paie?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Admin?: boolean
    id_Realisation?: boolean
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }, ExtArgs["result"]["nOTIFICATION"]>

  export type NOTIFICATIONSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Notification?: boolean
    Message?: boolean
    Type?: boolean
    Date_Envoi?: boolean
    Lu?: boolean
    id_SActes?: boolean
    id_Paie?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Admin?: boolean
    id_Realisation?: boolean
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }, ExtArgs["result"]["nOTIFICATION"]>

  export type NOTIFICATIONSelectScalar = {
    ID_Notification?: boolean
    Message?: boolean
    Type?: boolean
    Date_Envoi?: boolean
    Lu?: boolean
    id_SActes?: boolean
    id_Paie?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Admin?: boolean
    id_Realisation?: boolean
  }

  export type NOTIFICATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Notification" | "Message" | "Type" | "Date_Envoi" | "Lu" | "id_SActes" | "id_Paie" | "id_Etudiant" | "id_Prof" | "id_Admin" | "id_Realisation", ExtArgs["result"]["nOTIFICATION"]>
  export type NOTIFICATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }
  export type NOTIFICATIONIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }
  export type NOTIFICATIONIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | NOTIFICATION$adminArgs<ExtArgs>
    etudiant?: boolean | NOTIFICATION$etudiantArgs<ExtArgs>
    paiement?: boolean | NOTIFICATION$paiementArgs<ExtArgs>
    professeur?: boolean | NOTIFICATION$professeurArgs<ExtArgs>
    realisation?: boolean | NOTIFICATION$realisationArgs<ExtArgs>
    sous_acte?: boolean | NOTIFICATION$sous_acteArgs<ExtArgs>
  }

  export type $NOTIFICATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NOTIFICATION"
    objects: {
      admin: Prisma.$ADMINISTRATEURPayload<ExtArgs> | null
      etudiant: Prisma.$ETUDIANTPayload<ExtArgs> | null
      paiement: Prisma.$PAIEMENTPayload<ExtArgs> | null
      professeur: Prisma.$PROFESSEURSPayload<ExtArgs> | null
      realisation: Prisma.$REALISATIONPayload<ExtArgs> | null
      sous_acte: Prisma.$SOUS_ACTESPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Notification: number
      Message: string
      Type: $Enums.TypeNotification
      Date_Envoi: Date
      Lu: boolean
      id_SActes: number | null
      id_Paie: number | null
      id_Etudiant: number | null
      id_Prof: number | null
      id_Admin: number | null
      id_Realisation: number | null
    }, ExtArgs["result"]["nOTIFICATION"]>
    composites: {}
  }

  type NOTIFICATIONGetPayload<S extends boolean | null | undefined | NOTIFICATIONDefaultArgs> = $Result.GetResult<Prisma.$NOTIFICATIONPayload, S>

  type NOTIFICATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NOTIFICATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NOTIFICATIONCountAggregateInputType | true
    }

  export interface NOTIFICATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NOTIFICATION'], meta: { name: 'NOTIFICATION' } }
    /**
     * Find zero or one NOTIFICATION that matches the filter.
     * @param {NOTIFICATIONFindUniqueArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NOTIFICATIONFindUniqueArgs>(args: SelectSubset<T, NOTIFICATIONFindUniqueArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NOTIFICATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NOTIFICATIONFindUniqueOrThrowArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NOTIFICATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NOTIFICATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindFirstArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NOTIFICATIONFindFirstArgs>(args?: SelectSubset<T, NOTIFICATIONFindFirstArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NOTIFICATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindFirstOrThrowArgs} args - Arguments to find a NOTIFICATION
     * @example
     * // Get one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NOTIFICATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, NOTIFICATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NOTIFICATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NOTIFICATIONS
     * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany()
     * 
     * // Get first 10 NOTIFICATIONS
     * const nOTIFICATIONS = await prisma.nOTIFICATION.findMany({ take: 10 })
     * 
     * // Only select the `ID_Notification`
     * const nOTIFICATIONWithID_NotificationOnly = await prisma.nOTIFICATION.findMany({ select: { ID_Notification: true } })
     * 
     */
    findMany<T extends NOTIFICATIONFindManyArgs>(args?: SelectSubset<T, NOTIFICATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NOTIFICATION.
     * @param {NOTIFICATIONCreateArgs} args - Arguments to create a NOTIFICATION.
     * @example
     * // Create one NOTIFICATION
     * const NOTIFICATION = await prisma.nOTIFICATION.create({
     *   data: {
     *     // ... data to create a NOTIFICATION
     *   }
     * })
     * 
     */
    create<T extends NOTIFICATIONCreateArgs>(args: SelectSubset<T, NOTIFICATIONCreateArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NOTIFICATIONS.
     * @param {NOTIFICATIONCreateManyArgs} args - Arguments to create many NOTIFICATIONS.
     * @example
     * // Create many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NOTIFICATIONCreateManyArgs>(args?: SelectSubset<T, NOTIFICATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NOTIFICATIONS and returns the data saved in the database.
     * @param {NOTIFICATIONCreateManyAndReturnArgs} args - Arguments to create many NOTIFICATIONS.
     * @example
     * // Create many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NOTIFICATIONS and only return the `ID_Notification`
     * const nOTIFICATIONWithID_NotificationOnly = await prisma.nOTIFICATION.createManyAndReturn({
     *   select: { ID_Notification: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NOTIFICATIONCreateManyAndReturnArgs>(args?: SelectSubset<T, NOTIFICATIONCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NOTIFICATION.
     * @param {NOTIFICATIONDeleteArgs} args - Arguments to delete one NOTIFICATION.
     * @example
     * // Delete one NOTIFICATION
     * const NOTIFICATION = await prisma.nOTIFICATION.delete({
     *   where: {
     *     // ... filter to delete one NOTIFICATION
     *   }
     * })
     * 
     */
    delete<T extends NOTIFICATIONDeleteArgs>(args: SelectSubset<T, NOTIFICATIONDeleteArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NOTIFICATION.
     * @param {NOTIFICATIONUpdateArgs} args - Arguments to update one NOTIFICATION.
     * @example
     * // Update one NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NOTIFICATIONUpdateArgs>(args: SelectSubset<T, NOTIFICATIONUpdateArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NOTIFICATIONS.
     * @param {NOTIFICATIONDeleteManyArgs} args - Arguments to filter NOTIFICATIONS to delete.
     * @example
     * // Delete a few NOTIFICATIONS
     * const { count } = await prisma.nOTIFICATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NOTIFICATIONDeleteManyArgs>(args?: SelectSubset<T, NOTIFICATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NOTIFICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NOTIFICATIONUpdateManyArgs>(args: SelectSubset<T, NOTIFICATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NOTIFICATIONS and returns the data updated in the database.
     * @param {NOTIFICATIONUpdateManyAndReturnArgs} args - Arguments to update many NOTIFICATIONS.
     * @example
     * // Update many NOTIFICATIONS
     * const nOTIFICATION = await prisma.nOTIFICATION.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NOTIFICATIONS and only return the `ID_Notification`
     * const nOTIFICATIONWithID_NotificationOnly = await prisma.nOTIFICATION.updateManyAndReturn({
     *   select: { ID_Notification: true },
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
    updateManyAndReturn<T extends NOTIFICATIONUpdateManyAndReturnArgs>(args: SelectSubset<T, NOTIFICATIONUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NOTIFICATION.
     * @param {NOTIFICATIONUpsertArgs} args - Arguments to update or create a NOTIFICATION.
     * @example
     * // Update or create a NOTIFICATION
     * const nOTIFICATION = await prisma.nOTIFICATION.upsert({
     *   create: {
     *     // ... data to create a NOTIFICATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NOTIFICATION we want to update
     *   }
     * })
     */
    upsert<T extends NOTIFICATIONUpsertArgs>(args: SelectSubset<T, NOTIFICATIONUpsertArgs<ExtArgs>>): Prisma__NOTIFICATIONClient<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NOTIFICATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONCountArgs} args - Arguments to filter NOTIFICATIONS to count.
     * @example
     * // Count the number of NOTIFICATIONS
     * const count = await prisma.nOTIFICATION.count({
     *   where: {
     *     // ... the filter for the NOTIFICATIONS we want to count
     *   }
     * })
    **/
    count<T extends NOTIFICATIONCountArgs>(
      args?: Subset<T, NOTIFICATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NOTIFICATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NOTIFICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NOTIFICATIONAggregateArgs>(args: Subset<T, NOTIFICATIONAggregateArgs>): Prisma.PrismaPromise<GetNOTIFICATIONAggregateType<T>>

    /**
     * Group by NOTIFICATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NOTIFICATIONGroupByArgs} args - Group by arguments.
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
      T extends NOTIFICATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NOTIFICATIONGroupByArgs['orderBy'] }
        : { orderBy?: NOTIFICATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NOTIFICATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNOTIFICATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NOTIFICATION model
   */
  readonly fields: NOTIFICATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NOTIFICATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NOTIFICATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends NOTIFICATION$adminArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$adminArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    etudiant<T extends NOTIFICATION$etudiantArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$etudiantArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paiement<T extends NOTIFICATION$paiementArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$paiementArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professeur<T extends NOTIFICATION$professeurArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$professeurArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    realisation<T extends NOTIFICATION$realisationArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$realisationArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sous_acte<T extends NOTIFICATION$sous_acteArgs<ExtArgs> = {}>(args?: Subset<T, NOTIFICATION$sous_acteArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NOTIFICATION model
   */
  interface NOTIFICATIONFieldRefs {
    readonly ID_Notification: FieldRef<"NOTIFICATION", 'Int'>
    readonly Message: FieldRef<"NOTIFICATION", 'String'>
    readonly Type: FieldRef<"NOTIFICATION", 'TypeNotification'>
    readonly Date_Envoi: FieldRef<"NOTIFICATION", 'DateTime'>
    readonly Lu: FieldRef<"NOTIFICATION", 'Boolean'>
    readonly id_SActes: FieldRef<"NOTIFICATION", 'Int'>
    readonly id_Paie: FieldRef<"NOTIFICATION", 'Int'>
    readonly id_Etudiant: FieldRef<"NOTIFICATION", 'Int'>
    readonly id_Prof: FieldRef<"NOTIFICATION", 'Int'>
    readonly id_Admin: FieldRef<"NOTIFICATION", 'Int'>
    readonly id_Realisation: FieldRef<"NOTIFICATION", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NOTIFICATION findUnique
   */
  export type NOTIFICATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION findUniqueOrThrow
   */
  export type NOTIFICATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION findFirst
   */
  export type NOTIFICATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NOTIFICATIONS.
     */
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION findFirstOrThrow
   */
  export type NOTIFICATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATION to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NOTIFICATIONS.
     */
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION findMany
   */
  export type NOTIFICATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter, which NOTIFICATIONS to fetch.
     */
    where?: NOTIFICATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NOTIFICATIONS to fetch.
     */
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NOTIFICATIONS.
     */
    cursor?: NOTIFICATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NOTIFICATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NOTIFICATIONS.
     */
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * NOTIFICATION create
   */
  export type NOTIFICATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a NOTIFICATION.
     */
    data: XOR<NOTIFICATIONCreateInput, NOTIFICATIONUncheckedCreateInput>
  }

  /**
   * NOTIFICATION createMany
   */
  export type NOTIFICATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NOTIFICATIONS.
     */
    data: NOTIFICATIONCreateManyInput | NOTIFICATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NOTIFICATION createManyAndReturn
   */
  export type NOTIFICATIONCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * The data used to create many NOTIFICATIONS.
     */
    data: NOTIFICATIONCreateManyInput | NOTIFICATIONCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NOTIFICATION update
   */
  export type NOTIFICATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a NOTIFICATION.
     */
    data: XOR<NOTIFICATIONUpdateInput, NOTIFICATIONUncheckedUpdateInput>
    /**
     * Choose, which NOTIFICATION to update.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION updateMany
   */
  export type NOTIFICATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NOTIFICATIONS.
     */
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyInput>
    /**
     * Filter which NOTIFICATIONS to update
     */
    where?: NOTIFICATIONWhereInput
    /**
     * Limit how many NOTIFICATIONS to update.
     */
    limit?: number
  }

  /**
   * NOTIFICATION updateManyAndReturn
   */
  export type NOTIFICATIONUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * The data used to update NOTIFICATIONS.
     */
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyInput>
    /**
     * Filter which NOTIFICATIONS to update
     */
    where?: NOTIFICATIONWhereInput
    /**
     * Limit how many NOTIFICATIONS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NOTIFICATION upsert
   */
  export type NOTIFICATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the NOTIFICATION to update in case it exists.
     */
    where: NOTIFICATIONWhereUniqueInput
    /**
     * In case the NOTIFICATION found by the `where` argument doesn't exist, create a new NOTIFICATION with this data.
     */
    create: XOR<NOTIFICATIONCreateInput, NOTIFICATIONUncheckedCreateInput>
    /**
     * In case the NOTIFICATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NOTIFICATIONUpdateInput, NOTIFICATIONUncheckedUpdateInput>
  }

  /**
   * NOTIFICATION delete
   */
  export type NOTIFICATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    /**
     * Filter which NOTIFICATION to delete.
     */
    where: NOTIFICATIONWhereUniqueInput
  }

  /**
   * NOTIFICATION deleteMany
   */
  export type NOTIFICATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NOTIFICATIONS to delete
     */
    where?: NOTIFICATIONWhereInput
    /**
     * Limit how many NOTIFICATIONS to delete.
     */
    limit?: number
  }

  /**
   * NOTIFICATION.admin
   */
  export type NOTIFICATION$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    where?: ADMINISTRATEURWhereInput
  }

  /**
   * NOTIFICATION.etudiant
   */
  export type NOTIFICATION$etudiantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ETUDIANT
     */
    select?: ETUDIANTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ETUDIANT
     */
    omit?: ETUDIANTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ETUDIANTInclude<ExtArgs> | null
    where?: ETUDIANTWhereInput
  }

  /**
   * NOTIFICATION.paiement
   */
  export type NOTIFICATION$paiementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    where?: PAIEMENTWhereInput
  }

  /**
   * NOTIFICATION.professeur
   */
  export type NOTIFICATION$professeurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    where?: PROFESSEURSWhereInput
  }

  /**
   * NOTIFICATION.realisation
   */
  export type NOTIFICATION$realisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    where?: REALISATIONWhereInput
  }

  /**
   * NOTIFICATION.sous_acte
   */
  export type NOTIFICATION$sous_acteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOUS_ACTES
     */
    select?: SOUS_ACTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOUS_ACTES
     */
    omit?: SOUS_ACTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOUS_ACTESInclude<ExtArgs> | null
    where?: SOUS_ACTESWhereInput
  }

  /**
   * NOTIFICATION without action
   */
  export type NOTIFICATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
  }


  /**
   * Model REALISATION
   */

  export type AggregateREALISATION = {
    _count: REALISATIONCountAggregateOutputType | null
    _avg: REALISATIONAvgAggregateOutputType | null
    _sum: REALISATIONSumAggregateOutputType | null
    _min: REALISATIONMinAggregateOutputType | null
    _max: REALISATIONMaxAggregateOutputType | null
  }

  export type REALISATIONAvgAggregateOutputType = {
    ID_Realisation: number | null
    Note: number | null
    id_SActes: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Paie: number | null
  }

  export type REALISATIONSumAggregateOutputType = {
    ID_Realisation: number | null
    Note: number | null
    id_SActes: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Paie: number | null
  }

  export type REALISATIONMinAggregateOutputType = {
    ID_Realisation: number | null
    Date_Realise: Date | null
    Note: number | null
    Statut_Valide: boolean | null
    id_SActes: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Paie: number | null
  }

  export type REALISATIONMaxAggregateOutputType = {
    ID_Realisation: number | null
    Date_Realise: Date | null
    Note: number | null
    Statut_Valide: boolean | null
    id_SActes: number | null
    id_Etudiant: number | null
    id_Prof: number | null
    id_Paie: number | null
  }

  export type REALISATIONCountAggregateOutputType = {
    ID_Realisation: number
    Date_Realise: number
    Note: number
    Statut_Valide: number
    id_SActes: number
    id_Etudiant: number
    id_Prof: number
    id_Paie: number
    _all: number
  }


  export type REALISATIONAvgAggregateInputType = {
    ID_Realisation?: true
    Note?: true
    id_SActes?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Paie?: true
  }

  export type REALISATIONSumAggregateInputType = {
    ID_Realisation?: true
    Note?: true
    id_SActes?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Paie?: true
  }

  export type REALISATIONMinAggregateInputType = {
    ID_Realisation?: true
    Date_Realise?: true
    Note?: true
    Statut_Valide?: true
    id_SActes?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Paie?: true
  }

  export type REALISATIONMaxAggregateInputType = {
    ID_Realisation?: true
    Date_Realise?: true
    Note?: true
    Statut_Valide?: true
    id_SActes?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Paie?: true
  }

  export type REALISATIONCountAggregateInputType = {
    ID_Realisation?: true
    Date_Realise?: true
    Note?: true
    Statut_Valide?: true
    id_SActes?: true
    id_Etudiant?: true
    id_Prof?: true
    id_Paie?: true
    _all?: true
  }

  export type REALISATIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which REALISATION to aggregate.
     */
    where?: REALISATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REALISATIONS to fetch.
     */
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: REALISATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REALISATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REALISATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned REALISATIONS
    **/
    _count?: true | REALISATIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: REALISATIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: REALISATIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: REALISATIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: REALISATIONMaxAggregateInputType
  }

  export type GetREALISATIONAggregateType<T extends REALISATIONAggregateArgs> = {
        [P in keyof T & keyof AggregateREALISATION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateREALISATION[P]>
      : GetScalarType<T[P], AggregateREALISATION[P]>
  }




  export type REALISATIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: REALISATIONWhereInput
    orderBy?: REALISATIONOrderByWithAggregationInput | REALISATIONOrderByWithAggregationInput[]
    by: REALISATIONScalarFieldEnum[] | REALISATIONScalarFieldEnum
    having?: REALISATIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: REALISATIONCountAggregateInputType | true
    _avg?: REALISATIONAvgAggregateInputType
    _sum?: REALISATIONSumAggregateInputType
    _min?: REALISATIONMinAggregateInputType
    _max?: REALISATIONMaxAggregateInputType
  }

  export type REALISATIONGroupByOutputType = {
    ID_Realisation: number
    Date_Realise: Date
    Note: number | null
    Statut_Valide: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof: number | null
    id_Paie: number | null
    _count: REALISATIONCountAggregateOutputType | null
    _avg: REALISATIONAvgAggregateOutputType | null
    _sum: REALISATIONSumAggregateOutputType | null
    _min: REALISATIONMinAggregateOutputType | null
    _max: REALISATIONMaxAggregateOutputType | null
  }

  type GetREALISATIONGroupByPayload<T extends REALISATIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<REALISATIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof REALISATIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], REALISATIONGroupByOutputType[P]>
            : GetScalarType<T[P], REALISATIONGroupByOutputType[P]>
        }
      >
    >


  export type REALISATIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Realisation?: boolean
    Date_Realise?: boolean
    Note?: boolean
    Statut_Valide?: boolean
    id_SActes?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Paie?: boolean
    notifications?: boolean | REALISATION$notificationsArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
    _count?: boolean | REALISATIONCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rEALISATION"]>

  export type REALISATIONSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Realisation?: boolean
    Date_Realise?: boolean
    Note?: boolean
    Statut_Valide?: boolean
    id_SActes?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Paie?: boolean
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rEALISATION"]>

  export type REALISATIONSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Realisation?: boolean
    Date_Realise?: boolean
    Note?: boolean
    Statut_Valide?: boolean
    id_SActes?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Paie?: boolean
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rEALISATION"]>

  export type REALISATIONSelectScalar = {
    ID_Realisation?: boolean
    Date_Realise?: boolean
    Note?: boolean
    Statut_Valide?: boolean
    id_SActes?: boolean
    id_Etudiant?: boolean
    id_Prof?: boolean
    id_Paie?: boolean
  }

  export type REALISATIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Realisation" | "Date_Realise" | "Note" | "Statut_Valide" | "id_SActes" | "id_Etudiant" | "id_Prof" | "id_Paie", ExtArgs["result"]["rEALISATION"]>
  export type REALISATIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | REALISATION$notificationsArgs<ExtArgs>
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
    _count?: boolean | REALISATIONCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type REALISATIONIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
  }
  export type REALISATIONIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | ETUDIANTDefaultArgs<ExtArgs>
    paiement?: boolean | REALISATION$paiementArgs<ExtArgs>
    professeur?: boolean | REALISATION$professeurArgs<ExtArgs>
    sousActe?: boolean | SOUS_ACTESDefaultArgs<ExtArgs>
  }

  export type $REALISATIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "REALISATION"
    objects: {
      notifications: Prisma.$NOTIFICATIONPayload<ExtArgs>[]
      etudiant: Prisma.$ETUDIANTPayload<ExtArgs>
      paiement: Prisma.$PAIEMENTPayload<ExtArgs> | null
      professeur: Prisma.$PROFESSEURSPayload<ExtArgs> | null
      sousActe: Prisma.$SOUS_ACTESPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Realisation: number
      Date_Realise: Date
      Note: number | null
      Statut_Valide: boolean
      id_SActes: number
      id_Etudiant: number
      id_Prof: number | null
      id_Paie: number | null
    }, ExtArgs["result"]["rEALISATION"]>
    composites: {}
  }

  type REALISATIONGetPayload<S extends boolean | null | undefined | REALISATIONDefaultArgs> = $Result.GetResult<Prisma.$REALISATIONPayload, S>

  type REALISATIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<REALISATIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: REALISATIONCountAggregateInputType | true
    }

  export interface REALISATIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['REALISATION'], meta: { name: 'REALISATION' } }
    /**
     * Find zero or one REALISATION that matches the filter.
     * @param {REALISATIONFindUniqueArgs} args - Arguments to find a REALISATION
     * @example
     * // Get one REALISATION
     * const rEALISATION = await prisma.rEALISATION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends REALISATIONFindUniqueArgs>(args: SelectSubset<T, REALISATIONFindUniqueArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one REALISATION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {REALISATIONFindUniqueOrThrowArgs} args - Arguments to find a REALISATION
     * @example
     * // Get one REALISATION
     * const rEALISATION = await prisma.rEALISATION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends REALISATIONFindUniqueOrThrowArgs>(args: SelectSubset<T, REALISATIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first REALISATION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONFindFirstArgs} args - Arguments to find a REALISATION
     * @example
     * // Get one REALISATION
     * const rEALISATION = await prisma.rEALISATION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends REALISATIONFindFirstArgs>(args?: SelectSubset<T, REALISATIONFindFirstArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first REALISATION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONFindFirstOrThrowArgs} args - Arguments to find a REALISATION
     * @example
     * // Get one REALISATION
     * const rEALISATION = await prisma.rEALISATION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends REALISATIONFindFirstOrThrowArgs>(args?: SelectSubset<T, REALISATIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more REALISATIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all REALISATIONS
     * const rEALISATIONS = await prisma.rEALISATION.findMany()
     * 
     * // Get first 10 REALISATIONS
     * const rEALISATIONS = await prisma.rEALISATION.findMany({ take: 10 })
     * 
     * // Only select the `ID_Realisation`
     * const rEALISATIONWithID_RealisationOnly = await prisma.rEALISATION.findMany({ select: { ID_Realisation: true } })
     * 
     */
    findMany<T extends REALISATIONFindManyArgs>(args?: SelectSubset<T, REALISATIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a REALISATION.
     * @param {REALISATIONCreateArgs} args - Arguments to create a REALISATION.
     * @example
     * // Create one REALISATION
     * const REALISATION = await prisma.rEALISATION.create({
     *   data: {
     *     // ... data to create a REALISATION
     *   }
     * })
     * 
     */
    create<T extends REALISATIONCreateArgs>(args: SelectSubset<T, REALISATIONCreateArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many REALISATIONS.
     * @param {REALISATIONCreateManyArgs} args - Arguments to create many REALISATIONS.
     * @example
     * // Create many REALISATIONS
     * const rEALISATION = await prisma.rEALISATION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends REALISATIONCreateManyArgs>(args?: SelectSubset<T, REALISATIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many REALISATIONS and returns the data saved in the database.
     * @param {REALISATIONCreateManyAndReturnArgs} args - Arguments to create many REALISATIONS.
     * @example
     * // Create many REALISATIONS
     * const rEALISATION = await prisma.rEALISATION.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many REALISATIONS and only return the `ID_Realisation`
     * const rEALISATIONWithID_RealisationOnly = await prisma.rEALISATION.createManyAndReturn({
     *   select: { ID_Realisation: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends REALISATIONCreateManyAndReturnArgs>(args?: SelectSubset<T, REALISATIONCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a REALISATION.
     * @param {REALISATIONDeleteArgs} args - Arguments to delete one REALISATION.
     * @example
     * // Delete one REALISATION
     * const REALISATION = await prisma.rEALISATION.delete({
     *   where: {
     *     // ... filter to delete one REALISATION
     *   }
     * })
     * 
     */
    delete<T extends REALISATIONDeleteArgs>(args: SelectSubset<T, REALISATIONDeleteArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one REALISATION.
     * @param {REALISATIONUpdateArgs} args - Arguments to update one REALISATION.
     * @example
     * // Update one REALISATION
     * const rEALISATION = await prisma.rEALISATION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends REALISATIONUpdateArgs>(args: SelectSubset<T, REALISATIONUpdateArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more REALISATIONS.
     * @param {REALISATIONDeleteManyArgs} args - Arguments to filter REALISATIONS to delete.
     * @example
     * // Delete a few REALISATIONS
     * const { count } = await prisma.rEALISATION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends REALISATIONDeleteManyArgs>(args?: SelectSubset<T, REALISATIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REALISATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many REALISATIONS
     * const rEALISATION = await prisma.rEALISATION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends REALISATIONUpdateManyArgs>(args: SelectSubset<T, REALISATIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more REALISATIONS and returns the data updated in the database.
     * @param {REALISATIONUpdateManyAndReturnArgs} args - Arguments to update many REALISATIONS.
     * @example
     * // Update many REALISATIONS
     * const rEALISATION = await prisma.rEALISATION.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more REALISATIONS and only return the `ID_Realisation`
     * const rEALISATIONWithID_RealisationOnly = await prisma.rEALISATION.updateManyAndReturn({
     *   select: { ID_Realisation: true },
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
    updateManyAndReturn<T extends REALISATIONUpdateManyAndReturnArgs>(args: SelectSubset<T, REALISATIONUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one REALISATION.
     * @param {REALISATIONUpsertArgs} args - Arguments to update or create a REALISATION.
     * @example
     * // Update or create a REALISATION
     * const rEALISATION = await prisma.rEALISATION.upsert({
     *   create: {
     *     // ... data to create a REALISATION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the REALISATION we want to update
     *   }
     * })
     */
    upsert<T extends REALISATIONUpsertArgs>(args: SelectSubset<T, REALISATIONUpsertArgs<ExtArgs>>): Prisma__REALISATIONClient<$Result.GetResult<Prisma.$REALISATIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of REALISATIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONCountArgs} args - Arguments to filter REALISATIONS to count.
     * @example
     * // Count the number of REALISATIONS
     * const count = await prisma.rEALISATION.count({
     *   where: {
     *     // ... the filter for the REALISATIONS we want to count
     *   }
     * })
    **/
    count<T extends REALISATIONCountArgs>(
      args?: Subset<T, REALISATIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], REALISATIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a REALISATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends REALISATIONAggregateArgs>(args: Subset<T, REALISATIONAggregateArgs>): Prisma.PrismaPromise<GetREALISATIONAggregateType<T>>

    /**
     * Group by REALISATION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {REALISATIONGroupByArgs} args - Group by arguments.
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
      T extends REALISATIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: REALISATIONGroupByArgs['orderBy'] }
        : { orderBy?: REALISATIONGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, REALISATIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREALISATIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the REALISATION model
   */
  readonly fields: REALISATIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for REALISATION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__REALISATIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends REALISATION$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, REALISATION$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NOTIFICATIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etudiant<T extends ETUDIANTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ETUDIANTDefaultArgs<ExtArgs>>): Prisma__ETUDIANTClient<$Result.GetResult<Prisma.$ETUDIANTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paiement<T extends REALISATION$paiementArgs<ExtArgs> = {}>(args?: Subset<T, REALISATION$paiementArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professeur<T extends REALISATION$professeurArgs<ExtArgs> = {}>(args?: Subset<T, REALISATION$professeurArgs<ExtArgs>>): Prisma__PROFESSEURSClient<$Result.GetResult<Prisma.$PROFESSEURSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sousActe<T extends SOUS_ACTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SOUS_ACTESDefaultArgs<ExtArgs>>): Prisma__SOUS_ACTESClient<$Result.GetResult<Prisma.$SOUS_ACTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the REALISATION model
   */
  interface REALISATIONFieldRefs {
    readonly ID_Realisation: FieldRef<"REALISATION", 'Int'>
    readonly Date_Realise: FieldRef<"REALISATION", 'DateTime'>
    readonly Note: FieldRef<"REALISATION", 'Float'>
    readonly Statut_Valide: FieldRef<"REALISATION", 'Boolean'>
    readonly id_SActes: FieldRef<"REALISATION", 'Int'>
    readonly id_Etudiant: FieldRef<"REALISATION", 'Int'>
    readonly id_Prof: FieldRef<"REALISATION", 'Int'>
    readonly id_Paie: FieldRef<"REALISATION", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * REALISATION findUnique
   */
  export type REALISATIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter, which REALISATION to fetch.
     */
    where: REALISATIONWhereUniqueInput
  }

  /**
   * REALISATION findUniqueOrThrow
   */
  export type REALISATIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter, which REALISATION to fetch.
     */
    where: REALISATIONWhereUniqueInput
  }

  /**
   * REALISATION findFirst
   */
  export type REALISATIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter, which REALISATION to fetch.
     */
    where?: REALISATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REALISATIONS to fetch.
     */
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REALISATIONS.
     */
    cursor?: REALISATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REALISATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REALISATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REALISATIONS.
     */
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * REALISATION findFirstOrThrow
   */
  export type REALISATIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter, which REALISATION to fetch.
     */
    where?: REALISATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REALISATIONS to fetch.
     */
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for REALISATIONS.
     */
    cursor?: REALISATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REALISATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REALISATIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of REALISATIONS.
     */
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * REALISATION findMany
   */
  export type REALISATIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter, which REALISATIONS to fetch.
     */
    where?: REALISATIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of REALISATIONS to fetch.
     */
    orderBy?: REALISATIONOrderByWithRelationInput | REALISATIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing REALISATIONS.
     */
    cursor?: REALISATIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` REALISATIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` REALISATIONS.
     */
    skip?: number
    distinct?: REALISATIONScalarFieldEnum | REALISATIONScalarFieldEnum[]
  }

  /**
   * REALISATION create
   */
  export type REALISATIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * The data needed to create a REALISATION.
     */
    data: XOR<REALISATIONCreateInput, REALISATIONUncheckedCreateInput>
  }

  /**
   * REALISATION createMany
   */
  export type REALISATIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many REALISATIONS.
     */
    data: REALISATIONCreateManyInput | REALISATIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * REALISATION createManyAndReturn
   */
  export type REALISATIONCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * The data used to create many REALISATIONS.
     */
    data: REALISATIONCreateManyInput | REALISATIONCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * REALISATION update
   */
  export type REALISATIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * The data needed to update a REALISATION.
     */
    data: XOR<REALISATIONUpdateInput, REALISATIONUncheckedUpdateInput>
    /**
     * Choose, which REALISATION to update.
     */
    where: REALISATIONWhereUniqueInput
  }

  /**
   * REALISATION updateMany
   */
  export type REALISATIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update REALISATIONS.
     */
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyInput>
    /**
     * Filter which REALISATIONS to update
     */
    where?: REALISATIONWhereInput
    /**
     * Limit how many REALISATIONS to update.
     */
    limit?: number
  }

  /**
   * REALISATION updateManyAndReturn
   */
  export type REALISATIONUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * The data used to update REALISATIONS.
     */
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyInput>
    /**
     * Filter which REALISATIONS to update
     */
    where?: REALISATIONWhereInput
    /**
     * Limit how many REALISATIONS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * REALISATION upsert
   */
  export type REALISATIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * The filter to search for the REALISATION to update in case it exists.
     */
    where: REALISATIONWhereUniqueInput
    /**
     * In case the REALISATION found by the `where` argument doesn't exist, create a new REALISATION with this data.
     */
    create: XOR<REALISATIONCreateInput, REALISATIONUncheckedCreateInput>
    /**
     * In case the REALISATION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<REALISATIONUpdateInput, REALISATIONUncheckedUpdateInput>
  }

  /**
   * REALISATION delete
   */
  export type REALISATIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
    /**
     * Filter which REALISATION to delete.
     */
    where: REALISATIONWhereUniqueInput
  }

  /**
   * REALISATION deleteMany
   */
  export type REALISATIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which REALISATIONS to delete
     */
    where?: REALISATIONWhereInput
    /**
     * Limit how many REALISATIONS to delete.
     */
    limit?: number
  }

  /**
   * REALISATION.notifications
   */
  export type REALISATION$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NOTIFICATION
     */
    select?: NOTIFICATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NOTIFICATION
     */
    omit?: NOTIFICATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NOTIFICATIONInclude<ExtArgs> | null
    where?: NOTIFICATIONWhereInput
    orderBy?: NOTIFICATIONOrderByWithRelationInput | NOTIFICATIONOrderByWithRelationInput[]
    cursor?: NOTIFICATIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NOTIFICATIONScalarFieldEnum | NOTIFICATIONScalarFieldEnum[]
  }

  /**
   * REALISATION.paiement
   */
  export type REALISATION$paiementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAIEMENT
     */
    select?: PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAIEMENT
     */
    omit?: PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAIEMENTInclude<ExtArgs> | null
    where?: PAIEMENTWhereInput
  }

  /**
   * REALISATION.professeur
   */
  export type REALISATION$professeurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PROFESSEURS
     */
    select?: PROFESSEURSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PROFESSEURS
     */
    omit?: PROFESSEURSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PROFESSEURSInclude<ExtArgs> | null
    where?: PROFESSEURSWhereInput
  }

  /**
   * REALISATION without action
   */
  export type REALISATIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the REALISATION
     */
    select?: REALISATIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the REALISATION
     */
    omit?: REALISATIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: REALISATIONInclude<ExtArgs> | null
  }


  /**
   * Model HISTORIQUE_PAIEMENT
   */

  export type AggregateHISTORIQUE_PAIEMENT = {
    _count: HISTORIQUE_PAIEMENTCountAggregateOutputType | null
    _avg: HISTORIQUE_PAIEMENTAvgAggregateOutputType | null
    _sum: HISTORIQUE_PAIEMENTSumAggregateOutputType | null
    _min: HISTORIQUE_PAIEMENTMinAggregateOutputType | null
    _max: HISTORIQUE_PAIEMENTMaxAggregateOutputType | null
  }

  export type HISTORIQUE_PAIEMENTAvgAggregateOutputType = {
    ID_Hist: number | null
    Montant: number | null
    Montant_Restant: number | null
    id_Paie: number | null
    id_Admin: number | null
  }

  export type HISTORIQUE_PAIEMENTSumAggregateOutputType = {
    ID_Hist: number | null
    Montant: number | null
    Montant_Restant: number | null
    id_Paie: number | null
    id_Admin: number | null
  }

  export type HISTORIQUE_PAIEMENTMinAggregateOutputType = {
    ID_Hist: number | null
    Action: string | null
    AncienStatut: $Enums.StatutPaiement | null
    NouveauStatut: $Enums.StatutPaiement | null
    Montant: number | null
    Montant_Restant: number | null
    Date_Action: Date | null
    id_Paie: number | null
    id_Admin: number | null
  }

  export type HISTORIQUE_PAIEMENTMaxAggregateOutputType = {
    ID_Hist: number | null
    Action: string | null
    AncienStatut: $Enums.StatutPaiement | null
    NouveauStatut: $Enums.StatutPaiement | null
    Montant: number | null
    Montant_Restant: number | null
    Date_Action: Date | null
    id_Paie: number | null
    id_Admin: number | null
  }

  export type HISTORIQUE_PAIEMENTCountAggregateOutputType = {
    ID_Hist: number
    Action: number
    AncienStatut: number
    NouveauStatut: number
    Montant: number
    Montant_Restant: number
    Date_Action: number
    id_Paie: number
    id_Admin: number
    _all: number
  }


  export type HISTORIQUE_PAIEMENTAvgAggregateInputType = {
    ID_Hist?: true
    Montant?: true
    Montant_Restant?: true
    id_Paie?: true
    id_Admin?: true
  }

  export type HISTORIQUE_PAIEMENTSumAggregateInputType = {
    ID_Hist?: true
    Montant?: true
    Montant_Restant?: true
    id_Paie?: true
    id_Admin?: true
  }

  export type HISTORIQUE_PAIEMENTMinAggregateInputType = {
    ID_Hist?: true
    Action?: true
    AncienStatut?: true
    NouveauStatut?: true
    Montant?: true
    Montant_Restant?: true
    Date_Action?: true
    id_Paie?: true
    id_Admin?: true
  }

  export type HISTORIQUE_PAIEMENTMaxAggregateInputType = {
    ID_Hist?: true
    Action?: true
    AncienStatut?: true
    NouveauStatut?: true
    Montant?: true
    Montant_Restant?: true
    Date_Action?: true
    id_Paie?: true
    id_Admin?: true
  }

  export type HISTORIQUE_PAIEMENTCountAggregateInputType = {
    ID_Hist?: true
    Action?: true
    AncienStatut?: true
    NouveauStatut?: true
    Montant?: true
    Montant_Restant?: true
    Date_Action?: true
    id_Paie?: true
    id_Admin?: true
    _all?: true
  }

  export type HISTORIQUE_PAIEMENTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HISTORIQUE_PAIEMENT to aggregate.
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HISTORIQUE_PAIEMENTS to fetch.
     */
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HISTORIQUE_PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HISTORIQUE_PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HISTORIQUE_PAIEMENTS
    **/
    _count?: true | HISTORIQUE_PAIEMENTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HISTORIQUE_PAIEMENTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HISTORIQUE_PAIEMENTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HISTORIQUE_PAIEMENTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HISTORIQUE_PAIEMENTMaxAggregateInputType
  }

  export type GetHISTORIQUE_PAIEMENTAggregateType<T extends HISTORIQUE_PAIEMENTAggregateArgs> = {
        [P in keyof T & keyof AggregateHISTORIQUE_PAIEMENT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHISTORIQUE_PAIEMENT[P]>
      : GetScalarType<T[P], AggregateHISTORIQUE_PAIEMENT[P]>
  }




  export type HISTORIQUE_PAIEMENTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HISTORIQUE_PAIEMENTWhereInput
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithAggregationInput | HISTORIQUE_PAIEMENTOrderByWithAggregationInput[]
    by: HISTORIQUE_PAIEMENTScalarFieldEnum[] | HISTORIQUE_PAIEMENTScalarFieldEnum
    having?: HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HISTORIQUE_PAIEMENTCountAggregateInputType | true
    _avg?: HISTORIQUE_PAIEMENTAvgAggregateInputType
    _sum?: HISTORIQUE_PAIEMENTSumAggregateInputType
    _min?: HISTORIQUE_PAIEMENTMinAggregateInputType
    _max?: HISTORIQUE_PAIEMENTMaxAggregateInputType
  }

  export type HISTORIQUE_PAIEMENTGroupByOutputType = {
    ID_Hist: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant: number | null
    Montant_Restant: number | null
    Date_Action: Date
    id_Paie: number
    id_Admin: number | null
    _count: HISTORIQUE_PAIEMENTCountAggregateOutputType | null
    _avg: HISTORIQUE_PAIEMENTAvgAggregateOutputType | null
    _sum: HISTORIQUE_PAIEMENTSumAggregateOutputType | null
    _min: HISTORIQUE_PAIEMENTMinAggregateOutputType | null
    _max: HISTORIQUE_PAIEMENTMaxAggregateOutputType | null
  }

  type GetHISTORIQUE_PAIEMENTGroupByPayload<T extends HISTORIQUE_PAIEMENTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HISTORIQUE_PAIEMENTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HISTORIQUE_PAIEMENTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HISTORIQUE_PAIEMENTGroupByOutputType[P]>
            : GetScalarType<T[P], HISTORIQUE_PAIEMENTGroupByOutputType[P]>
        }
      >
    >


  export type HISTORIQUE_PAIEMENTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Hist?: boolean
    Action?: boolean
    AncienStatut?: boolean
    NouveauStatut?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Action?: boolean
    id_Paie?: boolean
    id_Admin?: boolean
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }, ExtArgs["result"]["hISTORIQUE_PAIEMENT"]>

  export type HISTORIQUE_PAIEMENTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Hist?: boolean
    Action?: boolean
    AncienStatut?: boolean
    NouveauStatut?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Action?: boolean
    id_Paie?: boolean
    id_Admin?: boolean
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }, ExtArgs["result"]["hISTORIQUE_PAIEMENT"]>

  export type HISTORIQUE_PAIEMENTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Hist?: boolean
    Action?: boolean
    AncienStatut?: boolean
    NouveauStatut?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Action?: boolean
    id_Paie?: boolean
    id_Admin?: boolean
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }, ExtArgs["result"]["hISTORIQUE_PAIEMENT"]>

  export type HISTORIQUE_PAIEMENTSelectScalar = {
    ID_Hist?: boolean
    Action?: boolean
    AncienStatut?: boolean
    NouveauStatut?: boolean
    Montant?: boolean
    Montant_Restant?: boolean
    Date_Action?: boolean
    id_Paie?: boolean
    id_Admin?: boolean
  }

  export type HISTORIQUE_PAIEMENTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Hist" | "Action" | "AncienStatut" | "NouveauStatut" | "Montant" | "Montant_Restant" | "Date_Action" | "id_Paie" | "id_Admin", ExtArgs["result"]["hISTORIQUE_PAIEMENT"]>
  export type HISTORIQUE_PAIEMENTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }
  export type HISTORIQUE_PAIEMENTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }
  export type HISTORIQUE_PAIEMENTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiement?: boolean | PAIEMENTDefaultArgs<ExtArgs>
    admin?: boolean | HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>
  }

  export type $HISTORIQUE_PAIEMENTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HISTORIQUE_PAIEMENT"
    objects: {
      paiement: Prisma.$PAIEMENTPayload<ExtArgs>
      admin: Prisma.$ADMINISTRATEURPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Hist: number
      Action: string
      AncienStatut: $Enums.StatutPaiement
      NouveauStatut: $Enums.StatutPaiement
      Montant: number | null
      Montant_Restant: number | null
      Date_Action: Date
      id_Paie: number
      id_Admin: number | null
    }, ExtArgs["result"]["hISTORIQUE_PAIEMENT"]>
    composites: {}
  }

  type HISTORIQUE_PAIEMENTGetPayload<S extends boolean | null | undefined | HISTORIQUE_PAIEMENTDefaultArgs> = $Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload, S>

  type HISTORIQUE_PAIEMENTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HISTORIQUE_PAIEMENTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HISTORIQUE_PAIEMENTCountAggregateInputType | true
    }

  export interface HISTORIQUE_PAIEMENTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HISTORIQUE_PAIEMENT'], meta: { name: 'HISTORIQUE_PAIEMENT' } }
    /**
     * Find zero or one HISTORIQUE_PAIEMENT that matches the filter.
     * @param {HISTORIQUE_PAIEMENTFindUniqueArgs} args - Arguments to find a HISTORIQUE_PAIEMENT
     * @example
     * // Get one HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HISTORIQUE_PAIEMENTFindUniqueArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTFindUniqueArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HISTORIQUE_PAIEMENT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HISTORIQUE_PAIEMENTFindUniqueOrThrowArgs} args - Arguments to find a HISTORIQUE_PAIEMENT
     * @example
     * // Get one HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HISTORIQUE_PAIEMENTFindUniqueOrThrowArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HISTORIQUE_PAIEMENT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTFindFirstArgs} args - Arguments to find a HISTORIQUE_PAIEMENT
     * @example
     * // Get one HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HISTORIQUE_PAIEMENTFindFirstArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTFindFirstArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HISTORIQUE_PAIEMENT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTFindFirstOrThrowArgs} args - Arguments to find a HISTORIQUE_PAIEMENT
     * @example
     * // Get one HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HISTORIQUE_PAIEMENTFindFirstOrThrowArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTFindFirstOrThrowArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HISTORIQUE_PAIEMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENTS = await prisma.hISTORIQUE_PAIEMENT.findMany()
     * 
     * // Get first 10 HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENTS = await prisma.hISTORIQUE_PAIEMENT.findMany({ take: 10 })
     * 
     * // Only select the `ID_Hist`
     * const hISTORIQUE_PAIEMENTWithID_HistOnly = await prisma.hISTORIQUE_PAIEMENT.findMany({ select: { ID_Hist: true } })
     * 
     */
    findMany<T extends HISTORIQUE_PAIEMENTFindManyArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HISTORIQUE_PAIEMENT.
     * @param {HISTORIQUE_PAIEMENTCreateArgs} args - Arguments to create a HISTORIQUE_PAIEMENT.
     * @example
     * // Create one HISTORIQUE_PAIEMENT
     * const HISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.create({
     *   data: {
     *     // ... data to create a HISTORIQUE_PAIEMENT
     *   }
     * })
     * 
     */
    create<T extends HISTORIQUE_PAIEMENTCreateArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTCreateArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HISTORIQUE_PAIEMENTS.
     * @param {HISTORIQUE_PAIEMENTCreateManyArgs} args - Arguments to create many HISTORIQUE_PAIEMENTS.
     * @example
     * // Create many HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HISTORIQUE_PAIEMENTCreateManyArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HISTORIQUE_PAIEMENTS and returns the data saved in the database.
     * @param {HISTORIQUE_PAIEMENTCreateManyAndReturnArgs} args - Arguments to create many HISTORIQUE_PAIEMENTS.
     * @example
     * // Create many HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HISTORIQUE_PAIEMENTS and only return the `ID_Hist`
     * const hISTORIQUE_PAIEMENTWithID_HistOnly = await prisma.hISTORIQUE_PAIEMENT.createManyAndReturn({
     *   select: { ID_Hist: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HISTORIQUE_PAIEMENTCreateManyAndReturnArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HISTORIQUE_PAIEMENT.
     * @param {HISTORIQUE_PAIEMENTDeleteArgs} args - Arguments to delete one HISTORIQUE_PAIEMENT.
     * @example
     * // Delete one HISTORIQUE_PAIEMENT
     * const HISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.delete({
     *   where: {
     *     // ... filter to delete one HISTORIQUE_PAIEMENT
     *   }
     * })
     * 
     */
    delete<T extends HISTORIQUE_PAIEMENTDeleteArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTDeleteArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HISTORIQUE_PAIEMENT.
     * @param {HISTORIQUE_PAIEMENTUpdateArgs} args - Arguments to update one HISTORIQUE_PAIEMENT.
     * @example
     * // Update one HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HISTORIQUE_PAIEMENTUpdateArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTUpdateArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HISTORIQUE_PAIEMENTS.
     * @param {HISTORIQUE_PAIEMENTDeleteManyArgs} args - Arguments to filter HISTORIQUE_PAIEMENTS to delete.
     * @example
     * // Delete a few HISTORIQUE_PAIEMENTS
     * const { count } = await prisma.hISTORIQUE_PAIEMENT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HISTORIQUE_PAIEMENTDeleteManyArgs>(args?: SelectSubset<T, HISTORIQUE_PAIEMENTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HISTORIQUE_PAIEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HISTORIQUE_PAIEMENTUpdateManyArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HISTORIQUE_PAIEMENTS and returns the data updated in the database.
     * @param {HISTORIQUE_PAIEMENTUpdateManyAndReturnArgs} args - Arguments to update many HISTORIQUE_PAIEMENTS.
     * @example
     * // Update many HISTORIQUE_PAIEMENTS
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HISTORIQUE_PAIEMENTS and only return the `ID_Hist`
     * const hISTORIQUE_PAIEMENTWithID_HistOnly = await prisma.hISTORIQUE_PAIEMENT.updateManyAndReturn({
     *   select: { ID_Hist: true },
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
    updateManyAndReturn<T extends HISTORIQUE_PAIEMENTUpdateManyAndReturnArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HISTORIQUE_PAIEMENT.
     * @param {HISTORIQUE_PAIEMENTUpsertArgs} args - Arguments to update or create a HISTORIQUE_PAIEMENT.
     * @example
     * // Update or create a HISTORIQUE_PAIEMENT
     * const hISTORIQUE_PAIEMENT = await prisma.hISTORIQUE_PAIEMENT.upsert({
     *   create: {
     *     // ... data to create a HISTORIQUE_PAIEMENT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HISTORIQUE_PAIEMENT we want to update
     *   }
     * })
     */
    upsert<T extends HISTORIQUE_PAIEMENTUpsertArgs>(args: SelectSubset<T, HISTORIQUE_PAIEMENTUpsertArgs<ExtArgs>>): Prisma__HISTORIQUE_PAIEMENTClient<$Result.GetResult<Prisma.$HISTORIQUE_PAIEMENTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HISTORIQUE_PAIEMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTCountArgs} args - Arguments to filter HISTORIQUE_PAIEMENTS to count.
     * @example
     * // Count the number of HISTORIQUE_PAIEMENTS
     * const count = await prisma.hISTORIQUE_PAIEMENT.count({
     *   where: {
     *     // ... the filter for the HISTORIQUE_PAIEMENTS we want to count
     *   }
     * })
    **/
    count<T extends HISTORIQUE_PAIEMENTCountArgs>(
      args?: Subset<T, HISTORIQUE_PAIEMENTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HISTORIQUE_PAIEMENTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HISTORIQUE_PAIEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HISTORIQUE_PAIEMENTAggregateArgs>(args: Subset<T, HISTORIQUE_PAIEMENTAggregateArgs>): Prisma.PrismaPromise<GetHISTORIQUE_PAIEMENTAggregateType<T>>

    /**
     * Group by HISTORIQUE_PAIEMENT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HISTORIQUE_PAIEMENTGroupByArgs} args - Group by arguments.
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
      T extends HISTORIQUE_PAIEMENTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HISTORIQUE_PAIEMENTGroupByArgs['orderBy'] }
        : { orderBy?: HISTORIQUE_PAIEMENTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HISTORIQUE_PAIEMENTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHISTORIQUE_PAIEMENTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HISTORIQUE_PAIEMENT model
   */
  readonly fields: HISTORIQUE_PAIEMENTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HISTORIQUE_PAIEMENT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HISTORIQUE_PAIEMENTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paiement<T extends PAIEMENTDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAIEMENTDefaultArgs<ExtArgs>>): Prisma__PAIEMENTClient<$Result.GetResult<Prisma.$PAIEMENTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends HISTORIQUE_PAIEMENT$adminArgs<ExtArgs> = {}>(args?: Subset<T, HISTORIQUE_PAIEMENT$adminArgs<ExtArgs>>): Prisma__ADMINISTRATEURClient<$Result.GetResult<Prisma.$ADMINISTRATEURPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HISTORIQUE_PAIEMENT model
   */
  interface HISTORIQUE_PAIEMENTFieldRefs {
    readonly ID_Hist: FieldRef<"HISTORIQUE_PAIEMENT", 'Int'>
    readonly Action: FieldRef<"HISTORIQUE_PAIEMENT", 'String'>
    readonly AncienStatut: FieldRef<"HISTORIQUE_PAIEMENT", 'StatutPaiement'>
    readonly NouveauStatut: FieldRef<"HISTORIQUE_PAIEMENT", 'StatutPaiement'>
    readonly Montant: FieldRef<"HISTORIQUE_PAIEMENT", 'Float'>
    readonly Montant_Restant: FieldRef<"HISTORIQUE_PAIEMENT", 'Float'>
    readonly Date_Action: FieldRef<"HISTORIQUE_PAIEMENT", 'DateTime'>
    readonly id_Paie: FieldRef<"HISTORIQUE_PAIEMENT", 'Int'>
    readonly id_Admin: FieldRef<"HISTORIQUE_PAIEMENT", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HISTORIQUE_PAIEMENT findUnique
   */
  export type HISTORIQUE_PAIEMENTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which HISTORIQUE_PAIEMENT to fetch.
     */
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
  }

  /**
   * HISTORIQUE_PAIEMENT findUniqueOrThrow
   */
  export type HISTORIQUE_PAIEMENTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which HISTORIQUE_PAIEMENT to fetch.
     */
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
  }

  /**
   * HISTORIQUE_PAIEMENT findFirst
   */
  export type HISTORIQUE_PAIEMENTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which HISTORIQUE_PAIEMENT to fetch.
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HISTORIQUE_PAIEMENTS to fetch.
     */
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HISTORIQUE_PAIEMENTS.
     */
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HISTORIQUE_PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HISTORIQUE_PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HISTORIQUE_PAIEMENTS.
     */
    distinct?: HISTORIQUE_PAIEMENTScalarFieldEnum | HISTORIQUE_PAIEMENTScalarFieldEnum[]
  }

  /**
   * HISTORIQUE_PAIEMENT findFirstOrThrow
   */
  export type HISTORIQUE_PAIEMENTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which HISTORIQUE_PAIEMENT to fetch.
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HISTORIQUE_PAIEMENTS to fetch.
     */
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HISTORIQUE_PAIEMENTS.
     */
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HISTORIQUE_PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HISTORIQUE_PAIEMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HISTORIQUE_PAIEMENTS.
     */
    distinct?: HISTORIQUE_PAIEMENTScalarFieldEnum | HISTORIQUE_PAIEMENTScalarFieldEnum[]
  }

  /**
   * HISTORIQUE_PAIEMENT findMany
   */
  export type HISTORIQUE_PAIEMENTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter, which HISTORIQUE_PAIEMENTS to fetch.
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HISTORIQUE_PAIEMENTS to fetch.
     */
    orderBy?: HISTORIQUE_PAIEMENTOrderByWithRelationInput | HISTORIQUE_PAIEMENTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HISTORIQUE_PAIEMENTS.
     */
    cursor?: HISTORIQUE_PAIEMENTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HISTORIQUE_PAIEMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HISTORIQUE_PAIEMENTS.
     */
    skip?: number
    distinct?: HISTORIQUE_PAIEMENTScalarFieldEnum | HISTORIQUE_PAIEMENTScalarFieldEnum[]
  }

  /**
   * HISTORIQUE_PAIEMENT create
   */
  export type HISTORIQUE_PAIEMENTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * The data needed to create a HISTORIQUE_PAIEMENT.
     */
    data: XOR<HISTORIQUE_PAIEMENTCreateInput, HISTORIQUE_PAIEMENTUncheckedCreateInput>
  }

  /**
   * HISTORIQUE_PAIEMENT createMany
   */
  export type HISTORIQUE_PAIEMENTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HISTORIQUE_PAIEMENTS.
     */
    data: HISTORIQUE_PAIEMENTCreateManyInput | HISTORIQUE_PAIEMENTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HISTORIQUE_PAIEMENT createManyAndReturn
   */
  export type HISTORIQUE_PAIEMENTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * The data used to create many HISTORIQUE_PAIEMENTS.
     */
    data: HISTORIQUE_PAIEMENTCreateManyInput | HISTORIQUE_PAIEMENTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HISTORIQUE_PAIEMENT update
   */
  export type HISTORIQUE_PAIEMENTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * The data needed to update a HISTORIQUE_PAIEMENT.
     */
    data: XOR<HISTORIQUE_PAIEMENTUpdateInput, HISTORIQUE_PAIEMENTUncheckedUpdateInput>
    /**
     * Choose, which HISTORIQUE_PAIEMENT to update.
     */
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
  }

  /**
   * HISTORIQUE_PAIEMENT updateMany
   */
  export type HISTORIQUE_PAIEMENTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HISTORIQUE_PAIEMENTS.
     */
    data: XOR<HISTORIQUE_PAIEMENTUpdateManyMutationInput, HISTORIQUE_PAIEMENTUncheckedUpdateManyInput>
    /**
     * Filter which HISTORIQUE_PAIEMENTS to update
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * Limit how many HISTORIQUE_PAIEMENTS to update.
     */
    limit?: number
  }

  /**
   * HISTORIQUE_PAIEMENT updateManyAndReturn
   */
  export type HISTORIQUE_PAIEMENTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * The data used to update HISTORIQUE_PAIEMENTS.
     */
    data: XOR<HISTORIQUE_PAIEMENTUpdateManyMutationInput, HISTORIQUE_PAIEMENTUncheckedUpdateManyInput>
    /**
     * Filter which HISTORIQUE_PAIEMENTS to update
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * Limit how many HISTORIQUE_PAIEMENTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HISTORIQUE_PAIEMENT upsert
   */
  export type HISTORIQUE_PAIEMENTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * The filter to search for the HISTORIQUE_PAIEMENT to update in case it exists.
     */
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    /**
     * In case the HISTORIQUE_PAIEMENT found by the `where` argument doesn't exist, create a new HISTORIQUE_PAIEMENT with this data.
     */
    create: XOR<HISTORIQUE_PAIEMENTCreateInput, HISTORIQUE_PAIEMENTUncheckedCreateInput>
    /**
     * In case the HISTORIQUE_PAIEMENT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HISTORIQUE_PAIEMENTUpdateInput, HISTORIQUE_PAIEMENTUncheckedUpdateInput>
  }

  /**
   * HISTORIQUE_PAIEMENT delete
   */
  export type HISTORIQUE_PAIEMENTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
    /**
     * Filter which HISTORIQUE_PAIEMENT to delete.
     */
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
  }

  /**
   * HISTORIQUE_PAIEMENT deleteMany
   */
  export type HISTORIQUE_PAIEMENTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HISTORIQUE_PAIEMENTS to delete
     */
    where?: HISTORIQUE_PAIEMENTWhereInput
    /**
     * Limit how many HISTORIQUE_PAIEMENTS to delete.
     */
    limit?: number
  }

  /**
   * HISTORIQUE_PAIEMENT.admin
   */
  export type HISTORIQUE_PAIEMENT$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRATEUR
     */
    select?: ADMINISTRATEURSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRATEUR
     */
    omit?: ADMINISTRATEUROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRATEURInclude<ExtArgs> | null
    where?: ADMINISTRATEURWhereInput
  }

  /**
   * HISTORIQUE_PAIEMENT without action
   */
  export type HISTORIQUE_PAIEMENTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HISTORIQUE_PAIEMENT
     */
    select?: HISTORIQUE_PAIEMENTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HISTORIQUE_PAIEMENT
     */
    omit?: HISTORIQUE_PAIEMENTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HISTORIQUE_PAIEMENTInclude<ExtArgs> | null
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


  export const ADMINISTRATEURScalarFieldEnum: {
    ID_Admin: 'ID_Admin',
    Nom_Admin: 'Nom_Admin',
    Email_Admin: 'Email_Admin',
    MotPass_Admin: 'MotPass_Admin',
    id_Quotas: 'id_Quotas',
    id_Paie: 'id_Paie',
    user_id: 'user_id'
  };

  export type ADMINISTRATEURScalarFieldEnum = (typeof ADMINISTRATEURScalarFieldEnum)[keyof typeof ADMINISTRATEURScalarFieldEnum]


  export const ETUDIANTScalarFieldEnum: {
    ID_Etudiant: 'ID_Etudiant',
    user_id: 'user_id',
    FullName_Et: 'FullName_Et',
    Email_Et: 'Email_Et',
    Annee_Et: 'Annee_Et',
    Dette: 'Dette',
    MotPass_Et: 'MotPass_Et',
    Photo_Et: 'Photo_Et',
    id_Dep: 'id_Dep'
  };

  export type ETUDIANTScalarFieldEnum = (typeof ETUDIANTScalarFieldEnum)[keyof typeof ETUDIANTScalarFieldEnum]


  export const DEPARTEMENTScalarFieldEnum: {
    ID_Dep: 'ID_Dep',
    Nom_Dep: 'Nom_Dep'
  };

  export type DEPARTEMENTScalarFieldEnum = (typeof DEPARTEMENTScalarFieldEnum)[keyof typeof DEPARTEMENTScalarFieldEnum]


  export const ACTESScalarFieldEnum: {
    ID_Actes: 'ID_Actes',
    Desc_Actes: 'Desc_Actes',
    id_Dep: 'id_Dep'
  };

  export type ACTESScalarFieldEnum = (typeof ACTESScalarFieldEnum)[keyof typeof ACTESScalarFieldEnum]


  export const SOUS_ACTESScalarFieldEnum: {
    ID_SActes: 'ID_SActes',
    Desc_SActes: 'Desc_SActes',
    Prix: 'Prix',
    id_Actes: 'id_Actes'
  };

  export type SOUS_ACTESScalarFieldEnum = (typeof SOUS_ACTESScalarFieldEnum)[keyof typeof SOUS_ACTESScalarFieldEnum]


  export const PROFESSEURSScalarFieldEnum: {
    ID_Prof: 'ID_Prof',
    user_id: 'user_id',
    Nom_Prof: 'Nom_Prof',
    Email_Prof: 'Email_Prof',
    MotPass_Prof: 'MotPass_Prof'
  };

  export type PROFESSEURSScalarFieldEnum = (typeof PROFESSEURSScalarFieldEnum)[keyof typeof PROFESSEURSScalarFieldEnum]


  export const QUOTASScalarFieldEnum: {
    ID_Quotas: 'ID_Quotas',
    Annee: 'Annee',
    Nombre: 'Nombre',
    Date_Debut: 'Date_Debut',
    Date_Fin: 'Date_Fin',
    id_Dep: 'id_Dep',
    id_Admin: 'id_Admin'
  };

  export type QUOTASScalarFieldEnum = (typeof QUOTASScalarFieldEnum)[keyof typeof QUOTASScalarFieldEnum]


  export const PAIEMENTScalarFieldEnum: {
    ID_Paie: 'ID_Paie',
    Montant: 'Montant',
    Montant_Restant: 'Montant_Restant',
    Date_Paie: 'Date_Paie',
    Statut_Paie: 'Statut_Paie',
    id_Admin: 'id_Admin',
    id_Etudiant: 'id_Etudiant'
  };

  export type PAIEMENTScalarFieldEnum = (typeof PAIEMENTScalarFieldEnum)[keyof typeof PAIEMENTScalarFieldEnum]


  export const NOTIFICATIONScalarFieldEnum: {
    ID_Notification: 'ID_Notification',
    Message: 'Message',
    Type: 'Type',
    Date_Envoi: 'Date_Envoi',
    Lu: 'Lu',
    id_SActes: 'id_SActes',
    id_Paie: 'id_Paie',
    id_Etudiant: 'id_Etudiant',
    id_Prof: 'id_Prof',
    id_Admin: 'id_Admin',
    id_Realisation: 'id_Realisation'
  };

  export type NOTIFICATIONScalarFieldEnum = (typeof NOTIFICATIONScalarFieldEnum)[keyof typeof NOTIFICATIONScalarFieldEnum]


  export const REALISATIONScalarFieldEnum: {
    ID_Realisation: 'ID_Realisation',
    Date_Realise: 'Date_Realise',
    Note: 'Note',
    Statut_Valide: 'Statut_Valide',
    id_SActes: 'id_SActes',
    id_Etudiant: 'id_Etudiant',
    id_Prof: 'id_Prof',
    id_Paie: 'id_Paie'
  };

  export type REALISATIONScalarFieldEnum = (typeof REALISATIONScalarFieldEnum)[keyof typeof REALISATIONScalarFieldEnum]


  export const HISTORIQUE_PAIEMENTScalarFieldEnum: {
    ID_Hist: 'ID_Hist',
    Action: 'Action',
    AncienStatut: 'AncienStatut',
    NouveauStatut: 'NouveauStatut',
    Montant: 'Montant',
    Montant_Restant: 'Montant_Restant',
    Date_Action: 'Date_Action',
    id_Paie: 'id_Paie',
    id_Admin: 'id_Admin'
  };

  export type HISTORIQUE_PAIEMENTScalarFieldEnum = (typeof HISTORIQUE_PAIEMENTScalarFieldEnum)[keyof typeof HISTORIQUE_PAIEMENTScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatutPaiement'
   */
  export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>
    


  /**
   * Reference to a field of type 'StatutPaiement[]'
   */
  export type ListEnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement[]'>
    


  /**
   * Reference to a field of type 'TypeNotification'
   */
  export type EnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification'>
    


  /**
   * Reference to a field of type 'TypeNotification[]'
   */
  export type ListEnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ADMINISTRATEURWhereInput = {
    AND?: ADMINISTRATEURWhereInput | ADMINISTRATEURWhereInput[]
    OR?: ADMINISTRATEURWhereInput[]
    NOT?: ADMINISTRATEURWhereInput | ADMINISTRATEURWhereInput[]
    ID_Admin?: IntFilter<"ADMINISTRATEUR"> | number
    Nom_Admin?: StringFilter<"ADMINISTRATEUR"> | string
    Email_Admin?: StringFilter<"ADMINISTRATEUR"> | string
    MotPass_Admin?: StringFilter<"ADMINISTRATEUR"> | string
    id_Quotas?: IntNullableFilter<"ADMINISTRATEUR"> | number | null
    id_Paie?: IntNullableFilter<"ADMINISTRATEUR"> | number | null
    user_id?: StringFilter<"ADMINISTRATEUR"> | string
    notifications?: NOTIFICATIONListRelationFilter
    paiements?: PAIEMENTListRelationFilter
    quotas?: QUOTASListRelationFilter
    historique?: HISTORIQUE_PAIEMENTListRelationFilter
  }

  export type ADMINISTRATEUROrderByWithRelationInput = {
    ID_Admin?: SortOrder
    Nom_Admin?: SortOrder
    Email_Admin?: SortOrder
    MotPass_Admin?: SortOrder
    id_Quotas?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    user_id?: SortOrder
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    paiements?: PAIEMENTOrderByRelationAggregateInput
    quotas?: QUOTASOrderByRelationAggregateInput
    historique?: HISTORIQUE_PAIEMENTOrderByRelationAggregateInput
  }

  export type ADMINISTRATEURWhereUniqueInput = Prisma.AtLeast<{
    ID_Admin?: number
    Email_Admin?: string
    user_id?: string
    AND?: ADMINISTRATEURWhereInput | ADMINISTRATEURWhereInput[]
    OR?: ADMINISTRATEURWhereInput[]
    NOT?: ADMINISTRATEURWhereInput | ADMINISTRATEURWhereInput[]
    Nom_Admin?: StringFilter<"ADMINISTRATEUR"> | string
    MotPass_Admin?: StringFilter<"ADMINISTRATEUR"> | string
    id_Quotas?: IntNullableFilter<"ADMINISTRATEUR"> | number | null
    id_Paie?: IntNullableFilter<"ADMINISTRATEUR"> | number | null
    notifications?: NOTIFICATIONListRelationFilter
    paiements?: PAIEMENTListRelationFilter
    quotas?: QUOTASListRelationFilter
    historique?: HISTORIQUE_PAIEMENTListRelationFilter
  }, "ID_Admin" | "Email_Admin" | "user_id">

  export type ADMINISTRATEUROrderByWithAggregationInput = {
    ID_Admin?: SortOrder
    Nom_Admin?: SortOrder
    Email_Admin?: SortOrder
    MotPass_Admin?: SortOrder
    id_Quotas?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: ADMINISTRATEURCountOrderByAggregateInput
    _avg?: ADMINISTRATEURAvgOrderByAggregateInput
    _max?: ADMINISTRATEURMaxOrderByAggregateInput
    _min?: ADMINISTRATEURMinOrderByAggregateInput
    _sum?: ADMINISTRATEURSumOrderByAggregateInput
  }

  export type ADMINISTRATEURScalarWhereWithAggregatesInput = {
    AND?: ADMINISTRATEURScalarWhereWithAggregatesInput | ADMINISTRATEURScalarWhereWithAggregatesInput[]
    OR?: ADMINISTRATEURScalarWhereWithAggregatesInput[]
    NOT?: ADMINISTRATEURScalarWhereWithAggregatesInput | ADMINISTRATEURScalarWhereWithAggregatesInput[]
    ID_Admin?: IntWithAggregatesFilter<"ADMINISTRATEUR"> | number
    Nom_Admin?: StringWithAggregatesFilter<"ADMINISTRATEUR"> | string
    Email_Admin?: StringWithAggregatesFilter<"ADMINISTRATEUR"> | string
    MotPass_Admin?: StringWithAggregatesFilter<"ADMINISTRATEUR"> | string
    id_Quotas?: IntNullableWithAggregatesFilter<"ADMINISTRATEUR"> | number | null
    id_Paie?: IntNullableWithAggregatesFilter<"ADMINISTRATEUR"> | number | null
    user_id?: StringWithAggregatesFilter<"ADMINISTRATEUR"> | string
  }

  export type ETUDIANTWhereInput = {
    AND?: ETUDIANTWhereInput | ETUDIANTWhereInput[]
    OR?: ETUDIANTWhereInput[]
    NOT?: ETUDIANTWhereInput | ETUDIANTWhereInput[]
    ID_Etudiant?: IntFilter<"ETUDIANT"> | number
    user_id?: StringFilter<"ETUDIANT"> | string
    FullName_Et?: StringFilter<"ETUDIANT"> | string
    Email_Et?: StringFilter<"ETUDIANT"> | string
    Annee_Et?: StringFilter<"ETUDIANT"> | string
    Dette?: FloatNullableFilter<"ETUDIANT"> | number | null
    MotPass_Et?: StringFilter<"ETUDIANT"> | string
    Photo_Et?: StringNullableFilter<"ETUDIANT"> | string | null
    id_Dep?: IntFilter<"ETUDIANT"> | number
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    notifications?: NOTIFICATIONListRelationFilter
    paiements?: PAIEMENTListRelationFilter
    realisations?: REALISATIONListRelationFilter
  }

  export type ETUDIANTOrderByWithRelationInput = {
    ID_Etudiant?: SortOrder
    user_id?: SortOrder
    FullName_Et?: SortOrder
    Email_Et?: SortOrder
    Annee_Et?: SortOrder
    Dette?: SortOrderInput | SortOrder
    MotPass_Et?: SortOrder
    Photo_Et?: SortOrderInput | SortOrder
    id_Dep?: SortOrder
    departement?: DEPARTEMENTOrderByWithRelationInput
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    paiements?: PAIEMENTOrderByRelationAggregateInput
    realisations?: REALISATIONOrderByRelationAggregateInput
  }

  export type ETUDIANTWhereUniqueInput = Prisma.AtLeast<{
    ID_Etudiant?: number
    user_id?: string
    Email_Et?: string
    AND?: ETUDIANTWhereInput | ETUDIANTWhereInput[]
    OR?: ETUDIANTWhereInput[]
    NOT?: ETUDIANTWhereInput | ETUDIANTWhereInput[]
    FullName_Et?: StringFilter<"ETUDIANT"> | string
    Annee_Et?: StringFilter<"ETUDIANT"> | string
    Dette?: FloatNullableFilter<"ETUDIANT"> | number | null
    MotPass_Et?: StringFilter<"ETUDIANT"> | string
    Photo_Et?: StringNullableFilter<"ETUDIANT"> | string | null
    id_Dep?: IntFilter<"ETUDIANT"> | number
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    notifications?: NOTIFICATIONListRelationFilter
    paiements?: PAIEMENTListRelationFilter
    realisations?: REALISATIONListRelationFilter
  }, "ID_Etudiant" | "user_id" | "Email_Et">

  export type ETUDIANTOrderByWithAggregationInput = {
    ID_Etudiant?: SortOrder
    user_id?: SortOrder
    FullName_Et?: SortOrder
    Email_Et?: SortOrder
    Annee_Et?: SortOrder
    Dette?: SortOrderInput | SortOrder
    MotPass_Et?: SortOrder
    Photo_Et?: SortOrderInput | SortOrder
    id_Dep?: SortOrder
    _count?: ETUDIANTCountOrderByAggregateInput
    _avg?: ETUDIANTAvgOrderByAggregateInput
    _max?: ETUDIANTMaxOrderByAggregateInput
    _min?: ETUDIANTMinOrderByAggregateInput
    _sum?: ETUDIANTSumOrderByAggregateInput
  }

  export type ETUDIANTScalarWhereWithAggregatesInput = {
    AND?: ETUDIANTScalarWhereWithAggregatesInput | ETUDIANTScalarWhereWithAggregatesInput[]
    OR?: ETUDIANTScalarWhereWithAggregatesInput[]
    NOT?: ETUDIANTScalarWhereWithAggregatesInput | ETUDIANTScalarWhereWithAggregatesInput[]
    ID_Etudiant?: IntWithAggregatesFilter<"ETUDIANT"> | number
    user_id?: StringWithAggregatesFilter<"ETUDIANT"> | string
    FullName_Et?: StringWithAggregatesFilter<"ETUDIANT"> | string
    Email_Et?: StringWithAggregatesFilter<"ETUDIANT"> | string
    Annee_Et?: StringWithAggregatesFilter<"ETUDIANT"> | string
    Dette?: FloatNullableWithAggregatesFilter<"ETUDIANT"> | number | null
    MotPass_Et?: StringWithAggregatesFilter<"ETUDIANT"> | string
    Photo_Et?: StringNullableWithAggregatesFilter<"ETUDIANT"> | string | null
    id_Dep?: IntWithAggregatesFilter<"ETUDIANT"> | number
  }

  export type DEPARTEMENTWhereInput = {
    AND?: DEPARTEMENTWhereInput | DEPARTEMENTWhereInput[]
    OR?: DEPARTEMENTWhereInput[]
    NOT?: DEPARTEMENTWhereInput | DEPARTEMENTWhereInput[]
    ID_Dep?: IntFilter<"DEPARTEMENT"> | number
    Nom_Dep?: StringFilter<"DEPARTEMENT"> | string
    actes?: ACTESListRelationFilter
    etudiants?: ETUDIANTListRelationFilter
    quotas?: QUOTASListRelationFilter
    professeurs?: PROFESSEURSListRelationFilter
  }

  export type DEPARTEMENTOrderByWithRelationInput = {
    ID_Dep?: SortOrder
    Nom_Dep?: SortOrder
    actes?: ACTESOrderByRelationAggregateInput
    etudiants?: ETUDIANTOrderByRelationAggregateInput
    quotas?: QUOTASOrderByRelationAggregateInput
    professeurs?: PROFESSEURSOrderByRelationAggregateInput
  }

  export type DEPARTEMENTWhereUniqueInput = Prisma.AtLeast<{
    ID_Dep?: number
    AND?: DEPARTEMENTWhereInput | DEPARTEMENTWhereInput[]
    OR?: DEPARTEMENTWhereInput[]
    NOT?: DEPARTEMENTWhereInput | DEPARTEMENTWhereInput[]
    Nom_Dep?: StringFilter<"DEPARTEMENT"> | string
    actes?: ACTESListRelationFilter
    etudiants?: ETUDIANTListRelationFilter
    quotas?: QUOTASListRelationFilter
    professeurs?: PROFESSEURSListRelationFilter
  }, "ID_Dep">

  export type DEPARTEMENTOrderByWithAggregationInput = {
    ID_Dep?: SortOrder
    Nom_Dep?: SortOrder
    _count?: DEPARTEMENTCountOrderByAggregateInput
    _avg?: DEPARTEMENTAvgOrderByAggregateInput
    _max?: DEPARTEMENTMaxOrderByAggregateInput
    _min?: DEPARTEMENTMinOrderByAggregateInput
    _sum?: DEPARTEMENTSumOrderByAggregateInput
  }

  export type DEPARTEMENTScalarWhereWithAggregatesInput = {
    AND?: DEPARTEMENTScalarWhereWithAggregatesInput | DEPARTEMENTScalarWhereWithAggregatesInput[]
    OR?: DEPARTEMENTScalarWhereWithAggregatesInput[]
    NOT?: DEPARTEMENTScalarWhereWithAggregatesInput | DEPARTEMENTScalarWhereWithAggregatesInput[]
    ID_Dep?: IntWithAggregatesFilter<"DEPARTEMENT"> | number
    Nom_Dep?: StringWithAggregatesFilter<"DEPARTEMENT"> | string
  }

  export type ACTESWhereInput = {
    AND?: ACTESWhereInput | ACTESWhereInput[]
    OR?: ACTESWhereInput[]
    NOT?: ACTESWhereInput | ACTESWhereInput[]
    ID_Actes?: IntFilter<"ACTES"> | number
    Desc_Actes?: StringFilter<"ACTES"> | string
    id_Dep?: IntFilter<"ACTES"> | number
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    sous_actes?: SOUS_ACTESListRelationFilter
  }

  export type ACTESOrderByWithRelationInput = {
    ID_Actes?: SortOrder
    Desc_Actes?: SortOrder
    id_Dep?: SortOrder
    departement?: DEPARTEMENTOrderByWithRelationInput
    sous_actes?: SOUS_ACTESOrderByRelationAggregateInput
  }

  export type ACTESWhereUniqueInput = Prisma.AtLeast<{
    ID_Actes?: number
    AND?: ACTESWhereInput | ACTESWhereInput[]
    OR?: ACTESWhereInput[]
    NOT?: ACTESWhereInput | ACTESWhereInput[]
    Desc_Actes?: StringFilter<"ACTES"> | string
    id_Dep?: IntFilter<"ACTES"> | number
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    sous_actes?: SOUS_ACTESListRelationFilter
  }, "ID_Actes">

  export type ACTESOrderByWithAggregationInput = {
    ID_Actes?: SortOrder
    Desc_Actes?: SortOrder
    id_Dep?: SortOrder
    _count?: ACTESCountOrderByAggregateInput
    _avg?: ACTESAvgOrderByAggregateInput
    _max?: ACTESMaxOrderByAggregateInput
    _min?: ACTESMinOrderByAggregateInput
    _sum?: ACTESSumOrderByAggregateInput
  }

  export type ACTESScalarWhereWithAggregatesInput = {
    AND?: ACTESScalarWhereWithAggregatesInput | ACTESScalarWhereWithAggregatesInput[]
    OR?: ACTESScalarWhereWithAggregatesInput[]
    NOT?: ACTESScalarWhereWithAggregatesInput | ACTESScalarWhereWithAggregatesInput[]
    ID_Actes?: IntWithAggregatesFilter<"ACTES"> | number
    Desc_Actes?: StringWithAggregatesFilter<"ACTES"> | string
    id_Dep?: IntWithAggregatesFilter<"ACTES"> | number
  }

  export type SOUS_ACTESWhereInput = {
    AND?: SOUS_ACTESWhereInput | SOUS_ACTESWhereInput[]
    OR?: SOUS_ACTESWhereInput[]
    NOT?: SOUS_ACTESWhereInput | SOUS_ACTESWhereInput[]
    ID_SActes?: IntFilter<"SOUS_ACTES"> | number
    Desc_SActes?: StringFilter<"SOUS_ACTES"> | string
    Prix?: FloatFilter<"SOUS_ACTES"> | number
    id_Actes?: IntFilter<"SOUS_ACTES"> | number
    notifications?: NOTIFICATIONListRelationFilter
    realisations?: REALISATIONListRelationFilter
    acte?: XOR<ACTESScalarRelationFilter, ACTESWhereInput>
    quotas?: QUOTASListRelationFilter
  }

  export type SOUS_ACTESOrderByWithRelationInput = {
    ID_SActes?: SortOrder
    Desc_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    realisations?: REALISATIONOrderByRelationAggregateInput
    acte?: ACTESOrderByWithRelationInput
    quotas?: QUOTASOrderByRelationAggregateInput
  }

  export type SOUS_ACTESWhereUniqueInput = Prisma.AtLeast<{
    ID_SActes?: number
    AND?: SOUS_ACTESWhereInput | SOUS_ACTESWhereInput[]
    OR?: SOUS_ACTESWhereInput[]
    NOT?: SOUS_ACTESWhereInput | SOUS_ACTESWhereInput[]
    Desc_SActes?: StringFilter<"SOUS_ACTES"> | string
    Prix?: FloatFilter<"SOUS_ACTES"> | number
    id_Actes?: IntFilter<"SOUS_ACTES"> | number
    notifications?: NOTIFICATIONListRelationFilter
    realisations?: REALISATIONListRelationFilter
    acte?: XOR<ACTESScalarRelationFilter, ACTESWhereInput>
    quotas?: QUOTASListRelationFilter
  }, "ID_SActes">

  export type SOUS_ACTESOrderByWithAggregationInput = {
    ID_SActes?: SortOrder
    Desc_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
    _count?: SOUS_ACTESCountOrderByAggregateInput
    _avg?: SOUS_ACTESAvgOrderByAggregateInput
    _max?: SOUS_ACTESMaxOrderByAggregateInput
    _min?: SOUS_ACTESMinOrderByAggregateInput
    _sum?: SOUS_ACTESSumOrderByAggregateInput
  }

  export type SOUS_ACTESScalarWhereWithAggregatesInput = {
    AND?: SOUS_ACTESScalarWhereWithAggregatesInput | SOUS_ACTESScalarWhereWithAggregatesInput[]
    OR?: SOUS_ACTESScalarWhereWithAggregatesInput[]
    NOT?: SOUS_ACTESScalarWhereWithAggregatesInput | SOUS_ACTESScalarWhereWithAggregatesInput[]
    ID_SActes?: IntWithAggregatesFilter<"SOUS_ACTES"> | number
    Desc_SActes?: StringWithAggregatesFilter<"SOUS_ACTES"> | string
    Prix?: FloatWithAggregatesFilter<"SOUS_ACTES"> | number
    id_Actes?: IntWithAggregatesFilter<"SOUS_ACTES"> | number
  }

  export type PROFESSEURSWhereInput = {
    AND?: PROFESSEURSWhereInput | PROFESSEURSWhereInput[]
    OR?: PROFESSEURSWhereInput[]
    NOT?: PROFESSEURSWhereInput | PROFESSEURSWhereInput[]
    ID_Prof?: IntFilter<"PROFESSEURS"> | number
    user_id?: StringFilter<"PROFESSEURS"> | string
    Nom_Prof?: StringFilter<"PROFESSEURS"> | string
    Email_Prof?: StringFilter<"PROFESSEURS"> | string
    MotPass_Prof?: StringFilter<"PROFESSEURS"> | string
    notifications?: NOTIFICATIONListRelationFilter
    realisations?: REALISATIONListRelationFilter
    departements?: DEPARTEMENTListRelationFilter
  }

  export type PROFESSEURSOrderByWithRelationInput = {
    ID_Prof?: SortOrder
    user_id?: SortOrder
    Nom_Prof?: SortOrder
    Email_Prof?: SortOrder
    MotPass_Prof?: SortOrder
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    realisations?: REALISATIONOrderByRelationAggregateInput
    departements?: DEPARTEMENTOrderByRelationAggregateInput
  }

  export type PROFESSEURSWhereUniqueInput = Prisma.AtLeast<{
    ID_Prof?: number
    user_id?: string
    Email_Prof?: string
    AND?: PROFESSEURSWhereInput | PROFESSEURSWhereInput[]
    OR?: PROFESSEURSWhereInput[]
    NOT?: PROFESSEURSWhereInput | PROFESSEURSWhereInput[]
    Nom_Prof?: StringFilter<"PROFESSEURS"> | string
    MotPass_Prof?: StringFilter<"PROFESSEURS"> | string
    notifications?: NOTIFICATIONListRelationFilter
    realisations?: REALISATIONListRelationFilter
    departements?: DEPARTEMENTListRelationFilter
  }, "ID_Prof" | "user_id" | "Email_Prof">

  export type PROFESSEURSOrderByWithAggregationInput = {
    ID_Prof?: SortOrder
    user_id?: SortOrder
    Nom_Prof?: SortOrder
    Email_Prof?: SortOrder
    MotPass_Prof?: SortOrder
    _count?: PROFESSEURSCountOrderByAggregateInput
    _avg?: PROFESSEURSAvgOrderByAggregateInput
    _max?: PROFESSEURSMaxOrderByAggregateInput
    _min?: PROFESSEURSMinOrderByAggregateInput
    _sum?: PROFESSEURSSumOrderByAggregateInput
  }

  export type PROFESSEURSScalarWhereWithAggregatesInput = {
    AND?: PROFESSEURSScalarWhereWithAggregatesInput | PROFESSEURSScalarWhereWithAggregatesInput[]
    OR?: PROFESSEURSScalarWhereWithAggregatesInput[]
    NOT?: PROFESSEURSScalarWhereWithAggregatesInput | PROFESSEURSScalarWhereWithAggregatesInput[]
    ID_Prof?: IntWithAggregatesFilter<"PROFESSEURS"> | number
    user_id?: StringWithAggregatesFilter<"PROFESSEURS"> | string
    Nom_Prof?: StringWithAggregatesFilter<"PROFESSEURS"> | string
    Email_Prof?: StringWithAggregatesFilter<"PROFESSEURS"> | string
    MotPass_Prof?: StringWithAggregatesFilter<"PROFESSEURS"> | string
  }

  export type QUOTASWhereInput = {
    AND?: QUOTASWhereInput | QUOTASWhereInput[]
    OR?: QUOTASWhereInput[]
    NOT?: QUOTASWhereInput | QUOTASWhereInput[]
    ID_Quotas?: IntFilter<"QUOTAS"> | number
    Annee?: StringFilter<"QUOTAS"> | string
    Nombre?: IntFilter<"QUOTAS"> | number
    Date_Debut?: DateTimeFilter<"QUOTAS"> | Date | string
    Date_Fin?: DateTimeFilter<"QUOTAS"> | Date | string
    id_Dep?: IntFilter<"QUOTAS"> | number
    id_Admin?: IntFilter<"QUOTAS"> | number
    admin?: XOR<ADMINISTRATEURScalarRelationFilter, ADMINISTRATEURWhereInput>
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    sous_actes?: SOUS_ACTESListRelationFilter
  }

  export type QUOTASOrderByWithRelationInput = {
    ID_Quotas?: SortOrder
    Annee?: SortOrder
    Nombre?: SortOrder
    Date_Debut?: SortOrder
    Date_Fin?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
    admin?: ADMINISTRATEUROrderByWithRelationInput
    departement?: DEPARTEMENTOrderByWithRelationInput
    sous_actes?: SOUS_ACTESOrderByRelationAggregateInput
  }

  export type QUOTASWhereUniqueInput = Prisma.AtLeast<{
    ID_Quotas?: number
    AND?: QUOTASWhereInput | QUOTASWhereInput[]
    OR?: QUOTASWhereInput[]
    NOT?: QUOTASWhereInput | QUOTASWhereInput[]
    Annee?: StringFilter<"QUOTAS"> | string
    Nombre?: IntFilter<"QUOTAS"> | number
    Date_Debut?: DateTimeFilter<"QUOTAS"> | Date | string
    Date_Fin?: DateTimeFilter<"QUOTAS"> | Date | string
    id_Dep?: IntFilter<"QUOTAS"> | number
    id_Admin?: IntFilter<"QUOTAS"> | number
    admin?: XOR<ADMINISTRATEURScalarRelationFilter, ADMINISTRATEURWhereInput>
    departement?: XOR<DEPARTEMENTScalarRelationFilter, DEPARTEMENTWhereInput>
    sous_actes?: SOUS_ACTESListRelationFilter
  }, "ID_Quotas">

  export type QUOTASOrderByWithAggregationInput = {
    ID_Quotas?: SortOrder
    Annee?: SortOrder
    Nombre?: SortOrder
    Date_Debut?: SortOrder
    Date_Fin?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
    _count?: QUOTASCountOrderByAggregateInput
    _avg?: QUOTASAvgOrderByAggregateInput
    _max?: QUOTASMaxOrderByAggregateInput
    _min?: QUOTASMinOrderByAggregateInput
    _sum?: QUOTASSumOrderByAggregateInput
  }

  export type QUOTASScalarWhereWithAggregatesInput = {
    AND?: QUOTASScalarWhereWithAggregatesInput | QUOTASScalarWhereWithAggregatesInput[]
    OR?: QUOTASScalarWhereWithAggregatesInput[]
    NOT?: QUOTASScalarWhereWithAggregatesInput | QUOTASScalarWhereWithAggregatesInput[]
    ID_Quotas?: IntWithAggregatesFilter<"QUOTAS"> | number
    Annee?: StringWithAggregatesFilter<"QUOTAS"> | string
    Nombre?: IntWithAggregatesFilter<"QUOTAS"> | number
    Date_Debut?: DateTimeWithAggregatesFilter<"QUOTAS"> | Date | string
    Date_Fin?: DateTimeWithAggregatesFilter<"QUOTAS"> | Date | string
    id_Dep?: IntWithAggregatesFilter<"QUOTAS"> | number
    id_Admin?: IntWithAggregatesFilter<"QUOTAS"> | number
  }

  export type PAIEMENTWhereInput = {
    AND?: PAIEMENTWhereInput | PAIEMENTWhereInput[]
    OR?: PAIEMENTWhereInput[]
    NOT?: PAIEMENTWhereInput | PAIEMENTWhereInput[]
    ID_Paie?: IntFilter<"PAIEMENT"> | number
    Montant?: FloatFilter<"PAIEMENT"> | number
    Montant_Restant?: FloatNullableFilter<"PAIEMENT"> | number | null
    Date_Paie?: DateTimeFilter<"PAIEMENT"> | Date | string
    Statut_Paie?: EnumStatutPaiementFilter<"PAIEMENT"> | $Enums.StatutPaiement
    id_Admin?: IntNullableFilter<"PAIEMENT"> | number | null
    id_Etudiant?: IntFilter<"PAIEMENT"> | number
    notifications?: NOTIFICATIONListRelationFilter
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
    etudiant?: XOR<ETUDIANTScalarRelationFilter, ETUDIANTWhereInput>
    realisations?: REALISATIONListRelationFilter
    historique?: HISTORIQUE_PAIEMENTListRelationFilter
  }

  export type PAIEMENTOrderByWithRelationInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrderInput | SortOrder
    Date_Paie?: SortOrder
    Statut_Paie?: SortOrder
    id_Admin?: SortOrderInput | SortOrder
    id_Etudiant?: SortOrder
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    admin?: ADMINISTRATEUROrderByWithRelationInput
    etudiant?: ETUDIANTOrderByWithRelationInput
    realisations?: REALISATIONOrderByRelationAggregateInput
    historique?: HISTORIQUE_PAIEMENTOrderByRelationAggregateInput
  }

  export type PAIEMENTWhereUniqueInput = Prisma.AtLeast<{
    ID_Paie?: number
    AND?: PAIEMENTWhereInput | PAIEMENTWhereInput[]
    OR?: PAIEMENTWhereInput[]
    NOT?: PAIEMENTWhereInput | PAIEMENTWhereInput[]
    Montant?: FloatFilter<"PAIEMENT"> | number
    Montant_Restant?: FloatNullableFilter<"PAIEMENT"> | number | null
    Date_Paie?: DateTimeFilter<"PAIEMENT"> | Date | string
    Statut_Paie?: EnumStatutPaiementFilter<"PAIEMENT"> | $Enums.StatutPaiement
    id_Admin?: IntNullableFilter<"PAIEMENT"> | number | null
    id_Etudiant?: IntFilter<"PAIEMENT"> | number
    notifications?: NOTIFICATIONListRelationFilter
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
    etudiant?: XOR<ETUDIANTScalarRelationFilter, ETUDIANTWhereInput>
    realisations?: REALISATIONListRelationFilter
    historique?: HISTORIQUE_PAIEMENTListRelationFilter
  }, "ID_Paie">

  export type PAIEMENTOrderByWithAggregationInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrderInput | SortOrder
    Date_Paie?: SortOrder
    Statut_Paie?: SortOrder
    id_Admin?: SortOrderInput | SortOrder
    id_Etudiant?: SortOrder
    _count?: PAIEMENTCountOrderByAggregateInput
    _avg?: PAIEMENTAvgOrderByAggregateInput
    _max?: PAIEMENTMaxOrderByAggregateInput
    _min?: PAIEMENTMinOrderByAggregateInput
    _sum?: PAIEMENTSumOrderByAggregateInput
  }

  export type PAIEMENTScalarWhereWithAggregatesInput = {
    AND?: PAIEMENTScalarWhereWithAggregatesInput | PAIEMENTScalarWhereWithAggregatesInput[]
    OR?: PAIEMENTScalarWhereWithAggregatesInput[]
    NOT?: PAIEMENTScalarWhereWithAggregatesInput | PAIEMENTScalarWhereWithAggregatesInput[]
    ID_Paie?: IntWithAggregatesFilter<"PAIEMENT"> | number
    Montant?: FloatWithAggregatesFilter<"PAIEMENT"> | number
    Montant_Restant?: FloatNullableWithAggregatesFilter<"PAIEMENT"> | number | null
    Date_Paie?: DateTimeWithAggregatesFilter<"PAIEMENT"> | Date | string
    Statut_Paie?: EnumStatutPaiementWithAggregatesFilter<"PAIEMENT"> | $Enums.StatutPaiement
    id_Admin?: IntNullableWithAggregatesFilter<"PAIEMENT"> | number | null
    id_Etudiant?: IntWithAggregatesFilter<"PAIEMENT"> | number
  }

  export type NOTIFICATIONWhereInput = {
    AND?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    OR?: NOTIFICATIONWhereInput[]
    NOT?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    ID_Notification?: IntFilter<"NOTIFICATION"> | number
    Message?: StringFilter<"NOTIFICATION"> | string
    Type?: EnumTypeNotificationFilter<"NOTIFICATION"> | $Enums.TypeNotification
    Date_Envoi?: DateTimeFilter<"NOTIFICATION"> | Date | string
    Lu?: BoolFilter<"NOTIFICATION"> | boolean
    id_SActes?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Paie?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Etudiant?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Prof?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Admin?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Realisation?: IntNullableFilter<"NOTIFICATION"> | number | null
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
    etudiant?: XOR<ETUDIANTNullableScalarRelationFilter, ETUDIANTWhereInput> | null
    paiement?: XOR<PAIEMENTNullableScalarRelationFilter, PAIEMENTWhereInput> | null
    professeur?: XOR<PROFESSEURSNullableScalarRelationFilter, PROFESSEURSWhereInput> | null
    realisation?: XOR<REALISATIONNullableScalarRelationFilter, REALISATIONWhereInput> | null
    sous_acte?: XOR<SOUS_ACTESNullableScalarRelationFilter, SOUS_ACTESWhereInput> | null
  }

  export type NOTIFICATIONOrderByWithRelationInput = {
    ID_Notification?: SortOrder
    Message?: SortOrder
    Type?: SortOrder
    Date_Envoi?: SortOrder
    Lu?: SortOrder
    id_SActes?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    id_Etudiant?: SortOrderInput | SortOrder
    id_Prof?: SortOrderInput | SortOrder
    id_Admin?: SortOrderInput | SortOrder
    id_Realisation?: SortOrderInput | SortOrder
    admin?: ADMINISTRATEUROrderByWithRelationInput
    etudiant?: ETUDIANTOrderByWithRelationInput
    paiement?: PAIEMENTOrderByWithRelationInput
    professeur?: PROFESSEURSOrderByWithRelationInput
    realisation?: REALISATIONOrderByWithRelationInput
    sous_acte?: SOUS_ACTESOrderByWithRelationInput
  }

  export type NOTIFICATIONWhereUniqueInput = Prisma.AtLeast<{
    ID_Notification?: number
    AND?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    OR?: NOTIFICATIONWhereInput[]
    NOT?: NOTIFICATIONWhereInput | NOTIFICATIONWhereInput[]
    Message?: StringFilter<"NOTIFICATION"> | string
    Type?: EnumTypeNotificationFilter<"NOTIFICATION"> | $Enums.TypeNotification
    Date_Envoi?: DateTimeFilter<"NOTIFICATION"> | Date | string
    Lu?: BoolFilter<"NOTIFICATION"> | boolean
    id_SActes?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Paie?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Etudiant?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Prof?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Admin?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Realisation?: IntNullableFilter<"NOTIFICATION"> | number | null
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
    etudiant?: XOR<ETUDIANTNullableScalarRelationFilter, ETUDIANTWhereInput> | null
    paiement?: XOR<PAIEMENTNullableScalarRelationFilter, PAIEMENTWhereInput> | null
    professeur?: XOR<PROFESSEURSNullableScalarRelationFilter, PROFESSEURSWhereInput> | null
    realisation?: XOR<REALISATIONNullableScalarRelationFilter, REALISATIONWhereInput> | null
    sous_acte?: XOR<SOUS_ACTESNullableScalarRelationFilter, SOUS_ACTESWhereInput> | null
  }, "ID_Notification">

  export type NOTIFICATIONOrderByWithAggregationInput = {
    ID_Notification?: SortOrder
    Message?: SortOrder
    Type?: SortOrder
    Date_Envoi?: SortOrder
    Lu?: SortOrder
    id_SActes?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    id_Etudiant?: SortOrderInput | SortOrder
    id_Prof?: SortOrderInput | SortOrder
    id_Admin?: SortOrderInput | SortOrder
    id_Realisation?: SortOrderInput | SortOrder
    _count?: NOTIFICATIONCountOrderByAggregateInput
    _avg?: NOTIFICATIONAvgOrderByAggregateInput
    _max?: NOTIFICATIONMaxOrderByAggregateInput
    _min?: NOTIFICATIONMinOrderByAggregateInput
    _sum?: NOTIFICATIONSumOrderByAggregateInput
  }

  export type NOTIFICATIONScalarWhereWithAggregatesInput = {
    AND?: NOTIFICATIONScalarWhereWithAggregatesInput | NOTIFICATIONScalarWhereWithAggregatesInput[]
    OR?: NOTIFICATIONScalarWhereWithAggregatesInput[]
    NOT?: NOTIFICATIONScalarWhereWithAggregatesInput | NOTIFICATIONScalarWhereWithAggregatesInput[]
    ID_Notification?: IntWithAggregatesFilter<"NOTIFICATION"> | number
    Message?: StringWithAggregatesFilter<"NOTIFICATION"> | string
    Type?: EnumTypeNotificationWithAggregatesFilter<"NOTIFICATION"> | $Enums.TypeNotification
    Date_Envoi?: DateTimeWithAggregatesFilter<"NOTIFICATION"> | Date | string
    Lu?: BoolWithAggregatesFilter<"NOTIFICATION"> | boolean
    id_SActes?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    id_Paie?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    id_Etudiant?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    id_Prof?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    id_Admin?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
    id_Realisation?: IntNullableWithAggregatesFilter<"NOTIFICATION"> | number | null
  }

  export type REALISATIONWhereInput = {
    AND?: REALISATIONWhereInput | REALISATIONWhereInput[]
    OR?: REALISATIONWhereInput[]
    NOT?: REALISATIONWhereInput | REALISATIONWhereInput[]
    ID_Realisation?: IntFilter<"REALISATION"> | number
    Date_Realise?: DateTimeFilter<"REALISATION"> | Date | string
    Note?: FloatNullableFilter<"REALISATION"> | number | null
    Statut_Valide?: BoolFilter<"REALISATION"> | boolean
    id_SActes?: IntFilter<"REALISATION"> | number
    id_Etudiant?: IntFilter<"REALISATION"> | number
    id_Prof?: IntNullableFilter<"REALISATION"> | number | null
    id_Paie?: IntNullableFilter<"REALISATION"> | number | null
    notifications?: NOTIFICATIONListRelationFilter
    etudiant?: XOR<ETUDIANTScalarRelationFilter, ETUDIANTWhereInput>
    paiement?: XOR<PAIEMENTNullableScalarRelationFilter, PAIEMENTWhereInput> | null
    professeur?: XOR<PROFESSEURSNullableScalarRelationFilter, PROFESSEURSWhereInput> | null
    sousActe?: XOR<SOUS_ACTESScalarRelationFilter, SOUS_ACTESWhereInput>
  }

  export type REALISATIONOrderByWithRelationInput = {
    ID_Realisation?: SortOrder
    Date_Realise?: SortOrder
    Note?: SortOrderInput | SortOrder
    Statut_Valide?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    notifications?: NOTIFICATIONOrderByRelationAggregateInput
    etudiant?: ETUDIANTOrderByWithRelationInput
    paiement?: PAIEMENTOrderByWithRelationInput
    professeur?: PROFESSEURSOrderByWithRelationInput
    sousActe?: SOUS_ACTESOrderByWithRelationInput
  }

  export type REALISATIONWhereUniqueInput = Prisma.AtLeast<{
    ID_Realisation?: number
    AND?: REALISATIONWhereInput | REALISATIONWhereInput[]
    OR?: REALISATIONWhereInput[]
    NOT?: REALISATIONWhereInput | REALISATIONWhereInput[]
    Date_Realise?: DateTimeFilter<"REALISATION"> | Date | string
    Note?: FloatNullableFilter<"REALISATION"> | number | null
    Statut_Valide?: BoolFilter<"REALISATION"> | boolean
    id_SActes?: IntFilter<"REALISATION"> | number
    id_Etudiant?: IntFilter<"REALISATION"> | number
    id_Prof?: IntNullableFilter<"REALISATION"> | number | null
    id_Paie?: IntNullableFilter<"REALISATION"> | number | null
    notifications?: NOTIFICATIONListRelationFilter
    etudiant?: XOR<ETUDIANTScalarRelationFilter, ETUDIANTWhereInput>
    paiement?: XOR<PAIEMENTNullableScalarRelationFilter, PAIEMENTWhereInput> | null
    professeur?: XOR<PROFESSEURSNullableScalarRelationFilter, PROFESSEURSWhereInput> | null
    sousActe?: XOR<SOUS_ACTESScalarRelationFilter, SOUS_ACTESWhereInput>
  }, "ID_Realisation">

  export type REALISATIONOrderByWithAggregationInput = {
    ID_Realisation?: SortOrder
    Date_Realise?: SortOrder
    Note?: SortOrderInput | SortOrder
    Statut_Valide?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrderInput | SortOrder
    id_Paie?: SortOrderInput | SortOrder
    _count?: REALISATIONCountOrderByAggregateInput
    _avg?: REALISATIONAvgOrderByAggregateInput
    _max?: REALISATIONMaxOrderByAggregateInput
    _min?: REALISATIONMinOrderByAggregateInput
    _sum?: REALISATIONSumOrderByAggregateInput
  }

  export type REALISATIONScalarWhereWithAggregatesInput = {
    AND?: REALISATIONScalarWhereWithAggregatesInput | REALISATIONScalarWhereWithAggregatesInput[]
    OR?: REALISATIONScalarWhereWithAggregatesInput[]
    NOT?: REALISATIONScalarWhereWithAggregatesInput | REALISATIONScalarWhereWithAggregatesInput[]
    ID_Realisation?: IntWithAggregatesFilter<"REALISATION"> | number
    Date_Realise?: DateTimeWithAggregatesFilter<"REALISATION"> | Date | string
    Note?: FloatNullableWithAggregatesFilter<"REALISATION"> | number | null
    Statut_Valide?: BoolWithAggregatesFilter<"REALISATION"> | boolean
    id_SActes?: IntWithAggregatesFilter<"REALISATION"> | number
    id_Etudiant?: IntWithAggregatesFilter<"REALISATION"> | number
    id_Prof?: IntNullableWithAggregatesFilter<"REALISATION"> | number | null
    id_Paie?: IntNullableWithAggregatesFilter<"REALISATION"> | number | null
  }

  export type HISTORIQUE_PAIEMENTWhereInput = {
    AND?: HISTORIQUE_PAIEMENTWhereInput | HISTORIQUE_PAIEMENTWhereInput[]
    OR?: HISTORIQUE_PAIEMENTWhereInput[]
    NOT?: HISTORIQUE_PAIEMENTWhereInput | HISTORIQUE_PAIEMENTWhereInput[]
    ID_Hist?: IntFilter<"HISTORIQUE_PAIEMENT"> | number
    Action?: StringFilter<"HISTORIQUE_PAIEMENT"> | string
    AncienStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    Montant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Montant_Restant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Date_Action?: DateTimeFilter<"HISTORIQUE_PAIEMENT"> | Date | string
    id_Paie?: IntFilter<"HISTORIQUE_PAIEMENT"> | number
    id_Admin?: IntNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    paiement?: XOR<PAIEMENTScalarRelationFilter, PAIEMENTWhereInput>
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
  }

  export type HISTORIQUE_PAIEMENTOrderByWithRelationInput = {
    ID_Hist?: SortOrder
    Action?: SortOrder
    AncienStatut?: SortOrder
    NouveauStatut?: SortOrder
    Montant?: SortOrderInput | SortOrder
    Montant_Restant?: SortOrderInput | SortOrder
    Date_Action?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrderInput | SortOrder
    paiement?: PAIEMENTOrderByWithRelationInput
    admin?: ADMINISTRATEUROrderByWithRelationInput
  }

  export type HISTORIQUE_PAIEMENTWhereUniqueInput = Prisma.AtLeast<{
    ID_Hist?: number
    AND?: HISTORIQUE_PAIEMENTWhereInput | HISTORIQUE_PAIEMENTWhereInput[]
    OR?: HISTORIQUE_PAIEMENTWhereInput[]
    NOT?: HISTORIQUE_PAIEMENTWhereInput | HISTORIQUE_PAIEMENTWhereInput[]
    Action?: StringFilter<"HISTORIQUE_PAIEMENT"> | string
    AncienStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    Montant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Montant_Restant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Date_Action?: DateTimeFilter<"HISTORIQUE_PAIEMENT"> | Date | string
    id_Paie?: IntFilter<"HISTORIQUE_PAIEMENT"> | number
    id_Admin?: IntNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    paiement?: XOR<PAIEMENTScalarRelationFilter, PAIEMENTWhereInput>
    admin?: XOR<ADMINISTRATEURNullableScalarRelationFilter, ADMINISTRATEURWhereInput> | null
  }, "ID_Hist">

  export type HISTORIQUE_PAIEMENTOrderByWithAggregationInput = {
    ID_Hist?: SortOrder
    Action?: SortOrder
    AncienStatut?: SortOrder
    NouveauStatut?: SortOrder
    Montant?: SortOrderInput | SortOrder
    Montant_Restant?: SortOrderInput | SortOrder
    Date_Action?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrderInput | SortOrder
    _count?: HISTORIQUE_PAIEMENTCountOrderByAggregateInput
    _avg?: HISTORIQUE_PAIEMENTAvgOrderByAggregateInput
    _max?: HISTORIQUE_PAIEMENTMaxOrderByAggregateInput
    _min?: HISTORIQUE_PAIEMENTMinOrderByAggregateInput
    _sum?: HISTORIQUE_PAIEMENTSumOrderByAggregateInput
  }

  export type HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput = {
    AND?: HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput | HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput[]
    OR?: HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput[]
    NOT?: HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput | HISTORIQUE_PAIEMENTScalarWhereWithAggregatesInput[]
    ID_Hist?: IntWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | number
    Action?: StringWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | string
    AncienStatut?: EnumStatutPaiementWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    Montant?: FloatNullableWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Montant_Restant?: FloatNullableWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Date_Action?: DateTimeWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | Date | string
    id_Paie?: IntWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | number
    id_Admin?: IntNullableWithAggregatesFilter<"HISTORIQUE_PAIEMENT"> | number | null
  }

  export type ADMINISTRATEURCreateInput = {
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTCreateNestedManyWithoutAdminInput
    quotas?: QUOTASCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUncheckedCreateInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUpdateInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURUncheckedUpdateInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURCreateManyInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
  }

  export type ADMINISTRATEURUpdateManyMutationInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ADMINISTRATEURUncheckedUpdateManyInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ETUDIANTCreateInput = {
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    departement: DEPARTEMENTCreateNestedOneWithoutEtudiantsInput
    notifications?: NOTIFICATIONCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUncheckedCreateInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    id_Dep: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: DEPARTEMENTUpdateOneRequiredWithoutEtudiantsNestedInput
    notifications?: NOTIFICATIONUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    id_Dep?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTCreateManyInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    id_Dep: number
  }

  export type ETUDIANTUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ETUDIANTUncheckedUpdateManyInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    id_Dep?: IntFieldUpdateOperationsInput | number
  }

  export type DEPARTEMENTCreateInput = {
    Nom_Dep: string
    actes?: ACTESCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTUncheckedCreateInput = {
    ID_Dep?: number
    Nom_Dep: string
    actes?: ACTESUncheckedCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTUncheckedCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSUncheckedCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTUpdateInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUpdateManyWithoutDepartementsNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUncheckedUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUncheckedUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUncheckedUpdateManyWithoutDepartementsNestedInput
  }

  export type DEPARTEMENTCreateManyInput = {
    ID_Dep?: number
    Nom_Dep: string
  }

  export type DEPARTEMENTUpdateManyMutationInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
  }

  export type DEPARTEMENTUncheckedUpdateManyInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
  }

  export type ACTESCreateInput = {
    Desc_Actes: string
    departement: DEPARTEMENTCreateNestedOneWithoutActesInput
    sous_actes?: SOUS_ACTESCreateNestedManyWithoutActeInput
  }

  export type ACTESUncheckedCreateInput = {
    ID_Actes?: number
    Desc_Actes: string
    id_Dep: number
    sous_actes?: SOUS_ACTESUncheckedCreateNestedManyWithoutActeInput
  }

  export type ACTESUpdateInput = {
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    departement?: DEPARTEMENTUpdateOneRequiredWithoutActesNestedInput
    sous_actes?: SOUS_ACTESUpdateManyWithoutActeNestedInput
  }

  export type ACTESUncheckedUpdateInput = {
    ID_Actes?: IntFieldUpdateOperationsInput | number
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    sous_actes?: SOUS_ACTESUncheckedUpdateManyWithoutActeNestedInput
  }

  export type ACTESCreateManyInput = {
    ID_Actes?: number
    Desc_Actes: string
    id_Dep: number
  }

  export type ACTESUpdateManyMutationInput = {
    Desc_Actes?: StringFieldUpdateOperationsInput | string
  }

  export type ACTESUncheckedUpdateManyInput = {
    ID_Actes?: IntFieldUpdateOperationsInput | number
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    id_Dep?: IntFieldUpdateOperationsInput | number
  }

  export type SOUS_ACTESCreateInput = {
    Desc_SActes: string
    Prix: number
    notifications?: NOTIFICATIONCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONCreateNestedManyWithoutSousActeInput
    acte: ACTESCreateNestedOneWithoutSous_actesInput
    quotas?: QUOTASCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESUncheckedCreateInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutSousActeInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESUpdateInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUpdateManyWithoutSousActeNestedInput
    acte?: ACTESUpdateOneRequiredWithoutSous_actesNestedInput
    quotas?: QUOTASUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutSousActeNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESCreateManyInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
  }

  export type SOUS_ACTESUpdateManyMutationInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
  }

  export type SOUS_ACTESUncheckedUpdateManyInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
  }

  export type PROFESSEURSCreateInput = {
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutProfesseurInput
    realisations?: REALISATIONCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSUncheckedCreateInput = {
    ID_Prof?: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutProfesseurInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTUncheckedCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutProfesseurNestedInput
    realisations?: REALISATIONUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUpdateManyWithoutProfesseursNestedInput
  }

  export type PROFESSEURSUncheckedUpdateInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutProfesseurNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUncheckedUpdateManyWithoutProfesseursNestedInput
  }

  export type PROFESSEURSCreateManyInput = {
    ID_Prof?: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
  }

  export type PROFESSEURSUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
  }

  export type PROFESSEURSUncheckedUpdateManyInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
  }

  export type QUOTASCreateInput = {
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    admin: ADMINISTRATEURCreateNestedOneWithoutQuotasInput
    departement: DEPARTEMENTCreateNestedOneWithoutQuotasInput
    sous_actes?: SOUS_ACTESCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASUncheckedCreateInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Dep: number
    id_Admin: number
    sous_actes?: SOUS_ACTESUncheckedCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASUpdateInput = {
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: ADMINISTRATEURUpdateOneRequiredWithoutQuotasNestedInput
    departement?: DEPARTEMENTUpdateOneRequiredWithoutQuotasNestedInput
    sous_actes?: SOUS_ACTESUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    id_Admin?: IntFieldUpdateOperationsInput | number
    sous_actes?: SOUS_ACTESUncheckedUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASCreateManyInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Dep: number
    id_Admin: number
  }

  export type QUOTASUpdateManyMutationInput = {
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QUOTASUncheckedUpdateManyInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    id_Admin?: IntFieldUpdateOperationsInput | number
  }

  export type PAIEMENTCreateInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    notifications?: NOTIFICATIONCreateNestedManyWithoutPaiementInput
    admin?: ADMINISTRATEURCreateNestedOneWithoutPaiementsInput
    etudiant: ETUDIANTCreateNestedOneWithoutPaiementsInput
    realisations?: REALISATIONCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    id_Etudiant: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUpdateInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    notifications?: NOTIFICATIONUpdateManyWithoutPaiementNestedInput
    admin?: ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput
    realisations?: REALISATIONUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTCreateManyInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    id_Etudiant: number
  }

  export type PAIEMENTUpdateManyMutationInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
  }

  export type PAIEMENTUncheckedUpdateManyInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: IntFieldUpdateOperationsInput | number
  }

  export type NOTIFICATIONCreateInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONUpdateInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONCreateManyInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONUpdateManyMutationInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NOTIFICATIONUncheckedUpdateManyInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REALISATIONCreateInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    notifications?: NOTIFICATIONCreateNestedManyWithoutRealisationInput
    etudiant: ETUDIANTCreateNestedOneWithoutRealisationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutRealisationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutRealisationsInput
    sousActe: SOUS_ACTESCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof?: number | null
    id_Paie?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput
  }

  export type REALISATIONUpdateInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NOTIFICATIONUpdateManyWithoutRealisationNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutRealisationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutRealisationsNestedInput
    sousActe?: SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput
  }

  export type REALISATIONCreateManyInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof?: number | null
    id_Paie?: number | null
  }

  export type REALISATIONUpdateManyMutationInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
  }

  export type REALISATIONUncheckedUpdateManyInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HISTORIQUE_PAIEMENTCreateInput = {
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    paiement: PAIEMENTCreateNestedOneWithoutHistoriqueInput
    admin?: ADMINISTRATEURCreateNestedOneWithoutHistoriqueInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedCreateInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Paie: number
    id_Admin?: number | null
  }

  export type HISTORIQUE_PAIEMENTUpdateInput = {
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    paiement?: PAIEMENTUpdateOneRequiredWithoutHistoriqueNestedInput
    admin?: ADMINISTRATEURUpdateOneWithoutHistoriqueNestedInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paie?: IntFieldUpdateOperationsInput | number
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HISTORIQUE_PAIEMENTCreateManyInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Paie: number
    id_Admin?: number | null
  }

  export type HISTORIQUE_PAIEMENTUpdateManyMutationInput = {
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateManyInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paie?: IntFieldUpdateOperationsInput | number
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type NOTIFICATIONListRelationFilter = {
    every?: NOTIFICATIONWhereInput
    some?: NOTIFICATIONWhereInput
    none?: NOTIFICATIONWhereInput
  }

  export type PAIEMENTListRelationFilter = {
    every?: PAIEMENTWhereInput
    some?: PAIEMENTWhereInput
    none?: PAIEMENTWhereInput
  }

  export type QUOTASListRelationFilter = {
    every?: QUOTASWhereInput
    some?: QUOTASWhereInput
    none?: QUOTASWhereInput
  }

  export type HISTORIQUE_PAIEMENTListRelationFilter = {
    every?: HISTORIQUE_PAIEMENTWhereInput
    some?: HISTORIQUE_PAIEMENTWhereInput
    none?: HISTORIQUE_PAIEMENTWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NOTIFICATIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PAIEMENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QUOTASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HISTORIQUE_PAIEMENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ADMINISTRATEURCountOrderByAggregateInput = {
    ID_Admin?: SortOrder
    Nom_Admin?: SortOrder
    Email_Admin?: SortOrder
    MotPass_Admin?: SortOrder
    id_Quotas?: SortOrder
    id_Paie?: SortOrder
    user_id?: SortOrder
  }

  export type ADMINISTRATEURAvgOrderByAggregateInput = {
    ID_Admin?: SortOrder
    id_Quotas?: SortOrder
    id_Paie?: SortOrder
  }

  export type ADMINISTRATEURMaxOrderByAggregateInput = {
    ID_Admin?: SortOrder
    Nom_Admin?: SortOrder
    Email_Admin?: SortOrder
    MotPass_Admin?: SortOrder
    id_Quotas?: SortOrder
    id_Paie?: SortOrder
    user_id?: SortOrder
  }

  export type ADMINISTRATEURMinOrderByAggregateInput = {
    ID_Admin?: SortOrder
    Nom_Admin?: SortOrder
    Email_Admin?: SortOrder
    MotPass_Admin?: SortOrder
    id_Quotas?: SortOrder
    id_Paie?: SortOrder
    user_id?: SortOrder
  }

  export type ADMINISTRATEURSumOrderByAggregateInput = {
    ID_Admin?: SortOrder
    id_Quotas?: SortOrder
    id_Paie?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type DEPARTEMENTScalarRelationFilter = {
    is?: DEPARTEMENTWhereInput
    isNot?: DEPARTEMENTWhereInput
  }

  export type REALISATIONListRelationFilter = {
    every?: REALISATIONWhereInput
    some?: REALISATIONWhereInput
    none?: REALISATIONWhereInput
  }

  export type REALISATIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ETUDIANTCountOrderByAggregateInput = {
    ID_Etudiant?: SortOrder
    user_id?: SortOrder
    FullName_Et?: SortOrder
    Email_Et?: SortOrder
    Annee_Et?: SortOrder
    Dette?: SortOrder
    MotPass_Et?: SortOrder
    Photo_Et?: SortOrder
    id_Dep?: SortOrder
  }

  export type ETUDIANTAvgOrderByAggregateInput = {
    ID_Etudiant?: SortOrder
    Dette?: SortOrder
    id_Dep?: SortOrder
  }

  export type ETUDIANTMaxOrderByAggregateInput = {
    ID_Etudiant?: SortOrder
    user_id?: SortOrder
    FullName_Et?: SortOrder
    Email_Et?: SortOrder
    Annee_Et?: SortOrder
    Dette?: SortOrder
    MotPass_Et?: SortOrder
    Photo_Et?: SortOrder
    id_Dep?: SortOrder
  }

  export type ETUDIANTMinOrderByAggregateInput = {
    ID_Etudiant?: SortOrder
    user_id?: SortOrder
    FullName_Et?: SortOrder
    Email_Et?: SortOrder
    Annee_Et?: SortOrder
    Dette?: SortOrder
    MotPass_Et?: SortOrder
    Photo_Et?: SortOrder
    id_Dep?: SortOrder
  }

  export type ETUDIANTSumOrderByAggregateInput = {
    ID_Etudiant?: SortOrder
    Dette?: SortOrder
    id_Dep?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ACTESListRelationFilter = {
    every?: ACTESWhereInput
    some?: ACTESWhereInput
    none?: ACTESWhereInput
  }

  export type ETUDIANTListRelationFilter = {
    every?: ETUDIANTWhereInput
    some?: ETUDIANTWhereInput
    none?: ETUDIANTWhereInput
  }

  export type PROFESSEURSListRelationFilter = {
    every?: PROFESSEURSWhereInput
    some?: PROFESSEURSWhereInput
    none?: PROFESSEURSWhereInput
  }

  export type ACTESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ETUDIANTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PROFESSEURSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DEPARTEMENTCountOrderByAggregateInput = {
    ID_Dep?: SortOrder
    Nom_Dep?: SortOrder
  }

  export type DEPARTEMENTAvgOrderByAggregateInput = {
    ID_Dep?: SortOrder
  }

  export type DEPARTEMENTMaxOrderByAggregateInput = {
    ID_Dep?: SortOrder
    Nom_Dep?: SortOrder
  }

  export type DEPARTEMENTMinOrderByAggregateInput = {
    ID_Dep?: SortOrder
    Nom_Dep?: SortOrder
  }

  export type DEPARTEMENTSumOrderByAggregateInput = {
    ID_Dep?: SortOrder
  }

  export type SOUS_ACTESListRelationFilter = {
    every?: SOUS_ACTESWhereInput
    some?: SOUS_ACTESWhereInput
    none?: SOUS_ACTESWhereInput
  }

  export type SOUS_ACTESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ACTESCountOrderByAggregateInput = {
    ID_Actes?: SortOrder
    Desc_Actes?: SortOrder
    id_Dep?: SortOrder
  }

  export type ACTESAvgOrderByAggregateInput = {
    ID_Actes?: SortOrder
    id_Dep?: SortOrder
  }

  export type ACTESMaxOrderByAggregateInput = {
    ID_Actes?: SortOrder
    Desc_Actes?: SortOrder
    id_Dep?: SortOrder
  }

  export type ACTESMinOrderByAggregateInput = {
    ID_Actes?: SortOrder
    Desc_Actes?: SortOrder
    id_Dep?: SortOrder
  }

  export type ACTESSumOrderByAggregateInput = {
    ID_Actes?: SortOrder
    id_Dep?: SortOrder
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

  export type ACTESScalarRelationFilter = {
    is?: ACTESWhereInput
    isNot?: ACTESWhereInput
  }

  export type SOUS_ACTESCountOrderByAggregateInput = {
    ID_SActes?: SortOrder
    Desc_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
  }

  export type SOUS_ACTESAvgOrderByAggregateInput = {
    ID_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
  }

  export type SOUS_ACTESMaxOrderByAggregateInput = {
    ID_SActes?: SortOrder
    Desc_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
  }

  export type SOUS_ACTESMinOrderByAggregateInput = {
    ID_SActes?: SortOrder
    Desc_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
  }

  export type SOUS_ACTESSumOrderByAggregateInput = {
    ID_SActes?: SortOrder
    Prix?: SortOrder
    id_Actes?: SortOrder
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

  export type DEPARTEMENTListRelationFilter = {
    every?: DEPARTEMENTWhereInput
    some?: DEPARTEMENTWhereInput
    none?: DEPARTEMENTWhereInput
  }

  export type DEPARTEMENTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PROFESSEURSCountOrderByAggregateInput = {
    ID_Prof?: SortOrder
    user_id?: SortOrder
    Nom_Prof?: SortOrder
    Email_Prof?: SortOrder
    MotPass_Prof?: SortOrder
  }

  export type PROFESSEURSAvgOrderByAggregateInput = {
    ID_Prof?: SortOrder
  }

  export type PROFESSEURSMaxOrderByAggregateInput = {
    ID_Prof?: SortOrder
    user_id?: SortOrder
    Nom_Prof?: SortOrder
    Email_Prof?: SortOrder
    MotPass_Prof?: SortOrder
  }

  export type PROFESSEURSMinOrderByAggregateInput = {
    ID_Prof?: SortOrder
    user_id?: SortOrder
    Nom_Prof?: SortOrder
    Email_Prof?: SortOrder
    MotPass_Prof?: SortOrder
  }

  export type PROFESSEURSSumOrderByAggregateInput = {
    ID_Prof?: SortOrder
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

  export type ADMINISTRATEURScalarRelationFilter = {
    is?: ADMINISTRATEURWhereInput
    isNot?: ADMINISTRATEURWhereInput
  }

  export type QUOTASCountOrderByAggregateInput = {
    ID_Quotas?: SortOrder
    Annee?: SortOrder
    Nombre?: SortOrder
    Date_Debut?: SortOrder
    Date_Fin?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
  }

  export type QUOTASAvgOrderByAggregateInput = {
    ID_Quotas?: SortOrder
    Nombre?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
  }

  export type QUOTASMaxOrderByAggregateInput = {
    ID_Quotas?: SortOrder
    Annee?: SortOrder
    Nombre?: SortOrder
    Date_Debut?: SortOrder
    Date_Fin?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
  }

  export type QUOTASMinOrderByAggregateInput = {
    ID_Quotas?: SortOrder
    Annee?: SortOrder
    Nombre?: SortOrder
    Date_Debut?: SortOrder
    Date_Fin?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
  }

  export type QUOTASSumOrderByAggregateInput = {
    ID_Quotas?: SortOrder
    Nombre?: SortOrder
    id_Dep?: SortOrder
    id_Admin?: SortOrder
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

  export type EnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type ADMINISTRATEURNullableScalarRelationFilter = {
    is?: ADMINISTRATEURWhereInput | null
    isNot?: ADMINISTRATEURWhereInput | null
  }

  export type ETUDIANTScalarRelationFilter = {
    is?: ETUDIANTWhereInput
    isNot?: ETUDIANTWhereInput
  }

  export type PAIEMENTCountOrderByAggregateInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Paie?: SortOrder
    Statut_Paie?: SortOrder
    id_Admin?: SortOrder
    id_Etudiant?: SortOrder
  }

  export type PAIEMENTAvgOrderByAggregateInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    id_Admin?: SortOrder
    id_Etudiant?: SortOrder
  }

  export type PAIEMENTMaxOrderByAggregateInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Paie?: SortOrder
    Statut_Paie?: SortOrder
    id_Admin?: SortOrder
    id_Etudiant?: SortOrder
  }

  export type PAIEMENTMinOrderByAggregateInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Paie?: SortOrder
    Statut_Paie?: SortOrder
    id_Admin?: SortOrder
    id_Etudiant?: SortOrder
  }

  export type PAIEMENTSumOrderByAggregateInput = {
    ID_Paie?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    id_Admin?: SortOrder
    id_Etudiant?: SortOrder
  }

  export type EnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type EnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ETUDIANTNullableScalarRelationFilter = {
    is?: ETUDIANTWhereInput | null
    isNot?: ETUDIANTWhereInput | null
  }

  export type PAIEMENTNullableScalarRelationFilter = {
    is?: PAIEMENTWhereInput | null
    isNot?: PAIEMENTWhereInput | null
  }

  export type PROFESSEURSNullableScalarRelationFilter = {
    is?: PROFESSEURSWhereInput | null
    isNot?: PROFESSEURSWhereInput | null
  }

  export type REALISATIONNullableScalarRelationFilter = {
    is?: REALISATIONWhereInput | null
    isNot?: REALISATIONWhereInput | null
  }

  export type SOUS_ACTESNullableScalarRelationFilter = {
    is?: SOUS_ACTESWhereInput | null
    isNot?: SOUS_ACTESWhereInput | null
  }

  export type NOTIFICATIONCountOrderByAggregateInput = {
    ID_Notification?: SortOrder
    Message?: SortOrder
    Type?: SortOrder
    Date_Envoi?: SortOrder
    Lu?: SortOrder
    id_SActes?: SortOrder
    id_Paie?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Admin?: SortOrder
    id_Realisation?: SortOrder
  }

  export type NOTIFICATIONAvgOrderByAggregateInput = {
    ID_Notification?: SortOrder
    id_SActes?: SortOrder
    id_Paie?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Admin?: SortOrder
    id_Realisation?: SortOrder
  }

  export type NOTIFICATIONMaxOrderByAggregateInput = {
    ID_Notification?: SortOrder
    Message?: SortOrder
    Type?: SortOrder
    Date_Envoi?: SortOrder
    Lu?: SortOrder
    id_SActes?: SortOrder
    id_Paie?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Admin?: SortOrder
    id_Realisation?: SortOrder
  }

  export type NOTIFICATIONMinOrderByAggregateInput = {
    ID_Notification?: SortOrder
    Message?: SortOrder
    Type?: SortOrder
    Date_Envoi?: SortOrder
    Lu?: SortOrder
    id_SActes?: SortOrder
    id_Paie?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Admin?: SortOrder
    id_Realisation?: SortOrder
  }

  export type NOTIFICATIONSumOrderByAggregateInput = {
    ID_Notification?: SortOrder
    id_SActes?: SortOrder
    id_Paie?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Admin?: SortOrder
    id_Realisation?: SortOrder
  }

  export type EnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SOUS_ACTESScalarRelationFilter = {
    is?: SOUS_ACTESWhereInput
    isNot?: SOUS_ACTESWhereInput
  }

  export type REALISATIONCountOrderByAggregateInput = {
    ID_Realisation?: SortOrder
    Date_Realise?: SortOrder
    Note?: SortOrder
    Statut_Valide?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Paie?: SortOrder
  }

  export type REALISATIONAvgOrderByAggregateInput = {
    ID_Realisation?: SortOrder
    Note?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Paie?: SortOrder
  }

  export type REALISATIONMaxOrderByAggregateInput = {
    ID_Realisation?: SortOrder
    Date_Realise?: SortOrder
    Note?: SortOrder
    Statut_Valide?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Paie?: SortOrder
  }

  export type REALISATIONMinOrderByAggregateInput = {
    ID_Realisation?: SortOrder
    Date_Realise?: SortOrder
    Note?: SortOrder
    Statut_Valide?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Paie?: SortOrder
  }

  export type REALISATIONSumOrderByAggregateInput = {
    ID_Realisation?: SortOrder
    Note?: SortOrder
    id_SActes?: SortOrder
    id_Etudiant?: SortOrder
    id_Prof?: SortOrder
    id_Paie?: SortOrder
  }

  export type PAIEMENTScalarRelationFilter = {
    is?: PAIEMENTWhereInput
    isNot?: PAIEMENTWhereInput
  }

  export type HISTORIQUE_PAIEMENTCountOrderByAggregateInput = {
    ID_Hist?: SortOrder
    Action?: SortOrder
    AncienStatut?: SortOrder
    NouveauStatut?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Action?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrder
  }

  export type HISTORIQUE_PAIEMENTAvgOrderByAggregateInput = {
    ID_Hist?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrder
  }

  export type HISTORIQUE_PAIEMENTMaxOrderByAggregateInput = {
    ID_Hist?: SortOrder
    Action?: SortOrder
    AncienStatut?: SortOrder
    NouveauStatut?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Action?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrder
  }

  export type HISTORIQUE_PAIEMENTMinOrderByAggregateInput = {
    ID_Hist?: SortOrder
    Action?: SortOrder
    AncienStatut?: SortOrder
    NouveauStatut?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    Date_Action?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrder
  }

  export type HISTORIQUE_PAIEMENTSumOrderByAggregateInput = {
    ID_Hist?: SortOrder
    Montant?: SortOrder
    Montant_Restant?: SortOrder
    id_Paie?: SortOrder
    id_Admin?: SortOrder
  }

  export type NOTIFICATIONCreateNestedManyWithoutAdminInput = {
    create?: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput> | NOTIFICATIONCreateWithoutAdminInput[] | NOTIFICATIONUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutAdminInput | NOTIFICATIONCreateOrConnectWithoutAdminInput[]
    createMany?: NOTIFICATIONCreateManyAdminInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type PAIEMENTCreateNestedManyWithoutAdminInput = {
    create?: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput> | PAIEMENTCreateWithoutAdminInput[] | PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutAdminInput | PAIEMENTCreateOrConnectWithoutAdminInput[]
    createMany?: PAIEMENTCreateManyAdminInputEnvelope
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
  }

  export type QUOTASCreateNestedManyWithoutAdminInput = {
    create?: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput> | QUOTASCreateWithoutAdminInput[] | QUOTASUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutAdminInput | QUOTASCreateOrConnectWithoutAdminInput[]
    createMany?: QUOTASCreateManyAdminInputEnvelope
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type HISTORIQUE_PAIEMENTCreateNestedManyWithoutAdminInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput> | HISTORIQUE_PAIEMENTCreateWithoutAdminInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyAdminInputEnvelope
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput> | NOTIFICATIONCreateWithoutAdminInput[] | NOTIFICATIONUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutAdminInput | NOTIFICATIONCreateOrConnectWithoutAdminInput[]
    createMany?: NOTIFICATIONCreateManyAdminInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type PAIEMENTUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput> | PAIEMENTCreateWithoutAdminInput[] | PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutAdminInput | PAIEMENTCreateOrConnectWithoutAdminInput[]
    createMany?: PAIEMENTCreateManyAdminInputEnvelope
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
  }

  export type QUOTASUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput> | QUOTASCreateWithoutAdminInput[] | QUOTASUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutAdminInput | QUOTASCreateOrConnectWithoutAdminInput[]
    createMany?: QUOTASCreateManyAdminInputEnvelope
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput> | HISTORIQUE_PAIEMENTCreateWithoutAdminInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyAdminInputEnvelope
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NOTIFICATIONUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput> | NOTIFICATIONCreateWithoutAdminInput[] | NOTIFICATIONUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutAdminInput | NOTIFICATIONCreateOrConnectWithoutAdminInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutAdminInput | NOTIFICATIONUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NOTIFICATIONCreateManyAdminInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutAdminInput | NOTIFICATIONUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutAdminInput | NOTIFICATIONUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type PAIEMENTUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput> | PAIEMENTCreateWithoutAdminInput[] | PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutAdminInput | PAIEMENTCreateOrConnectWithoutAdminInput[]
    upsert?: PAIEMENTUpsertWithWhereUniqueWithoutAdminInput | PAIEMENTUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PAIEMENTCreateManyAdminInputEnvelope
    set?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    disconnect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    delete?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    update?: PAIEMENTUpdateWithWhereUniqueWithoutAdminInput | PAIEMENTUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PAIEMENTUpdateManyWithWhereWithoutAdminInput | PAIEMENTUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
  }

  export type QUOTASUpdateManyWithoutAdminNestedInput = {
    create?: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput> | QUOTASCreateWithoutAdminInput[] | QUOTASUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutAdminInput | QUOTASCreateOrConnectWithoutAdminInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutAdminInput | QUOTASUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: QUOTASCreateManyAdminInputEnvelope
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutAdminInput | QUOTASUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutAdminInput | QUOTASUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type HISTORIQUE_PAIEMENTUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput> | HISTORIQUE_PAIEMENTCreateWithoutAdminInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput[]
    upsert?: HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutAdminInput | HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyAdminInputEnvelope
    set?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    disconnect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    delete?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    update?: HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutAdminInput | HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutAdminInput | HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput> | NOTIFICATIONCreateWithoutAdminInput[] | NOTIFICATIONUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutAdminInput | NOTIFICATIONCreateOrConnectWithoutAdminInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutAdminInput | NOTIFICATIONUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NOTIFICATIONCreateManyAdminInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutAdminInput | NOTIFICATIONUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutAdminInput | NOTIFICATIONUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput> | PAIEMENTCreateWithoutAdminInput[] | PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutAdminInput | PAIEMENTCreateOrConnectWithoutAdminInput[]
    upsert?: PAIEMENTUpsertWithWhereUniqueWithoutAdminInput | PAIEMENTUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PAIEMENTCreateManyAdminInputEnvelope
    set?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    disconnect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    delete?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    update?: PAIEMENTUpdateWithWhereUniqueWithoutAdminInput | PAIEMENTUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PAIEMENTUpdateManyWithWhereWithoutAdminInput | PAIEMENTUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
  }

  export type QUOTASUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput> | QUOTASCreateWithoutAdminInput[] | QUOTASUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutAdminInput | QUOTASCreateOrConnectWithoutAdminInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutAdminInput | QUOTASUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: QUOTASCreateManyAdminInputEnvelope
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutAdminInput | QUOTASUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutAdminInput | QUOTASUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput> | HISTORIQUE_PAIEMENTCreateWithoutAdminInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput[]
    upsert?: HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutAdminInput | HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyAdminInputEnvelope
    set?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    disconnect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    delete?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    update?: HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutAdminInput | HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutAdminInput | HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
  }

  export type DEPARTEMENTCreateNestedOneWithoutEtudiantsInput = {
    create?: XOR<DEPARTEMENTCreateWithoutEtudiantsInput, DEPARTEMENTUncheckedCreateWithoutEtudiantsInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutEtudiantsInput
    connect?: DEPARTEMENTWhereUniqueInput
  }

  export type NOTIFICATIONCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput> | NOTIFICATIONCreateWithoutEtudiantInput[] | NOTIFICATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutEtudiantInput | NOTIFICATIONCreateOrConnectWithoutEtudiantInput[]
    createMany?: NOTIFICATIONCreateManyEtudiantInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type PAIEMENTCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput> | PAIEMENTCreateWithoutEtudiantInput[] | PAIEMENTUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutEtudiantInput | PAIEMENTCreateOrConnectWithoutEtudiantInput[]
    createMany?: PAIEMENTCreateManyEtudiantInputEnvelope
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
  }

  export type REALISATIONCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput> | REALISATIONCreateWithoutEtudiantInput[] | REALISATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutEtudiantInput | REALISATIONCreateOrConnectWithoutEtudiantInput[]
    createMany?: REALISATIONCreateManyEtudiantInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput> | NOTIFICATIONCreateWithoutEtudiantInput[] | NOTIFICATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutEtudiantInput | NOTIFICATIONCreateOrConnectWithoutEtudiantInput[]
    createMany?: NOTIFICATIONCreateManyEtudiantInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type PAIEMENTUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput> | PAIEMENTCreateWithoutEtudiantInput[] | PAIEMENTUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutEtudiantInput | PAIEMENTCreateOrConnectWithoutEtudiantInput[]
    createMany?: PAIEMENTCreateManyEtudiantInputEnvelope
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
  }

  export type REALISATIONUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput> | REALISATIONCreateWithoutEtudiantInput[] | REALISATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutEtudiantInput | REALISATIONCreateOrConnectWithoutEtudiantInput[]
    createMany?: REALISATIONCreateManyEtudiantInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DEPARTEMENTUpdateOneRequiredWithoutEtudiantsNestedInput = {
    create?: XOR<DEPARTEMENTCreateWithoutEtudiantsInput, DEPARTEMENTUncheckedCreateWithoutEtudiantsInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutEtudiantsInput
    upsert?: DEPARTEMENTUpsertWithoutEtudiantsInput
    connect?: DEPARTEMENTWhereUniqueInput
    update?: XOR<XOR<DEPARTEMENTUpdateToOneWithWhereWithoutEtudiantsInput, DEPARTEMENTUpdateWithoutEtudiantsInput>, DEPARTEMENTUncheckedUpdateWithoutEtudiantsInput>
  }

  export type NOTIFICATIONUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput> | NOTIFICATIONCreateWithoutEtudiantInput[] | NOTIFICATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutEtudiantInput | NOTIFICATIONCreateOrConnectWithoutEtudiantInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutEtudiantInput | NOTIFICATIONUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: NOTIFICATIONCreateManyEtudiantInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutEtudiantInput | NOTIFICATIONUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutEtudiantInput | NOTIFICATIONUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type PAIEMENTUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput> | PAIEMENTCreateWithoutEtudiantInput[] | PAIEMENTUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutEtudiantInput | PAIEMENTCreateOrConnectWithoutEtudiantInput[]
    upsert?: PAIEMENTUpsertWithWhereUniqueWithoutEtudiantInput | PAIEMENTUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: PAIEMENTCreateManyEtudiantInputEnvelope
    set?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    disconnect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    delete?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    update?: PAIEMENTUpdateWithWhereUniqueWithoutEtudiantInput | PAIEMENTUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: PAIEMENTUpdateManyWithWhereWithoutEtudiantInput | PAIEMENTUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
  }

  export type REALISATIONUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput> | REALISATIONCreateWithoutEtudiantInput[] | REALISATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutEtudiantInput | REALISATIONCreateOrConnectWithoutEtudiantInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutEtudiantInput | REALISATIONUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: REALISATIONCreateManyEtudiantInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutEtudiantInput | REALISATIONUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutEtudiantInput | REALISATIONUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput> | NOTIFICATIONCreateWithoutEtudiantInput[] | NOTIFICATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutEtudiantInput | NOTIFICATIONCreateOrConnectWithoutEtudiantInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutEtudiantInput | NOTIFICATIONUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: NOTIFICATIONCreateManyEtudiantInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutEtudiantInput | NOTIFICATIONUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutEtudiantInput | NOTIFICATIONUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type PAIEMENTUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput> | PAIEMENTCreateWithoutEtudiantInput[] | PAIEMENTUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutEtudiantInput | PAIEMENTCreateOrConnectWithoutEtudiantInput[]
    upsert?: PAIEMENTUpsertWithWhereUniqueWithoutEtudiantInput | PAIEMENTUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: PAIEMENTCreateManyEtudiantInputEnvelope
    set?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    disconnect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    delete?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    connect?: PAIEMENTWhereUniqueInput | PAIEMENTWhereUniqueInput[]
    update?: PAIEMENTUpdateWithWhereUniqueWithoutEtudiantInput | PAIEMENTUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: PAIEMENTUpdateManyWithWhereWithoutEtudiantInput | PAIEMENTUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
  }

  export type REALISATIONUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput> | REALISATIONCreateWithoutEtudiantInput[] | REALISATIONUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutEtudiantInput | REALISATIONCreateOrConnectWithoutEtudiantInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutEtudiantInput | REALISATIONUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: REALISATIONCreateManyEtudiantInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutEtudiantInput | REALISATIONUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutEtudiantInput | REALISATIONUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type ACTESCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput> | ACTESCreateWithoutDepartementInput[] | ACTESUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ACTESCreateOrConnectWithoutDepartementInput | ACTESCreateOrConnectWithoutDepartementInput[]
    createMany?: ACTESCreateManyDepartementInputEnvelope
    connect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
  }

  export type ETUDIANTCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput> | ETUDIANTCreateWithoutDepartementInput[] | ETUDIANTUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutDepartementInput | ETUDIANTCreateOrConnectWithoutDepartementInput[]
    createMany?: ETUDIANTCreateManyDepartementInputEnvelope
    connect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
  }

  export type QUOTASCreateNestedManyWithoutDepartementInput = {
    create?: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput> | QUOTASCreateWithoutDepartementInput[] | QUOTASUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutDepartementInput | QUOTASCreateOrConnectWithoutDepartementInput[]
    createMany?: QUOTASCreateManyDepartementInputEnvelope
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type PROFESSEURSCreateNestedManyWithoutDepartementsInput = {
    create?: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput> | PROFESSEURSCreateWithoutDepartementsInput[] | PROFESSEURSUncheckedCreateWithoutDepartementsInput[]
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutDepartementsInput | PROFESSEURSCreateOrConnectWithoutDepartementsInput[]
    connect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
  }

  export type ACTESUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput> | ACTESCreateWithoutDepartementInput[] | ACTESUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ACTESCreateOrConnectWithoutDepartementInput | ACTESCreateOrConnectWithoutDepartementInput[]
    createMany?: ACTESCreateManyDepartementInputEnvelope
    connect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
  }

  export type ETUDIANTUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput> | ETUDIANTCreateWithoutDepartementInput[] | ETUDIANTUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutDepartementInput | ETUDIANTCreateOrConnectWithoutDepartementInput[]
    createMany?: ETUDIANTCreateManyDepartementInputEnvelope
    connect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
  }

  export type QUOTASUncheckedCreateNestedManyWithoutDepartementInput = {
    create?: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput> | QUOTASCreateWithoutDepartementInput[] | QUOTASUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutDepartementInput | QUOTASCreateOrConnectWithoutDepartementInput[]
    createMany?: QUOTASCreateManyDepartementInputEnvelope
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type PROFESSEURSUncheckedCreateNestedManyWithoutDepartementsInput = {
    create?: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput> | PROFESSEURSCreateWithoutDepartementsInput[] | PROFESSEURSUncheckedCreateWithoutDepartementsInput[]
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutDepartementsInput | PROFESSEURSCreateOrConnectWithoutDepartementsInput[]
    connect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
  }

  export type ACTESUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput> | ACTESCreateWithoutDepartementInput[] | ACTESUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ACTESCreateOrConnectWithoutDepartementInput | ACTESCreateOrConnectWithoutDepartementInput[]
    upsert?: ACTESUpsertWithWhereUniqueWithoutDepartementInput | ACTESUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ACTESCreateManyDepartementInputEnvelope
    set?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    disconnect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    delete?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    connect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    update?: ACTESUpdateWithWhereUniqueWithoutDepartementInput | ACTESUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ACTESUpdateManyWithWhereWithoutDepartementInput | ACTESUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ACTESScalarWhereInput | ACTESScalarWhereInput[]
  }

  export type ETUDIANTUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput> | ETUDIANTCreateWithoutDepartementInput[] | ETUDIANTUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutDepartementInput | ETUDIANTCreateOrConnectWithoutDepartementInput[]
    upsert?: ETUDIANTUpsertWithWhereUniqueWithoutDepartementInput | ETUDIANTUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ETUDIANTCreateManyDepartementInputEnvelope
    set?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    disconnect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    delete?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    connect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    update?: ETUDIANTUpdateWithWhereUniqueWithoutDepartementInput | ETUDIANTUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ETUDIANTUpdateManyWithWhereWithoutDepartementInput | ETUDIANTUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ETUDIANTScalarWhereInput | ETUDIANTScalarWhereInput[]
  }

  export type QUOTASUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput> | QUOTASCreateWithoutDepartementInput[] | QUOTASUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutDepartementInput | QUOTASCreateOrConnectWithoutDepartementInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutDepartementInput | QUOTASUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: QUOTASCreateManyDepartementInputEnvelope
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutDepartementInput | QUOTASUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutDepartementInput | QUOTASUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type PROFESSEURSUpdateManyWithoutDepartementsNestedInput = {
    create?: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput> | PROFESSEURSCreateWithoutDepartementsInput[] | PROFESSEURSUncheckedCreateWithoutDepartementsInput[]
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutDepartementsInput | PROFESSEURSCreateOrConnectWithoutDepartementsInput[]
    upsert?: PROFESSEURSUpsertWithWhereUniqueWithoutDepartementsInput | PROFESSEURSUpsertWithWhereUniqueWithoutDepartementsInput[]
    set?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    disconnect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    delete?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    connect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    update?: PROFESSEURSUpdateWithWhereUniqueWithoutDepartementsInput | PROFESSEURSUpdateWithWhereUniqueWithoutDepartementsInput[]
    updateMany?: PROFESSEURSUpdateManyWithWhereWithoutDepartementsInput | PROFESSEURSUpdateManyWithWhereWithoutDepartementsInput[]
    deleteMany?: PROFESSEURSScalarWhereInput | PROFESSEURSScalarWhereInput[]
  }

  export type ACTESUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput> | ACTESCreateWithoutDepartementInput[] | ACTESUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ACTESCreateOrConnectWithoutDepartementInput | ACTESCreateOrConnectWithoutDepartementInput[]
    upsert?: ACTESUpsertWithWhereUniqueWithoutDepartementInput | ACTESUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ACTESCreateManyDepartementInputEnvelope
    set?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    disconnect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    delete?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    connect?: ACTESWhereUniqueInput | ACTESWhereUniqueInput[]
    update?: ACTESUpdateWithWhereUniqueWithoutDepartementInput | ACTESUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ACTESUpdateManyWithWhereWithoutDepartementInput | ACTESUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ACTESScalarWhereInput | ACTESScalarWhereInput[]
  }

  export type ETUDIANTUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput> | ETUDIANTCreateWithoutDepartementInput[] | ETUDIANTUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutDepartementInput | ETUDIANTCreateOrConnectWithoutDepartementInput[]
    upsert?: ETUDIANTUpsertWithWhereUniqueWithoutDepartementInput | ETUDIANTUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: ETUDIANTCreateManyDepartementInputEnvelope
    set?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    disconnect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    delete?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    connect?: ETUDIANTWhereUniqueInput | ETUDIANTWhereUniqueInput[]
    update?: ETUDIANTUpdateWithWhereUniqueWithoutDepartementInput | ETUDIANTUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: ETUDIANTUpdateManyWithWhereWithoutDepartementInput | ETUDIANTUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: ETUDIANTScalarWhereInput | ETUDIANTScalarWhereInput[]
  }

  export type QUOTASUncheckedUpdateManyWithoutDepartementNestedInput = {
    create?: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput> | QUOTASCreateWithoutDepartementInput[] | QUOTASUncheckedCreateWithoutDepartementInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutDepartementInput | QUOTASCreateOrConnectWithoutDepartementInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutDepartementInput | QUOTASUpsertWithWhereUniqueWithoutDepartementInput[]
    createMany?: QUOTASCreateManyDepartementInputEnvelope
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutDepartementInput | QUOTASUpdateWithWhereUniqueWithoutDepartementInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutDepartementInput | QUOTASUpdateManyWithWhereWithoutDepartementInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type PROFESSEURSUncheckedUpdateManyWithoutDepartementsNestedInput = {
    create?: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput> | PROFESSEURSCreateWithoutDepartementsInput[] | PROFESSEURSUncheckedCreateWithoutDepartementsInput[]
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutDepartementsInput | PROFESSEURSCreateOrConnectWithoutDepartementsInput[]
    upsert?: PROFESSEURSUpsertWithWhereUniqueWithoutDepartementsInput | PROFESSEURSUpsertWithWhereUniqueWithoutDepartementsInput[]
    set?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    disconnect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    delete?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    connect?: PROFESSEURSWhereUniqueInput | PROFESSEURSWhereUniqueInput[]
    update?: PROFESSEURSUpdateWithWhereUniqueWithoutDepartementsInput | PROFESSEURSUpdateWithWhereUniqueWithoutDepartementsInput[]
    updateMany?: PROFESSEURSUpdateManyWithWhereWithoutDepartementsInput | PROFESSEURSUpdateManyWithWhereWithoutDepartementsInput[]
    deleteMany?: PROFESSEURSScalarWhereInput | PROFESSEURSScalarWhereInput[]
  }

  export type DEPARTEMENTCreateNestedOneWithoutActesInput = {
    create?: XOR<DEPARTEMENTCreateWithoutActesInput, DEPARTEMENTUncheckedCreateWithoutActesInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutActesInput
    connect?: DEPARTEMENTWhereUniqueInput
  }

  export type SOUS_ACTESCreateNestedManyWithoutActeInput = {
    create?: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput> | SOUS_ACTESCreateWithoutActeInput[] | SOUS_ACTESUncheckedCreateWithoutActeInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutActeInput | SOUS_ACTESCreateOrConnectWithoutActeInput[]
    createMany?: SOUS_ACTESCreateManyActeInputEnvelope
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
  }

  export type SOUS_ACTESUncheckedCreateNestedManyWithoutActeInput = {
    create?: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput> | SOUS_ACTESCreateWithoutActeInput[] | SOUS_ACTESUncheckedCreateWithoutActeInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutActeInput | SOUS_ACTESCreateOrConnectWithoutActeInput[]
    createMany?: SOUS_ACTESCreateManyActeInputEnvelope
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
  }

  export type DEPARTEMENTUpdateOneRequiredWithoutActesNestedInput = {
    create?: XOR<DEPARTEMENTCreateWithoutActesInput, DEPARTEMENTUncheckedCreateWithoutActesInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutActesInput
    upsert?: DEPARTEMENTUpsertWithoutActesInput
    connect?: DEPARTEMENTWhereUniqueInput
    update?: XOR<XOR<DEPARTEMENTUpdateToOneWithWhereWithoutActesInput, DEPARTEMENTUpdateWithoutActesInput>, DEPARTEMENTUncheckedUpdateWithoutActesInput>
  }

  export type SOUS_ACTESUpdateManyWithoutActeNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput> | SOUS_ACTESCreateWithoutActeInput[] | SOUS_ACTESUncheckedCreateWithoutActeInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutActeInput | SOUS_ACTESCreateOrConnectWithoutActeInput[]
    upsert?: SOUS_ACTESUpsertWithWhereUniqueWithoutActeInput | SOUS_ACTESUpsertWithWhereUniqueWithoutActeInput[]
    createMany?: SOUS_ACTESCreateManyActeInputEnvelope
    set?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    disconnect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    delete?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    update?: SOUS_ACTESUpdateWithWhereUniqueWithoutActeInput | SOUS_ACTESUpdateWithWhereUniqueWithoutActeInput[]
    updateMany?: SOUS_ACTESUpdateManyWithWhereWithoutActeInput | SOUS_ACTESUpdateManyWithWhereWithoutActeInput[]
    deleteMany?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
  }

  export type SOUS_ACTESUncheckedUpdateManyWithoutActeNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput> | SOUS_ACTESCreateWithoutActeInput[] | SOUS_ACTESUncheckedCreateWithoutActeInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutActeInput | SOUS_ACTESCreateOrConnectWithoutActeInput[]
    upsert?: SOUS_ACTESUpsertWithWhereUniqueWithoutActeInput | SOUS_ACTESUpsertWithWhereUniqueWithoutActeInput[]
    createMany?: SOUS_ACTESCreateManyActeInputEnvelope
    set?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    disconnect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    delete?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    update?: SOUS_ACTESUpdateWithWhereUniqueWithoutActeInput | SOUS_ACTESUpdateWithWhereUniqueWithoutActeInput[]
    updateMany?: SOUS_ACTESUpdateManyWithWhereWithoutActeInput | SOUS_ACTESUpdateManyWithWhereWithoutActeInput[]
    deleteMany?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
  }

  export type NOTIFICATIONCreateNestedManyWithoutSous_acteInput = {
    create?: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput> | NOTIFICATIONCreateWithoutSous_acteInput[] | NOTIFICATIONUncheckedCreateWithoutSous_acteInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutSous_acteInput | NOTIFICATIONCreateOrConnectWithoutSous_acteInput[]
    createMany?: NOTIFICATIONCreateManySous_acteInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type REALISATIONCreateNestedManyWithoutSousActeInput = {
    create?: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput> | REALISATIONCreateWithoutSousActeInput[] | REALISATIONUncheckedCreateWithoutSousActeInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutSousActeInput | REALISATIONCreateOrConnectWithoutSousActeInput[]
    createMany?: REALISATIONCreateManySousActeInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type ACTESCreateNestedOneWithoutSous_actesInput = {
    create?: XOR<ACTESCreateWithoutSous_actesInput, ACTESUncheckedCreateWithoutSous_actesInput>
    connectOrCreate?: ACTESCreateOrConnectWithoutSous_actesInput
    connect?: ACTESWhereUniqueInput
  }

  export type QUOTASCreateNestedManyWithoutSous_actesInput = {
    create?: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput> | QUOTASCreateWithoutSous_actesInput[] | QUOTASUncheckedCreateWithoutSous_actesInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutSous_actesInput | QUOTASCreateOrConnectWithoutSous_actesInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutSous_acteInput = {
    create?: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput> | NOTIFICATIONCreateWithoutSous_acteInput[] | NOTIFICATIONUncheckedCreateWithoutSous_acteInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutSous_acteInput | NOTIFICATIONCreateOrConnectWithoutSous_acteInput[]
    createMany?: NOTIFICATIONCreateManySous_acteInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type REALISATIONUncheckedCreateNestedManyWithoutSousActeInput = {
    create?: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput> | REALISATIONCreateWithoutSousActeInput[] | REALISATIONUncheckedCreateWithoutSousActeInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutSousActeInput | REALISATIONCreateOrConnectWithoutSousActeInput[]
    createMany?: REALISATIONCreateManySousActeInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type QUOTASUncheckedCreateNestedManyWithoutSous_actesInput = {
    create?: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput> | QUOTASCreateWithoutSous_actesInput[] | QUOTASUncheckedCreateWithoutSous_actesInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutSous_actesInput | QUOTASCreateOrConnectWithoutSous_actesInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NOTIFICATIONUpdateManyWithoutSous_acteNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput> | NOTIFICATIONCreateWithoutSous_acteInput[] | NOTIFICATIONUncheckedCreateWithoutSous_acteInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutSous_acteInput | NOTIFICATIONCreateOrConnectWithoutSous_acteInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutSous_acteInput | NOTIFICATIONUpsertWithWhereUniqueWithoutSous_acteInput[]
    createMany?: NOTIFICATIONCreateManySous_acteInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutSous_acteInput | NOTIFICATIONUpdateWithWhereUniqueWithoutSous_acteInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutSous_acteInput | NOTIFICATIONUpdateManyWithWhereWithoutSous_acteInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type REALISATIONUpdateManyWithoutSousActeNestedInput = {
    create?: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput> | REALISATIONCreateWithoutSousActeInput[] | REALISATIONUncheckedCreateWithoutSousActeInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutSousActeInput | REALISATIONCreateOrConnectWithoutSousActeInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutSousActeInput | REALISATIONUpsertWithWhereUniqueWithoutSousActeInput[]
    createMany?: REALISATIONCreateManySousActeInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutSousActeInput | REALISATIONUpdateWithWhereUniqueWithoutSousActeInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutSousActeInput | REALISATIONUpdateManyWithWhereWithoutSousActeInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type ACTESUpdateOneRequiredWithoutSous_actesNestedInput = {
    create?: XOR<ACTESCreateWithoutSous_actesInput, ACTESUncheckedCreateWithoutSous_actesInput>
    connectOrCreate?: ACTESCreateOrConnectWithoutSous_actesInput
    upsert?: ACTESUpsertWithoutSous_actesInput
    connect?: ACTESWhereUniqueInput
    update?: XOR<XOR<ACTESUpdateToOneWithWhereWithoutSous_actesInput, ACTESUpdateWithoutSous_actesInput>, ACTESUncheckedUpdateWithoutSous_actesInput>
  }

  export type QUOTASUpdateManyWithoutSous_actesNestedInput = {
    create?: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput> | QUOTASCreateWithoutSous_actesInput[] | QUOTASUncheckedCreateWithoutSous_actesInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutSous_actesInput | QUOTASCreateOrConnectWithoutSous_actesInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutSous_actesInput | QUOTASUpsertWithWhereUniqueWithoutSous_actesInput[]
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutSous_actesInput | QUOTASUpdateWithWhereUniqueWithoutSous_actesInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutSous_actesInput | QUOTASUpdateManyWithWhereWithoutSous_actesInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutSous_acteNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput> | NOTIFICATIONCreateWithoutSous_acteInput[] | NOTIFICATIONUncheckedCreateWithoutSous_acteInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutSous_acteInput | NOTIFICATIONCreateOrConnectWithoutSous_acteInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutSous_acteInput | NOTIFICATIONUpsertWithWhereUniqueWithoutSous_acteInput[]
    createMany?: NOTIFICATIONCreateManySous_acteInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutSous_acteInput | NOTIFICATIONUpdateWithWhereUniqueWithoutSous_acteInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutSous_acteInput | NOTIFICATIONUpdateManyWithWhereWithoutSous_acteInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type REALISATIONUncheckedUpdateManyWithoutSousActeNestedInput = {
    create?: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput> | REALISATIONCreateWithoutSousActeInput[] | REALISATIONUncheckedCreateWithoutSousActeInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutSousActeInput | REALISATIONCreateOrConnectWithoutSousActeInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutSousActeInput | REALISATIONUpsertWithWhereUniqueWithoutSousActeInput[]
    createMany?: REALISATIONCreateManySousActeInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutSousActeInput | REALISATIONUpdateWithWhereUniqueWithoutSousActeInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutSousActeInput | REALISATIONUpdateManyWithWhereWithoutSousActeInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type QUOTASUncheckedUpdateManyWithoutSous_actesNestedInput = {
    create?: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput> | QUOTASCreateWithoutSous_actesInput[] | QUOTASUncheckedCreateWithoutSous_actesInput[]
    connectOrCreate?: QUOTASCreateOrConnectWithoutSous_actesInput | QUOTASCreateOrConnectWithoutSous_actesInput[]
    upsert?: QUOTASUpsertWithWhereUniqueWithoutSous_actesInput | QUOTASUpsertWithWhereUniqueWithoutSous_actesInput[]
    set?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    disconnect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    delete?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    connect?: QUOTASWhereUniqueInput | QUOTASWhereUniqueInput[]
    update?: QUOTASUpdateWithWhereUniqueWithoutSous_actesInput | QUOTASUpdateWithWhereUniqueWithoutSous_actesInput[]
    updateMany?: QUOTASUpdateManyWithWhereWithoutSous_actesInput | QUOTASUpdateManyWithWhereWithoutSous_actesInput[]
    deleteMany?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
  }

  export type NOTIFICATIONCreateNestedManyWithoutProfesseurInput = {
    create?: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput> | NOTIFICATIONCreateWithoutProfesseurInput[] | NOTIFICATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutProfesseurInput | NOTIFICATIONCreateOrConnectWithoutProfesseurInput[]
    createMany?: NOTIFICATIONCreateManyProfesseurInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type REALISATIONCreateNestedManyWithoutProfesseurInput = {
    create?: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput> | REALISATIONCreateWithoutProfesseurInput[] | REALISATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutProfesseurInput | REALISATIONCreateOrConnectWithoutProfesseurInput[]
    createMany?: REALISATIONCreateManyProfesseurInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type DEPARTEMENTCreateNestedManyWithoutProfesseursInput = {
    create?: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput> | DEPARTEMENTCreateWithoutProfesseursInput[] | DEPARTEMENTUncheckedCreateWithoutProfesseursInput[]
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutProfesseursInput | DEPARTEMENTCreateOrConnectWithoutProfesseursInput[]
    connect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput> | NOTIFICATIONCreateWithoutProfesseurInput[] | NOTIFICATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutProfesseurInput | NOTIFICATIONCreateOrConnectWithoutProfesseurInput[]
    createMany?: NOTIFICATIONCreateManyProfesseurInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type REALISATIONUncheckedCreateNestedManyWithoutProfesseurInput = {
    create?: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput> | REALISATIONCreateWithoutProfesseurInput[] | REALISATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutProfesseurInput | REALISATIONCreateOrConnectWithoutProfesseurInput[]
    createMany?: REALISATIONCreateManyProfesseurInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type DEPARTEMENTUncheckedCreateNestedManyWithoutProfesseursInput = {
    create?: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput> | DEPARTEMENTCreateWithoutProfesseursInput[] | DEPARTEMENTUncheckedCreateWithoutProfesseursInput[]
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutProfesseursInput | DEPARTEMENTCreateOrConnectWithoutProfesseursInput[]
    connect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
  }

  export type NOTIFICATIONUpdateManyWithoutProfesseurNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput> | NOTIFICATIONCreateWithoutProfesseurInput[] | NOTIFICATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutProfesseurInput | NOTIFICATIONCreateOrConnectWithoutProfesseurInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutProfesseurInput | NOTIFICATIONUpsertWithWhereUniqueWithoutProfesseurInput[]
    createMany?: NOTIFICATIONCreateManyProfesseurInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutProfesseurInput | NOTIFICATIONUpdateWithWhereUniqueWithoutProfesseurInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutProfesseurInput | NOTIFICATIONUpdateManyWithWhereWithoutProfesseurInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type REALISATIONUpdateManyWithoutProfesseurNestedInput = {
    create?: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput> | REALISATIONCreateWithoutProfesseurInput[] | REALISATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutProfesseurInput | REALISATIONCreateOrConnectWithoutProfesseurInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutProfesseurInput | REALISATIONUpsertWithWhereUniqueWithoutProfesseurInput[]
    createMany?: REALISATIONCreateManyProfesseurInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutProfesseurInput | REALISATIONUpdateWithWhereUniqueWithoutProfesseurInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutProfesseurInput | REALISATIONUpdateManyWithWhereWithoutProfesseurInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type DEPARTEMENTUpdateManyWithoutProfesseursNestedInput = {
    create?: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput> | DEPARTEMENTCreateWithoutProfesseursInput[] | DEPARTEMENTUncheckedCreateWithoutProfesseursInput[]
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutProfesseursInput | DEPARTEMENTCreateOrConnectWithoutProfesseursInput[]
    upsert?: DEPARTEMENTUpsertWithWhereUniqueWithoutProfesseursInput | DEPARTEMENTUpsertWithWhereUniqueWithoutProfesseursInput[]
    set?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    disconnect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    delete?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    connect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    update?: DEPARTEMENTUpdateWithWhereUniqueWithoutProfesseursInput | DEPARTEMENTUpdateWithWhereUniqueWithoutProfesseursInput[]
    updateMany?: DEPARTEMENTUpdateManyWithWhereWithoutProfesseursInput | DEPARTEMENTUpdateManyWithWhereWithoutProfesseursInput[]
    deleteMany?: DEPARTEMENTScalarWhereInput | DEPARTEMENTScalarWhereInput[]
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput> | NOTIFICATIONCreateWithoutProfesseurInput[] | NOTIFICATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutProfesseurInput | NOTIFICATIONCreateOrConnectWithoutProfesseurInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutProfesseurInput | NOTIFICATIONUpsertWithWhereUniqueWithoutProfesseurInput[]
    createMany?: NOTIFICATIONCreateManyProfesseurInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutProfesseurInput | NOTIFICATIONUpdateWithWhereUniqueWithoutProfesseurInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutProfesseurInput | NOTIFICATIONUpdateManyWithWhereWithoutProfesseurInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type REALISATIONUncheckedUpdateManyWithoutProfesseurNestedInput = {
    create?: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput> | REALISATIONCreateWithoutProfesseurInput[] | REALISATIONUncheckedCreateWithoutProfesseurInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutProfesseurInput | REALISATIONCreateOrConnectWithoutProfesseurInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutProfesseurInput | REALISATIONUpsertWithWhereUniqueWithoutProfesseurInput[]
    createMany?: REALISATIONCreateManyProfesseurInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutProfesseurInput | REALISATIONUpdateWithWhereUniqueWithoutProfesseurInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutProfesseurInput | REALISATIONUpdateManyWithWhereWithoutProfesseurInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type DEPARTEMENTUncheckedUpdateManyWithoutProfesseursNestedInput = {
    create?: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput> | DEPARTEMENTCreateWithoutProfesseursInput[] | DEPARTEMENTUncheckedCreateWithoutProfesseursInput[]
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutProfesseursInput | DEPARTEMENTCreateOrConnectWithoutProfesseursInput[]
    upsert?: DEPARTEMENTUpsertWithWhereUniqueWithoutProfesseursInput | DEPARTEMENTUpsertWithWhereUniqueWithoutProfesseursInput[]
    set?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    disconnect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    delete?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    connect?: DEPARTEMENTWhereUniqueInput | DEPARTEMENTWhereUniqueInput[]
    update?: DEPARTEMENTUpdateWithWhereUniqueWithoutProfesseursInput | DEPARTEMENTUpdateWithWhereUniqueWithoutProfesseursInput[]
    updateMany?: DEPARTEMENTUpdateManyWithWhereWithoutProfesseursInput | DEPARTEMENTUpdateManyWithWhereWithoutProfesseursInput[]
    deleteMany?: DEPARTEMENTScalarWhereInput | DEPARTEMENTScalarWhereInput[]
  }

  export type ADMINISTRATEURCreateNestedOneWithoutQuotasInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutQuotasInput, ADMINISTRATEURUncheckedCreateWithoutQuotasInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutQuotasInput
    connect?: ADMINISTRATEURWhereUniqueInput
  }

  export type DEPARTEMENTCreateNestedOneWithoutQuotasInput = {
    create?: XOR<DEPARTEMENTCreateWithoutQuotasInput, DEPARTEMENTUncheckedCreateWithoutQuotasInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutQuotasInput
    connect?: DEPARTEMENTWhereUniqueInput
  }

  export type SOUS_ACTESCreateNestedManyWithoutQuotasInput = {
    create?: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput> | SOUS_ACTESCreateWithoutQuotasInput[] | SOUS_ACTESUncheckedCreateWithoutQuotasInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutQuotasInput | SOUS_ACTESCreateOrConnectWithoutQuotasInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
  }

  export type SOUS_ACTESUncheckedCreateNestedManyWithoutQuotasInput = {
    create?: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput> | SOUS_ACTESCreateWithoutQuotasInput[] | SOUS_ACTESUncheckedCreateWithoutQuotasInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutQuotasInput | SOUS_ACTESCreateOrConnectWithoutQuotasInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ADMINISTRATEURUpdateOneRequiredWithoutQuotasNestedInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutQuotasInput, ADMINISTRATEURUncheckedCreateWithoutQuotasInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutQuotasInput
    upsert?: ADMINISTRATEURUpsertWithoutQuotasInput
    connect?: ADMINISTRATEURWhereUniqueInput
    update?: XOR<XOR<ADMINISTRATEURUpdateToOneWithWhereWithoutQuotasInput, ADMINISTRATEURUpdateWithoutQuotasInput>, ADMINISTRATEURUncheckedUpdateWithoutQuotasInput>
  }

  export type DEPARTEMENTUpdateOneRequiredWithoutQuotasNestedInput = {
    create?: XOR<DEPARTEMENTCreateWithoutQuotasInput, DEPARTEMENTUncheckedCreateWithoutQuotasInput>
    connectOrCreate?: DEPARTEMENTCreateOrConnectWithoutQuotasInput
    upsert?: DEPARTEMENTUpsertWithoutQuotasInput
    connect?: DEPARTEMENTWhereUniqueInput
    update?: XOR<XOR<DEPARTEMENTUpdateToOneWithWhereWithoutQuotasInput, DEPARTEMENTUpdateWithoutQuotasInput>, DEPARTEMENTUncheckedUpdateWithoutQuotasInput>
  }

  export type SOUS_ACTESUpdateManyWithoutQuotasNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput> | SOUS_ACTESCreateWithoutQuotasInput[] | SOUS_ACTESUncheckedCreateWithoutQuotasInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutQuotasInput | SOUS_ACTESCreateOrConnectWithoutQuotasInput[]
    upsert?: SOUS_ACTESUpsertWithWhereUniqueWithoutQuotasInput | SOUS_ACTESUpsertWithWhereUniqueWithoutQuotasInput[]
    set?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    disconnect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    delete?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    update?: SOUS_ACTESUpdateWithWhereUniqueWithoutQuotasInput | SOUS_ACTESUpdateWithWhereUniqueWithoutQuotasInput[]
    updateMany?: SOUS_ACTESUpdateManyWithWhereWithoutQuotasInput | SOUS_ACTESUpdateManyWithWhereWithoutQuotasInput[]
    deleteMany?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
  }

  export type SOUS_ACTESUncheckedUpdateManyWithoutQuotasNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput> | SOUS_ACTESCreateWithoutQuotasInput[] | SOUS_ACTESUncheckedCreateWithoutQuotasInput[]
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutQuotasInput | SOUS_ACTESCreateOrConnectWithoutQuotasInput[]
    upsert?: SOUS_ACTESUpsertWithWhereUniqueWithoutQuotasInput | SOUS_ACTESUpsertWithWhereUniqueWithoutQuotasInput[]
    set?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    disconnect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    delete?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    connect?: SOUS_ACTESWhereUniqueInput | SOUS_ACTESWhereUniqueInput[]
    update?: SOUS_ACTESUpdateWithWhereUniqueWithoutQuotasInput | SOUS_ACTESUpdateWithWhereUniqueWithoutQuotasInput[]
    updateMany?: SOUS_ACTESUpdateManyWithWhereWithoutQuotasInput | SOUS_ACTESUpdateManyWithWhereWithoutQuotasInput[]
    deleteMany?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
  }

  export type NOTIFICATIONCreateNestedManyWithoutPaiementInput = {
    create?: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput> | NOTIFICATIONCreateWithoutPaiementInput[] | NOTIFICATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutPaiementInput | NOTIFICATIONCreateOrConnectWithoutPaiementInput[]
    createMany?: NOTIFICATIONCreateManyPaiementInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type ADMINISTRATEURCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutPaiementsInput, ADMINISTRATEURUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutPaiementsInput
    connect?: ADMINISTRATEURWhereUniqueInput
  }

  export type ETUDIANTCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<ETUDIANTCreateWithoutPaiementsInput, ETUDIANTUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutPaiementsInput
    connect?: ETUDIANTWhereUniqueInput
  }

  export type REALISATIONCreateNestedManyWithoutPaiementInput = {
    create?: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput> | REALISATIONCreateWithoutPaiementInput[] | REALISATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutPaiementInput | REALISATIONCreateOrConnectWithoutPaiementInput[]
    createMany?: REALISATIONCreateManyPaiementInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput> | HISTORIQUE_PAIEMENTCreateWithoutPaiementInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyPaiementInputEnvelope
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput = {
    create?: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput> | NOTIFICATIONCreateWithoutPaiementInput[] | NOTIFICATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutPaiementInput | NOTIFICATIONCreateOrConnectWithoutPaiementInput[]
    createMany?: NOTIFICATIONCreateManyPaiementInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type REALISATIONUncheckedCreateNestedManyWithoutPaiementInput = {
    create?: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput> | REALISATIONCreateWithoutPaiementInput[] | REALISATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutPaiementInput | REALISATIONCreateOrConnectWithoutPaiementInput[]
    createMany?: REALISATIONCreateManyPaiementInputEnvelope
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
  }

  export type HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput> | HISTORIQUE_PAIEMENTCreateWithoutPaiementInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyPaiementInputEnvelope
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
  }

  export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement
  }

  export type NOTIFICATIONUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput> | NOTIFICATIONCreateWithoutPaiementInput[] | NOTIFICATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutPaiementInput | NOTIFICATIONCreateOrConnectWithoutPaiementInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutPaiementInput | NOTIFICATIONUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: NOTIFICATIONCreateManyPaiementInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutPaiementInput | NOTIFICATIONUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutPaiementInput | NOTIFICATIONUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutPaiementsInput, ADMINISTRATEURUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutPaiementsInput
    upsert?: ADMINISTRATEURUpsertWithoutPaiementsInput
    disconnect?: ADMINISTRATEURWhereInput | boolean
    delete?: ADMINISTRATEURWhereInput | boolean
    connect?: ADMINISTRATEURWhereUniqueInput
    update?: XOR<XOR<ADMINISTRATEURUpdateToOneWithWhereWithoutPaiementsInput, ADMINISTRATEURUpdateWithoutPaiementsInput>, ADMINISTRATEURUncheckedUpdateWithoutPaiementsInput>
  }

  export type ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<ETUDIANTCreateWithoutPaiementsInput, ETUDIANTUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutPaiementsInput
    upsert?: ETUDIANTUpsertWithoutPaiementsInput
    connect?: ETUDIANTWhereUniqueInput
    update?: XOR<XOR<ETUDIANTUpdateToOneWithWhereWithoutPaiementsInput, ETUDIANTUpdateWithoutPaiementsInput>, ETUDIANTUncheckedUpdateWithoutPaiementsInput>
  }

  export type REALISATIONUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput> | REALISATIONCreateWithoutPaiementInput[] | REALISATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutPaiementInput | REALISATIONCreateOrConnectWithoutPaiementInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutPaiementInput | REALISATIONUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: REALISATIONCreateManyPaiementInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutPaiementInput | REALISATIONUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutPaiementInput | REALISATIONUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput> | HISTORIQUE_PAIEMENTCreateWithoutPaiementInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput[]
    upsert?: HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutPaiementInput | HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyPaiementInputEnvelope
    set?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    disconnect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    delete?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    update?: HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutPaiementInput | HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutPaiementInput | HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput> | NOTIFICATIONCreateWithoutPaiementInput[] | NOTIFICATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutPaiementInput | NOTIFICATIONCreateOrConnectWithoutPaiementInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutPaiementInput | NOTIFICATIONUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: NOTIFICATIONCreateManyPaiementInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutPaiementInput | NOTIFICATIONUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutPaiementInput | NOTIFICATIONUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput> | REALISATIONCreateWithoutPaiementInput[] | REALISATIONUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: REALISATIONCreateOrConnectWithoutPaiementInput | REALISATIONCreateOrConnectWithoutPaiementInput[]
    upsert?: REALISATIONUpsertWithWhereUniqueWithoutPaiementInput | REALISATIONUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: REALISATIONCreateManyPaiementInputEnvelope
    set?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    disconnect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    delete?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    connect?: REALISATIONWhereUniqueInput | REALISATIONWhereUniqueInput[]
    update?: REALISATIONUpdateWithWhereUniqueWithoutPaiementInput | REALISATIONUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: REALISATIONUpdateManyWithWhereWithoutPaiementInput | REALISATIONUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput> | HISTORIQUE_PAIEMENTCreateWithoutPaiementInput[] | HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput | HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput[]
    upsert?: HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutPaiementInput | HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: HISTORIQUE_PAIEMENTCreateManyPaiementInputEnvelope
    set?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    disconnect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    delete?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    connect?: HISTORIQUE_PAIEMENTWhereUniqueInput | HISTORIQUE_PAIEMENTWhereUniqueInput[]
    update?: HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutPaiementInput | HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutPaiementInput | HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
  }

  export type ADMINISTRATEURCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutNotificationsInput, ADMINISTRATEURUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutNotificationsInput
    connect?: ADMINISTRATEURWhereUniqueInput
  }

  export type ETUDIANTCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ETUDIANTCreateWithoutNotificationsInput, ETUDIANTUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutNotificationsInput
    connect?: ETUDIANTWhereUniqueInput
  }

  export type PAIEMENTCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PAIEMENTCreateWithoutNotificationsInput, PAIEMENTUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutNotificationsInput
    connect?: PAIEMENTWhereUniqueInput
  }

  export type PROFESSEURSCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PROFESSEURSCreateWithoutNotificationsInput, PROFESSEURSUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutNotificationsInput
    connect?: PROFESSEURSWhereUniqueInput
  }

  export type REALISATIONCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<REALISATIONCreateWithoutNotificationsInput, REALISATIONUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: REALISATIONCreateOrConnectWithoutNotificationsInput
    connect?: REALISATIONWhereUniqueInput
  }

  export type SOUS_ACTESCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<SOUS_ACTESCreateWithoutNotificationsInput, SOUS_ACTESUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutNotificationsInput
    connect?: SOUS_ACTESWhereUniqueInput
  }

  export type EnumTypeNotificationFieldUpdateOperationsInput = {
    set?: $Enums.TypeNotification
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutNotificationsInput, ADMINISTRATEURUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutNotificationsInput
    upsert?: ADMINISTRATEURUpsertWithoutNotificationsInput
    disconnect?: ADMINISTRATEURWhereInput | boolean
    delete?: ADMINISTRATEURWhereInput | boolean
    connect?: ADMINISTRATEURWhereUniqueInput
    update?: XOR<XOR<ADMINISTRATEURUpdateToOneWithWhereWithoutNotificationsInput, ADMINISTRATEURUpdateWithoutNotificationsInput>, ADMINISTRATEURUncheckedUpdateWithoutNotificationsInput>
  }

  export type ETUDIANTUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ETUDIANTCreateWithoutNotificationsInput, ETUDIANTUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutNotificationsInput
    upsert?: ETUDIANTUpsertWithoutNotificationsInput
    disconnect?: ETUDIANTWhereInput | boolean
    delete?: ETUDIANTWhereInput | boolean
    connect?: ETUDIANTWhereUniqueInput
    update?: XOR<XOR<ETUDIANTUpdateToOneWithWhereWithoutNotificationsInput, ETUDIANTUpdateWithoutNotificationsInput>, ETUDIANTUncheckedUpdateWithoutNotificationsInput>
  }

  export type PAIEMENTUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutNotificationsInput, PAIEMENTUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutNotificationsInput
    upsert?: PAIEMENTUpsertWithoutNotificationsInput
    disconnect?: PAIEMENTWhereInput | boolean
    delete?: PAIEMENTWhereInput | boolean
    connect?: PAIEMENTWhereUniqueInput
    update?: XOR<XOR<PAIEMENTUpdateToOneWithWhereWithoutNotificationsInput, PAIEMENTUpdateWithoutNotificationsInput>, PAIEMENTUncheckedUpdateWithoutNotificationsInput>
  }

  export type PROFESSEURSUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<PROFESSEURSCreateWithoutNotificationsInput, PROFESSEURSUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutNotificationsInput
    upsert?: PROFESSEURSUpsertWithoutNotificationsInput
    disconnect?: PROFESSEURSWhereInput | boolean
    delete?: PROFESSEURSWhereInput | boolean
    connect?: PROFESSEURSWhereUniqueInput
    update?: XOR<XOR<PROFESSEURSUpdateToOneWithWhereWithoutNotificationsInput, PROFESSEURSUpdateWithoutNotificationsInput>, PROFESSEURSUncheckedUpdateWithoutNotificationsInput>
  }

  export type REALISATIONUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<REALISATIONCreateWithoutNotificationsInput, REALISATIONUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: REALISATIONCreateOrConnectWithoutNotificationsInput
    upsert?: REALISATIONUpsertWithoutNotificationsInput
    disconnect?: REALISATIONWhereInput | boolean
    delete?: REALISATIONWhereInput | boolean
    connect?: REALISATIONWhereUniqueInput
    update?: XOR<XOR<REALISATIONUpdateToOneWithWhereWithoutNotificationsInput, REALISATIONUpdateWithoutNotificationsInput>, REALISATIONUncheckedUpdateWithoutNotificationsInput>
  }

  export type SOUS_ACTESUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutNotificationsInput, SOUS_ACTESUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutNotificationsInput
    upsert?: SOUS_ACTESUpsertWithoutNotificationsInput
    disconnect?: SOUS_ACTESWhereInput | boolean
    delete?: SOUS_ACTESWhereInput | boolean
    connect?: SOUS_ACTESWhereUniqueInput
    update?: XOR<XOR<SOUS_ACTESUpdateToOneWithWhereWithoutNotificationsInput, SOUS_ACTESUpdateWithoutNotificationsInput>, SOUS_ACTESUncheckedUpdateWithoutNotificationsInput>
  }

  export type NOTIFICATIONCreateNestedManyWithoutRealisationInput = {
    create?: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput> | NOTIFICATIONCreateWithoutRealisationInput[] | NOTIFICATIONUncheckedCreateWithoutRealisationInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutRealisationInput | NOTIFICATIONCreateOrConnectWithoutRealisationInput[]
    createMany?: NOTIFICATIONCreateManyRealisationInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type ETUDIANTCreateNestedOneWithoutRealisationsInput = {
    create?: XOR<ETUDIANTCreateWithoutRealisationsInput, ETUDIANTUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutRealisationsInput
    connect?: ETUDIANTWhereUniqueInput
  }

  export type PAIEMENTCreateNestedOneWithoutRealisationsInput = {
    create?: XOR<PAIEMENTCreateWithoutRealisationsInput, PAIEMENTUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutRealisationsInput
    connect?: PAIEMENTWhereUniqueInput
  }

  export type PROFESSEURSCreateNestedOneWithoutRealisationsInput = {
    create?: XOR<PROFESSEURSCreateWithoutRealisationsInput, PROFESSEURSUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutRealisationsInput
    connect?: PROFESSEURSWhereUniqueInput
  }

  export type SOUS_ACTESCreateNestedOneWithoutRealisationsInput = {
    create?: XOR<SOUS_ACTESCreateWithoutRealisationsInput, SOUS_ACTESUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutRealisationsInput
    connect?: SOUS_ACTESWhereUniqueInput
  }

  export type NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput = {
    create?: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput> | NOTIFICATIONCreateWithoutRealisationInput[] | NOTIFICATIONUncheckedCreateWithoutRealisationInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutRealisationInput | NOTIFICATIONCreateOrConnectWithoutRealisationInput[]
    createMany?: NOTIFICATIONCreateManyRealisationInputEnvelope
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
  }

  export type NOTIFICATIONUpdateManyWithoutRealisationNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput> | NOTIFICATIONCreateWithoutRealisationInput[] | NOTIFICATIONUncheckedCreateWithoutRealisationInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutRealisationInput | NOTIFICATIONCreateOrConnectWithoutRealisationInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutRealisationInput | NOTIFICATIONUpsertWithWhereUniqueWithoutRealisationInput[]
    createMany?: NOTIFICATIONCreateManyRealisationInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutRealisationInput | NOTIFICATIONUpdateWithWhereUniqueWithoutRealisationInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutRealisationInput | NOTIFICATIONUpdateManyWithWhereWithoutRealisationInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput = {
    create?: XOR<ETUDIANTCreateWithoutRealisationsInput, ETUDIANTUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: ETUDIANTCreateOrConnectWithoutRealisationsInput
    upsert?: ETUDIANTUpsertWithoutRealisationsInput
    connect?: ETUDIANTWhereUniqueInput
    update?: XOR<XOR<ETUDIANTUpdateToOneWithWhereWithoutRealisationsInput, ETUDIANTUpdateWithoutRealisationsInput>, ETUDIANTUncheckedUpdateWithoutRealisationsInput>
  }

  export type PAIEMENTUpdateOneWithoutRealisationsNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutRealisationsInput, PAIEMENTUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutRealisationsInput
    upsert?: PAIEMENTUpsertWithoutRealisationsInput
    disconnect?: PAIEMENTWhereInput | boolean
    delete?: PAIEMENTWhereInput | boolean
    connect?: PAIEMENTWhereUniqueInput
    update?: XOR<XOR<PAIEMENTUpdateToOneWithWhereWithoutRealisationsInput, PAIEMENTUpdateWithoutRealisationsInput>, PAIEMENTUncheckedUpdateWithoutRealisationsInput>
  }

  export type PROFESSEURSUpdateOneWithoutRealisationsNestedInput = {
    create?: XOR<PROFESSEURSCreateWithoutRealisationsInput, PROFESSEURSUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: PROFESSEURSCreateOrConnectWithoutRealisationsInput
    upsert?: PROFESSEURSUpsertWithoutRealisationsInput
    disconnect?: PROFESSEURSWhereInput | boolean
    delete?: PROFESSEURSWhereInput | boolean
    connect?: PROFESSEURSWhereUniqueInput
    update?: XOR<XOR<PROFESSEURSUpdateToOneWithWhereWithoutRealisationsInput, PROFESSEURSUpdateWithoutRealisationsInput>, PROFESSEURSUncheckedUpdateWithoutRealisationsInput>
  }

  export type SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput = {
    create?: XOR<SOUS_ACTESCreateWithoutRealisationsInput, SOUS_ACTESUncheckedCreateWithoutRealisationsInput>
    connectOrCreate?: SOUS_ACTESCreateOrConnectWithoutRealisationsInput
    upsert?: SOUS_ACTESUpsertWithoutRealisationsInput
    connect?: SOUS_ACTESWhereUniqueInput
    update?: XOR<XOR<SOUS_ACTESUpdateToOneWithWhereWithoutRealisationsInput, SOUS_ACTESUpdateWithoutRealisationsInput>, SOUS_ACTESUncheckedUpdateWithoutRealisationsInput>
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput = {
    create?: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput> | NOTIFICATIONCreateWithoutRealisationInput[] | NOTIFICATIONUncheckedCreateWithoutRealisationInput[]
    connectOrCreate?: NOTIFICATIONCreateOrConnectWithoutRealisationInput | NOTIFICATIONCreateOrConnectWithoutRealisationInput[]
    upsert?: NOTIFICATIONUpsertWithWhereUniqueWithoutRealisationInput | NOTIFICATIONUpsertWithWhereUniqueWithoutRealisationInput[]
    createMany?: NOTIFICATIONCreateManyRealisationInputEnvelope
    set?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    disconnect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    delete?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    connect?: NOTIFICATIONWhereUniqueInput | NOTIFICATIONWhereUniqueInput[]
    update?: NOTIFICATIONUpdateWithWhereUniqueWithoutRealisationInput | NOTIFICATIONUpdateWithWhereUniqueWithoutRealisationInput[]
    updateMany?: NOTIFICATIONUpdateManyWithWhereWithoutRealisationInput | NOTIFICATIONUpdateManyWithWhereWithoutRealisationInput[]
    deleteMany?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
  }

  export type PAIEMENTCreateNestedOneWithoutHistoriqueInput = {
    create?: XOR<PAIEMENTCreateWithoutHistoriqueInput, PAIEMENTUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutHistoriqueInput
    connect?: PAIEMENTWhereUniqueInput
  }

  export type ADMINISTRATEURCreateNestedOneWithoutHistoriqueInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutHistoriqueInput, ADMINISTRATEURUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutHistoriqueInput
    connect?: ADMINISTRATEURWhereUniqueInput
  }

  export type PAIEMENTUpdateOneRequiredWithoutHistoriqueNestedInput = {
    create?: XOR<PAIEMENTCreateWithoutHistoriqueInput, PAIEMENTUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: PAIEMENTCreateOrConnectWithoutHistoriqueInput
    upsert?: PAIEMENTUpsertWithoutHistoriqueInput
    connect?: PAIEMENTWhereUniqueInput
    update?: XOR<XOR<PAIEMENTUpdateToOneWithWhereWithoutHistoriqueInput, PAIEMENTUpdateWithoutHistoriqueInput>, PAIEMENTUncheckedUpdateWithoutHistoriqueInput>
  }

  export type ADMINISTRATEURUpdateOneWithoutHistoriqueNestedInput = {
    create?: XOR<ADMINISTRATEURCreateWithoutHistoriqueInput, ADMINISTRATEURUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: ADMINISTRATEURCreateOrConnectWithoutHistoriqueInput
    upsert?: ADMINISTRATEURUpsertWithoutHistoriqueInput
    disconnect?: ADMINISTRATEURWhereInput | boolean
    delete?: ADMINISTRATEURWhereInput | boolean
    connect?: ADMINISTRATEURWhereUniqueInput
    update?: XOR<XOR<ADMINISTRATEURUpdateToOneWithWhereWithoutHistoriqueInput, ADMINISTRATEURUpdateWithoutHistoriqueInput>, ADMINISTRATEURUncheckedUpdateWithoutHistoriqueInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type NestedEnumTypeNotificationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationFilter<$PrismaModel> | $Enums.TypeNotification
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeNotification | EnumTypeNotificationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeNotification[] | ListEnumTypeNotificationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeNotificationWithAggregatesFilter<$PrismaModel> | $Enums.TypeNotification
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeNotificationFilter<$PrismaModel>
    _max?: NestedEnumTypeNotificationFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NOTIFICATIONCreateWithoutAdminInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutAdminInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutAdminInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput>
  }

  export type NOTIFICATIONCreateManyAdminInputEnvelope = {
    data: NOTIFICATIONCreateManyAdminInput | NOTIFICATIONCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type PAIEMENTCreateWithoutAdminInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    notifications?: NOTIFICATIONCreateNestedManyWithoutPaiementInput
    etudiant: ETUDIANTCreateNestedOneWithoutPaiementsInput
    realisations?: REALISATIONCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateWithoutAdminInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Etudiant: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTCreateOrConnectWithoutAdminInput = {
    where: PAIEMENTWhereUniqueInput
    create: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput>
  }

  export type PAIEMENTCreateManyAdminInputEnvelope = {
    data: PAIEMENTCreateManyAdminInput | PAIEMENTCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type QUOTASCreateWithoutAdminInput = {
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    departement: DEPARTEMENTCreateNestedOneWithoutQuotasInput
    sous_actes?: SOUS_ACTESCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASUncheckedCreateWithoutAdminInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Dep: number
    sous_actes?: SOUS_ACTESUncheckedCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASCreateOrConnectWithoutAdminInput = {
    where: QUOTASWhereUniqueInput
    create: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput>
  }

  export type QUOTASCreateManyAdminInputEnvelope = {
    data: QUOTASCreateManyAdminInput | QUOTASCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type HISTORIQUE_PAIEMENTCreateWithoutAdminInput = {
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    paiement: PAIEMENTCreateNestedOneWithoutHistoriqueInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Paie: number
  }

  export type HISTORIQUE_PAIEMENTCreateOrConnectWithoutAdminInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    create: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput>
  }

  export type HISTORIQUE_PAIEMENTCreateManyAdminInputEnvelope = {
    data: HISTORIQUE_PAIEMENTCreateManyAdminInput | HISTORIQUE_PAIEMENTCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutAdminInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutAdminInput, NOTIFICATIONUncheckedUpdateWithoutAdminInput>
    create: XOR<NOTIFICATIONCreateWithoutAdminInput, NOTIFICATIONUncheckedCreateWithoutAdminInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutAdminInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutAdminInput, NOTIFICATIONUncheckedUpdateWithoutAdminInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutAdminInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutAdminInput>
  }

  export type NOTIFICATIONScalarWhereInput = {
    AND?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
    OR?: NOTIFICATIONScalarWhereInput[]
    NOT?: NOTIFICATIONScalarWhereInput | NOTIFICATIONScalarWhereInput[]
    ID_Notification?: IntFilter<"NOTIFICATION"> | number
    Message?: StringFilter<"NOTIFICATION"> | string
    Type?: EnumTypeNotificationFilter<"NOTIFICATION"> | $Enums.TypeNotification
    Date_Envoi?: DateTimeFilter<"NOTIFICATION"> | Date | string
    Lu?: BoolFilter<"NOTIFICATION"> | boolean
    id_SActes?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Paie?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Etudiant?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Prof?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Admin?: IntNullableFilter<"NOTIFICATION"> | number | null
    id_Realisation?: IntNullableFilter<"NOTIFICATION"> | number | null
  }

  export type PAIEMENTUpsertWithWhereUniqueWithoutAdminInput = {
    where: PAIEMENTWhereUniqueInput
    update: XOR<PAIEMENTUpdateWithoutAdminInput, PAIEMENTUncheckedUpdateWithoutAdminInput>
    create: XOR<PAIEMENTCreateWithoutAdminInput, PAIEMENTUncheckedCreateWithoutAdminInput>
  }

  export type PAIEMENTUpdateWithWhereUniqueWithoutAdminInput = {
    where: PAIEMENTWhereUniqueInput
    data: XOR<PAIEMENTUpdateWithoutAdminInput, PAIEMENTUncheckedUpdateWithoutAdminInput>
  }

  export type PAIEMENTUpdateManyWithWhereWithoutAdminInput = {
    where: PAIEMENTScalarWhereInput
    data: XOR<PAIEMENTUpdateManyMutationInput, PAIEMENTUncheckedUpdateManyWithoutAdminInput>
  }

  export type PAIEMENTScalarWhereInput = {
    AND?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
    OR?: PAIEMENTScalarWhereInput[]
    NOT?: PAIEMENTScalarWhereInput | PAIEMENTScalarWhereInput[]
    ID_Paie?: IntFilter<"PAIEMENT"> | number
    Montant?: FloatFilter<"PAIEMENT"> | number
    Montant_Restant?: FloatNullableFilter<"PAIEMENT"> | number | null
    Date_Paie?: DateTimeFilter<"PAIEMENT"> | Date | string
    Statut_Paie?: EnumStatutPaiementFilter<"PAIEMENT"> | $Enums.StatutPaiement
    id_Admin?: IntNullableFilter<"PAIEMENT"> | number | null
    id_Etudiant?: IntFilter<"PAIEMENT"> | number
  }

  export type QUOTASUpsertWithWhereUniqueWithoutAdminInput = {
    where: QUOTASWhereUniqueInput
    update: XOR<QUOTASUpdateWithoutAdminInput, QUOTASUncheckedUpdateWithoutAdminInput>
    create: XOR<QUOTASCreateWithoutAdminInput, QUOTASUncheckedCreateWithoutAdminInput>
  }

  export type QUOTASUpdateWithWhereUniqueWithoutAdminInput = {
    where: QUOTASWhereUniqueInput
    data: XOR<QUOTASUpdateWithoutAdminInput, QUOTASUncheckedUpdateWithoutAdminInput>
  }

  export type QUOTASUpdateManyWithWhereWithoutAdminInput = {
    where: QUOTASScalarWhereInput
    data: XOR<QUOTASUpdateManyMutationInput, QUOTASUncheckedUpdateManyWithoutAdminInput>
  }

  export type QUOTASScalarWhereInput = {
    AND?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
    OR?: QUOTASScalarWhereInput[]
    NOT?: QUOTASScalarWhereInput | QUOTASScalarWhereInput[]
    ID_Quotas?: IntFilter<"QUOTAS"> | number
    Annee?: StringFilter<"QUOTAS"> | string
    Nombre?: IntFilter<"QUOTAS"> | number
    Date_Debut?: DateTimeFilter<"QUOTAS"> | Date | string
    Date_Fin?: DateTimeFilter<"QUOTAS"> | Date | string
    id_Dep?: IntFilter<"QUOTAS"> | number
    id_Admin?: IntFilter<"QUOTAS"> | number
  }

  export type HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutAdminInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    update: XOR<HISTORIQUE_PAIEMENTUpdateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedUpdateWithoutAdminInput>
    create: XOR<HISTORIQUE_PAIEMENTCreateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutAdminInput>
  }

  export type HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutAdminInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    data: XOR<HISTORIQUE_PAIEMENTUpdateWithoutAdminInput, HISTORIQUE_PAIEMENTUncheckedUpdateWithoutAdminInput>
  }

  export type HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutAdminInput = {
    where: HISTORIQUE_PAIEMENTScalarWhereInput
    data: XOR<HISTORIQUE_PAIEMENTUpdateManyMutationInput, HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminInput>
  }

  export type HISTORIQUE_PAIEMENTScalarWhereInput = {
    AND?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
    OR?: HISTORIQUE_PAIEMENTScalarWhereInput[]
    NOT?: HISTORIQUE_PAIEMENTScalarWhereInput | HISTORIQUE_PAIEMENTScalarWhereInput[]
    ID_Hist?: IntFilter<"HISTORIQUE_PAIEMENT"> | number
    Action?: StringFilter<"HISTORIQUE_PAIEMENT"> | string
    AncienStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFilter<"HISTORIQUE_PAIEMENT"> | $Enums.StatutPaiement
    Montant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Montant_Restant?: FloatNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
    Date_Action?: DateTimeFilter<"HISTORIQUE_PAIEMENT"> | Date | string
    id_Paie?: IntFilter<"HISTORIQUE_PAIEMENT"> | number
    id_Admin?: IntNullableFilter<"HISTORIQUE_PAIEMENT"> | number | null
  }

  export type DEPARTEMENTCreateWithoutEtudiantsInput = {
    Nom_Dep: string
    actes?: ACTESCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTUncheckedCreateWithoutEtudiantsInput = {
    ID_Dep?: number
    Nom_Dep: string
    actes?: ACTESUncheckedCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSUncheckedCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTCreateOrConnectWithoutEtudiantsInput = {
    where: DEPARTEMENTWhereUniqueInput
    create: XOR<DEPARTEMENTCreateWithoutEtudiantsInput, DEPARTEMENTUncheckedCreateWithoutEtudiantsInput>
  }

  export type NOTIFICATIONCreateWithoutEtudiantInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutEtudiantInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutEtudiantInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput>
  }

  export type NOTIFICATIONCreateManyEtudiantInputEnvelope = {
    data: NOTIFICATIONCreateManyEtudiantInput | NOTIFICATIONCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type PAIEMENTCreateWithoutEtudiantInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    notifications?: NOTIFICATIONCreateNestedManyWithoutPaiementInput
    admin?: ADMINISTRATEURCreateNestedOneWithoutPaiementsInput
    realisations?: REALISATIONCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateWithoutEtudiantInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTCreateOrConnectWithoutEtudiantInput = {
    where: PAIEMENTWhereUniqueInput
    create: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput>
  }

  export type PAIEMENTCreateManyEtudiantInputEnvelope = {
    data: PAIEMENTCreateManyEtudiantInput | PAIEMENTCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type REALISATIONCreateWithoutEtudiantInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    notifications?: NOTIFICATIONCreateNestedManyWithoutRealisationInput
    paiement?: PAIEMENTCreateNestedOneWithoutRealisationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutRealisationsInput
    sousActe: SOUS_ACTESCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateWithoutEtudiantInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Prof?: number | null
    id_Paie?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput
  }

  export type REALISATIONCreateOrConnectWithoutEtudiantInput = {
    where: REALISATIONWhereUniqueInput
    create: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput>
  }

  export type REALISATIONCreateManyEtudiantInputEnvelope = {
    data: REALISATIONCreateManyEtudiantInput | REALISATIONCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type DEPARTEMENTUpsertWithoutEtudiantsInput = {
    update: XOR<DEPARTEMENTUpdateWithoutEtudiantsInput, DEPARTEMENTUncheckedUpdateWithoutEtudiantsInput>
    create: XOR<DEPARTEMENTCreateWithoutEtudiantsInput, DEPARTEMENTUncheckedCreateWithoutEtudiantsInput>
    where?: DEPARTEMENTWhereInput
  }

  export type DEPARTEMENTUpdateToOneWithWhereWithoutEtudiantsInput = {
    where?: DEPARTEMENTWhereInput
    data: XOR<DEPARTEMENTUpdateWithoutEtudiantsInput, DEPARTEMENTUncheckedUpdateWithoutEtudiantsInput>
  }

  export type DEPARTEMENTUpdateWithoutEtudiantsInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUpdateManyWithoutDepartementsNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateWithoutEtudiantsInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUncheckedUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUncheckedUpdateManyWithoutDepartementsNestedInput
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutEtudiantInput, NOTIFICATIONUncheckedUpdateWithoutEtudiantInput>
    create: XOR<NOTIFICATIONCreateWithoutEtudiantInput, NOTIFICATIONUncheckedCreateWithoutEtudiantInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutEtudiantInput, NOTIFICATIONUncheckedUpdateWithoutEtudiantInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutEtudiantInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type PAIEMENTUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: PAIEMENTWhereUniqueInput
    update: XOR<PAIEMENTUpdateWithoutEtudiantInput, PAIEMENTUncheckedUpdateWithoutEtudiantInput>
    create: XOR<PAIEMENTCreateWithoutEtudiantInput, PAIEMENTUncheckedCreateWithoutEtudiantInput>
  }

  export type PAIEMENTUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: PAIEMENTWhereUniqueInput
    data: XOR<PAIEMENTUpdateWithoutEtudiantInput, PAIEMENTUncheckedUpdateWithoutEtudiantInput>
  }

  export type PAIEMENTUpdateManyWithWhereWithoutEtudiantInput = {
    where: PAIEMENTScalarWhereInput
    data: XOR<PAIEMENTUpdateManyMutationInput, PAIEMENTUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type REALISATIONUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: REALISATIONWhereUniqueInput
    update: XOR<REALISATIONUpdateWithoutEtudiantInput, REALISATIONUncheckedUpdateWithoutEtudiantInput>
    create: XOR<REALISATIONCreateWithoutEtudiantInput, REALISATIONUncheckedCreateWithoutEtudiantInput>
  }

  export type REALISATIONUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: REALISATIONWhereUniqueInput
    data: XOR<REALISATIONUpdateWithoutEtudiantInput, REALISATIONUncheckedUpdateWithoutEtudiantInput>
  }

  export type REALISATIONUpdateManyWithWhereWithoutEtudiantInput = {
    where: REALISATIONScalarWhereInput
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type REALISATIONScalarWhereInput = {
    AND?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
    OR?: REALISATIONScalarWhereInput[]
    NOT?: REALISATIONScalarWhereInput | REALISATIONScalarWhereInput[]
    ID_Realisation?: IntFilter<"REALISATION"> | number
    Date_Realise?: DateTimeFilter<"REALISATION"> | Date | string
    Note?: FloatNullableFilter<"REALISATION"> | number | null
    Statut_Valide?: BoolFilter<"REALISATION"> | boolean
    id_SActes?: IntFilter<"REALISATION"> | number
    id_Etudiant?: IntFilter<"REALISATION"> | number
    id_Prof?: IntNullableFilter<"REALISATION"> | number | null
    id_Paie?: IntNullableFilter<"REALISATION"> | number | null
  }

  export type ACTESCreateWithoutDepartementInput = {
    Desc_Actes: string
    sous_actes?: SOUS_ACTESCreateNestedManyWithoutActeInput
  }

  export type ACTESUncheckedCreateWithoutDepartementInput = {
    ID_Actes?: number
    Desc_Actes: string
    sous_actes?: SOUS_ACTESUncheckedCreateNestedManyWithoutActeInput
  }

  export type ACTESCreateOrConnectWithoutDepartementInput = {
    where: ACTESWhereUniqueInput
    create: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput>
  }

  export type ACTESCreateManyDepartementInputEnvelope = {
    data: ACTESCreateManyDepartementInput | ACTESCreateManyDepartementInput[]
    skipDuplicates?: boolean
  }

  export type ETUDIANTCreateWithoutDepartementInput = {
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    notifications?: NOTIFICATIONCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUncheckedCreateWithoutDepartementInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTCreateOrConnectWithoutDepartementInput = {
    where: ETUDIANTWhereUniqueInput
    create: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput>
  }

  export type ETUDIANTCreateManyDepartementInputEnvelope = {
    data: ETUDIANTCreateManyDepartementInput | ETUDIANTCreateManyDepartementInput[]
    skipDuplicates?: boolean
  }

  export type QUOTASCreateWithoutDepartementInput = {
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    admin: ADMINISTRATEURCreateNestedOneWithoutQuotasInput
    sous_actes?: SOUS_ACTESCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASUncheckedCreateWithoutDepartementInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Admin: number
    sous_actes?: SOUS_ACTESUncheckedCreateNestedManyWithoutQuotasInput
  }

  export type QUOTASCreateOrConnectWithoutDepartementInput = {
    where: QUOTASWhereUniqueInput
    create: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput>
  }

  export type QUOTASCreateManyDepartementInputEnvelope = {
    data: QUOTASCreateManyDepartementInput | QUOTASCreateManyDepartementInput[]
    skipDuplicates?: boolean
  }

  export type PROFESSEURSCreateWithoutDepartementsInput = {
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutProfesseurInput
    realisations?: REALISATIONCreateNestedManyWithoutProfesseurInput
  }

  export type PROFESSEURSUncheckedCreateWithoutDepartementsInput = {
    ID_Prof?: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutProfesseurInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutProfesseurInput
  }

  export type PROFESSEURSCreateOrConnectWithoutDepartementsInput = {
    where: PROFESSEURSWhereUniqueInput
    create: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput>
  }

  export type ACTESUpsertWithWhereUniqueWithoutDepartementInput = {
    where: ACTESWhereUniqueInput
    update: XOR<ACTESUpdateWithoutDepartementInput, ACTESUncheckedUpdateWithoutDepartementInput>
    create: XOR<ACTESCreateWithoutDepartementInput, ACTESUncheckedCreateWithoutDepartementInput>
  }

  export type ACTESUpdateWithWhereUniqueWithoutDepartementInput = {
    where: ACTESWhereUniqueInput
    data: XOR<ACTESUpdateWithoutDepartementInput, ACTESUncheckedUpdateWithoutDepartementInput>
  }

  export type ACTESUpdateManyWithWhereWithoutDepartementInput = {
    where: ACTESScalarWhereInput
    data: XOR<ACTESUpdateManyMutationInput, ACTESUncheckedUpdateManyWithoutDepartementInput>
  }

  export type ACTESScalarWhereInput = {
    AND?: ACTESScalarWhereInput | ACTESScalarWhereInput[]
    OR?: ACTESScalarWhereInput[]
    NOT?: ACTESScalarWhereInput | ACTESScalarWhereInput[]
    ID_Actes?: IntFilter<"ACTES"> | number
    Desc_Actes?: StringFilter<"ACTES"> | string
    id_Dep?: IntFilter<"ACTES"> | number
  }

  export type ETUDIANTUpsertWithWhereUniqueWithoutDepartementInput = {
    where: ETUDIANTWhereUniqueInput
    update: XOR<ETUDIANTUpdateWithoutDepartementInput, ETUDIANTUncheckedUpdateWithoutDepartementInput>
    create: XOR<ETUDIANTCreateWithoutDepartementInput, ETUDIANTUncheckedCreateWithoutDepartementInput>
  }

  export type ETUDIANTUpdateWithWhereUniqueWithoutDepartementInput = {
    where: ETUDIANTWhereUniqueInput
    data: XOR<ETUDIANTUpdateWithoutDepartementInput, ETUDIANTUncheckedUpdateWithoutDepartementInput>
  }

  export type ETUDIANTUpdateManyWithWhereWithoutDepartementInput = {
    where: ETUDIANTScalarWhereInput
    data: XOR<ETUDIANTUpdateManyMutationInput, ETUDIANTUncheckedUpdateManyWithoutDepartementInput>
  }

  export type ETUDIANTScalarWhereInput = {
    AND?: ETUDIANTScalarWhereInput | ETUDIANTScalarWhereInput[]
    OR?: ETUDIANTScalarWhereInput[]
    NOT?: ETUDIANTScalarWhereInput | ETUDIANTScalarWhereInput[]
    ID_Etudiant?: IntFilter<"ETUDIANT"> | number
    user_id?: StringFilter<"ETUDIANT"> | string
    FullName_Et?: StringFilter<"ETUDIANT"> | string
    Email_Et?: StringFilter<"ETUDIANT"> | string
    Annee_Et?: StringFilter<"ETUDIANT"> | string
    Dette?: FloatNullableFilter<"ETUDIANT"> | number | null
    MotPass_Et?: StringFilter<"ETUDIANT"> | string
    Photo_Et?: StringNullableFilter<"ETUDIANT"> | string | null
    id_Dep?: IntFilter<"ETUDIANT"> | number
  }

  export type QUOTASUpsertWithWhereUniqueWithoutDepartementInput = {
    where: QUOTASWhereUniqueInput
    update: XOR<QUOTASUpdateWithoutDepartementInput, QUOTASUncheckedUpdateWithoutDepartementInput>
    create: XOR<QUOTASCreateWithoutDepartementInput, QUOTASUncheckedCreateWithoutDepartementInput>
  }

  export type QUOTASUpdateWithWhereUniqueWithoutDepartementInput = {
    where: QUOTASWhereUniqueInput
    data: XOR<QUOTASUpdateWithoutDepartementInput, QUOTASUncheckedUpdateWithoutDepartementInput>
  }

  export type QUOTASUpdateManyWithWhereWithoutDepartementInput = {
    where: QUOTASScalarWhereInput
    data: XOR<QUOTASUpdateManyMutationInput, QUOTASUncheckedUpdateManyWithoutDepartementInput>
  }

  export type PROFESSEURSUpsertWithWhereUniqueWithoutDepartementsInput = {
    where: PROFESSEURSWhereUniqueInput
    update: XOR<PROFESSEURSUpdateWithoutDepartementsInput, PROFESSEURSUncheckedUpdateWithoutDepartementsInput>
    create: XOR<PROFESSEURSCreateWithoutDepartementsInput, PROFESSEURSUncheckedCreateWithoutDepartementsInput>
  }

  export type PROFESSEURSUpdateWithWhereUniqueWithoutDepartementsInput = {
    where: PROFESSEURSWhereUniqueInput
    data: XOR<PROFESSEURSUpdateWithoutDepartementsInput, PROFESSEURSUncheckedUpdateWithoutDepartementsInput>
  }

  export type PROFESSEURSUpdateManyWithWhereWithoutDepartementsInput = {
    where: PROFESSEURSScalarWhereInput
    data: XOR<PROFESSEURSUpdateManyMutationInput, PROFESSEURSUncheckedUpdateManyWithoutDepartementsInput>
  }

  export type PROFESSEURSScalarWhereInput = {
    AND?: PROFESSEURSScalarWhereInput | PROFESSEURSScalarWhereInput[]
    OR?: PROFESSEURSScalarWhereInput[]
    NOT?: PROFESSEURSScalarWhereInput | PROFESSEURSScalarWhereInput[]
    ID_Prof?: IntFilter<"PROFESSEURS"> | number
    user_id?: StringFilter<"PROFESSEURS"> | string
    Nom_Prof?: StringFilter<"PROFESSEURS"> | string
    Email_Prof?: StringFilter<"PROFESSEURS"> | string
    MotPass_Prof?: StringFilter<"PROFESSEURS"> | string
  }

  export type DEPARTEMENTCreateWithoutActesInput = {
    Nom_Dep: string
    etudiants?: ETUDIANTCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTUncheckedCreateWithoutActesInput = {
    ID_Dep?: number
    Nom_Dep: string
    etudiants?: ETUDIANTUncheckedCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSUncheckedCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTCreateOrConnectWithoutActesInput = {
    where: DEPARTEMENTWhereUniqueInput
    create: XOR<DEPARTEMENTCreateWithoutActesInput, DEPARTEMENTUncheckedCreateWithoutActesInput>
  }

  export type SOUS_ACTESCreateWithoutActeInput = {
    Desc_SActes: string
    Prix: number
    notifications?: NOTIFICATIONCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONCreateNestedManyWithoutSousActeInput
    quotas?: QUOTASCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESUncheckedCreateWithoutActeInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutSousActeInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESCreateOrConnectWithoutActeInput = {
    where: SOUS_ACTESWhereUniqueInput
    create: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput>
  }

  export type SOUS_ACTESCreateManyActeInputEnvelope = {
    data: SOUS_ACTESCreateManyActeInput | SOUS_ACTESCreateManyActeInput[]
    skipDuplicates?: boolean
  }

  export type DEPARTEMENTUpsertWithoutActesInput = {
    update: XOR<DEPARTEMENTUpdateWithoutActesInput, DEPARTEMENTUncheckedUpdateWithoutActesInput>
    create: XOR<DEPARTEMENTCreateWithoutActesInput, DEPARTEMENTUncheckedCreateWithoutActesInput>
    where?: DEPARTEMENTWhereInput
  }

  export type DEPARTEMENTUpdateToOneWithWhereWithoutActesInput = {
    where?: DEPARTEMENTWhereInput
    data: XOR<DEPARTEMENTUpdateWithoutActesInput, DEPARTEMENTUncheckedUpdateWithoutActesInput>
  }

  export type DEPARTEMENTUpdateWithoutActesInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    etudiants?: ETUDIANTUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUpdateManyWithoutDepartementsNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateWithoutActesInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    etudiants?: ETUDIANTUncheckedUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUncheckedUpdateManyWithoutDepartementsNestedInput
  }

  export type SOUS_ACTESUpsertWithWhereUniqueWithoutActeInput = {
    where: SOUS_ACTESWhereUniqueInput
    update: XOR<SOUS_ACTESUpdateWithoutActeInput, SOUS_ACTESUncheckedUpdateWithoutActeInput>
    create: XOR<SOUS_ACTESCreateWithoutActeInput, SOUS_ACTESUncheckedCreateWithoutActeInput>
  }

  export type SOUS_ACTESUpdateWithWhereUniqueWithoutActeInput = {
    where: SOUS_ACTESWhereUniqueInput
    data: XOR<SOUS_ACTESUpdateWithoutActeInput, SOUS_ACTESUncheckedUpdateWithoutActeInput>
  }

  export type SOUS_ACTESUpdateManyWithWhereWithoutActeInput = {
    where: SOUS_ACTESScalarWhereInput
    data: XOR<SOUS_ACTESUpdateManyMutationInput, SOUS_ACTESUncheckedUpdateManyWithoutActeInput>
  }

  export type SOUS_ACTESScalarWhereInput = {
    AND?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
    OR?: SOUS_ACTESScalarWhereInput[]
    NOT?: SOUS_ACTESScalarWhereInput | SOUS_ACTESScalarWhereInput[]
    ID_SActes?: IntFilter<"SOUS_ACTES"> | number
    Desc_SActes?: StringFilter<"SOUS_ACTES"> | string
    Prix?: FloatFilter<"SOUS_ACTES"> | number
    id_Actes?: IntFilter<"SOUS_ACTES"> | number
  }

  export type NOTIFICATIONCreateWithoutSous_acteInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutSous_acteInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutSous_acteInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput>
  }

  export type NOTIFICATIONCreateManySous_acteInputEnvelope = {
    data: NOTIFICATIONCreateManySous_acteInput | NOTIFICATIONCreateManySous_acteInput[]
    skipDuplicates?: boolean
  }

  export type REALISATIONCreateWithoutSousActeInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    notifications?: NOTIFICATIONCreateNestedManyWithoutRealisationInput
    etudiant: ETUDIANTCreateNestedOneWithoutRealisationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutRealisationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateWithoutSousActeInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_Etudiant: number
    id_Prof?: number | null
    id_Paie?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput
  }

  export type REALISATIONCreateOrConnectWithoutSousActeInput = {
    where: REALISATIONWhereUniqueInput
    create: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput>
  }

  export type REALISATIONCreateManySousActeInputEnvelope = {
    data: REALISATIONCreateManySousActeInput | REALISATIONCreateManySousActeInput[]
    skipDuplicates?: boolean
  }

  export type ACTESCreateWithoutSous_actesInput = {
    Desc_Actes: string
    departement: DEPARTEMENTCreateNestedOneWithoutActesInput
  }

  export type ACTESUncheckedCreateWithoutSous_actesInput = {
    ID_Actes?: number
    Desc_Actes: string
    id_Dep: number
  }

  export type ACTESCreateOrConnectWithoutSous_actesInput = {
    where: ACTESWhereUniqueInput
    create: XOR<ACTESCreateWithoutSous_actesInput, ACTESUncheckedCreateWithoutSous_actesInput>
  }

  export type QUOTASCreateWithoutSous_actesInput = {
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    admin: ADMINISTRATEURCreateNestedOneWithoutQuotasInput
    departement: DEPARTEMENTCreateNestedOneWithoutQuotasInput
  }

  export type QUOTASUncheckedCreateWithoutSous_actesInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Dep: number
    id_Admin: number
  }

  export type QUOTASCreateOrConnectWithoutSous_actesInput = {
    where: QUOTASWhereUniqueInput
    create: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput>
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutSous_acteInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutSous_acteInput, NOTIFICATIONUncheckedUpdateWithoutSous_acteInput>
    create: XOR<NOTIFICATIONCreateWithoutSous_acteInput, NOTIFICATIONUncheckedCreateWithoutSous_acteInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutSous_acteInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutSous_acteInput, NOTIFICATIONUncheckedUpdateWithoutSous_acteInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutSous_acteInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutSous_acteInput>
  }

  export type REALISATIONUpsertWithWhereUniqueWithoutSousActeInput = {
    where: REALISATIONWhereUniqueInput
    update: XOR<REALISATIONUpdateWithoutSousActeInput, REALISATIONUncheckedUpdateWithoutSousActeInput>
    create: XOR<REALISATIONCreateWithoutSousActeInput, REALISATIONUncheckedCreateWithoutSousActeInput>
  }

  export type REALISATIONUpdateWithWhereUniqueWithoutSousActeInput = {
    where: REALISATIONWhereUniqueInput
    data: XOR<REALISATIONUpdateWithoutSousActeInput, REALISATIONUncheckedUpdateWithoutSousActeInput>
  }

  export type REALISATIONUpdateManyWithWhereWithoutSousActeInput = {
    where: REALISATIONScalarWhereInput
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyWithoutSousActeInput>
  }

  export type ACTESUpsertWithoutSous_actesInput = {
    update: XOR<ACTESUpdateWithoutSous_actesInput, ACTESUncheckedUpdateWithoutSous_actesInput>
    create: XOR<ACTESCreateWithoutSous_actesInput, ACTESUncheckedCreateWithoutSous_actesInput>
    where?: ACTESWhereInput
  }

  export type ACTESUpdateToOneWithWhereWithoutSous_actesInput = {
    where?: ACTESWhereInput
    data: XOR<ACTESUpdateWithoutSous_actesInput, ACTESUncheckedUpdateWithoutSous_actesInput>
  }

  export type ACTESUpdateWithoutSous_actesInput = {
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    departement?: DEPARTEMENTUpdateOneRequiredWithoutActesNestedInput
  }

  export type ACTESUncheckedUpdateWithoutSous_actesInput = {
    ID_Actes?: IntFieldUpdateOperationsInput | number
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    id_Dep?: IntFieldUpdateOperationsInput | number
  }

  export type QUOTASUpsertWithWhereUniqueWithoutSous_actesInput = {
    where: QUOTASWhereUniqueInput
    update: XOR<QUOTASUpdateWithoutSous_actesInput, QUOTASUncheckedUpdateWithoutSous_actesInput>
    create: XOR<QUOTASCreateWithoutSous_actesInput, QUOTASUncheckedCreateWithoutSous_actesInput>
  }

  export type QUOTASUpdateWithWhereUniqueWithoutSous_actesInput = {
    where: QUOTASWhereUniqueInput
    data: XOR<QUOTASUpdateWithoutSous_actesInput, QUOTASUncheckedUpdateWithoutSous_actesInput>
  }

  export type QUOTASUpdateManyWithWhereWithoutSous_actesInput = {
    where: QUOTASScalarWhereInput
    data: XOR<QUOTASUpdateManyMutationInput, QUOTASUncheckedUpdateManyWithoutSous_actesInput>
  }

  export type NOTIFICATIONCreateWithoutProfesseurInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutProfesseurInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutProfesseurInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput>
  }

  export type NOTIFICATIONCreateManyProfesseurInputEnvelope = {
    data: NOTIFICATIONCreateManyProfesseurInput | NOTIFICATIONCreateManyProfesseurInput[]
    skipDuplicates?: boolean
  }

  export type REALISATIONCreateWithoutProfesseurInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    notifications?: NOTIFICATIONCreateNestedManyWithoutRealisationInput
    etudiant: ETUDIANTCreateNestedOneWithoutRealisationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutRealisationsInput
    sousActe: SOUS_ACTESCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateWithoutProfesseurInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Paie?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput
  }

  export type REALISATIONCreateOrConnectWithoutProfesseurInput = {
    where: REALISATIONWhereUniqueInput
    create: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput>
  }

  export type REALISATIONCreateManyProfesseurInputEnvelope = {
    data: REALISATIONCreateManyProfesseurInput | REALISATIONCreateManyProfesseurInput[]
    skipDuplicates?: boolean
  }

  export type DEPARTEMENTCreateWithoutProfesseursInput = {
    Nom_Dep: string
    actes?: ACTESCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASCreateNestedManyWithoutDepartementInput
  }

  export type DEPARTEMENTUncheckedCreateWithoutProfesseursInput = {
    ID_Dep?: number
    Nom_Dep: string
    actes?: ACTESUncheckedCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTUncheckedCreateNestedManyWithoutDepartementInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutDepartementInput
  }

  export type DEPARTEMENTCreateOrConnectWithoutProfesseursInput = {
    where: DEPARTEMENTWhereUniqueInput
    create: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput>
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutProfesseurInput, NOTIFICATIONUncheckedUpdateWithoutProfesseurInput>
    create: XOR<NOTIFICATIONCreateWithoutProfesseurInput, NOTIFICATIONUncheckedCreateWithoutProfesseurInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutProfesseurInput, NOTIFICATIONUncheckedUpdateWithoutProfesseurInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutProfesseurInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutProfesseurInput>
  }

  export type REALISATIONUpsertWithWhereUniqueWithoutProfesseurInput = {
    where: REALISATIONWhereUniqueInput
    update: XOR<REALISATIONUpdateWithoutProfesseurInput, REALISATIONUncheckedUpdateWithoutProfesseurInput>
    create: XOR<REALISATIONCreateWithoutProfesseurInput, REALISATIONUncheckedCreateWithoutProfesseurInput>
  }

  export type REALISATIONUpdateWithWhereUniqueWithoutProfesseurInput = {
    where: REALISATIONWhereUniqueInput
    data: XOR<REALISATIONUpdateWithoutProfesseurInput, REALISATIONUncheckedUpdateWithoutProfesseurInput>
  }

  export type REALISATIONUpdateManyWithWhereWithoutProfesseurInput = {
    where: REALISATIONScalarWhereInput
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyWithoutProfesseurInput>
  }

  export type DEPARTEMENTUpsertWithWhereUniqueWithoutProfesseursInput = {
    where: DEPARTEMENTWhereUniqueInput
    update: XOR<DEPARTEMENTUpdateWithoutProfesseursInput, DEPARTEMENTUncheckedUpdateWithoutProfesseursInput>
    create: XOR<DEPARTEMENTCreateWithoutProfesseursInput, DEPARTEMENTUncheckedCreateWithoutProfesseursInput>
  }

  export type DEPARTEMENTUpdateWithWhereUniqueWithoutProfesseursInput = {
    where: DEPARTEMENTWhereUniqueInput
    data: XOR<DEPARTEMENTUpdateWithoutProfesseursInput, DEPARTEMENTUncheckedUpdateWithoutProfesseursInput>
  }

  export type DEPARTEMENTUpdateManyWithWhereWithoutProfesseursInput = {
    where: DEPARTEMENTScalarWhereInput
    data: XOR<DEPARTEMENTUpdateManyMutationInput, DEPARTEMENTUncheckedUpdateManyWithoutProfesseursInput>
  }

  export type DEPARTEMENTScalarWhereInput = {
    AND?: DEPARTEMENTScalarWhereInput | DEPARTEMENTScalarWhereInput[]
    OR?: DEPARTEMENTScalarWhereInput[]
    NOT?: DEPARTEMENTScalarWhereInput | DEPARTEMENTScalarWhereInput[]
    ID_Dep?: IntFilter<"DEPARTEMENT"> | number
    Nom_Dep?: StringFilter<"DEPARTEMENT"> | string
  }

  export type ADMINISTRATEURCreateWithoutQuotasInput = {
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUncheckedCreateWithoutQuotasInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURCreateOrConnectWithoutQuotasInput = {
    where: ADMINISTRATEURWhereUniqueInput
    create: XOR<ADMINISTRATEURCreateWithoutQuotasInput, ADMINISTRATEURUncheckedCreateWithoutQuotasInput>
  }

  export type DEPARTEMENTCreateWithoutQuotasInput = {
    Nom_Dep: string
    actes?: ACTESCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTUncheckedCreateWithoutQuotasInput = {
    ID_Dep?: number
    Nom_Dep: string
    actes?: ACTESUncheckedCreateNestedManyWithoutDepartementInput
    etudiants?: ETUDIANTUncheckedCreateNestedManyWithoutDepartementInput
    professeurs?: PROFESSEURSUncheckedCreateNestedManyWithoutDepartementsInput
  }

  export type DEPARTEMENTCreateOrConnectWithoutQuotasInput = {
    where: DEPARTEMENTWhereUniqueInput
    create: XOR<DEPARTEMENTCreateWithoutQuotasInput, DEPARTEMENTUncheckedCreateWithoutQuotasInput>
  }

  export type SOUS_ACTESCreateWithoutQuotasInput = {
    Desc_SActes: string
    Prix: number
    notifications?: NOTIFICATIONCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONCreateNestedManyWithoutSousActeInput
    acte: ACTESCreateNestedOneWithoutSous_actesInput
  }

  export type SOUS_ACTESUncheckedCreateWithoutQuotasInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutSous_acteInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutSousActeInput
  }

  export type SOUS_ACTESCreateOrConnectWithoutQuotasInput = {
    where: SOUS_ACTESWhereUniqueInput
    create: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput>
  }

  export type ADMINISTRATEURUpsertWithoutQuotasInput = {
    update: XOR<ADMINISTRATEURUpdateWithoutQuotasInput, ADMINISTRATEURUncheckedUpdateWithoutQuotasInput>
    create: XOR<ADMINISTRATEURCreateWithoutQuotasInput, ADMINISTRATEURUncheckedCreateWithoutQuotasInput>
    where?: ADMINISTRATEURWhereInput
  }

  export type ADMINISTRATEURUpdateToOneWithWhereWithoutQuotasInput = {
    where?: ADMINISTRATEURWhereInput
    data: XOR<ADMINISTRATEURUpdateWithoutQuotasInput, ADMINISTRATEURUncheckedUpdateWithoutQuotasInput>
  }

  export type ADMINISTRATEURUpdateWithoutQuotasInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURUncheckedUpdateWithoutQuotasInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type DEPARTEMENTUpsertWithoutQuotasInput = {
    update: XOR<DEPARTEMENTUpdateWithoutQuotasInput, DEPARTEMENTUncheckedUpdateWithoutQuotasInput>
    create: XOR<DEPARTEMENTCreateWithoutQuotasInput, DEPARTEMENTUncheckedCreateWithoutQuotasInput>
    where?: DEPARTEMENTWhereInput
  }

  export type DEPARTEMENTUpdateToOneWithWhereWithoutQuotasInput = {
    where?: DEPARTEMENTWhereInput
    data: XOR<DEPARTEMENTUpdateWithoutQuotasInput, DEPARTEMENTUncheckedUpdateWithoutQuotasInput>
  }

  export type DEPARTEMENTUpdateWithoutQuotasInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUpdateManyWithoutDepartementsNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateWithoutQuotasInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUncheckedUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUncheckedUpdateManyWithoutDepartementNestedInput
    professeurs?: PROFESSEURSUncheckedUpdateManyWithoutDepartementsNestedInput
  }

  export type SOUS_ACTESUpsertWithWhereUniqueWithoutQuotasInput = {
    where: SOUS_ACTESWhereUniqueInput
    update: XOR<SOUS_ACTESUpdateWithoutQuotasInput, SOUS_ACTESUncheckedUpdateWithoutQuotasInput>
    create: XOR<SOUS_ACTESCreateWithoutQuotasInput, SOUS_ACTESUncheckedCreateWithoutQuotasInput>
  }

  export type SOUS_ACTESUpdateWithWhereUniqueWithoutQuotasInput = {
    where: SOUS_ACTESWhereUniqueInput
    data: XOR<SOUS_ACTESUpdateWithoutQuotasInput, SOUS_ACTESUncheckedUpdateWithoutQuotasInput>
  }

  export type SOUS_ACTESUpdateManyWithWhereWithoutQuotasInput = {
    where: SOUS_ACTESScalarWhereInput
    data: XOR<SOUS_ACTESUpdateManyMutationInput, SOUS_ACTESUncheckedUpdateManyWithoutQuotasInput>
  }

  export type NOTIFICATIONCreateWithoutPaiementInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    realisation?: REALISATIONCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutPaiementInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutPaiementInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput>
  }

  export type NOTIFICATIONCreateManyPaiementInputEnvelope = {
    data: NOTIFICATIONCreateManyPaiementInput | NOTIFICATIONCreateManyPaiementInput[]
    skipDuplicates?: boolean
  }

  export type ADMINISTRATEURCreateWithoutPaiementsInput = {
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutAdminInput
    quotas?: QUOTASCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUncheckedCreateWithoutPaiementsInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutAdminInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURCreateOrConnectWithoutPaiementsInput = {
    where: ADMINISTRATEURWhereUniqueInput
    create: XOR<ADMINISTRATEURCreateWithoutPaiementsInput, ADMINISTRATEURUncheckedCreateWithoutPaiementsInput>
  }

  export type ETUDIANTCreateWithoutPaiementsInput = {
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    departement: DEPARTEMENTCreateNestedOneWithoutEtudiantsInput
    notifications?: NOTIFICATIONCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUncheckedCreateWithoutPaiementsInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    id_Dep: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTCreateOrConnectWithoutPaiementsInput = {
    where: ETUDIANTWhereUniqueInput
    create: XOR<ETUDIANTCreateWithoutPaiementsInput, ETUDIANTUncheckedCreateWithoutPaiementsInput>
  }

  export type REALISATIONCreateWithoutPaiementInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    notifications?: NOTIFICATIONCreateNestedManyWithoutRealisationInput
    etudiant: ETUDIANTCreateNestedOneWithoutRealisationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutRealisationsInput
    sousActe: SOUS_ACTESCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateWithoutPaiementInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof?: number | null
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutRealisationInput
  }

  export type REALISATIONCreateOrConnectWithoutPaiementInput = {
    where: REALISATIONWhereUniqueInput
    create: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput>
  }

  export type REALISATIONCreateManyPaiementInputEnvelope = {
    data: REALISATIONCreateManyPaiementInput | REALISATIONCreateManyPaiementInput[]
    skipDuplicates?: boolean
  }

  export type HISTORIQUE_PAIEMENTCreateWithoutPaiementInput = {
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    admin?: ADMINISTRATEURCreateNestedOneWithoutHistoriqueInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Admin?: number | null
  }

  export type HISTORIQUE_PAIEMENTCreateOrConnectWithoutPaiementInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    create: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput>
  }

  export type HISTORIQUE_PAIEMENTCreateManyPaiementInputEnvelope = {
    data: HISTORIQUE_PAIEMENTCreateManyPaiementInput | HISTORIQUE_PAIEMENTCreateManyPaiementInput[]
    skipDuplicates?: boolean
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutPaiementInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutPaiementInput, NOTIFICATIONUncheckedUpdateWithoutPaiementInput>
    create: XOR<NOTIFICATIONCreateWithoutPaiementInput, NOTIFICATIONUncheckedCreateWithoutPaiementInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutPaiementInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutPaiementInput, NOTIFICATIONUncheckedUpdateWithoutPaiementInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutPaiementInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutPaiementInput>
  }

  export type ADMINISTRATEURUpsertWithoutPaiementsInput = {
    update: XOR<ADMINISTRATEURUpdateWithoutPaiementsInput, ADMINISTRATEURUncheckedUpdateWithoutPaiementsInput>
    create: XOR<ADMINISTRATEURCreateWithoutPaiementsInput, ADMINISTRATEURUncheckedCreateWithoutPaiementsInput>
    where?: ADMINISTRATEURWhereInput
  }

  export type ADMINISTRATEURUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: ADMINISTRATEURWhereInput
    data: XOR<ADMINISTRATEURUpdateWithoutPaiementsInput, ADMINISTRATEURUncheckedUpdateWithoutPaiementsInput>
  }

  export type ADMINISTRATEURUpdateWithoutPaiementsInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURUncheckedUpdateWithoutPaiementsInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ETUDIANTUpsertWithoutPaiementsInput = {
    update: XOR<ETUDIANTUpdateWithoutPaiementsInput, ETUDIANTUncheckedUpdateWithoutPaiementsInput>
    create: XOR<ETUDIANTCreateWithoutPaiementsInput, ETUDIANTUncheckedCreateWithoutPaiementsInput>
    where?: ETUDIANTWhereInput
  }

  export type ETUDIANTUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: ETUDIANTWhereInput
    data: XOR<ETUDIANTUpdateWithoutPaiementsInput, ETUDIANTUncheckedUpdateWithoutPaiementsInput>
  }

  export type ETUDIANTUpdateWithoutPaiementsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: DEPARTEMENTUpdateOneRequiredWithoutEtudiantsNestedInput
    notifications?: NOTIFICATIONUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateWithoutPaiementsInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    id_Dep?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type REALISATIONUpsertWithWhereUniqueWithoutPaiementInput = {
    where: REALISATIONWhereUniqueInput
    update: XOR<REALISATIONUpdateWithoutPaiementInput, REALISATIONUncheckedUpdateWithoutPaiementInput>
    create: XOR<REALISATIONCreateWithoutPaiementInput, REALISATIONUncheckedCreateWithoutPaiementInput>
  }

  export type REALISATIONUpdateWithWhereUniqueWithoutPaiementInput = {
    where: REALISATIONWhereUniqueInput
    data: XOR<REALISATIONUpdateWithoutPaiementInput, REALISATIONUncheckedUpdateWithoutPaiementInput>
  }

  export type REALISATIONUpdateManyWithWhereWithoutPaiementInput = {
    where: REALISATIONScalarWhereInput
    data: XOR<REALISATIONUpdateManyMutationInput, REALISATIONUncheckedUpdateManyWithoutPaiementInput>
  }

  export type HISTORIQUE_PAIEMENTUpsertWithWhereUniqueWithoutPaiementInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    update: XOR<HISTORIQUE_PAIEMENTUpdateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedUpdateWithoutPaiementInput>
    create: XOR<HISTORIQUE_PAIEMENTCreateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedCreateWithoutPaiementInput>
  }

  export type HISTORIQUE_PAIEMENTUpdateWithWhereUniqueWithoutPaiementInput = {
    where: HISTORIQUE_PAIEMENTWhereUniqueInput
    data: XOR<HISTORIQUE_PAIEMENTUpdateWithoutPaiementInput, HISTORIQUE_PAIEMENTUncheckedUpdateWithoutPaiementInput>
  }

  export type HISTORIQUE_PAIEMENTUpdateManyWithWhereWithoutPaiementInput = {
    where: HISTORIQUE_PAIEMENTScalarWhereInput
    data: XOR<HISTORIQUE_PAIEMENTUpdateManyMutationInput, HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementInput>
  }

  export type ADMINISTRATEURCreateWithoutNotificationsInput = {
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    paiements?: PAIEMENTCreateNestedManyWithoutAdminInput
    quotas?: QUOTASCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUncheckedCreateWithoutNotificationsInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutAdminInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURCreateOrConnectWithoutNotificationsInput = {
    where: ADMINISTRATEURWhereUniqueInput
    create: XOR<ADMINISTRATEURCreateWithoutNotificationsInput, ADMINISTRATEURUncheckedCreateWithoutNotificationsInput>
  }

  export type ETUDIANTCreateWithoutNotificationsInput = {
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    departement: DEPARTEMENTCreateNestedOneWithoutEtudiantsInput
    paiements?: PAIEMENTCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUncheckedCreateWithoutNotificationsInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    id_Dep: number
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutEtudiantInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTCreateOrConnectWithoutNotificationsInput = {
    where: ETUDIANTWhereUniqueInput
    create: XOR<ETUDIANTCreateWithoutNotificationsInput, ETUDIANTUncheckedCreateWithoutNotificationsInput>
  }

  export type PAIEMENTCreateWithoutNotificationsInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    admin?: ADMINISTRATEURCreateNestedOneWithoutPaiementsInput
    etudiant: ETUDIANTCreateNestedOneWithoutPaiementsInput
    realisations?: REALISATIONCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateWithoutNotificationsInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    id_Etudiant: number
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTCreateOrConnectWithoutNotificationsInput = {
    where: PAIEMENTWhereUniqueInput
    create: XOR<PAIEMENTCreateWithoutNotificationsInput, PAIEMENTUncheckedCreateWithoutNotificationsInput>
  }

  export type PROFESSEURSCreateWithoutNotificationsInput = {
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    realisations?: REALISATIONCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSUncheckedCreateWithoutNotificationsInput = {
    ID_Prof?: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTUncheckedCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSCreateOrConnectWithoutNotificationsInput = {
    where: PROFESSEURSWhereUniqueInput
    create: XOR<PROFESSEURSCreateWithoutNotificationsInput, PROFESSEURSUncheckedCreateWithoutNotificationsInput>
  }

  export type REALISATIONCreateWithoutNotificationsInput = {
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    etudiant: ETUDIANTCreateNestedOneWithoutRealisationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutRealisationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutRealisationsInput
    sousActe: SOUS_ACTESCreateNestedOneWithoutRealisationsInput
  }

  export type REALISATIONUncheckedCreateWithoutNotificationsInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof?: number | null
    id_Paie?: number | null
  }

  export type REALISATIONCreateOrConnectWithoutNotificationsInput = {
    where: REALISATIONWhereUniqueInput
    create: XOR<REALISATIONCreateWithoutNotificationsInput, REALISATIONUncheckedCreateWithoutNotificationsInput>
  }

  export type SOUS_ACTESCreateWithoutNotificationsInput = {
    Desc_SActes: string
    Prix: number
    realisations?: REALISATIONCreateNestedManyWithoutSousActeInput
    acte: ACTESCreateNestedOneWithoutSous_actesInput
    quotas?: QUOTASCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESUncheckedCreateWithoutNotificationsInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutSousActeInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESCreateOrConnectWithoutNotificationsInput = {
    where: SOUS_ACTESWhereUniqueInput
    create: XOR<SOUS_ACTESCreateWithoutNotificationsInput, SOUS_ACTESUncheckedCreateWithoutNotificationsInput>
  }

  export type ADMINISTRATEURUpsertWithoutNotificationsInput = {
    update: XOR<ADMINISTRATEURUpdateWithoutNotificationsInput, ADMINISTRATEURUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ADMINISTRATEURCreateWithoutNotificationsInput, ADMINISTRATEURUncheckedCreateWithoutNotificationsInput>
    where?: ADMINISTRATEURWhereInput
  }

  export type ADMINISTRATEURUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ADMINISTRATEURWhereInput
    data: XOR<ADMINISTRATEURUpdateWithoutNotificationsInput, ADMINISTRATEURUncheckedUpdateWithoutNotificationsInput>
  }

  export type ADMINISTRATEURUpdateWithoutNotificationsInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    paiements?: PAIEMENTUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURUncheckedUpdateWithoutNotificationsInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    paiements?: PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutAdminNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ETUDIANTUpsertWithoutNotificationsInput = {
    update: XOR<ETUDIANTUpdateWithoutNotificationsInput, ETUDIANTUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ETUDIANTCreateWithoutNotificationsInput, ETUDIANTUncheckedCreateWithoutNotificationsInput>
    where?: ETUDIANTWhereInput
  }

  export type ETUDIANTUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ETUDIANTWhereInput
    data: XOR<ETUDIANTUpdateWithoutNotificationsInput, ETUDIANTUncheckedUpdateWithoutNotificationsInput>
  }

  export type ETUDIANTUpdateWithoutNotificationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: DEPARTEMENTUpdateOneRequiredWithoutEtudiantsNestedInput
    paiements?: PAIEMENTUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateWithoutNotificationsInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    id_Dep?: IntFieldUpdateOperationsInput | number
    paiements?: PAIEMENTUncheckedUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type PAIEMENTUpsertWithoutNotificationsInput = {
    update: XOR<PAIEMENTUpdateWithoutNotificationsInput, PAIEMENTUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PAIEMENTCreateWithoutNotificationsInput, PAIEMENTUncheckedCreateWithoutNotificationsInput>
    where?: PAIEMENTWhereInput
  }

  export type PAIEMENTUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PAIEMENTWhereInput
    data: XOR<PAIEMENTUpdateWithoutNotificationsInput, PAIEMENTUncheckedUpdateWithoutNotificationsInput>
  }

  export type PAIEMENTUpdateWithoutNotificationsInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    admin?: ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput
    realisations?: REALISATIONUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateWithoutNotificationsInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    realisations?: REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PROFESSEURSUpsertWithoutNotificationsInput = {
    update: XOR<PROFESSEURSUpdateWithoutNotificationsInput, PROFESSEURSUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PROFESSEURSCreateWithoutNotificationsInput, PROFESSEURSUncheckedCreateWithoutNotificationsInput>
    where?: PROFESSEURSWhereInput
  }

  export type PROFESSEURSUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PROFESSEURSWhereInput
    data: XOR<PROFESSEURSUpdateWithoutNotificationsInput, PROFESSEURSUncheckedUpdateWithoutNotificationsInput>
  }

  export type PROFESSEURSUpdateWithoutNotificationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    realisations?: REALISATIONUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUpdateManyWithoutProfesseursNestedInput
  }

  export type PROFESSEURSUncheckedUpdateWithoutNotificationsInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    realisations?: REALISATIONUncheckedUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUncheckedUpdateManyWithoutProfesseursNestedInput
  }

  export type REALISATIONUpsertWithoutNotificationsInput = {
    update: XOR<REALISATIONUpdateWithoutNotificationsInput, REALISATIONUncheckedUpdateWithoutNotificationsInput>
    create: XOR<REALISATIONCreateWithoutNotificationsInput, REALISATIONUncheckedCreateWithoutNotificationsInput>
    where?: REALISATIONWhereInput
  }

  export type REALISATIONUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: REALISATIONWhereInput
    data: XOR<REALISATIONUpdateWithoutNotificationsInput, REALISATIONUncheckedUpdateWithoutNotificationsInput>
  }

  export type REALISATIONUpdateWithoutNotificationsInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    etudiant?: ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutRealisationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutRealisationsNestedInput
    sousActe?: SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateWithoutNotificationsInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SOUS_ACTESUpsertWithoutNotificationsInput = {
    update: XOR<SOUS_ACTESUpdateWithoutNotificationsInput, SOUS_ACTESUncheckedUpdateWithoutNotificationsInput>
    create: XOR<SOUS_ACTESCreateWithoutNotificationsInput, SOUS_ACTESUncheckedCreateWithoutNotificationsInput>
    where?: SOUS_ACTESWhereInput
  }

  export type SOUS_ACTESUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: SOUS_ACTESWhereInput
    data: XOR<SOUS_ACTESUpdateWithoutNotificationsInput, SOUS_ACTESUncheckedUpdateWithoutNotificationsInput>
  }

  export type SOUS_ACTESUpdateWithoutNotificationsInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    realisations?: REALISATIONUpdateManyWithoutSousActeNestedInput
    acte?: ACTESUpdateOneRequiredWithoutSous_actesNestedInput
    quotas?: QUOTASUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateWithoutNotificationsInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
    realisations?: REALISATIONUncheckedUpdateManyWithoutSousActeNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutSous_actesNestedInput
  }

  export type NOTIFICATIONCreateWithoutRealisationInput = {
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    admin?: ADMINISTRATEURCreateNestedOneWithoutNotificationsInput
    etudiant?: ETUDIANTCreateNestedOneWithoutNotificationsInput
    paiement?: PAIEMENTCreateNestedOneWithoutNotificationsInput
    professeur?: PROFESSEURSCreateNestedOneWithoutNotificationsInput
    sous_acte?: SOUS_ACTESCreateNestedOneWithoutNotificationsInput
  }

  export type NOTIFICATIONUncheckedCreateWithoutRealisationInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
  }

  export type NOTIFICATIONCreateOrConnectWithoutRealisationInput = {
    where: NOTIFICATIONWhereUniqueInput
    create: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput>
  }

  export type NOTIFICATIONCreateManyRealisationInputEnvelope = {
    data: NOTIFICATIONCreateManyRealisationInput | NOTIFICATIONCreateManyRealisationInput[]
    skipDuplicates?: boolean
  }

  export type ETUDIANTCreateWithoutRealisationsInput = {
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    departement: DEPARTEMENTCreateNestedOneWithoutEtudiantsInput
    notifications?: NOTIFICATIONCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTUncheckedCreateWithoutRealisationsInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
    id_Dep: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutEtudiantInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type ETUDIANTCreateOrConnectWithoutRealisationsInput = {
    where: ETUDIANTWhereUniqueInput
    create: XOR<ETUDIANTCreateWithoutRealisationsInput, ETUDIANTUncheckedCreateWithoutRealisationsInput>
  }

  export type PAIEMENTCreateWithoutRealisationsInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    notifications?: NOTIFICATIONCreateNestedManyWithoutPaiementInput
    admin?: ADMINISTRATEURCreateNestedOneWithoutPaiementsInput
    etudiant: ETUDIANTCreateNestedOneWithoutPaiementsInput
    historique?: HISTORIQUE_PAIEMENTCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateWithoutRealisationsInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    id_Etudiant: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput
    historique?: HISTORIQUE_PAIEMENTUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTCreateOrConnectWithoutRealisationsInput = {
    where: PAIEMENTWhereUniqueInput
    create: XOR<PAIEMENTCreateWithoutRealisationsInput, PAIEMENTUncheckedCreateWithoutRealisationsInput>
  }

  export type PROFESSEURSCreateWithoutRealisationsInput = {
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSUncheckedCreateWithoutRealisationsInput = {
    ID_Prof?: number
    user_id: string
    Nom_Prof: string
    Email_Prof: string
    MotPass_Prof: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutProfesseurInput
    departements?: DEPARTEMENTUncheckedCreateNestedManyWithoutProfesseursInput
  }

  export type PROFESSEURSCreateOrConnectWithoutRealisationsInput = {
    where: PROFESSEURSWhereUniqueInput
    create: XOR<PROFESSEURSCreateWithoutRealisationsInput, PROFESSEURSUncheckedCreateWithoutRealisationsInput>
  }

  export type SOUS_ACTESCreateWithoutRealisationsInput = {
    Desc_SActes: string
    Prix: number
    notifications?: NOTIFICATIONCreateNestedManyWithoutSous_acteInput
    acte: ACTESCreateNestedOneWithoutSous_actesInput
    quotas?: QUOTASCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESUncheckedCreateWithoutRealisationsInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
    id_Actes: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutSous_acteInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutSous_actesInput
  }

  export type SOUS_ACTESCreateOrConnectWithoutRealisationsInput = {
    where: SOUS_ACTESWhereUniqueInput
    create: XOR<SOUS_ACTESCreateWithoutRealisationsInput, SOUS_ACTESUncheckedCreateWithoutRealisationsInput>
  }

  export type NOTIFICATIONUpsertWithWhereUniqueWithoutRealisationInput = {
    where: NOTIFICATIONWhereUniqueInput
    update: XOR<NOTIFICATIONUpdateWithoutRealisationInput, NOTIFICATIONUncheckedUpdateWithoutRealisationInput>
    create: XOR<NOTIFICATIONCreateWithoutRealisationInput, NOTIFICATIONUncheckedCreateWithoutRealisationInput>
  }

  export type NOTIFICATIONUpdateWithWhereUniqueWithoutRealisationInput = {
    where: NOTIFICATIONWhereUniqueInput
    data: XOR<NOTIFICATIONUpdateWithoutRealisationInput, NOTIFICATIONUncheckedUpdateWithoutRealisationInput>
  }

  export type NOTIFICATIONUpdateManyWithWhereWithoutRealisationInput = {
    where: NOTIFICATIONScalarWhereInput
    data: XOR<NOTIFICATIONUpdateManyMutationInput, NOTIFICATIONUncheckedUpdateManyWithoutRealisationInput>
  }

  export type ETUDIANTUpsertWithoutRealisationsInput = {
    update: XOR<ETUDIANTUpdateWithoutRealisationsInput, ETUDIANTUncheckedUpdateWithoutRealisationsInput>
    create: XOR<ETUDIANTCreateWithoutRealisationsInput, ETUDIANTUncheckedCreateWithoutRealisationsInput>
    where?: ETUDIANTWhereInput
  }

  export type ETUDIANTUpdateToOneWithWhereWithoutRealisationsInput = {
    where?: ETUDIANTWhereInput
    data: XOR<ETUDIANTUpdateWithoutRealisationsInput, ETUDIANTUncheckedUpdateWithoutRealisationsInput>
  }

  export type ETUDIANTUpdateWithoutRealisationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: DEPARTEMENTUpdateOneRequiredWithoutEtudiantsNestedInput
    notifications?: NOTIFICATIONUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateWithoutRealisationsInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    id_Dep?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type PAIEMENTUpsertWithoutRealisationsInput = {
    update: XOR<PAIEMENTUpdateWithoutRealisationsInput, PAIEMENTUncheckedUpdateWithoutRealisationsInput>
    create: XOR<PAIEMENTCreateWithoutRealisationsInput, PAIEMENTUncheckedCreateWithoutRealisationsInput>
    where?: PAIEMENTWhereInput
  }

  export type PAIEMENTUpdateToOneWithWhereWithoutRealisationsInput = {
    where?: PAIEMENTWhereInput
    data: XOR<PAIEMENTUpdateWithoutRealisationsInput, PAIEMENTUncheckedUpdateWithoutRealisationsInput>
  }

  export type PAIEMENTUpdateWithoutRealisationsInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    notifications?: NOTIFICATIONUpdateManyWithoutPaiementNestedInput
    admin?: ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateWithoutRealisationsInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PROFESSEURSUpsertWithoutRealisationsInput = {
    update: XOR<PROFESSEURSUpdateWithoutRealisationsInput, PROFESSEURSUncheckedUpdateWithoutRealisationsInput>
    create: XOR<PROFESSEURSCreateWithoutRealisationsInput, PROFESSEURSUncheckedCreateWithoutRealisationsInput>
    where?: PROFESSEURSWhereInput
  }

  export type PROFESSEURSUpdateToOneWithWhereWithoutRealisationsInput = {
    where?: PROFESSEURSWhereInput
    data: XOR<PROFESSEURSUpdateWithoutRealisationsInput, PROFESSEURSUncheckedUpdateWithoutRealisationsInput>
  }

  export type PROFESSEURSUpdateWithoutRealisationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUpdateManyWithoutProfesseursNestedInput
  }

  export type PROFESSEURSUncheckedUpdateWithoutRealisationsInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutProfesseurNestedInput
    departements?: DEPARTEMENTUncheckedUpdateManyWithoutProfesseursNestedInput
  }

  export type SOUS_ACTESUpsertWithoutRealisationsInput = {
    update: XOR<SOUS_ACTESUpdateWithoutRealisationsInput, SOUS_ACTESUncheckedUpdateWithoutRealisationsInput>
    create: XOR<SOUS_ACTESCreateWithoutRealisationsInput, SOUS_ACTESUncheckedCreateWithoutRealisationsInput>
    where?: SOUS_ACTESWhereInput
  }

  export type SOUS_ACTESUpdateToOneWithWhereWithoutRealisationsInput = {
    where?: SOUS_ACTESWhereInput
    data: XOR<SOUS_ACTESUpdateWithoutRealisationsInput, SOUS_ACTESUncheckedUpdateWithoutRealisationsInput>
  }

  export type SOUS_ACTESUpdateWithoutRealisationsInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUpdateManyWithoutSous_acteNestedInput
    acte?: ACTESUpdateOneRequiredWithoutSous_actesNestedInput
    quotas?: QUOTASUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateWithoutRealisationsInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutSous_acteNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutSous_actesNestedInput
  }

  export type PAIEMENTCreateWithoutHistoriqueInput = {
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    notifications?: NOTIFICATIONCreateNestedManyWithoutPaiementInput
    admin?: ADMINISTRATEURCreateNestedOneWithoutPaiementsInput
    etudiant: ETUDIANTCreateNestedOneWithoutPaiementsInput
    realisations?: REALISATIONCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTUncheckedCreateWithoutHistoriqueInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
    id_Etudiant: number
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutPaiementInput
    realisations?: REALISATIONUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PAIEMENTCreateOrConnectWithoutHistoriqueInput = {
    where: PAIEMENTWhereUniqueInput
    create: XOR<PAIEMENTCreateWithoutHistoriqueInput, PAIEMENTUncheckedCreateWithoutHistoriqueInput>
  }

  export type ADMINISTRATEURCreateWithoutHistoriqueInput = {
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTCreateNestedManyWithoutAdminInput
    quotas?: QUOTASCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURUncheckedCreateWithoutHistoriqueInput = {
    ID_Admin?: number
    Nom_Admin: string
    Email_Admin: string
    MotPass_Admin: string
    id_Quotas?: number | null
    id_Paie?: number | null
    user_id: string
    notifications?: NOTIFICATIONUncheckedCreateNestedManyWithoutAdminInput
    paiements?: PAIEMENTUncheckedCreateNestedManyWithoutAdminInput
    quotas?: QUOTASUncheckedCreateNestedManyWithoutAdminInput
  }

  export type ADMINISTRATEURCreateOrConnectWithoutHistoriqueInput = {
    where: ADMINISTRATEURWhereUniqueInput
    create: XOR<ADMINISTRATEURCreateWithoutHistoriqueInput, ADMINISTRATEURUncheckedCreateWithoutHistoriqueInput>
  }

  export type PAIEMENTUpsertWithoutHistoriqueInput = {
    update: XOR<PAIEMENTUpdateWithoutHistoriqueInput, PAIEMENTUncheckedUpdateWithoutHistoriqueInput>
    create: XOR<PAIEMENTCreateWithoutHistoriqueInput, PAIEMENTUncheckedCreateWithoutHistoriqueInput>
    where?: PAIEMENTWhereInput
  }

  export type PAIEMENTUpdateToOneWithWhereWithoutHistoriqueInput = {
    where?: PAIEMENTWhereInput
    data: XOR<PAIEMENTUpdateWithoutHistoriqueInput, PAIEMENTUncheckedUpdateWithoutHistoriqueInput>
  }

  export type PAIEMENTUpdateWithoutHistoriqueInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    notifications?: NOTIFICATIONUpdateManyWithoutPaiementNestedInput
    admin?: ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput
    realisations?: REALISATIONUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateWithoutHistoriqueInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type ADMINISTRATEURUpsertWithoutHistoriqueInput = {
    update: XOR<ADMINISTRATEURUpdateWithoutHistoriqueInput, ADMINISTRATEURUncheckedUpdateWithoutHistoriqueInput>
    create: XOR<ADMINISTRATEURCreateWithoutHistoriqueInput, ADMINISTRATEURUncheckedCreateWithoutHistoriqueInput>
    where?: ADMINISTRATEURWhereInput
  }

  export type ADMINISTRATEURUpdateToOneWithWhereWithoutHistoriqueInput = {
    where?: ADMINISTRATEURWhereInput
    data: XOR<ADMINISTRATEURUpdateWithoutHistoriqueInput, ADMINISTRATEURUncheckedUpdateWithoutHistoriqueInput>
  }

  export type ADMINISTRATEURUpdateWithoutHistoriqueInput = {
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUpdateManyWithoutAdminNestedInput
  }

  export type ADMINISTRATEURUncheckedUpdateWithoutHistoriqueInput = {
    ID_Admin?: IntFieldUpdateOperationsInput | number
    Nom_Admin?: StringFieldUpdateOperationsInput | string
    Email_Admin?: StringFieldUpdateOperationsInput | string
    MotPass_Admin?: StringFieldUpdateOperationsInput | string
    id_Quotas?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutAdminNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutAdminNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type NOTIFICATIONCreateManyAdminInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Realisation?: number | null
  }

  export type PAIEMENTCreateManyAdminInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Etudiant: number
  }

  export type QUOTASCreateManyAdminInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Dep: number
  }

  export type HISTORIQUE_PAIEMENTCreateManyAdminInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Paie: number
  }

  export type NOTIFICATIONUpdateWithoutAdminInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutAdminInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutAdminInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PAIEMENTUpdateWithoutAdminInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    notifications?: NOTIFICATIONUpdateManyWithoutPaiementNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutPaiementsNestedInput
    realisations?: REALISATIONUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateWithoutAdminInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateManyWithoutAdminInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Etudiant?: IntFieldUpdateOperationsInput | number
  }

  export type QUOTASUpdateWithoutAdminInput = {
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    departement?: DEPARTEMENTUpdateOneRequiredWithoutQuotasNestedInput
    sous_actes?: SOUS_ACTESUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateWithoutAdminInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    sous_actes?: SOUS_ACTESUncheckedUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateManyWithoutAdminInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
  }

  export type HISTORIQUE_PAIEMENTUpdateWithoutAdminInput = {
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    paiement?: PAIEMENTUpdateOneRequiredWithoutHistoriqueNestedInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateWithoutAdminInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paie?: IntFieldUpdateOperationsInput | number
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutAdminInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paie?: IntFieldUpdateOperationsInput | number
  }

  export type NOTIFICATIONCreateManyEtudiantInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type PAIEMENTCreateManyEtudiantInput = {
    ID_Paie?: number
    Montant: number
    Montant_Restant?: number | null
    Date_Paie: Date | string
    Statut_Paie: $Enums.StatutPaiement
    id_Admin?: number | null
  }

  export type REALISATIONCreateManyEtudiantInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Prof?: number | null
    id_Paie?: number | null
  }

  export type NOTIFICATIONUpdateWithoutEtudiantInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutEtudiantInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutEtudiantInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PAIEMENTUpdateWithoutEtudiantInput = {
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    notifications?: NOTIFICATIONUpdateManyWithoutPaiementNestedInput
    admin?: ADMINISTRATEURUpdateOneWithoutPaiementsNestedInput
    realisations?: REALISATIONUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateWithoutEtudiantInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutPaiementNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutPaiementNestedInput
    historique?: HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PAIEMENTUncheckedUpdateManyWithoutEtudiantInput = {
    ID_Paie?: IntFieldUpdateOperationsInput | number
    Montant?: FloatFieldUpdateOperationsInput | number
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Paie?: DateTimeFieldUpdateOperationsInput | Date | string
    Statut_Paie?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REALISATIONUpdateWithoutEtudiantInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NOTIFICATIONUpdateManyWithoutRealisationNestedInput
    paiement?: PAIEMENTUpdateOneWithoutRealisationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutRealisationsNestedInput
    sousActe?: SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateWithoutEtudiantInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput
  }

  export type REALISATIONUncheckedUpdateManyWithoutEtudiantInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ACTESCreateManyDepartementInput = {
    ID_Actes?: number
    Desc_Actes: string
  }

  export type ETUDIANTCreateManyDepartementInput = {
    ID_Etudiant?: number
    user_id: string
    FullName_Et: string
    Email_Et: string
    Annee_Et: string
    Dette?: number | null
    MotPass_Et: string
    Photo_Et?: string | null
  }

  export type QUOTASCreateManyDepartementInput = {
    ID_Quotas?: number
    Annee: string
    Nombre: number
    Date_Debut: Date | string
    Date_Fin: Date | string
    id_Admin: number
  }

  export type ACTESUpdateWithoutDepartementInput = {
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    sous_actes?: SOUS_ACTESUpdateManyWithoutActeNestedInput
  }

  export type ACTESUncheckedUpdateWithoutDepartementInput = {
    ID_Actes?: IntFieldUpdateOperationsInput | number
    Desc_Actes?: StringFieldUpdateOperationsInput | string
    sous_actes?: SOUS_ACTESUncheckedUpdateManyWithoutActeNestedInput
  }

  export type ACTESUncheckedUpdateManyWithoutDepartementInput = {
    ID_Actes?: IntFieldUpdateOperationsInput | number
    Desc_Actes?: StringFieldUpdateOperationsInput | string
  }

  export type ETUDIANTUpdateWithoutDepartementInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NOTIFICATIONUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateWithoutDepartementInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutEtudiantNestedInput
    paiements?: PAIEMENTUncheckedUpdateManyWithoutEtudiantNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type ETUDIANTUncheckedUpdateManyWithoutDepartementInput = {
    ID_Etudiant?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    FullName_Et?: StringFieldUpdateOperationsInput | string
    Email_Et?: StringFieldUpdateOperationsInput | string
    Annee_Et?: StringFieldUpdateOperationsInput | string
    Dette?: NullableFloatFieldUpdateOperationsInput | number | null
    MotPass_Et?: StringFieldUpdateOperationsInput | string
    Photo_Et?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QUOTASUpdateWithoutDepartementInput = {
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: ADMINISTRATEURUpdateOneRequiredWithoutQuotasNestedInput
    sous_actes?: SOUS_ACTESUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateWithoutDepartementInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Admin?: IntFieldUpdateOperationsInput | number
    sous_actes?: SOUS_ACTESUncheckedUpdateManyWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateManyWithoutDepartementInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Admin?: IntFieldUpdateOperationsInput | number
  }

  export type PROFESSEURSUpdateWithoutDepartementsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUpdateManyWithoutProfesseurNestedInput
    realisations?: REALISATIONUpdateManyWithoutProfesseurNestedInput
  }

  export type PROFESSEURSUncheckedUpdateWithoutDepartementsInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutProfesseurNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutProfesseurNestedInput
  }

  export type PROFESSEURSUncheckedUpdateManyWithoutDepartementsInput = {
    ID_Prof?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    Nom_Prof?: StringFieldUpdateOperationsInput | string
    Email_Prof?: StringFieldUpdateOperationsInput | string
    MotPass_Prof?: StringFieldUpdateOperationsInput | string
  }

  export type SOUS_ACTESCreateManyActeInput = {
    ID_SActes?: number
    Desc_SActes: string
    Prix: number
  }

  export type SOUS_ACTESUpdateWithoutActeInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUpdateManyWithoutSousActeNestedInput
    quotas?: QUOTASUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateWithoutActeInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutSousActeNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateManyWithoutActeInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
  }

  export type NOTIFICATIONCreateManySous_acteInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type REALISATIONCreateManySousActeInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_Etudiant: number
    id_Prof?: number | null
    id_Paie?: number | null
  }

  export type NOTIFICATIONUpdateWithoutSous_acteInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutSous_acteInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutSous_acteInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REALISATIONUpdateWithoutSousActeInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NOTIFICATIONUpdateManyWithoutRealisationNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutRealisationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateWithoutSousActeInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput
  }

  export type REALISATIONUncheckedUpdateManyWithoutSousActeInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QUOTASUpdateWithoutSous_actesInput = {
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: ADMINISTRATEURUpdateOneRequiredWithoutQuotasNestedInput
    departement?: DEPARTEMENTUpdateOneRequiredWithoutQuotasNestedInput
  }

  export type QUOTASUncheckedUpdateWithoutSous_actesInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    id_Admin?: IntFieldUpdateOperationsInput | number
  }

  export type QUOTASUncheckedUpdateManyWithoutSous_actesInput = {
    ID_Quotas?: IntFieldUpdateOperationsInput | number
    Annee?: StringFieldUpdateOperationsInput | string
    Nombre?: IntFieldUpdateOperationsInput | number
    Date_Debut?: DateTimeFieldUpdateOperationsInput | Date | string
    Date_Fin?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Dep?: IntFieldUpdateOperationsInput | number
    id_Admin?: IntFieldUpdateOperationsInput | number
  }

  export type NOTIFICATIONCreateManyProfesseurInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type REALISATIONCreateManyProfesseurInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Paie?: number | null
  }

  export type NOTIFICATIONUpdateWithoutProfesseurInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutProfesseurInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutProfesseurInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REALISATIONUpdateWithoutProfesseurInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NOTIFICATIONUpdateManyWithoutRealisationNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutRealisationsNestedInput
    sousActe?: SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateWithoutProfesseurInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput
  }

  export type REALISATIONUncheckedUpdateManyWithoutProfesseurInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DEPARTEMENTUpdateWithoutProfesseursInput = {
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUpdateManyWithoutDepartementNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateWithoutProfesseursInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
    actes?: ACTESUncheckedUpdateManyWithoutDepartementNestedInput
    etudiants?: ETUDIANTUncheckedUpdateManyWithoutDepartementNestedInput
    quotas?: QUOTASUncheckedUpdateManyWithoutDepartementNestedInput
  }

  export type DEPARTEMENTUncheckedUpdateManyWithoutProfesseursInput = {
    ID_Dep?: IntFieldUpdateOperationsInput | number
    Nom_Dep?: StringFieldUpdateOperationsInput | string
  }

  export type SOUS_ACTESUpdateWithoutQuotasInput = {
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUpdateManyWithoutSousActeNestedInput
    acte?: ACTESUpdateOneRequiredWithoutSous_actesNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateWithoutQuotasInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutSous_acteNestedInput
    realisations?: REALISATIONUncheckedUpdateManyWithoutSousActeNestedInput
  }

  export type SOUS_ACTESUncheckedUpdateManyWithoutQuotasInput = {
    ID_SActes?: IntFieldUpdateOperationsInput | number
    Desc_SActes?: StringFieldUpdateOperationsInput | string
    Prix?: FloatFieldUpdateOperationsInput | number
    id_Actes?: IntFieldUpdateOperationsInput | number
  }

  export type NOTIFICATIONCreateManyPaiementInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
    id_Realisation?: number | null
  }

  export type REALISATIONCreateManyPaiementInput = {
    ID_Realisation?: number
    Date_Realise: Date | string
    Note?: number | null
    Statut_Valide?: boolean
    id_SActes: number
    id_Etudiant: number
    id_Prof?: number | null
  }

  export type HISTORIQUE_PAIEMENTCreateManyPaiementInput = {
    ID_Hist?: number
    Action: string
    AncienStatut: $Enums.StatutPaiement
    NouveauStatut: $Enums.StatutPaiement
    Montant?: number | null
    Montant_Restant?: number | null
    Date_Action?: Date | string
    id_Admin?: number | null
  }

  export type NOTIFICATIONUpdateWithoutPaiementInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    realisation?: REALISATIONUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutPaiementInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutPaiementInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
    id_Realisation?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type REALISATIONUpdateWithoutPaiementInput = {
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NOTIFICATIONUpdateManyWithoutRealisationNestedInput
    etudiant?: ETUDIANTUpdateOneRequiredWithoutRealisationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutRealisationsNestedInput
    sousActe?: SOUS_ACTESUpdateOneRequiredWithoutRealisationsNestedInput
  }

  export type REALISATIONUncheckedUpdateWithoutPaiementInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    notifications?: NOTIFICATIONUncheckedUpdateManyWithoutRealisationNestedInput
  }

  export type REALISATIONUncheckedUpdateManyWithoutPaiementInput = {
    ID_Realisation?: IntFieldUpdateOperationsInput | number
    Date_Realise?: DateTimeFieldUpdateOperationsInput | Date | string
    Note?: NullableFloatFieldUpdateOperationsInput | number | null
    Statut_Valide?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: IntFieldUpdateOperationsInput | number
    id_Etudiant?: IntFieldUpdateOperationsInput | number
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HISTORIQUE_PAIEMENTUpdateWithoutPaiementInput = {
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: ADMINISTRATEURUpdateOneWithoutHistoriqueNestedInput
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateWithoutPaiementInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HISTORIQUE_PAIEMENTUncheckedUpdateManyWithoutPaiementInput = {
    ID_Hist?: IntFieldUpdateOperationsInput | number
    Action?: StringFieldUpdateOperationsInput | string
    AncienStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    NouveauStatut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    Montant?: NullableFloatFieldUpdateOperationsInput | number | null
    Montant_Restant?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_Action?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONCreateManyRealisationInput = {
    ID_Notification?: number
    Message: string
    Type: $Enums.TypeNotification
    Date_Envoi?: Date | string
    Lu?: boolean
    id_SActes?: number | null
    id_Paie?: number | null
    id_Etudiant?: number | null
    id_Prof?: number | null
    id_Admin?: number | null
  }

  export type NOTIFICATIONUpdateWithoutRealisationInput = {
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    admin?: ADMINISTRATEURUpdateOneWithoutNotificationsNestedInput
    etudiant?: ETUDIANTUpdateOneWithoutNotificationsNestedInput
    paiement?: PAIEMENTUpdateOneWithoutNotificationsNestedInput
    professeur?: PROFESSEURSUpdateOneWithoutNotificationsNestedInput
    sous_acte?: SOUS_ACTESUpdateOneWithoutNotificationsNestedInput
  }

  export type NOTIFICATIONUncheckedUpdateWithoutRealisationInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NOTIFICATIONUncheckedUpdateManyWithoutRealisationInput = {
    ID_Notification?: IntFieldUpdateOperationsInput | number
    Message?: StringFieldUpdateOperationsInput | string
    Type?: EnumTypeNotificationFieldUpdateOperationsInput | $Enums.TypeNotification
    Date_Envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    Lu?: BoolFieldUpdateOperationsInput | boolean
    id_SActes?: NullableIntFieldUpdateOperationsInput | number | null
    id_Paie?: NullableIntFieldUpdateOperationsInput | number | null
    id_Etudiant?: NullableIntFieldUpdateOperationsInput | number | null
    id_Prof?: NullableIntFieldUpdateOperationsInput | number | null
    id_Admin?: NullableIntFieldUpdateOperationsInput | number | null
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