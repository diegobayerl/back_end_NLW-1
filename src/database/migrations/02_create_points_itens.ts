import Knex from 'knex'

export async function up(knex :Knex){
    //criar tabela
   return knex.schema.createTable('point_items', table =>{
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('point');

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('item');
    });
}
export async function down(knex: Knex){
    //voltar atras caso de errado(detetar tabela)
    return knex.schema.dropTable('point_items');
}