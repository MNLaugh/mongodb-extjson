// deno-lint-ignore-file no-explicit-any
function toExtendedJSON() {
  return { $minKey: 1 };
}

function fromExtendedJSON(BSON: any) {
  return new BSON.MinKey();
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}