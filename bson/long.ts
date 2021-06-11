// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any, options: any) {
  if (options && options.relaxed) return obj.toNumber();
  return { $numberLong: obj.toString() };
}

function fromExtendedJSON(BSON: any, doc: any, options: any) {
  const result = BSON.Long.fromString(doc.$numberLong);
  return options && options.relaxed ? result.toNumber() : result;
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}