// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NewCar extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewCar entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewCar entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewCar", id.toString(), this);
  }

  static load(id: string): NewCar | null {
    return store.get("NewCar", id) as NewCar | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get carAddress(): Bytes {
    let value = this.get("carAddress");
    return value.toBytes();
  }

  set carAddress(value: Bytes) {
    this.set("carAddress", Value.fromBytes(value));
  }
}

export class CarSpec extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CarSpec entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CarSpec entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CarSpec", id.toString(), this);
  }

  static load(id: string): CarSpec | null {
    return store.get("CarSpec", id) as CarSpec | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get specs(): string | null {
    let value = this.get("specs");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set specs(value: string | null) {
    if (value === null) {
      this.unset("specs");
    } else {
      this.set("specs", Value.fromString(value as string));
    }
  }
}
