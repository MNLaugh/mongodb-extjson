// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any, options: any) {
  if (options && options.relaxed && isFinite(obj.value)) return obj.value;
  return { $numberDouble: obj.value.toString() };
}

function fromExtendedJSON(BSON: any, doc: any, options: any) {
  return options && options.relaxed
    ? parseFloat(doc.$numberDouble)
    : new BSON.Double(parseFloat(doc.$numberDouble));
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}