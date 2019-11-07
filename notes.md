# Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their name, species, and all zoos in which they have resided (including zoo name and address).

For the `zoos` the client wants to record:
 - name
 - address

For the `animals` the client wants to record 
- name
- species
- list of all the zoos where they have resided

Determine the database tables necessary to track this information.

Label any relationships between table.


## A good data model 
 - captures ALL the information the system needs
 - captures ONLY the information the system needs
 - reflect reality (from the point of view of the system)
 - is flexible, can evolve with the system
 - guarantee `data integrity`, without sacrificing too much performance;
 - is driven by the way we access data. 


## Components 
- entities  (noun: zoo,animals,species), like a resource => tables.
- Properties => columns, fields. 
- Relationships =>  Foreign Keys (FK),


## Workflow  

- identify entities (real and transactional)
- identify relationships
- identify properties 


## Relationships
- one to one
_there are may animals in one species_
_one species can have many animals_

- one to many
    -this is the most common! 
    
- many to many

 _there can be more than one animal in a zoo_
 _an animal could visit more than one zoo_
 


##  Mantras
- Every table must have a => Primary keys ** 
- work on **two or three** entities at a time.
- **one to many** relationships are modeled using a **Foreign key**
- the **Foreign key** always goes to the many side
- the **Foreign key Column**  must be the same type as the **Primary Keys** it reference.  ex: string, int, .. 
-  **many to many** relationship  are modeled using a *third table*
- the third table could include other columns
























