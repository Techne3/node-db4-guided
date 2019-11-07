
exports.up = function(knex) {
    return knex.schema
    .createTable('species', tbl => {
        // the type of the Primary Key is: integer without negative values, also called unsigned
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        // define our Foreign Key
        tbl
            .integer('species_id')
            .unsigned()
            .references('id')
            .inTable('species')
            .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
            .onUpdate('CASCADE'); // about changing the value of the primary key table.
        // we have bears and a few animals that are bears.
    })
    .createTable('animal_zoos', tbl => {
        tbl.increments();
        tbl
        .integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        tbl.date('from');
        tbl.date('to');
        
        tbl
            .integer('animal_id')
            .unsigned()
            .references('id')
            .inTable('animals')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
       
    })
    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('address', 255);
    });
};


exports.down = function(knex) {
    // drop tables in reverse order when using foreign keys
    return knex.schema
    .dropTableExist('animal_zoo')

};
