
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProductScalarFieldEnum = {
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
  brands: 'brands'
};

exports.Prisma.VariationScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
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

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionToken: 'sessionToken'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  productId: 'productId',
  variationId: 'variationId',
  quantity: 'quantity',
  price: 'price'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expiresAt: 'expiresAt'
};

exports.Prisma.AppSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.VisitorScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  userAgent: 'userAgent',
  referrer: 'referrer',
  timestamp: 'timestamp',
  visitCount: 'visitCount'
};

exports.Prisma.PageVisitScalarFieldEnum = {
  id: 'id',
  url: 'url',
  visitorId: 'visitorId',
  ip: 'ip',
  referrer: 'referrer',
  timestamp: 'timestamp',
  visitCount: 'visitCount'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionToken: 'sessionToken',
  productId: 'productId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
