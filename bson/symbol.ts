// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  return { $symbol: obj.value };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.Symbol(doc.$symbol);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}