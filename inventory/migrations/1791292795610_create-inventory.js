/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable("inventory",{
    id:{
      type:'uuid',
      primaryKey:true,
      default: pgm.func("gen_random_uuid()")
    },
    quantity:{
      type:'integer',
      notNull:true,
      check: "quantity >= 0"
    },
    sale_price:{
      type:'numeric(10,2)',
      notNull:'true',
      check: "sale_price >= 0"
    },
    productId:{
      type:"uuid",
      references:"products(id)",
      onDelete:"CASCADE"
    }
  })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable("inventory")
};
