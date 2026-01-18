/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.raw(
    `
      CREATE TABLE IF NOT EXISTS public.transactions_a
      (
          uuid uuid NOT NULL DEFAULT gen_random_uuid(),
          account_uuid uuid NOT NULL,
          created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
          transaction json,
          CONSTRAINT "transactions_a_pkey" PRIMARY KEY (uuid)
      )

      TABLESPACE pg_default;

      ALTER TABLE IF EXISTS public.transactions_a
          OWNER to postgres;


      CREATE INDEX IF NOT EXISTS transactionsa_account_uuid_index
          ON public.transactions_a USING btree
          (account_uuid ASC NULLS LAST)
          WITH (fillfactor=100, deduplicate_items=True)
          TABLESPACE pg_default;
    `
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.raw(
    `
      DROP INDEX transactionsa_account_uuid_index;
      DROP TABLE transactions_a;
    `
  );
};