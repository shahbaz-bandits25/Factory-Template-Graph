import { BigInt, ethereum } from "@graphprotocol/graph-ts"
//import { CarFactory, NewCar } from "../generated/CarFactory/CarFactory"
import { NewCar as EventNewCar } from "../generated/CarFactory/CarFactory"
import { NewCar } from "../generated/schema"
import {Car} from "../generated/templates"

export function handleNewCar(event: EventNewCar): void {

  let entity = new NewCar(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.carAddress = event.params.carAddress;
  Car.create(event.params.carAddress)
  entity.save()  







  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.carAddress = event.params.carAddress

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // // Note: If a handler doesn't require existing field values, it is faster
  // // _not_ to load the entity from the store. Instead, create it fresh with
  // // `new Entity(...)`, set the fields that should be updated and save the
  // // entity back to the store. Fields that were not set or unset remain
  // // unchanged, allowing for partial updates to be applied.

  // // It is also possible to access smart contracts from mappings. For
  // // example, the contract that has emitted the event can be connected to
  // // with:
  // //
  // // let contract = Contract.bind(event.address)
  // //
  // // The following functions can then be called on this contract to access
  // // state variables and other data:
  // //
  // // - contract.getCarSpec(...)
  // // - contract.getCarSpecification(...)
}
