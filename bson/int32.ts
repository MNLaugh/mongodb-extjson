// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any, options: any) {
  if (options && options.relaxed) return obj.value;
  return { $numberInt: obj.value.toString() };
}

function fromExtendedJSON(BSON: any, doc: any, options: any) {
  return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new BSON.Int32(doc.$numberInt);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}