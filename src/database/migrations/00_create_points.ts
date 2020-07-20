import Knex from 'knex'

export async function up(knex :Knex){
    //criar tabela
   return knex.schema.createTable('point', table =>{
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('longitude').notNullable();
        table.decimal('latitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}
export async function down(knex: Knex){
    //voltar atras caso de errado(detetar tabela)
    return knex.schema.dropTable('point');
}