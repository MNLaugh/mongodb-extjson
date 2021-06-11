// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  return { $numberDecimal: obj.toString() };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.Decimal128.fromString(doc.$numberDecimal);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}