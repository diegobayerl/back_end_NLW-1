import Knex from 'knex'

export async function up(knex :Knex){
    //criar tabela
   return knex.schema.createTable('item', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}
export async function down(knex: Knex){
    //voltar atras caso de errado(detetar tabela)
    return knex.schema.dropTable('item');
}