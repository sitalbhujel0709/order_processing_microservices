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
  pgm.createTable('orders',{
    id: {type:'uuid',primaryKey:true,default:pgm.func('gen_random_uuid()')},
    product_id: {type:'uuid',notNull:true},
    status: {type:'varchar(50)',notNull:true,default:'pending'},
    quantity: {type:'integer',notNull:true},
    unit_price: {type:'numeric(10,2)',notNull:true},
    created_at: {type:'timestamp',notNull:true,default:pgm.func('now()')},
    updated_at: {type:'timestamp',notNull:true,default:pgm.func('now()')}
  })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('orders');
};
