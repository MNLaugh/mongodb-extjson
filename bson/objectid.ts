// deno-lint-ignore-file no-explicit-any
function toExtendedJSON(obj: any) {
  if (obj.toHexString) return { $oid: obj.toHexString() };
  return { $oid: obj.toString('hex') };
}

function fromExtendedJSON(BSON: any, doc: any) {
  return new BSON.ObjectId(doc.$oid);
}

export default {
  toExtendedJSON,
  fromExtendedJSON
}