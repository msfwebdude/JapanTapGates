/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.raw(
    `
      CREATE TABLE IF NOT EXISTS public.accounts
      (
          uuid uuid NOT NULL DEFAULT gen_random_uuid(),
          active boolean DEFAULT true,
          created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
          updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
          name character varying(255) COLLATE pg_catalog."default",
          balance numeric(12,2) DEFAULT 0,
          transactions_table character varying(255) COLLATE pg_catalog."default" DEFAULT 'transactions_a'::character varying,
          CONSTRAINT accounts_pkey PRIMARY KEY (uuid)
      )

      TABLESPACE pg_default;

      ALTER TABLE IF EXISTS public.accounts
          OWNER to postgres;

      CREATE INDEX IF NOT EXISTS uuid_index
          ON public.accounts USING btree
          (uuid ASC NULLS LAST)
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
      DROP INDEX uuid_index;
      DROP TABLE accounts;
    `
  );
};
